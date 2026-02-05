import { motion } from "framer-motion";
import { Award, Clock, MapPin, Users, Sparkles, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Years of Experience",
    description: "Trusted by hundreds of car owners in New Cairo for premium detailing services.",
  },
  {
    icon: ThumbsUp,
    title: "4.0 Rating",
    description: "66+ verified reviews from satisfied customers who trust our quality.",
  },
  {
    icon: Users,
    title: "Professional Staff",
    description: "Trained technicians who treat every car with care and attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only top-tier detailing products from trusted international brands.",
  },
  {
    icon: Clock,
    title: "Open Until 1 AM",
    description: "Flexible hours to fit your busy schedule. We're here when you need us.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Conveniently located near Elzohour Club Gate 2 in New Cairo.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            The Ramzy Difference
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            WHY CHOOSE <span className="text-gradient-gold">US</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're not just a car wash—we're dedicated professionals who take pride 
            in delivering exceptional results every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "66+", label: "Reviews" },
            { value: "4.0", label: "Rating" },
            { value: "1 AM", label: "Open Until" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="card-luxury text-center py-8"
            >
              <div className="font-display text-4xl md:text-5xl text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
