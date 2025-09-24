import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, Route } from "lucide-react";

const GPSTracking = () => {
  const vehicles = [
    { id: "WM-001", type: "Collection Truck", status: "Active", location: "Downtown Area", progress: 78 },
    { id: "WM-002", type: "Recycling Truck", status: "En Route", location: "Industrial Zone", progress: 45 },
    { id: "WM-003", type: "Cleanup Vehicle", status: "Maintenance", location: "Depot", progress: 0 },
    { id: "WM-004", type: "Collection Truck", status: "Active", location: "Residential Area", progress: 92 },
  ];

  return (
    <section id="tracking" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            GPS Vehicle Tracking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your fleet in real-time with advanced GPS tracking, route optimization, 
            and performance analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Dashboard */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Live Vehicle Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Truck className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{vehicle.id}</h4>
                          <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {vehicle.location}
                          </div>
                          <div className="text-sm font-medium text-foreground">{vehicle.status}</div>
                        </div>
                        
                        <div className="w-16 h-2 bg-border rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                            style={{ width: `${vehicle.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-primary">{vehicle.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2 text-card">12</div>
                <div className="text-sm opacity-90 text-card">Active Vehicles</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-300 text-secondary-foreground">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2 text-card">8.5km</div>
                <div className="text-sm opacity-90 text-card">Avg Route Distance</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Route className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Route Optimization</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-powered route planning reduces fuel consumption by 25% and improves collection efficiency.
                </p>
                <Button variant="default" size="sm" className="w-full">
                  View Routes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GPSTracking;