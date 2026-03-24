import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "🕯️ French Caramel",
    notes: "Vanilla, caramel, woody, salt",
    mood: "Warm, cozy, sweet luxury",
    bestFor: "Home owners, gift buyers, cold evenings",
    img: "/assets/generated/candle-french-caramel.dim_600x600.jpg",
  },
  {
    id: 2,
    name: "💧 Le Agua",
    notes: "Ocean breeze, oud, camphor",
    mood: "Fresh, clean, mysterious",
    bestFor: "Hotels, offices, modern homes",
    img: "/assets/generated/candle-le-agua.dim_600x600.jpg",
  },
  {
    id: 3,
    name: "🌍 Le Terre",
    notes: "Earthy, woody, leathery, ocean breeze",
    mood: "Grounded, natural, masculine warmth",
    bestFor: "Everyone, most universal scent",
    img: "/assets/generated/candle-le-terre.dim_600x600.jpg",
  },
  {
    id: 4,
    name: "🌸 La Flos",
    notes: "Lavender, eucalyptus, grassy, ocean breeze",
    mood: "Calm, healing, fresh",
    bestFor: "Spas, yoga centers, wellness spaces",
    img: "/assets/generated/candle-la-flos.dim_600x600.jpg",
  },
];

const sizes = [
  { label: "Small", price: "₹399" },
  { label: "Medium", price: "₹699" },
];

export default function ShopPage() {
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({});

  const handleAddToCart = (name: string, size: string | undefined) => {
    if (!size) {
      toast.error("Please select a size first.");
      return;
    }
    toast.info(`${name} (${size}) — Coming soon!`, {
      description: "Our shop is launching very soon. Stay tuned!",
    });
  };

  return (
    <div className="min-h-screen py-20 px-6" data-ocid="shop.page">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-matcha text-xs tracking-[0.3em] uppercase mb-3">
            Handcrafted with Love
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-brown mb-4">
            Our Collection
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-golden" />
            <span className="text-golden text-sm">&diams;</span>
            <div className="h-px w-16 bg-golden" />
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          data-ocid="shop.list"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card rounded-sm shadow-card hover:shadow-lift transition-all duration-300 overflow-hidden"
              data-ocid={`shop.item.${i + 1}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h2 className="font-display text-2xl text-brown mb-3">
                  {product.name}
                </h2>
                <div className="space-y-1 mb-5">
                  <p className="font-body text-sm text-muted-foreground">
                    <span className="font-bold text-brown">Notes:</span>{" "}
                    {product.notes}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    <span className="font-bold text-brown">Mood:</span>{" "}
                    {product.mood}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    <span className="font-bold text-brown">Best for:</span>{" "}
                    {product.bestFor}
                  </p>
                </div>

                <div className="flex gap-3 mb-5">
                  {sizes.map((size) => (
                    <button
                      type="button"
                      key={size.label}
                      onClick={() =>
                        setSelectedSize((prev) => ({
                          ...prev,
                          [product.id]: size.label,
                        }))
                      }
                      className={`flex-1 py-2.5 text-sm font-body font-bold border transition-all duration-200 ${
                        selectedSize[product.id] === size.label
                          ? "bg-golden text-brown border-golden"
                          : "bg-transparent text-brown border-border hover:border-golden"
                      }`}
                    >
                      {size.label}
                      <span className="block text-xs font-normal mt-0.5">
                        {size.price}
                      </span>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() =>
                    handleAddToCart(product.name, selectedSize[product.id])
                  }
                  className="w-full bg-golden text-brown font-body font-bold tracking-widest uppercase text-xs py-5 hover:bg-golden/90 hover:scale-[1.02] transition-all duration-200 rounded-none"
                  data-ocid={`shop.add_to_cart.primary_button.${i + 1}`}
                >
                  <ShoppingBag size={14} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
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
            All candles are hand-poured with love. Limited batches.
          </p>
          <p className="font-body text-muted-foreground text-sm mt-2">
            Each batch is crafted in small quantities to ensure the highest
            quality.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
