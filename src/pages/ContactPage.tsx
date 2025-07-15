
import { Send, MessageSquare, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const services = [
    "Residential Construction",
    "Commercial Building",
    "Renovation & Remodeling",
    "Site Preparation",
    "Project Management",
    "Consultation Services"
  ];

  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to construction excellence"
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Regular updates and transparent project management"
    },
    {
      icon: Calendar,
      title: "Reliable Delivery",
      description: "Consistent project completion within agreed timelines"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24 overflow-hidden">
        <div 
          className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
                Get In
                <span className="text-orange-500 block">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in leading-relaxed">
                Ready to start your construction project? Let's discuss your vision 
                and bring it to life together.
              </p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
        </div>
      </section>

      {/* Professional Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Fill out the form below and we'll get back to you within 24 hours to discuss your construction needs.
            </p>
          </div>

          <Card className="border-none shadow-2xl hover:shadow-3xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold flex items-center justify-center">
                <Send className="mr-3 h-8 w-8" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-700">
                    First Name *
                  </label>
                  <Input placeholder="John" className="border-2 focus:border-orange-500 transition-colors h-12 text-lg" />
                </div>
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-700">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="border-2 focus:border-orange-500 transition-colors h-12 text-lg" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" className="border-2 focus:border-orange-500 transition-colors h-12 text-lg" />
                </div>
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <Input placeholder="(555) 123-4567" className="border-2 focus:border-orange-500 transition-colors h-12 text-lg" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-gray-700">
                  Project Type
                </label>
                <select className="w-full p-4 border-2 rounded-md focus:border-orange-500 transition-colors text-lg">
                  <option value="">Select a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-gray-700">
                  Project Details *
                </label>
                <Textarea 
                  placeholder="Please describe your project requirements, timeline, budget range, and any specific needs or questions you have..."
                  rows={8}
                  className="border-2 focus:border-orange-500 transition-colors text-lg"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-xl py-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Send className="mr-3 h-6 w-6" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Experience the difference of working with a dedicated construction team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-none group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <reason.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            Let's discuss how we can bring your construction vision to life
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
