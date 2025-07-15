
import { Users, Award, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Projects Completed" },
    { icon: Award, number: "20+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Customer Support" },
    { icon: CheckCircle, number: "100%", label: "Quality Guarantee" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Constructeam
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over two decades of experience in the construction industry, 
              Constructeam has established itself as a trusted partner for projects 
              of all sizes. Our commitment to excellence, safety, and innovation 
              has made us the preferred choice for clients across the region.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Licensed and fully insured professionals",
                "State-of-the-art equipment and technology",
                "Sustainable and eco-friendly practices",
                "Transparent pricing and project timelines"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
