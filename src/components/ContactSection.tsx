export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-12"
      style={{ backgroundColor: "#F8F6F0" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{
              color: "#D4AF37",
              fontFamily: "'The Seasons', serif",
            }}
          >
            İletişime Geçin
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8D6E63" }}>
            Sorularınız, siparişleriniz ve özel istekleriniz için bizimle
            iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
          <div
            className="w-20 h-1 mx-auto mt-6"
            style={{ backgroundColor: "#D4AF37" }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sol Sütun - İletişim Bilgileri */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-bold mb-8"
              style={{
                color: "#5D4037",
                fontFamily: "'The Seasons', serif",
              }}
            >
              İletişim Bilgileri
            </h3>

            <div className="space-y-6">
              {/* Telefon */}
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2D5",
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: "#5D4037" }}
                    >
                      Telefon
                    </h4>
                    <p style={{ color: "#8D6E63" }}>+90 555 123 45 67</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2D5",
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: "#5D4037" }}
                    >
                      WhatsApp
                    </h4>
                    <p style={{ color: "#8D6E63" }}>Hızlı iletişim için</p>
                  </div>
                </div>
              </div>

              {/* Adres */}
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2D5",
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: "#5D4037" }}
                    >
                      Adres
                    </h4>
                    <p style={{ color: "#8D6E63" }}>Yeşilpınar Köyü, Trabzon</p>
                  </div>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2D5",
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: "#5D4037" }}
                    >
                      Çalışma Saatleri
                    </h4>
                    <p style={{ color: "#8D6E63" }}>
                      Pazartesi - Pazar: 08:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Sütun - Konumuz ve Sipariş Bilgileri */}
          <div className="lg:col-span-2 space-y-12">
            {/* Konumumuz */}
            <div>
              <h3
                className="text-2xl font-bold mb-8"
                style={{
                  color: "#5D4037",
                  fontFamily: "'The Seasons', serif",
                }}
              >
                Konumumuz
              </h3>

              <div
                className="p-8 rounded-xl text-center"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2D5",
                }}
              >
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-3xl">📍</span>
                </div>
                <h4
                  className="text-xl font-bold mb-2"
                  style={{ color: "#5D4037" }}
                >
                  Yeşilpınar Köyü
                </h4>
                <p className="text-lg mb-4" style={{ color: "#8D6E63" }}>
                  Trabzon
                </p>
                <button
                  className="px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-opacity-90"
                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  Haritada Göster
                </button>
              </div>
            </div>

            {/* Hızlı Sipariş ve Sipariş Bilgileri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hızlı Sipariş */}
              <div>
                <h3
                  className="text-xl font-bold mb-6"
                  style={{
                    color: "#5D4037",
                    fontFamily: "'The Seasons', serif",
                  }}
                >
                  Hızlı Sipariş
                </h3>

                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "#FFF8E7",
                    border: "1px solid #D4AF37",
                  }}
                >
                  <p className="mb-6" style={{ color: "#8D6E63" }}>
                    WhatsApp üzerinden hızlı sipariş verebilir, sorularınızı
                    sorabilir ve özel isteklerinizi iletebilirsiniz.
                  </p>

                  <button
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#FFFFFF",
                      border: "none",
                    }}
                  >
                    💬 WhatsApp ile İletişime Geç
                  </button>
                </div>
              </div>

              {/* Sipariş Bilgileri */}
              <div>
                <h3
                  className="text-xl font-bold mb-6"
                  style={{
                    color: "#5D4037",
                    fontFamily: "'The Seasons', serif",
                  }}
                >
                  Sipariş Bilgileri
                </h3>

                <div
                  className="p-6 rounded-xl space-y-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E2D5",
                  }}
                >
                  <div className="flex justify-between">
                    <span style={{ color: "#8D6E63" }}>Minimum Sipariş:</span>
                    <span style={{ color: "#5D4037", fontWeight: "600" }}>
                      1 Adet
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#8D6E63" }}>Teslimat Süresi:</span>
                    <span style={{ color: "#5D4037", fontWeight: "600" }}>
                      2-3 Gün
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#8D6E63" }}>Kargo:</span>
                    <span style={{ color: "#5D4037", fontWeight: "600" }}>
                      Ücretsiz (50₺ üzeri)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#8D6E63" }}>Ödeme:</span>
                    <span style={{ color: "#5D4037", fontWeight: "600" }}>
                      Kapıda Ödeme
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
