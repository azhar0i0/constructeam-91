
import { Home, Hammer, PaintBucket, Key, Sofa, ShowerHead } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResidentialPage = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Home Construction",
      description: "Build your dream home from the ground up with personalized design and quality craftsmanship."
    },
    {
      icon: Hammer,
      title: "Home Renovations",
      description: "Transform your existing space with comprehensive renovation services tailored to your lifestyle."
    },
    {
      icon: PaintBucket,
      title: "Interior Remodeling",
      description: "Modernize your interiors with stylish and functional design solutions."
    },
    {
      icon: Key,
      title: "Additions & Extensions",
      description: "Expand your living space with seamless additions that complement your existing home."
    },
    {
      icon: Sofa,
      title: "Basement Finishing",
      description: "Convert your basement into a functional and beautiful living space."
    },
    {
      icon: ShowerHead,
      title: "Bathroom Remodeling",
      description: "Create luxurious and functional bathroom spaces with modern amenities."
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Family Home",
      description: "A stunning contemporary home featuring open-concept living and sustainable materials."
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Kitchen Renovation",
      description: "Complete kitchen transformation with high-end appliances and custom cabinetry."
    },
    {
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Master Suite Addition",
      description: "Spacious master bedroom suite with walk-in closet and spa-like bathroom."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
        <div 
          className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
                Residential
                <span className="text-orange-500 block">Construction</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in leading-relaxed">
                Creating beautiful, functional homes that reflect your unique style and enhance your quality of life.
              </p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Residential Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Comprehensive construction and renovation services for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-none bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Showcase of our residential construction and renovation work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-none overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Residential */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Why Choose Us for Your Home
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              We understand that your home is more than just a building - it's where life happens
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Personalized Approach
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Every home is unique, and so are our clients' needs. We work closely with you 
                to understand your vision, lifestyle, and budget to create spaces that truly 
                reflect who you are.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From initial consultation to final walkthrough, we ensure clear communication 
                and transparency throughout the entire process.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Home Interior"
                className="relative rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
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

export default ResidentialPage;
