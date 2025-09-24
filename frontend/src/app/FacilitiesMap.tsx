import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Factory, Recycle, Trash2, Users } from "lucide-react";
import { useEffect, useState } from "react";
import mapsBhopal from "@/assets/mapsbhopal.jpeg";

const FacilitiesMap = () => {
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    setShowMap(true);
  }, []);
  const facilities = [
    {
      id: 1,
      name: "Central Treatment Plant",
      type: "Treatment",
      capacity: "500 tons/day",
      status: "Operational",
      location: "Bhopal",
      icon: Factory,
      utilization: 85
    },
    {
      id: 2,
      name: "Green Recycling Center",
      type: "Recycling",
      capacity: "200 tons/day",
      status: "Operational",
      location: "Bhopal",
      icon: Recycle,
      utilization: 72
    },
    {
      id: 3,
      name: "North Disposal Site",
      type: "Disposal",
      capacity: "300 tons/day",
      status: "Maintenance",
      location: "Bhopal",
      icon: Trash2,
      utilization: 0
    },
    {
      id: 4,
      name: "East Collection Hub",
      type: "Collection",
      capacity: "150 tons/day",
      status: "Operational",
      location: "Bhopal",
      icon: Users,
      utilization: 94
    }
  ];

  return (
    <section id="map" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Digital Facilities Mapping
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive digital maps showcasing treatment plants, recycling centers, 
            and disposal facilities across the city.
          </p>
        </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Map Interface */}
          <Card className="bg-gradient-card border-border overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Facilities Map
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={mapsBhopal.src}
                  alt="Facilities Map Bhopal"
                  className="w-full max-w-[1200px] h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                
                {/* Map Markers */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-16 right-8 w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <div className="absolute bottom-12 left-8 w-3 h-3 bg-accent rounded-full animate-pulse" />
                <div className="absolute bottom-6 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
              </div>
              
              <div className="p-4">
                <Button variant="default" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Open Interactive Map
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Facilities List */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Active Facilities</h3>
            
            {facilities.map((facility) => (
              <Card key={facility.id} className="bg-card border-border hover:shadow-soft transition-all duration-200 max-w-sm w-full">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{facility.name}</h4>
                        <p className="text-sm text-muted-foreground">{facility.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={facility.status === 'Operational' ? 'default' : 'secondary'}>
                            {facility.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{facility.capacity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{facility.utilization}%</div>
                      <div className="text-xs text-muted-foreground">Utilization</div>
                      <div className="w-16 h-1 bg-border rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                          style={{ width: `${facility.utilization}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesMap;
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { MapPin, Factory, Recycle, Trash2, Users, RefreshCw, AlertCircle } from "lucide-react";
// import { useEffect, useState } from "react";

// const FacilitiesMap = () => {
//   const [mounted, setMounted] = useState(false);
//   const [mapLoading, setMapLoading] = useState(true);
//   const [mapError, setMapError] = useState(false);
//   const [mapData, setMapData] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const facilities = [
//     {
//       id: 1,
//       name: "Central Treatment Plant",
//       type: "Treatment",
//       capacity: "500 tons/day",
//       status: "Operational",
//       location: "Bhopal",
//       icon: Factory,
//       utilization: 85
//     },
//     {
//       id: 2,
//       name: "Green Recycling Center",
//       type: "Recycling",
//       capacity: "200 tons/day",
//       status: "Operational",
//       location: "Bhopal",
//       icon: Recycle,
//       utilization: 72
//     },
//     {
//       id: 3,
//       name: "North Disposal Site",
//       type: "Disposal",
//       capacity: "300 tons/day",
//       status: "Maintenance",
//       location: "Bhopal",
//       icon: Trash2,
//       utilization: 0
//     },
//     {
//       id: 4,
//       name: "East Collection Hub",
//       type: "Collection",
//       capacity: "150 tons/day",
//       status: "Operational",
//       location: "Bhopal",
//       icon: Users,
//       utilization: 94
//     }
//   ];

//   // Function to test if backend is running
//   const testBackendConnection = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/', {
//         method: 'GET',
//         headers: {
//           'Accept': '*/*',
//         },
//         // Add timeout to prevent hanging
//         signal: AbortSignal.timeout(5000) // 5 second timeout
//       });
//       return response.ok;
//     } catch (error) {
//       console.log('Backend connection test failed:', error.message);
//       return false;
//     }
//   };

//   // Function to fetch map data from API
//   const fetchMapData = async () => {
//     try {
//       setMapLoading(true);
//       setMapError(false);
      
//       // First test if backend is running
//       const isBackendRunning = await testBackendConnection();
//       if (!isBackendRunning) {
//         throw new Error('Backend server is not running on http://localhost:8000/');
//       }
      
//       const response = await fetch('http://localhost:8000/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'text/html,application/json,*/*',
//         },
//         // Add timeout
//         signal: AbortSignal.timeout(10000) // 10 second timeout
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
//       }

//       const contentType = response.headers.get('content-type');
      
//       // Check if response is HTML (for iframe) or JSON data
//       if (contentType?.includes('text/html')) {
//         // If it's HTML, we can use iframe
//         setMapData({ type: 'iframe', url: 'http://localhost:8000' });
//       } else {
//         // If it's JSON data, parse it
//         const data = await response.json();
//         setMapData({ type: 'data', content: data });
//       }
      
//       setMapLoading(false);
//     } catch (error) {
//       console.error('Error fetching map data:', error);
//       setMapError(true);
//       setMapLoading(false);
//     }
//   };

//   // Function to retry loading map
//   const retryLoadMap = () => {
//     setRetryCount(prev => prev + 1);
//     fetchMapData();
//   };

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       fetchMapData();
//     }
//   }, [mounted]);

//   const renderMapContent = () => {
//     // Prevent hydration mismatch by only rendering after mount
//     if (!mounted) {
//       return (
//         <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
//           <div className="text-center">
//             <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
//             <p className="text-muted-foreground">Initializing...</p>
//           </div>
//         </div>
//       );
//     }

//     if (mapLoading) {
//       return (
//         <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
//           <div className="text-center">
//             <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
//             <p className="text-muted-foreground">Loading map...</p>
//           </div>
//         </div>
//       );
//     }

//     if (mapError) {
//       return (
//         <div className="w-full h-[500px] bg-gray-50 flex items-center justify-center">
//           <div className="text-center max-w-md mx-auto p-6">
//             <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-foreground mb-2">
//               Backend Connection Failed
//             </h3>
//             <div className="text-muted-foreground mb-4 text-sm space-y-2">
//               <p>Unable to connect to backend server.</p>
//               <div className="bg-gray-100 p-3 rounded text-left">
//                 <p className="font-mono text-xs">Expected: http://localhost:8000</p>
//                 <p className="text-xs mt-1">Please ensure:</p>
//                 <ul className="text-xs mt-1 list-disc list-inside">
//                   <li>Backend server is running</li>
//                   <li>Port 8000 is accessible</li>
//                   <li>/map endpoint exists</li>
//                   <li>CORS is configured</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="flex gap-2 justify-center">
//               <Button onClick={retryLoadMap} variant="outline" size="sm">
//                 <RefreshCw className="mr-2 h-4 w-4" />
//                 Retry ({retryCount})
//               </Button>
//               <Button 
//                 onClick={() => window.open('http://localhost:8000', '_blank')} 
//                 variant="outline" 
//                 size="sm"
//               >
//                 Test Backend
//               </Button>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (mapData?.type === 'iframe') {
//       return (
//         <iframe
//           src={mapData.url}
//           width="100%"
//           height="500"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="w-full h-[500px]"
//           title="Facilities Map"
//           onLoad={() => setMapLoading(false)}
//           onError={() => {
//             setMapError(true);
//             setMapLoading(false);
//           }}
//         />
//       );
//     }

//     if (mapData?.type === 'data') {
//       // If your API returns JSON data instead of HTML, render it accordingly
//       return (
//         <div className="w-full h-[500px] bg-gray-100 p-4 overflow-auto">
//           <pre className="text-sm text-foreground">
//             {JSON.stringify(mapData.content, null, 2)}
//           </pre>
//         </div>
//       );
//     }

//     // Fallback placeholder
//     return (
//       <div className="w-full h-[500px] bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
//         <div className="text-center">
//           <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
//           <p className="text-muted-foreground">Interactive Map</p>
//           <p className="text-sm text-muted-foreground">Connect to display facilities</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section id="map" className="py-24 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Digital Facilities Mapping
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Interactive digital maps showcasing treatment plants, recycling centers, 
//             and disposal facilities across the city.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
//           {/* Map Interface */}
//           <Card className="bg-gradient-card border-border overflow-hidden">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 justify-between">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-5 w-5 text-primary" />
//                   Facilities Map
//                 </div>
//                 <div className="flex items-center gap-2">
//                   {mapLoading && (
//                     <RefreshCw className="h-4 w-4 animate-spin text-primary" />
//                   )}
//                   {mapError && (
//                     <AlertCircle className="h-4 w-4 text-red-500" />
//                   )}
//                   {!mapLoading && !mapError && mapData && (
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   )}
//                 </div>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-0">
//               <div className="relative">
//                 {renderMapContent()}
                
//                 {!mapError && !mapLoading && (
//                   <>
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    
//                     {/* Map Markers - only show when map is loaded */}
//                     <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
//                     <div className="absolute top-16 right-8 w-3 h-3 bg-secondary rounded-full animate-pulse" />
//                     <div className="absolute bottom-12 left-8 w-3 h-3 bg-accent rounded-full animate-pulse" />
//                     <div className="absolute bottom-6 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
//                   </>
//                 )}
//               </div>
              
//               <div className="p-4">
//                 <Button 
//                   variant="default" 
//                   className="w-full"
//                   onClick={() => window.open('http://localhost:8000', '_blank')}
//                   disabled={mapError}
//                 >
//                   <MapPin className="mr-2 h-4 w-4" />
//                   Open Interactive Map
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Facilities List */}
//           <div className="space-y-4 flex flex-col items-center">
//             <h3 className="text-xl font-semibold text-foreground mb-6">Active Facilities</h3>
            
//             {facilities.map((facility) => (
//               <Card key={facility.id} className="bg-card border-border hover:shadow-soft transition-all duration-200 max-w-sm w-full">
//                 <CardContent className="p-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                         <facility.icon className="h-5 w-5 text-primary-foreground" />
//                       </div>
                      
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-foreground">{facility.name}</h4>
//                         <p className="text-sm text-muted-foreground">{facility.location}</p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Badge variant={facility.status === 'Operational' ? 'default' : 'secondary'}>
//                             {facility.status}
//                           </Badge>
//                           <span className="text-xs text-muted-foreground">{facility.capacity}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="text-right">
//                       <div className="text-sm font-medium text-primary">{facility.utilization}%</div>
//                       <div className="text-xs text-muted-foreground">Utilization</div>
//                       <div className="w-16 h-1 bg-border rounded-full overflow-hidden mt-1">
//                         <div 
//                           className="h-full bg-gradient-primary rounded-full transition-all duration-300"
//                           style={{ width: `${facility.utilization}%` }} 
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacilitiesMap;