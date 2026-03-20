const steps = [
  {
    number: "01",
    title: "Scrivimi",
    description: "Mandami un messaggio, senza nessun impegno.",
  },
  {
    number: "02",
    title: "Chiamata conoscitiva",
    description: "Una breve chiamata gratuita per conoscerci.",
  },
  {
    number: "03",
    title: "Iniziamo insieme",
    description: "Pianifichiamo il tuo percorso personalizzato.",
  },
];

export default function Steps() {
  return (
    <section id="come-funziona" className="bg-sage py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-forest/40 mb-4">
            Come funziona
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-forest leading-tight">
            Tre semplici passi per cominciare
          </h2>
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">

          {/* Dashed connector — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-9 left-[calc(100%/6)] right-[calc(100%/6)] h-px border-t-2 border-dashed border-forest/15"
          />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center md:items-center md:text-center">
              {/* Number */}
              <span className="font-cormorant text-8xl font-light leading-none text-forest/10 mb-5 select-none">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-dm-sans text-sm leading-relaxed text-forest/55 max-w-50">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
