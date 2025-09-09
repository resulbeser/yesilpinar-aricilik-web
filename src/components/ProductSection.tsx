import { HoneyCard } from "./HoneyCard";
import { useState } from "react";

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

const beekeepingProducts = [
  {
    id: "b1",
    name: "Kovan",
    region: "Arıcılık",
    flowers: ["Langstroth Tipi", "Modern Tasarım"],
    description: "Dayanıklı ahşap kovan, arılarınızın evi",
    price: "850₺ / Adet",
    image: "🏠",
    benefits: [
      "Dayanıklı ahşap",
      "Hava sirkülasyonu",
      "Kolay bakım",
      "Standart ölçüler",
    ],
  },
  {
    id: "b2",
    name: "Arı Tulumu",
    region: "Koruma",
    flowers: ["Beyaz Renk", "Tam Koruma"],
    description: "Arı sokmasından korunmak için profesyonel tulum",
    price: "320₺ / Adet",
    image: "👕",
    benefits: [
      "Tam vücut koruması",
      "Nefes alabilir kumaş",
      "Fermuarlı tasarım",
      "Eldiven dahil",
    ],
  },
  {
    id: "b3",
    name: "Arı Keki",
    region: "Bakım",
    flowers: ["Doğal Duman", "Güvenli Kullanım"],
    description: "Arıları sakinleştirmek için duman üretici",
    price: "180₺ / Adet",
    image: "💨",
    benefits: [
      "Arıları sakinleştirir",
      "Güvenli duman",
      "Kolay kullanım",
      "Uzun ömürlü",
    ],
  },
  {
    id: "b4",
    name: "Bal Süzme Makinesi",
    region: "Üretim",
    flowers: ["Paslanmaz Çelik", "Hijyenik"],
    description: "Balı petekten ayırmak için santrifüj makine",
    price: "2.500₺ / Adet",
    image: "⚙️",
    benefits: [
      "Paslanmaz çelik",
      "Hijyenik üretim",
      "Hızlı süzme",
      "Kolay temizlik",
    ],
  },
  {
    id: "b5",
    name: "Bal Taşıma Sandığı",
    region: "Taşıma",
    flowers: ["Gıda Uyumlu", "Sağlam Yapı"],
    description: "Bal kavanozu taşımak için özel sandık",
    price: "150₺ / Adet",
    image: "📦",
    benefits: ["Sağlam yapı", "Gıda uyumlu", "Kolay taşıma", "Kapaklı tasarım"],
  },
  {
    id: "b6",
    name: "Arı Izgarası",
    region: "Bakım",
    flowers: ["Tel Örgü", "Dayanıklı"],
    description: "Kraliçe arının kontrolü için metal ızgara",
    price: "75₺ / Adet",
    image: "⚔️",
    benefits: [
      "Kraliçe kontrolü",
      "Dayanıklı tel",
      "Standart boyut",
      "Kolay montaj",
    ],
  },
];

export const ProductSection = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0: Bal Ürünleri, 1: Arıcılık Malzemeleri

  const nextSection = () => {
    setCurrentSection(1);
  };

  const prevSection = () => {
    setCurrentSection(0);
  };

  return (
    <section
      id="products"
      className="py-16 px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: "#F5F1E8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Container with fixed height to prevent jumping */}
        <div className="relative" style={{ minHeight: "950px" }}>
          {/* Doğal Bal Ürünleri Section */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSection === 0
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
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
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "#8D6E63" }}
              >
                Trabzon'un bereketli topraklarından, doğanın en saf halinde
                sunduğumuz organik bal çeşitlerimizi keşfedin.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ minHeight: "800px" }}
            >
              {honeyProducts.map((product) => (
                <HoneyCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Arıcılık Malzemeleri Section */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSection === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="text-center mb-12">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  color: "#5D4037",
                  fontFamily: "'The Seasons', serif",
                }}
              >
                Arıcılık Malzemeleri{" "}
                <span style={{ color: "#D4AF37" }}>Ürünlerimiz</span>
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto mb-4"
                style={{ color: "#8D6E63" }}
              >
                Profesyonel arıcılık için ihtiyaç duyduğunuz kaliteli
                ekipmanları sizlere sunuyoruz. Deneyimli arıcılar için özel
                seçilmiş ürünler.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ minHeight: "800px" }}
            >
              {beekeepingProducts.map((product) => (
                <HoneyCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>{" "}
        {/* Fixed height container closing */}
        {/* Right Arrow - Only show on first section */}
        {currentSection === 0 && (
          <button
            onClick={nextSection}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-110 z-20"
            style={{
              border: "2px solid #D4AF37",
              color: "#5D4037",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
        {/* Left Arrow - Only show on second section */}
        {currentSection === 1 && (
          <button
            onClick={prevSection}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-110 z-20"
            style={{
              border: "2px solid #D4AF37",
              color: "#5D4037",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        {/* Section Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          <button
            onClick={() => setCurrentSection(0)}
            className={`w-3 h-3 rounded-full transition-all duration-700 ${
              currentSection === 0
                ? "opacity-100 scale-125"
                : "opacity-40 scale-100"
            }`}
            style={{ backgroundColor: "#D4AF37" }}
          />
          <button
            onClick={() => setCurrentSection(1)}
            className={`w-3 h-3 rounded-full transition-all duration-700 ${
              currentSection === 1
                ? "opacity-100 scale-125"
                : "opacity-40 scale-100"
            }`}
            style={{ backgroundColor: "#D4AF37" }}
          />
        </div>
      </div>
    </section>
  );
};
