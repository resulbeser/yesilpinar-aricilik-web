export const TestimonialsSection = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Google Yorumlar Başlığı */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold" style={{ color: "#4285F4" }}>
                G
              </span>
              <span className="text-2xl font-bold" style={{ color: "#EA4335" }}>
                o
              </span>
              <span className="text-2xl font-bold" style={{ color: "#FBBC05" }}>
                o
              </span>
              <span className="text-2xl font-bold" style={{ color: "#4285F4" }}>
                g
              </span>
              <span className="text-2xl font-bold" style={{ color: "#34A853" }}>
                l
              </span>
              <span className="text-2xl font-bold" style={{ color: "#EA4335" }}>
                e
              </span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span
                className="text-lg font-medium"
                style={{ color: "#5F6368" }}
              >
                Yorumlar (500+)
              </span>
            </div>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{
              color: "#5D4037",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Yeşilpınar'ı Deneyenlerin Yorumları
          </h2>
        </div>

        {/* Yorumlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Yorum 1 */}
          <div
            className="p-6 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#4285F4" }}
                >
                  G
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: "#5D4037" }}>
                    Er**** İl**** Mu****
                  </h4>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#5F6368" }}>
              Organik bal zaten muhteşem ben diğer ürünlerini de aldım
              kullanıyorum. Tatları zaten kendini belli ediyor kesinlikle
              tavsiye ederim.
            </p>
          </div>

          {/* Yorum 2 */}
          <div
            className="p-6 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#4285F4" }}
                >
                  G
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: "#5D4037" }}>
                    HÜ**** DO****
                  </h4>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#5F6368" }}>
              Aldığınız yaptığım andan itibaren bilgilendirme olsun hızlı
              teslimat olsun son derece güzel ilerledi her aşama. İçini hakkıyla
              yapan bir firma gerçekten. Balın propolisin tadı ve kalitesi
              tartışmasız zaten, çok...
            </p>
          </div>

          {/* Yorum 3 */}
          <div
            className="p-6 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#4285F4" }}
                >
                  G
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: "#5D4037" }}>
                    Se**** Ca****
                  </h4>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#5F6368" }}>
              Hem ürünleri hem de firma olarak çok iyi derim ürün çeşitleri hık
              da bilgi için aradığınızda da çok yardımcı oluyorlar.
            </p>
          </div>
        </div>

        {/* Tüm Yorumları Göster Butonu */}
        <div className="text-center">
          <button
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "transparent",
              color: "#5D4037",
              border: "2px solid #D4AF37",
            }}
          >
            &gt; Tüm yorumları göster
          </button>
        </div>
      </div>
    </section>
  );
};
