export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Remote Workers with Chronic Conditions
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Symptoms.<br />
          <span className="text-[#58a6ff]">Protect Your Productivity.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SymptomSync correlates your daily symptoms with productivity metrics, surfaces hidden patterns, and helps you schedule deep work around your best health windows.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8 / month
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No hidden fees.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Daily symptom logging", "Productivity correlation", "Pattern dashboard", "Work schedule optimizer", "Weekly insights"].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to work smarter with your health</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited symptom & productivity logs",
              "AI-powered pattern analysis",
              "Interactive correlation charts",
              "Personalized schedule recommendations",
              "Weekly email digest",
              "Data export (CSV)"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "Who is SymptomSync designed for?",
              a: "Remote workers managing chronic conditions like fibromyalgia, migraines, autoimmune disorders, or any recurring health issue that affects daily work capacity."
            },
            {
              q: "How does the pattern analysis work?",
              a: "You log symptoms and productivity scores each day. SymptomSync analyzes correlations over time — revealing which symptoms most impact your output and when your peak performance windows occur."
            },
            {
              q: "Is my health data private and secure?",
              a: "Yes. Your data is encrypted at rest and in transit, never sold or shared, and you can export or delete it at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} SymptomSync. All rights reserved.
      </footer>
    </main>
  );
}
