import { HoneyCard } from "./HoneyCard";

const honeyProducts = [
  {
    id: "1",
    name: "Çiçek Balı",
    region: "Trabzon",
    flowers: ["Kestane", "Linden", "Akasya", "Karadeniz Çiçekleri"],
    description: "Karadeniz'in eşsiz çiçeklerinden elde edilen aromatik bal",
    price: "120₺ / 500g",
    image: "🍯",
    benefits: [
      "Doğal antioksidan",
      "Bağışıklık güçlendirici",
      "Enerji verici",
      "Vitamin bakımından zengin",
    ],
  },
  {
    id: "2",
    name: "Kestane Balı",
    region: "Trabzon",
    flowers: ["Kestane Çiçeği", "Orman Çiçekleri"],
    description: "Kestane ağaçlarının nektarından üretilen koyu renkli bal",
    price: "150₺ / 500g",
    image: "🌰",
    benefits: [
      "Mineral açısından zengin",
      "Demir içerir",
      "Antiinflamatuar",
      "Sindirim dostu",
    ],
  },
  {
    id: "3",
    name: "Linden Balı",
    region: "Trabzon",
    flowers: ["Ihlamur", "Linden Çiçeği", "Dağ Çiçekleri"],
    description: "Ihlamur ağaçlarından toplanan sakinleştirici bal",
    price: "140₺ / 500g",
    image: "🌸",
    benefits: [
      "Sakinleştirici etki",
      "Stres azaltıcı",
      "Uyku kalitesi artırıcı",
      "Solunum destekleyici",
    ],
  },
  {
    id: "4",
    name: "Yayla Balı",
    region: "Trabzon",
    flowers: ["Yayla Çiçekleri", "Dağ Otları", "Kekik", "Lavanta"],
    description: "Yüksek yayla çiçeklerinden toplanmış saf bal",
    price: "160₺ / 500g",
    image: "🏔️",
    benefits: [
      "Yüksek polen içeriği",
      "Doğal enzimler",
      "Güçlü aroma",
      "Saf ve doğal",
    ],
  },
  {
    id: "5",
    name: "Çam Balı",
    region: "Trabzon",
    flowers: ["Çam Reçinesi", "Orman Bitkileri"],
    description: "Çam ağaçlarının salgılarından elde edilen koyu bal",
    price: "180₺ / 500g",
    image: "🌲",
    benefits: [
      "Güçlü antiseptik",
      "Bronşit için faydalı",
      "Düşük şeker içeriği",
      "Uzun raf ömrü",
    ],
  },
  {
    id: "6",
    name: "Propolis",
    region: "Trabzon",
    flowers: ["Ağaç Reçineleri", "Tomurcuklar"],
    description: "Arıların ürettikleri doğal antibiyotik",
    price: "200₺ / 50g",
    image: "🛡️",
    benefits: [
      "Güçlü antibiyotik",
      "Bağışıklık sistemi",
      "Yara iyileştirici",
      "Antiviral etki",
    ],
  },
];

export const ProductSection = () => {
  return (
    <section
      id="products"
      className="py-16 px-6 lg:px-12"
      style={{ backgroundColor: "#F5F1E8" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "#5D4037",
              fontFamily: "'The Seasons', serif",
            }}
          >
            Doğal Bal <span style={{ color: "#D4AF37" }}>Ürünlerimiz</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8D6E63" }}>
            Trabzon'un bereketli topraklarından, doğanın en saf halinde
            sunduğumuz organik bal çeşitlerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honeyProducts.map((product) => (
            <HoneyCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
