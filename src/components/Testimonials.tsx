import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    car: "BMW 5 Series",
    rating: 5,
    text: "Best car detailing in New Cairo! My BMW looks brand new after their premium package. Highly recommend their polishing service.",
  },
  {
    name: "Mohamed Ali",
    car: "Mercedes C-Class",
    rating: 4,
    text: "Professional team and great attention to detail. The interior cleaning was exceptional. Will definitely come back.",
  },
  {
    name: "Sara Mahmoud",
    car: "Audi Q7",
    rating: 5,
    text: "Love that they're open late! Perfect for busy professionals. The ceramic coating they applied is amazing.",
  },
  {
    name: "Khaled Ibrahim",
    car: "Range Rover",
    rating: 4,
    text: "Convenient location and friendly staff. They took great care of my Range Rover. Fair prices for premium quality.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
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
            Customer Reviews
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            WHAT OUR <span className="text-gradient-gold">CLIENTS SAY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it—hear from car owners who've 
            experienced the Ramzy Car Care difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-luxury relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-display text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.car}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="card-luxury inline-flex items-center gap-4 px-8 py-4">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="font-display text-2xl text-gradient-gold">4.0</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Google Rating
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="font-display text-2xl text-foreground">66</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
