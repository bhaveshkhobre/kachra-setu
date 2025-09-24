import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package, Shield, Truck } from "lucide-react";
import productsImage from "@/assets/waste-products.jpg";
import dustbinImage from "@/assets/dustbinImg.png";
import safetyImage from "@/assets/seafty.png";
import compostbinImage from "@/assets/compostbin.png";
import cleaningToolsImage from "@/assets/cleaningTools.png";

const EcommerceStore = () => {
  const products = [
    {
      id: 1,
      name: "Color-Coded Dustbin Set",
      price: "₹299",
      originalPrice: "599",
      rating: 4.8,
      reviews: 124,
      category: "Waste Bins",
      image: dustbinImage,
      inStock: true,
      discount: "19% OFF"
    },
    {
      id: 2,
      name: "Professional Safety Kit",
      price: "₹499",
      originalPrice: "₹999",
      rating: 4.9,
      reviews: 89,
      category: "Safety Equipment",
      image: safetyImage,
      inStock: true,
      discount: "17% OFF"
    },
    {
      id: 3,
      name: "Eco-Friendly Compost Bin",
      price: "₹499",
      originalPrice: "₹799",
      rating: 4.6,
      reviews: 67,
      category: "Composting",
      image: compostbinImage,
      inStock: false,
      discount: "25% OFF"
    },
    {
      id: 4,
      name: "Industrial Cleaning Tools",
      price: "₹299",
      originalPrice: "₹499",
      rating: 4.7,
      reviews: 156,
      category: "Cleaning Tools",
  image: cleaningToolsImage,
      inStock: true,
      discount: "13% OFF"
    }
  ];

  const categories = [
    { name: "Waste Bins", count: 24, icon: "🗑️" },
    { name: "Safety Equipment", count: 18, icon: "🦺" },
    { name: "Cleaning Tools", count: 32, icon: "🧹" },
    { name: "Composting", count: 15, icon: "♻️" },
    { name: "Collection Bags", count: 28, icon: "👜" },
    { name: "Protective Gear", count: 19, icon: "🧤" }
  ];

  return (
    <section id="store" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            E-commerce Store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shop essential waste management equipment, safety gear, and eco-friendly tools. 
            Professional quality products for efficient waste segregation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm font-medium text-foreground">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Store Features */}
            <Card className="bg-card border-border mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Why Shop With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Free Delivery Above ₹999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">1 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Bulk Order Discounts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Store Banner */}
            <Card className="bg-gradient-card border-border mb-8 overflow-hidden">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/9XT1nKTx/waste-products.jpg"
                  alt="Professional waste management products including recycling bins and safety equipment"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Professional Equipment</h3>
                    <p className="text-muted-foreground mb-4">Get up to 25% off on bulk orders</p>
                    <Button variant="default">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="bg-card border-border hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        {typeof product.image === 'object' ? (
                          <img
                            src={product.image.src}
                            alt={product.name}
                            className="object-contain w-full h-full"
                            style={{ margin: 'auto' }}
                          />
                        ) : (
                          <span className="text-6xl">{product.image}</span>
                        )}
                      </div>
                      {product.discount && (
                        <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                          {product.discount}
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                          <Badge variant="secondary">Out of Stock</Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <Badge variant="outline" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                      
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-primary">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {product.originalPrice}
                          </span>
                        </div>
                        
                        <Button 
                          variant="default" 
                          size="sm"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          {product.inStock ? 'Add' : 'Unavailable'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="default" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceStore;