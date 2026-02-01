import Link from "next/link";
import Image from "next/image";

const featuredDishes = [
  {
    name: "Pho Tai",
    description: "Rice noodle soup with rare beef slices in aromatic broth",
    price: "$14.95",
    icon: "🍜",
  },
  {
    name: "Bun Thit Nuong",
    description: "Grilled pork over rice vermicelli with fresh herbs and fish sauce",
    price: "$14.95",
    icon: "🥢",
  },
  {
    name: "Banh Mi Dac Biet",
    description: "Special combo sandwich with pate, ham, and fresh vegetables",
    price: "$9.95",
    icon: "🥖",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#6a3940] overflow-hidden">
        <Image
          src="/bun_thit_nuong.png"
          alt="Bun Thit Nuong"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-white/80 font-medium tracking-widest uppercase mb-4">
            Authentic Vietnamese Cuisine
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            A Taste of
            <br />
            <span className="text-white">Vietnam</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the rich flavors of traditional Vietnamese cooking.
            Handcrafted pho, fresh ingredients, and recipes passed down through
            generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-brand px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand font-medium tracking-widest uppercase mb-2">
              Signature Dishes
            </p>
            <h2 className="text-4xl font-bold text-stone-900">
              Our Favorites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="group bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{dish.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {dish.name}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <p className="text-brand font-bold text-lg">{dish.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-brand font-medium hover:gap-4 transition-all"
            >
              See Full Menu
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#6a3940]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/70 font-medium tracking-widest uppercase mb-2">
                Our Story
              </p>
              <h2 className="text-4xl font-bold text-white mb-6">
                Family Recipes, Made Fresh Daily
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Pho Gia began as a family dream to share the authentic flavors
                  of Vietnam with our community. Our recipes have been passed
                  down through three generations, each bowl of pho simmered with
                  the same care and love.
                </p>
                <p>
                  We believe in using only the freshest ingredients. Our broth
                  is prepared daily, simmering for over 12 hours to achieve that
                  perfect depth of flavor. Every herb, every spice, every
                  ingredient is carefully selected.
                </p>
                <p>
                  Located in the heart of Milwaukie, we invite you to experience
                  a true taste of Vietnam. Whether you're a pho enthusiast or
                  trying Vietnamese cuisine for the first time, we're here to
                  make you feel at home.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/pho-tai.png"
                  alt="Pho"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center">
                <p className="text-4xl font-bold text-brand">12+</p>
                <p className="text-stone-600">Hours of slow-simmered broth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Ready to Experience Authentic Pho?
          </h2>
          <p className="text-stone-600 text-xl mb-10 leading-relaxed">
            Visit us today or call ahead for pickup. We can't wait to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15035551234"
              className="bg-brand text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-light transition-colors"
            >
              Call (503) 555-1234
            </a>
            <a
              href="#contact"
              className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full text-lg font-medium hover:border-brand hover:text-brand transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
