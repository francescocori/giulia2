const credentials = [
  "Licensed Clinical Psychologist (OPL 12345)",
  "Master's in Counseling Psychology, University of Bologna",
  "Certified in EMDR and Somatic Therapy",
];

export default function About() {
  return (
    <section id="about" className="relative bg-sage">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28 md:pt-36 md:pb-36 text-center md:max-w-[600px]">
        <div className="grid grid-cols-1 gap-14 md:gap-20 items-center">
          {/* Left — portrait placeholder */}

          {/* Right — content */}
          <div className="flex flex-col gap-5">
            {/* Eyebrow */}
            <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-forest/40">
              Chi sono
            </p>

            {/* Heading */}
            <h2 className="font-cormorant text-4xl md:text-5xl font-normal text-forest tracking-tight leading-tight">
              Uno spazio sicuro nasce da una connessione autentica
            </h2>

            {/* Bio */}
            <p className="font-dm-sans text-sm leading-relaxed text-forest/60">
              Mi occupo di supporto psicologico, accompagnando le persone nei
              momenti di fragilità, cambiamento o nella ricerca di una maggiore
              comprensione di sé, quando ciò che si sta vivendo è difficile da
              definire.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/60">
              A volte si può percepire confusione o provare una sensazione che
              non trova spazio altrove. Anche senza una difficoltà precisa può
              nascere il desiderio di dedicare uno spazio per sé. In altri
              momenti, invece, il bisogno è più definito: fermarsi, comprendersi
              meglio, affrontare una situazione complessa o (ri)trovare una
              direzione.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/60">
              Questo può essere uno spazio di supporto in cui prenderti cura di
              te. Uno spazio aperto, inclusivo e accogliente verso la tua
              identità e la tua storia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-cream/60 mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-5 5z" />
    </svg>
  );
}
