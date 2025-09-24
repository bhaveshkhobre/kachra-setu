import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, CheckCircle, Clock, AlertCircle, RefreshCw } from "lucide-react";

const AIChatbot = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { 
      type: "bot", 
      content: "Hello! I'm your AI waste management assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [apiError, setApiError] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const recentComplaints = [
    {
      id: "WC-001",
      type: "Missed Collection",
      status: "Resolved",
      priority: "Medium",
      location: "Oak Street, Block 5",
      time: "2 hours ago"
    },
    {
      id: "WC-002", 
      type: "Overflowing Bin",
      status: "In Progress",
      priority: "High",
      location: "Main Avenue, Shop #12",
      time: "4 hours ago"
    },
    {
      id: "WC-003",
      type: "Damaged Equipment",
      status: "Pending",
      priority: "Low",
      location: "Park View Colony",
      time: "1 day ago"
    }
  ];

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Function to call your chat API
  const callChatAPI = async (userMessage: string) => {
    const API_BASE = (process.env.NEXT_PUBLIC_API_URL as string) || 'http://localhost:8000';
    try {
      const response = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
    
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Adjust this based on your API response structure
      // Common structures: data.response, data.message, data.reply, etc.
      return data.response || data.message || data.reply || data.answer || "Sorry, I couldn't understand that.";
      
    } catch (error) {
      console.error('Chat API Error:', error);
      setApiError(true);
      return "I'm having trouble connecting to my brain right now. Please try again in a moment.";
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = message.trim();
    const userMessageObj = {
      type: "user",
      content: userMessage,
      timestamp: new Date()
    };

    // Add user message to chat
    setChatMessages(prev => [...prev, userMessageObj]);
    setMessage("");
    setIsTyping(true);
    setApiError(false);

    try {
      // Call your API
      const botResponse = await callChatAPI(userMessage);
      
      // Add bot response to chat
      const botMessageObj = {
        type: "bot",
        content: botResponse,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, botMessageObj]);
      
    } catch (error) {
      console.error('Error in chat:', error);
      const errorMessageObj = {
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessageObj]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setChatMessages([{
      type: "bot", 
      content: "Hello! I'm your AI waste management assistant. How can I help you today?",
      timestamp: new Date()
    }]);
    setApiError(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "In Progress": return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Pending": return <AlertCircle className="h-4 w-4 text-red-500" />;
      default: return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  return (
    <section id="chatbot" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Complaint Resolution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant assistance with our intelligent chatbot for logging complaints, 
            tracking status, and receiving solutions 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chatbot Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border h-[600px]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    AI Assistant Chat
                    {apiError && (
                      <span className="sr-only">API Connection Error</span>
                    )}
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={clearChat}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="flex flex-col h-full pb-4">
                {/* Chat Messages */}
                <div
                  className="flex-1 space-y-4 overflow-y-auto mb-4 px-2"
                  ref={messagesContainerRef}
                >
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start gap-2 max-w-xs ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          msg.type === 'user' ? 'bg-primary' : 'bg-secondary'
                        }`}>
                          {msg.type === 'user' ? 
                            <User className="h-4 w-4 text-primary-foreground" /> : 
                            <Bot className="h-4 w-4 text-secondary-foreground" />
                          }
                        </div>
                        <div className={`px-3 py-2 rounded-lg text-sm ${
                          msg.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-foreground'
                        }`}>
                          <div className="whitespace-pre-wrap">{msg.content}</div>
                          {msg.timestamp && (
                            <div className="text-xs opacity-70 mt-1">
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-secondary-foreground" />
                        </div>
                        <div className="px-3 py-2 bg-muted rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* No need for messagesEndRef dummy div anymore */}
                </div>

                {/* API Status Indicator */}
                {apiError && (
                  <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                    ⚠️ Connection to chat API failed. Check your `NEXT_PUBLIC_API_URL` environment variable or ensure the backend is running.
                  </div>
                )}

                {/* Message Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    variant="default" 
                    size="icon" 
                    onClick={handleSendMessage}
                    disabled={isTyping || !message.trim()}
                  >
                    {isTyping ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Complaints */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Recent Complaints</h3>
            
            {recentComplaints.map((complaint) => (
              <Card key={complaint.id} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{complaint.id}</h4>
                      <p className="text-sm text-muted-foreground">{complaint.type}</p>
                    </div>
                    {getStatusIcon(complaint.status)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant={getPriorityColor(complaint.priority)}>
                        {complaint.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{complaint.time}</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{complaint.location}</p>
                    
                    <div className="text-xs font-medium text-primary">{complaint.status}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button variant="default" className="w-full">
              View All Complaints
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;