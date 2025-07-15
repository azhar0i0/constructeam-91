
import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Users, Building, Home, Wrench } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Index = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-orange-600" />,
      title: "Quality Assurance",
      description: "Every project meets our highest standards of quality and craftsmanship"
    },
    {
      icon: <Clock className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-orange-600" />,
      title: "Timely Delivery",
      description: "We respect your time and ensure projects are completed on schedule"
    },
    {
      icon: <Award className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-orange-600" />,
      title: "Expert Team",
      description: "Our skilled professionals bring expertise to every construction challenge"
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-orange-600" />,
      title: "Client Focused",
      description: "Your vision drives our mission - we build relationships that last"
    }
  ];

  const expertise = [
    {
      icon: <Building className="h-12 w-12 md:h-16 md:w-16 text-orange-600" />,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial facilities"
    },
    {
      icon: <Home className="h-12 w-12 md:h-16 md:w-16 text-orange-600" />,
      title: "Residential Construction",
      description: "Custom homes and residential projects built to perfection"
    },
    {
      icon: <Wrench className="h-12 w-12 md:h-16 md:w-16 text-orange-600" />,
      title: "Renovation Services",
      description: "Transform your existing space with expert craftsmanship"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8"
            >
              Welcome to Constructeam
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12"
            >
              Your trusted partner for construction excellence. We bring innovation, quality, and dedication to every project we undertake.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 md:mb-6">
                  Building Tomorrow, Today
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  At Constructeam, we specialize in turning architectural visions into stunning realities. From residential homes to commercial complexes, our commitment to excellence shines through in every detail.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Construction excellence" 
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">
              Why Choose Constructeam?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine innovation, expertise, and dedication to deliver exceptional construction solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              >
                <motion.div 
                  className="mb-4 md:mb-6 lg:mb-8 flex justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">
              Our Expertise
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the range of construction services we offer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-gray-50 rounded-xl p-8 md:p-10 lg:p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <motion.div 
                  className="mb-6 md:mb-8 flex justify-center"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0], 
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
