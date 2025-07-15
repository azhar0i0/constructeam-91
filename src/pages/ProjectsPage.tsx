
import { Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  const featuredProjects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Contemporary office building with modern amenities and sustainable design features.",
      year: "2023",
      location: "Downtown District",
      area: "50,000 sq ft"
    },
    {
      title: "Luxury Residential Villa",
      category: "Residential", 
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom villa with sustainable design features and smart home technology.",
      year: "2023",
      location: "Hillside Estates",
      area: "3,500 sq ft"
    },
    {
      title: "Downtown Renovation",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Historic building renovation preserving original architecture while adding modern functionality.",
      year: "2022",
      location: "Historic Quarter",
      area: "25,000 sq ft"
    }
  ];

  const allProjects = [
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Large warehouse facility with loading docks and modern storage systems."
    },
    {
      title: "Shopping Center",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-tenant retail shopping center with parking facilities and landscaping."
    },
    {
      title: "Community Center",
      category: "Public",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Public community center with recreational facilities and meeting spaces."
    },
    {
      title: "Residential Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-family residential complex with modern amenities."
    },
    {
      title: "Medical Facility",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art medical facility with specialized equipment and clean rooms."
    },
    {
      title: "Educational Building",
      category: "Education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern educational facility with smart classrooms and laboratory spaces."
    }
  ];

  const achievements = [
    { icon: Award, title: "Excellence Award", description: "Best Commercial Project" },
    { icon: Calendar, title: "On-Time Delivery", description: "Consistent Success Rate" },
    { icon: MapPin, title: "Projects Delivered", description: "Multiple Locations" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
                  Our
                  <span className="text-orange-500 block">Portfolio</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in leading-relaxed">
                  Discover our portfolio of successful construction projects that showcase 
                  our commitment to quality and innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce blur-sm" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most prestigious and innovative construction projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-none overflow-hidden bg-white animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <Badge className="bg-orange-600 text-white mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-slate-800">Year:</span>
                      <p className="text-gray-600">{project.year}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Location:</span>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Area:</span>
                      <p className="text-gray-600">{project.area}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our diverse construction expertise across multiple sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <Badge className="bg-orange-600 text-white mb-2" variant="secondary">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
