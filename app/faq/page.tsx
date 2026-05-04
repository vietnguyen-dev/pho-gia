"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Menu & Food",
    questions: [
      {
        q: "What is pho?",
        a: "Pho is a traditional Vietnamese soup consisting of a quality broth, rice noodles, herbs, and meat (usually beef or chicken).",
      },
      {
        q: "Do you have vegetarian or vegan options?",
        a: "Yes! We offer Pho Chay (vegetable pho with tofu) and can modify many dishes to be vegetarian. Please let your server know about any dietary restrictions.",
      },
      {
        q: "Are your dishes gluten-free?",
        a: "Many of our dishes can be made gluten-free. Our pho broth and rice noodles are naturally gluten-free. Please inform your server about any allergies or dietary needs.",
      },
      {
        q: "What's the difference between the pho options?",
        a: "Our pho varieties differ by the meat: Tai (rare beef), Chin (well-done brisket), Bo Vien (meatballs), Ga (chicken), and Dac Biet (house special with all meats). All use the same signature 12-hour broth.",
      },
      {
        q: "How spicy is Bun Bo Hue?",
        a: "Bun Bo Hue has a moderate spice level with lemongrass and chili. We can adjust the spice level to your preference—just ask your server for mild, medium, or hot.",
      },
    ],
  },
  {
    category: "Ordering & Pickup",
    questions: [
      {
        q: "Do you take reservations?",
        a: "We operate on a first-come, first-served basis for parties under 6. For larger groups, please call ahead at (503) 303-5442 to arrange seating.",
      },
      {
        q: "Can I order online for pickup?",
        a: "Yes! You can call us at (503) 303-5442 to place a pickup order. We recommend calling 20-30 minutes before you plan to arrive.",
      },
      {
        q: "Do you offer delivery?",
        a: "We partner with local delivery services. You can also find us on popular delivery apps. For the best experience, we recommend dining in or pickup as pho is best enjoyed fresh.",
      },
      {
        q: "Can I customize my order?",
        a: "We're happy to accommodate reasonable modifications. Let us know about any allergies, and we'll do our best to adjust dishes to your needs.",
      },
    ],
  },
  {
    category: "Restaurant Info",
    questions: [
      {
        q: "What are your hours?",
        a: "Thursday - Tuesday 11 AM - 10 PM. Closed every Wednesday. Hours may vary on holidays.",
      },
      {
        q: "Where are you located?",
        a: "We're located at 10000 SE Main Street, Milwaukie, OR 97222. There's free parking available in our lot and on the street.",
      },
      {
        q: "Is there parking available?",
        a: "Yes, we have a free parking lot adjacent to the restaurant, and street parking is also available on Main Street.",
      },
      {
        q: "Do you accommodate large groups?",
        a: "Yes! For parties of 6 or more, please call ahead at (503) 303-5442 so we can prepare seating for your group.",
      },
      {
        q: "Is the restaurant family-friendly?",
        a: "Absolutely! We welcome families and have high chairs available. Our menu includes options that kids love, and we can adjust spice levels for younger palates.",
      },
    ],
  },
  {
    category: "About Our Food",
    questions: [
      {
        q: "What makes your pho special?",
        a: "Our pho broth is made from a family recipe passed down through three generations. We simmer beef bones, charred onions, ginger, and spices for over 12 hours to create a rich, aromatic broth.",
      },
      {
        q: "Do you use MSG?",
        a: "We do not add MSG to our dishes. Our flavors come from slow-simmered broths, fresh herbs, and quality ingredients.",
      },
      {
        q: "Where do you source your ingredients?",
        a: "We source fresh produce from local farms whenever possible and use high-quality meats. Our herbs are delivered fresh multiple times per week.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left"
      >
        <span className="font-medium text-stone-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-stone-500 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-stone-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#6a3940] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70 font-medium tracking-widest uppercase mb-2">
            Pho Gia Milwaukie
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our restaurant and menu
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                {section.category}
              </h2>
              <div className="bg-stone-50 rounded-2xl px-6">
                {section.questions.map((faq, faqIndex) => (
                  <FAQItem key={faqIndex} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="bg-[#6a3940] rounded-2xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/80 mb-6">
              We&apos;re happy to help! Reach out to us directly.
            </p>
            <a
              href="tel:+15033035442"
              className="inline-block bg-white text-[#6a3940] px-8 py-3 rounded-full font-medium hover:bg-stone-100 transition-colors"
            >
              Call (503) 303-5442
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
