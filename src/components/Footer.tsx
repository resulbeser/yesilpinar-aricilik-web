export const Footer = () => {
  return (
    <footer
      className="py-16 px-6 lg:px-12"
      style={{ backgroundColor: "#e6d8c6" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Sol Sütun - Yeşilpınar Arıcılık */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: "#D4AF37",
                fontFamily: "'The Seasons', serif",
              }}
            >
              Yeşilpınar Arıcılık
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#5D4037" }}
            >
              Trabzon'un yeşil dağlarından doğal ve organik bal ürünleri.
              Aileniz için en kaliteli balı üretiyoruz.
            </p>
            <div className="flex items-center space-x-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#D4AF37" }}
              ></span>
              <span
                className="text-sm font-medium"
                style={{ color: "#5D4037" }}
              >
                Doğal, Organik, Güvenilir
              </span>
            </div>
          </div>

          {/* Orta Sütun - Hızlı Bağlantılar */}
          <div className="space-y-4">
            <h4
              className="text-xl font-semibold mb-6"
              style={{
                color: "#5D4037",
                fontFamily: "'The Seasons', serif",
              }}
            >
              Hızlı Bağlantılar
            </h4>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-base hover:text-amber-600 transition-colors"
                style={{ color: "#5D4037" }}
              >
                Ana Sayfa
              </a>
              <a
                href="#products"
                className="block text-base hover:text-amber-600 transition-colors"
                style={{ color: "#5D4037" }}
              >
                Ürünlerimiz
              </a>
              <a
                href="#about"
                className="block text-base hover:text-amber-600 transition-colors"
                style={{ color: "#5D4037" }}
              >
                Hakkımızda
              </a>
              <a
                href="#"
                className="block text-base hover:text-amber-600 transition-colors"
                style={{ color: "#5D4037" }}
              >
                İletişim
              </a>
            </nav>
          </div>

          {/* Sağ Sütun - İletişim */}
          <div className="space-y-4">
            <h4
              className="text-xl font-semibold mb-6"
              style={{
                color: "#5D4037",
                fontFamily: "'The Seasons', serif",
              }}
            >
              İletişim
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-lg" style={{ color: "#D4AF37" }}>
                  📞
                </span>
                <span className="text-base" style={{ color: "#5D4037" }}>
                  +90 555 123 45 67
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg" style={{ color: "#D4AF37" }}>
                  📍
                </span>
                <span className="text-base" style={{ color: "#5D4037" }}>
                  Yeşilpınar Köyü, Trabzon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright ve Etiketler */}
        <div
          className="mt-12 pt-8 border-t border-opacity-30"
          style={{ borderColor: "#5D4037" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Sol - Copyright */}
            <p className="text-sm" style={{ color: "#5D4037" }}>
              © 2025 Yeşilpınar Arıcılık. Tüm hakları saklıdır.
            </p>

            {/* Sağ - Etiketler */}
            <div className="flex items-center space-x-4 text-sm">
              <span className="font-medium" style={{ color: "#5D4037" }}>
                Organik üretim • Doğal lezzet • Güvenilir kalite
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
