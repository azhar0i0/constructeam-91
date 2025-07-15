
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen xl:h-[110vh] 2xl:h-[120vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight"
        >
          Building <span className="text-orange-600">Excellence</span>, Creating Futures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto"
        >
          Your trusted partner in construction, delivering quality projects that stand the test of time
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
