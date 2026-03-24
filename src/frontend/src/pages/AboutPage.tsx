import { Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    description:
      "Every LosLume candle is hand-poured using premium soy wax, fine fragrance oils, and hand-trimmed cotton wicks. No shortcuts, ever.",
  },
  {
    icon: Sparkles,
    title: "Elegance",
    description:
      "From the minimalist packaging to the refined fragrance profiles, every detail is chosen to feel luxurious without being excessive.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We use sustainably sourced soy wax, recyclable glass vessels, and eco-conscious packaging because the planet deserves love too.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" data-ocid="about.page">
      <section className="relative py-28 px-6 bg-brown text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #D4A843 0%, transparent 60%), radial-gradient(circle at 70% 50%, #7A9E7E 0%, transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="font-body text-golden text-xs tracking-[0.3em] uppercase mb-4">
            Who We Are
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-bold">
            Our Story
          </h1>
        </motion.div>
      </section>

      <section
        className="py-20 px-6 bg-offwhite"
        data-ocid="about.story.section"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border" />
              <span className="font-body text-matcha text-xs tracking-[0.3em] uppercase">
                Raghavv &amp; Siddharth
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-6 font-body text-foreground leading-loose">
              <p>
                LosLume started the way most real things do &mdash; not in a
                fancy studio, but in a small room, surrounded by fragrance
                testers, notebooks, and a genuine desire to make people feel
                something. Raghavv, the creative force behind the brand, has
                always had one simple goal: to give people smiles. Whether it
                was through the perfect scent combination or the way a candle
                could completely change the vibe of a room, he poured his heart,
                talent, and love for people into every single idea.
              </p>
              <p>
                Siddharth brought the other half of the equation. While Raghavv
                was deep in fragrance notes and wax blends, Siddharth was
                building the world around it &mdash; managing the socials, the
                platforms, and making sure LosLume's voice reached the right
                people. Two different energies, one shared dream.
              </p>
              <p>
                Together they built LosLume from scratch &mdash; no big team, no
                shortcuts, just hard work, real talent, and an exceptional love
                for the people they create for. Today, LosLume offers four
                signature fragrances, each crafted to bring a little warmth,
                calm, or joy into your everyday life. Because at the end of the
                day, that's all they ever wanted &mdash; to give you a smile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream" data-ocid="about.values.section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-body text-matcha text-xs tracking-[0.3em] uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl text-brown">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card p-8 rounded-sm shadow-soft text-center group hover:shadow-card transition-all duration-300"
                data-ocid={`about.value.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cream border border-golden mb-5 group-hover:bg-golden/10 transition-colors">
                  <val.icon size={22} className="text-golden" />
                </div>
                <h3 className="font-display text-xl text-brown mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-6 bg-offwhite"
        data-ocid="about.contact.section"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-matcha text-xs tracking-[0.3em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl text-brown mb-4">
              Contact Us
            </h2>
            <a
              href="mailto:offical.Los.Lume@Gmail.com"
              className="font-body text-golden hover:underline text-lg"
            >
              offical.Los.Lume@Gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brown" data-ocid="about.quote.section">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-golden text-4xl font-display mb-2">&ldquo;</p>
          <blockquote className="font-display text-2xl md:text-3xl text-cream italic leading-relaxed">
            thank you for connecting with us i hope our candles and vibes give u
            smiles and shines
          </blockquote>
          <p className="font-body text-golden text-sm tracking-widest uppercase mt-6">
            &mdash; Raghavv
          </p>
        </motion.div>
      </section>
    </div>
  );
}
