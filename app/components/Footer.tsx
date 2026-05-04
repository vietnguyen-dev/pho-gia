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
              <p>Thursday - Tuesday 11 AM - 9 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-stone-400">
              <a
                href="https://www.google.com/maps/search/?api=1&query=4607+SE+Boardman+Ave+Milwaukie+OR+97267"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                4607 SE Boardman Ave, Milwaukie, OR 97267
              </a>
              <p className="mt-4">
                <a
                  href="tel:+15033035442"
                  className="hover:text-white transition-colors"
                >
                  (503) 303-5442
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
