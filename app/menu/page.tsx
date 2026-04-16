import Image from "next/image";
import MenuClient from "./menu-client";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Image */}
      <section className="relative bg-brand py-20 overflow-hidden">
        <Image
          src="/pho-tai.png"
          alt="Pho Tai"
          fill
          className="object-cover rotate-180 opacity-30"
          priority
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70 font-medium tracking-widest uppercase mb-2">
            Pho Gia Milwaukie
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Authentic Vietnamese dishes made fresh daily with traditional recipes
          </p>
        </div>
      </section>

      <MenuClient />
    </div>
  );
}
