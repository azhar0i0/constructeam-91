
import { Hammer, Home, Building, Wrench, Truck, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential projects built to your specifications."
    },
    {
      icon: Building,
      title: "Commercial Construction", 
      description: "Office buildings, retail spaces, and commercial facilities with professional quality."
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation and remodeling services."
    },
    {
      icon: Wrench,
      title: "General Contracting",
      description: "Complete project management from design to completion with licensed professionals."
    },
    {
      icon: Truck,
      title: "Site Preparation",
      description: "Excavation, grading, and site preparation services for all types of construction."
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring timelines, quality, and budget compliance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive construction services 
            that exceed expectations and deliver lasting value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-none bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
