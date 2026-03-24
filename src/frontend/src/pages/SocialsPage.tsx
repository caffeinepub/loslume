import { motion } from "motion/react";

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10"
    aria-hidden="true"
  >
    <title>Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10"
    aria-hidden="true"
  >
    <title>Pinterest</title>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10"
    aria-hidden="true"
  >
    <title>YouTube</title>
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

const socials = [
  {
    platform: "Instagram",
    handle: "@loslume",
    description:
      "Daily candle aesthetics, behind-the-scenes, and cozy inspiration.",
    gradientFrom: "rgba(236,72,153,0.12)",
    gradientTo: "rgba(168,85,247,0.08)",
    borderColor: "rgba(236,72,153,0.3)",
    iconColor: "#db2777",
    url: "https://instagram.com/loslume",
    Icon: InstagramIcon,
  },
  {
    platform: "Pinterest",
    handle: "@officalloslume",
    description:
      "Curated mood boards, interior inspiration, and candle styling ideas.",
    gradientFrom: "rgba(220,38,38,0.10)",
    gradientTo: "rgba(252,165,165,0.06)",
    borderColor: "rgba(220,38,38,0.25)",
    iconColor: "#dc2626",
    url: "https://pinterest.com/officalloslume",
    Icon: PinterestIcon,
  },
  {
    platform: "YouTube",
    handle: "@LosLumeCandles",
    description: "Candle care tutorials, founder vlogs, and scent unboxings.",
    gradientFrom: "rgba(239,68,68,0.12)",
    gradientTo: "rgba(251,146,60,0.06)",
    borderColor: "rgba(239,68,68,0.3)",
    iconColor: "#dc2626",
    url: "https://youtube.com/@LosLumeCandles",
    Icon: YouTubeIcon,
  },
];

export default function SocialsPage() {
  return (
    <div className="min-h-screen py-20 px-6" data-ocid="socials.page">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-matcha text-xs tracking-[0.3em] uppercase mb-3">
            Stay Connected
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-brown mb-4">
            Find Us Online
          </h1>
          <p className="font-body text-muted-foreground text-lg mt-4">
            Follow our journey and get inspired
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-golden" />
            <span className="text-golden text-sm">&diams;</span>
            <div className="h-px w-16 bg-golden" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group block rounded-sm shadow-soft hover:shadow-lift transition-all duration-300 cursor-pointer p-8"
              style={{
                background: `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientTo})`,
                border: `1px solid ${social.borderColor}`,
              }}
              data-ocid={`socials.${social.platform.toLowerCase()}.card`}
            >
              <div className="flex items-start gap-5">
                <div
                  style={{ color: social.iconColor }}
                  className="flex-shrink-0 mt-1"
                >
                  <social.Icon />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-brown mb-1">
                    {social.platform}
                  </h2>
                  <p className="font-body text-sm text-matcha font-bold tracking-wide mb-3">
                    {social.handle}
                  </p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {social.description}
                  </p>
                  <span
                    className="inline-block font-body text-xs tracking-widest uppercase bg-golden text-brown px-5 py-2.5 font-bold group-hover:bg-brown group-hover:text-golden transition-all duration-300"
                    data-ocid={`socials.${social.platform.toLowerCase()}.button`}
                  >
                    Follow Us
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 py-10 border-t border-border"
        >
          <p className="font-display italic text-brown text-xl">
            &ldquo;Tag us in your LosLume moments &mdash; we love to see your
            spaces.&rdquo;
          </p>
          <p className="font-body text-muted-foreground text-sm mt-2">
            Use #LosLume on all your posts
          </p>
        </motion.div>
      </div>
    </div>
  );
}
