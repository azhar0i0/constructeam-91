
import { Hammer, Home, Building, Wrench, Truck, Shield, CheckCircle, Award, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential projects built to your specifications with attention to every detail."
    },
    {
      icon: Building,
      title: "Commercial Construction", 
      description: "Office buildings, retail spaces, and commercial facilities designed for functionality and aesthetics."
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation and remodeling services that breathe new life."
    },
    {
      icon: Wrench,
      title: "General Contracting",
      description: "Complete project management from design to completion with licensed professionals overseeing every phase."
    },
    {
      icon: Truck,
      title: "Site Preparation",
      description: "Excavation, grading, and site preparation services ensuring your project starts on solid ground."
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring timelines, quality standards, and budget compliance throughout."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin with a detailed consultation to understand your vision, requirements, and budget."
    },
    {
      number: "02", 
      title: "Planning & Design",
      description: "Our team creates comprehensive plans and designs tailored to your specific needs."
    },
    {
      number: "03",
      title: "Construction",
      description: "Expert execution of your project with regular updates and quality control measures."
    },
    {
      number: "04",
      title: "Completion",
      description: "Final inspection, handover, and ongoing support to ensure your complete satisfaction."
    }
  ];

  const advantages = [
    { icon: CheckCircle, title: "Licensed Professionals", description: "All our contractors are fully licensed and insured" },
    { icon: Award, title: "Quality Materials", description: "We use only the highest quality materials and equipment" },
    { icon: Clock, title: "Timely Delivery", description: "Projects completed on time without compromising quality" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
        <div 
          className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
                Our
                <span className="text-orange-500 block">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in leading-relaxed">
                Comprehensive construction solutions tailored to meet your unique project requirements.
              </p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              From concept to completion, we provide comprehensive construction services 
              that exceed expectations and deliver lasting value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-none bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed text-lg">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              A streamlined approach that ensures quality results and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              What sets us apart in the construction industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <advantage.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full animate-bounce blur-xl" style={{ animationDuration: "8s" }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce blur-xl" style={{ animationDuration: "6s", animationDelay: "2s" }}></div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
