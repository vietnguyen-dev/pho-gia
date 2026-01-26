import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Pho Gia</h3>
            <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">
              Milwaukie
            </p>
            <p className="text-stone-400 leading-relaxed">
              Authentic Vietnamese cuisine made with fresh ingredients and
              traditional recipes passed down through generations.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-stone-400">
              <p>Monday - Thursday: 11am - 9pm</p>
              <p>Friday - Saturday: 11am - 10pm</p>
              <p>Sunday: 12pm - 8pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-stone-400">
              <p>10000 SE Main Street</p>
              <p>Milwaukie, OR 97222</p>
              <p className="mt-4">
                <a
                  href="tel:+15035551234"
                  className="hover:text-white transition-colors"
                >
                  (503) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@phogiamilwaukie.com"
                  className="hover:text-white transition-colors"
                >
                  hello@phogiamilwaukie.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Pho Gia Milwaukie. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/menu"
              className="text-stone-500 hover:text-white transition-colors text-sm"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-stone-500 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-stone-500 hover:text-white transition-colors text-sm"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
