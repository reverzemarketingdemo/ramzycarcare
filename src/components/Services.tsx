import { motion } from "framer-motion";
import { Droplets, Car, Sparkles, Shield, Crown, Gem } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Car Wash",
    description: "Hand wash with premium soaps, wheel cleaning, and tire dressing for a spotless finish.",
    features: ["Exterior Hand Wash", "Wheel & Tire Care", "Window Cleaning"],
  },
  {
    icon: Car,
    title: "Interior Detailing",
    description: "Deep vacuum, leather conditioning, dashboard care, and complete interior restoration.",
    features: ["Deep Vacuuming", "Leather Treatment", "Odor Elimination"],
  },
  {
    icon: Sparkles,
    title: "Exterior Detailing",
    description: "Clay bar treatment, paint correction, and sealant application for lasting protection.",
    features: ["Paint Decontamination", "Clay Bar Treatment", "Sealant Protection"],
  },
  {
    icon: Shield,
    title: "Polishing",
    description: "Multi-stage polishing to remove swirls, scratches, and restore paint clarity.",
    features: ["Swirl Removal", "Scratch Correction", "Mirror Finish"],
  },
  {
    icon: Crown,
    title: "Premium Package",
    description: "Complete interior and exterior transformation with our signature premium treatment.",
    features: ["Full Detail", "Engine Bay Clean", "Ceramic Coating"],
  },
  {
    icon: Gem,
    title: "VIP Treatment",
    description: "The ultimate care package with paint protection film and long-term ceramic coating.",
    features: ["PPF Application", "5-Year Coating", "Priority Service"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            OUR <span className="text-gradient-gold">SERVICES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From basic washes to complete transformations, we offer comprehensive 
            car care solutions tailored to your vehicle's needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-luxury group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
