
import { Shield, Users, Award, Target, CheckCircle, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every project meets the highest standards of craftsmanship."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Building lasting relationships through transparent communication and collaborative project approach."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our work, from initial design to final completion."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail and precision in execution of every construction project."
    }
  ];

  const achievements = [
    { icon: Building, title: "Diverse Portfolio", description: "Successfully completed projects across residential and commercial sectors" },
    { icon: CheckCircle, title: "Client Satisfaction", description: "Maintaining exceptional client satisfaction through quality delivery" },
    { icon: Award, title: "Industry Recognition", description: "Recognized for outstanding construction practices and innovation" }
  ];

  const mission = {
    title: "Our Mission",
    description: "To deliver exceptional construction services that transform visions into reality while maintaining the highest standards of quality, safety, and client satisfaction. We are committed to building lasting relationships and creating structures that stand the test of time."
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
        <div 
          className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
                About
                <span className="text-orange-500 block">Constructeam</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in leading-relaxed">
                Building excellence through innovation, dedication, and unwavering commitment to quality craftsmanship.
              </p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Constructeam was founded with a simple yet powerful vision: to create exceptional 
                construction experiences that exceed client expectations. We believe that every 
                project tells a story, and we're honored to be part of bringing those stories to life.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From humble beginnings to becoming a trusted name in construction, our journey 
                has been marked by continuous learning, innovation, and an unwavering commitment 
                to quality. We've built our reputation one project at a time, always putting 
                our clients' needs first.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of what's possible in construction, 
                embracing new technologies and techniques while maintaining the core values 
                that have guided us from the beginning.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-slate-800/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction Team at Work"
                className="relative rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              {mission.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
                {mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-none bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              Milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
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

export default AboutPage;
