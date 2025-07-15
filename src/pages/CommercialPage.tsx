
import { Building, Briefcase, Store, Factory, Warehouse, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CommercialPage = () => {
  const services = [
    {
      icon: Building,
      title: "Office Buildings",
      description: "Modern office spaces designed for productivity and professional excellence."
    },
    {
      icon: Store,
      title: "Retail Spaces",
      description: "Attractive retail environments that enhance customer experience and drive sales."
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      description: "Robust industrial buildings designed for efficiency and operational excellence."
    },
    {
      icon: Warehouse,
      title: "Warehouses",
      description: "Functional storage and distribution facilities built for maximum efficiency."
    },
    {
      icon: Briefcase,
      title: "Corporate Headquarters",
      description: "Impressive corporate facilities that reflect your company's values and culture."
    },
    {
      icon: HardHat,
      title: "Tenant Improvements",
      description: "Commercial space modifications to meet specific business requirements."
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Office Complex",
      description: "A state-of-the-art office building featuring sustainable design and modern amenities."
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Retail Shopping Center",
      description: "Multi-tenant retail facility designed to maximize foot traffic and customer engagement."
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Industrial Warehouse",
      description: "Large-scale warehouse facility with advanced logistics and storage capabilities."
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
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
                Commercial
                <span className="text-orange-500 block">Construction</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in leading-relaxed">
                Building the future of business with innovative commercial construction solutions.
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
              Commercial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Comprehensive construction solutions for businesses of all sizes
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
              Examples of our commercial construction expertise
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

      {/* Business Focus Section */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Built for Business Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              We understand the unique challenges of commercial construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Strategic Partnership
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We work as your strategic partner, understanding your business goals 
                and delivering construction solutions that support your success. 
                Every project is approached with a focus on functionality, efficiency, 
                and long-term value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team manages complex timelines and coordinates with multiple 
                stakeholders to ensure minimal disruption to your business operations.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Commercial Construction"
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

export default CommercialPage;
