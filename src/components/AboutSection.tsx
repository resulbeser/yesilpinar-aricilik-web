import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 lg:px-12"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge
              variant="secondary"
              className="mb-4"
              style={{ backgroundColor: "#D4AF37", color: "#5D4037" }}
            >
              Organik Üretim
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{
                color: "#5D4037",
                fontFamily: "'The Seasons', serif",
              }}
            >
              Geleneksel <span style={{ color: "#D4AF37" }}>Arıcılık</span>
            </h2>
            <p className="text-lg mb-6" style={{ color: "#8D6E63" }}>
              2025 yılından bu yana Trabzon'un eşsiz doğasında, geleneksel
              yöntemlerle arıcılık yapıyoruz. Ballarımız tamamen doğal, katkısız
              ve organik sertifikalıdır.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🌿</span>
                <span style={{ color: "#5D4037" }}>%100 Organik ve Doğal</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏔️</span>
                <span style={{ color: "#5D4037" }}>Trabzon Yaylalarından</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🐝</span>
                <span style={{ color: "#5D4037" }}>
                  Geleneksel Arıcılık Yöntemleri
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">✨</span>
                <span style={{ color: "#5D4037" }}>Katkısız Saf Bal</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl text-center opacity-20">🍯</div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div
                className="p-8 rounded-full"
                style={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
              >
                <div className="text-6xl">🐝</div>
              </div>
            </div>
          </div>
        </div>

        {/* Neden Yeşilpınar? Bölümü */}
        <div className="mt-20">
          <h3
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
            style={{
              color: "#5D4037",
              fontFamily: "'The Seasons', serif",
            }}
          >
            Neden <span style={{ color: "#D4AF37" }}>Yeşilpınar</span>?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 100% Organik */}
            <div
              className="p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #F5F1E8",
              }}
            >
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-2xl">🌿</span>
                </div>
              </div>
              <h4
                className="text-xl font-bold mb-4"
                style={{
                  color: "#5D4037",
                  fontFamily: "'The Seasons', serif",
                }}
              >
                100% Organik
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8D6E63" }}
              >
                Tamamen doğal üretim süreçleri ile kimyasal katkısız bal üretimi
              </p>
            </div>

            {/* Kalite Garantisi */}
            <div
              className="p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #F5F1E8",
              }}
            >
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
              <h4
                className="text-xl font-bold mb-4"
                style={{
                  color: "#5D4037",
                  fontFamily: "'The Seasons', serif",
                }}
              >
                Kalite Garantisi
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8D6E63" }}
              >
                Her parti laboratuvar testlerinden geçen, sertifikalı premium
                kalite
              </p>
            </div>

            {/* Aile İşletmesi */}
            <div
              className="p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #F5F1E8",
              }}
            >
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-2xl">💝</span>
                </div>
              </div>
              <h4
                className="text-xl font-bold mb-4"
                style={{
                  color: "#5D4037",
                  fontFamily: "'The Seasons', serif",
                }}
              >
                Aile İşletmesi
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8D6E63" }}
              >
                Kuşaklar boyu süren arıcılık geleneği ve aile sıcaklığı
              </p>
            </div>

            {/* Memnun Müşteriler */}
            <div
              className="p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #F5F1E8",
              }}
            >
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  <span className="text-2xl">👥</span>
                </div>
              </div>
              <h4
                className="text-xl font-bold mb-4"
                style={{
                  color: "#5D4037",
                  fontFamily: "'The Seasons', serif",
                }}
              >
                Memnun Müşteriler
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8D6E63" }}
              >
                Binlerce mutlu aile tarafından tercih edilen güvenilir marka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
