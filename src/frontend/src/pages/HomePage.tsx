import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const fragrances = [
  {
    name: "French Caramel",
    tagline: "Warm buttery sweetness",
    img: "/assets/generated/candle-french-caramel.dim_600x600.jpg",
  },
  {
    name: "Le Terre",
    tagline: "Earthy woods & sage",
    img: "/assets/generated/candle-le-terre.dim_600x600.jpg",
  },
  {
    name: "La Flos",
    tagline: "Delicate fresh petals",
    img: "/assets/generated/candle-la-flos.dim_600x600.jpg",
  },
  {
    name: "Le Agua",
    tagline: "Crisp ocean breeze",
    img: "/assets/generated/candle-le-agua.dim_600x600.jpg",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden"
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/candle-hero.dim_1200x800.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-brown/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 px-6 max-w-3xl mx-auto"
        >
          <p className="font-body text-golden text-sm tracking-[0.3em] uppercase mb-4">
            Handcrafted Luxury
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-cream mb-6 leading-none">
            LosLume
          </h1>
          <p className="font-body text-cream/85 text-xl md:text-2xl mb-10 font-light italic">
            Handcrafted luxury for your space
          </p>
          <Link to="/shop" data-ocid="home.cta.primary_button">
            <Button
              size="lg"
              className="bg-golden text-brown font-body font-bold tracking-widest uppercase px-10 py-6 text-sm hover:bg-golden/90 hover:scale-105 transition-all duration-300 shadow-lift rounded-none"
            >
              Explore Our Collection <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Fragrance Preview */}
      <section
        className="py-20 px-6 bg-cream"
        data-ocid="home.fragrances.section"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-body text-matcha text-xs tracking-[0.3em] uppercase mb-3">
              Our Fragrances
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-brown">
              Four Signatures
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fragrances.map((frag, i) => (
              <motion.div
                key={frag.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-ocid={`home.fragrance.item.${i + 1}`}
              >
                <Link to="/shop">
                  <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-4 aspect-square">
                      <img
                        src={frag.img}
                        alt={frag.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display text-lg text-brown group-hover:text-golden transition-colors">
                      {frag.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {frag.tagline}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" data-ocid="home.shop.link">
              <button
                type="button"
                className="font-body text-sm tracking-widest uppercase text-brown border-b border-brown hover:text-golden hover:border-golden transition-colors pb-0.5"
              >
                Shop All Candles &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section
        className="py-24 px-6 bg-offwhite"
        data-ocid="home.brand.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-golden" />
            <span className="font-body text-matcha text-xs tracking-[0.3em] uppercase">
              Our Essence
            </span>
            <div className="h-px w-12 bg-golden" />
          </div>
          <blockquote className="font-display text-2xl md:text-3xl text-brown italic leading-relaxed mb-8">
            &ldquo;Every flame tells a story. Every scent carries a memory. We
            craft both with love.&rdquo;
          </blockquote>
          <p className="font-body text-muted-foreground leading-relaxed">
            Born from a teenage dream and a shared obsession with beautiful
            spaces, LosLume is more than a candle brand. It is a commitment to
            handcrafted quality, intentional design, and the belief that luxury
            should feel personal.
          </p>
          <div className="mt-8">
            <Link to="/about" data-ocid="home.about.link">
              <button
                type="button"
                className="font-body text-sm tracking-widest uppercase text-matcha border-b border-matcha hover:text-golden hover:border-golden transition-colors pb-0.5"
              >
                Meet the Founders &rarr;
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
