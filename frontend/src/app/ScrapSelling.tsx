import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recycle, DollarSign, Scale, Truck, TrendingUp } from "lucide-react";
import scrapimg from "@/assets/mobile-screen-india.webp"

const ScrapSelling = () => {
  const materials = [
    { type: "Paper", price: "₹18/kg", demand: "High", icon: "📄", trend: "+5%" },
    { type: "Plastic", price: "₹22/kg", demand: "Medium", icon: "🥤", trend: "+2%" },
    { type: "Metal", price: "₹45/kg", demand: "High", icon: "🔩", trend: "+8%" },
    { type: "Glass", price: "₹8/kg", demand: "Low", icon: "🍶", trend: "-1%" },
    { type: "Electronics", price: "₹120/kg", demand: "High", icon: "📱", trend: "+12%" },
    { type: "Cardboard", price: "₹15/kg", demand: "Medium", icon: "📦", trend: "+3%" }
  ];

  const recentSales = [
    { id: "S001", seller: "Green Homes Society", material: "Mixed Paper", quantity: "45 kg", amount: "₹810", status: "Completed" },
    { id: "S002", seller: "Tech Solutions Ltd", material: "Electronics", quantity: "12 kg", amount: "₹1,440", status: "Pickup Scheduled" },
    { id: "S003", seller: "City Mall", material: "Cardboard", quantity: "78 kg", amount: "₹1,170", status: "Completed" }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "High": return "default";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  return (
    <section id="scrap" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Online Scrap Selling Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your recyclable materials into income. Connect with buyers, 
            get fair prices, and contribute to a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Material Prices */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Current Material Prices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{material.icon}</span>
                        <div>
                          <h4 className="font-semibold text-foreground">{material.type}</h4>
                          <Badge variant={getDemandColor(material.demand) as any} className="text-xs">
                            {material.demand} Demand
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{material.price}</div>
                        <div className={`text-sm flex items-center gap-1 ${
                          material.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <TrendingUp className="h-3 w-3" />
                          {material.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card className="bg-card border-border mt-6">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Scale className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">1. Weigh & List</h4>
                    <p className="text-sm text-muted-foreground">Weigh your materials and list them on our platform</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">2. Get Offers</h4>
                    <p className="text-sm text-muted-foreground">Receive competitive offers from verified buyers</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Truck className="h-6 w-6 text-primary-foreground " />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">3. Schedule Pickup</h4>
                    <p className="text-sm text-muted-foreground">Schedule convenient pickup and get paid instantly</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Sales & Quick Actions */}
          <div className="space-y-6">
            {/* <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Recycle className="h-8 w-8 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">₹2,45,680</div>
                <div className="text-sm opacity-90">Total Earned This Month</div>
              </CardContent>
            </Card> */}

            {/* <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Sales</h3>
              <div className="space-y-4">
                {recentSales.map((sale) => (
                  <Card key={sale.id} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground text-sm">{sale.id}</h4>
                        <span className="text-lg font-bold text-primary">{sale.amount}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{sale.seller}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{sale.material} • {sale.quantity}</span>
                        <Badge variant={sale.status === 'Completed' ? 'default' : 'secondary'} className="text-xs">
                          {sale.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}

            {/* <Button variant="default" className="w-full">
              <Recycle className="mr-2 h-4 w-4" />
              Start Selling Scrap
            </Button> */}
            <img src="https://i.postimg.cc/Xq8sDBhf/mobile-screen-india.webp" alt="" className="h-" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrapSelling;