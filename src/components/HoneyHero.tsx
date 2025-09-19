import { Button } from "@/components/ui/button";

export const HoneyHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Bee_Video_Home.mp4" type="video/mp4" />
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-end p-6 lg:px-12">
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#products"
            className="font-semibold text-lg transition-colors hover:text-amber-300"
            style={{
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            ÜRÜNLER
          </a>
          <a
            href="#about"
            className="font-semibold text-lg transition-colors hover:text-amber-300"
            style={{
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            HAKKIMIZDA
          </a>
          <a
            href="#contact"
            className="font-semibold text-lg transition-colors hover:text-amber-300"
            style={{
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            İLETİŞİM
          </a>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 lg:px-12">
        <div className="max-w-4xl w-full text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Yeşilpınar Arıcılık Logo"
              className="h-64 w-64 lg:h-80 lg:w-80 object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))" }}
            />
          </div>

          <h1
            className="text-6xl lg:text-8xl font-bold leading-tight mb-6"
            style={{
              color: "#FFFFFF",
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
              fontFamily: "'The Seasons', serif",
            }}
          >
            YEŞİLPINAR
            <br />
            <span
              style={{
                color: "#D4AF37",
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              ARICILIK
            </span>
          </h1>

          <div className="mb-8">
            <Button
              size="lg"
              className="px-12 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: "#5D4037",
                color: "#FFFFFF",
                border: "3px solid #D4AF37",
              }}
            >
              SİPARİŞ VER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
