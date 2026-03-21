const iconAnsia = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const iconDepressione = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const iconTrauma = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 12l2 2 4-4" />
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
  </svg>
);

const iconCoppia = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBox = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center text-forest shrink-0">
    {icon}
  </div>
);

export default function Services() {
  return (
    <section id="services" className="bg-sage py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-forest/40 mb-4">
            Cosa offro
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-normal tracking-tight text-forest mb-5">
            Le aree in cui posso aiutarti
          </h2>
          <p className="font-dm-sans text-sm leading-relaxed text-forest/55 max-w-md mx-auto">
            Il percorso di ognuno è unico. Queste sono alcune delle aree in cui
            offro un supporto mirato e compassionevole.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1 — wide (col-span-2), icon top-right */}
          <div className="md:col-span-2 bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <div className="flex items-start justify-between gap-6 mb-6">
              <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest">
                Ansia & Stress
              </h3>
              <IconBox icon={iconAnsia} />
            </div>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
              Impara a calmare la mente, regolare il sistema nervoso e costruire resilienza di fronte alle pressioni quotidiane.
            </p>
          </div>

          {/* Card 2 — narrow, icon top */}
          <div className="bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconDepressione} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Depressione
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
              Affronta umore basso, perdita di motivazione ed esaurimento emotivo con un supporto compassionevole e basato sull&apos;evidenza.
            </p>
          </div>

          {/* Card 3 — narrow, icon top */}
          <div className="bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconTrauma} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Trauma & PTSD
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
              Elabora esperienze difficili ai tuoi tempi in un ambiente sicuro e sintonizzato, attraverso approcci EMDR e somatici.
            </p>
          </div>

          {/* Card 4 — wide (col-span-2), icon left */}
          <div className="md:col-span-2 bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <div className="flex items-start gap-6">
              <IconBox icon={iconCoppia} />
              <div>
                <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mb-3">
                  Terapia di coppia
                </h3>
                <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
                  Rafforza la comunicazione, ricostruisci la fiducia e approfondisci il legame attraverso un lavoro relazionale guidato.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
