import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#6a3940] py-20 overflow-hidden">
        <Image
          src="/pho-tai.png"
          alt="Pho"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70 font-medium tracking-widest uppercase mb-2">
            Pho Gia Milwaukie
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Three generations of tradition, one bowl at a time
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              From Saigon to Milwaukie
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Pho Gia began as a family dream, born from the memories of bustling
              street corners in Saigon where the aroma of slow-simmered broth filled
              the morning air. When the Nguyen family arrived in Oregon in the early
              1990s, they brought with them more than just recipes—they carried the
              soul of Vietnamese cuisine.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Great pho requires patience: bones roasted until golden, spices
              toasted to release their oils, and broth simmered for 3 full days.
              These traditions, passed down through generations, remain at the
              heart of everything we do.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Our Milwaukie location is a proud extension of our sister
              restaurant, Pho Gia in Portland. After years of serving the
              Portland community, we expanded to Milwaukie to bring the same
              authentic flavors and warm hospitality to more of the area. The
              name &quot;Pho Gia&quot; means &quot;Family Pho,&quot; a reflection of our belief
              that food is meant to bring people together.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[#6a3940]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🍲</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Authentic Recipes
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Every dish is prepared using traditional methods and family recipes
                that have been perfected over generations. We never take shortcuts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[#6a3940]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Fresh Ingredients
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We source the freshest herbs, vegetables, and meats daily. Our
                produce comes from local farms whenever possible, supporting our
                community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[#6a3940]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Made with Love
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We treat every customer like family. From the moment you walk in
                to the last spoonful of broth, we want you to feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Broth */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                The Secret is in the Broth
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Our pho broth is the foundation of everything we do. Our kitchen
                runs around the clock as we tend to broth that simmers for 3 full
                days to create the deepest, richest flavor possible.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                We start with beef bones that are roasted until caramelized, then
                charred onions and ginger that add depth and sweetness. Star anise,
                cinnamon, cloves, and cardamom are toasted to release their aromatic
                oils before joining the pot.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Over 3 days the broth simmers low and slow, never boiling,
                developing layers of flavor that simply cannot be rushed. This
                dedication to craft is what makes every bowl of Pho Gia special.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/pho-tai.png"
                  alt="Pho broth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center">
                <p className="text-3xl font-bold text-[#6a3940] leading-tight">
                  Quality
                </p>
                <p className="text-stone-600">Slow-simmered broth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#6a3940]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            A Family Tradition
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Today, Pho Gia is run by the Nguyen family across two locations—our
            original Portland restaurant and right here in Milwaukie. The love
            and care we put into every dish remains the same at both. We&apos;re
            honored to share our family&apos;s legacy with you.
          </p>
          <p className="text-white/60 italic">
            &quot;Good food is made with good ingredients, but great food is made with love.&quot;
          </p>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Come Visit Us
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            We&apos;d love to welcome you to our table. Whether you&apos;re a pho enthusiast
            or trying Vietnamese cuisine for the first time, we promise an authentic
            experience that will keep you coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-[#6a3940] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3035] transition-colors"
            >
              View Our Menu
            </a>
            <a
              href="#contact"
              className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full text-lg font-medium hover:border-[#6a3940] hover:text-[#6a3940] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
