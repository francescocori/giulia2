const iconBenessere = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const iconMindfulness = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const iconScuola = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const iconRelazioni = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const iconVulnerabilita = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9 12l2 2 4-4" />
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
  </svg>
);

const iconCambiamento = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const IconBox = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest shrink-0">
    {icon}
  </div>
);

const Tag = ({ label }: { label: string }) => (
  <span className="font-dm-sans text-xs px-2.5 py-1 rounded-full bg-forest/[0.07] border border-forest/[0.08] text-forest/55">
    {label}
  </span>
);

export default function Services() {
  return (
    <section id="services" className="bg-sage py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-forest/40 mb-4">
            Possiamo partire da qui
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-normal tracking-tight text-forest mb-5">
            Le aree di supporto psicologico
          </h2>
          <p className="font-dm-sans text-sm leading-relaxed text-forest/55 max-w-md mx-auto">
            Ogni percorso è unico e può prendere forma in modi diversi: non è
            necessario riconoscersi in una sola di queste aree.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ROW 1 */}

          {/* Card 1 — Benessere emotivo (wide, 2/3) */}
          <div className="md:col-span-2 flex flex-col bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-5">
              <div className="md:order-2 shrink-0">
                <IconBox icon={iconBenessere} />
              </div>
              <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest md:order-1">
                Benessere emotivo
              </h3>
            </div>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55 mb-4">
              Un supporto per ritrovare equilibrio e consapevolezza, anche in
              presenza di condizioni di salute che influenzano la qualità della
              vita.
            </p>
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
              <Tag label="Ansia" />
              <Tag label="Stress" />
              <Tag label="Burnout" />
              <Tag label="Gestione delle emozioni" />
              <Tag label="Autostima" />
              <Tag label="Malattie croniche" />
            </div>
          </div>

          {/* Card 2 — Mindfulness (narrow, 1/3) */}
          <div className="bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconMindfulness} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Mindfulness
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
              Per chi sente il bisogno di rallentare, ritrovare il respiro e
              sviluppare una presenza più consapevole nel quotidiano.
            </p>
          </div>

          {/* ROW 2 */}

          {/* Card 3 — Scuola (narrow, 1/3) */}
          <div className="flex flex-col bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconScuola} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Scuola e università
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55 mb-4">
              Supporto a studenti che vivono ansia, insicurezza o difficoltà nel
              percorso scolastico, inclusi i ragazzi con DSA.
            </p>
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
              <Tag label="Metodo di studio" />
              <Tag label="Ansia da prestazione" />
              <Tag label="DSA" />
            </div>
          </div>

          {/* Card 4 — Relazioni (narrow, 1/3) */}
          <div className="bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconRelazioni} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Relazioni e dinamiche interpersonali
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
              Difficoltà relazionali, dipendenza affettiva, gestione dei
              conflitti e comunicazione nei legami personali e sociali.
            </p>
          </div>

          {/* Card 5 — Vulnerabilità (narrow, 1/3) */}
          <div className="flex flex-col bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconVulnerabilita} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Vulnerabilità e vissuti complessi
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55 mb-4">
              Uno spazio sicuro per elaborare esperienze difficili, vissuti
              dolorosi e momenti di forte stress emotivo, ai propri tempi.
            </p>
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
              <Tag label="Esperienze difficili" />
              <Tag label="Stress emotivo" />
              <Tag label="Elaborazione del dolore" />
            </div>
          </div>

          {/* ROW 3 */}

          {/* Card 6 — Uno spazio anche in spagnolo  */}
          <div className="bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <IconBox icon={iconMindfulness} />
            <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest mt-6 mb-3">
              Uno spazio anche in spagnolo
            </h3>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
              Per sentirsi compresi e meno distanti, anche vivendo tra più
              lingue e contesti, studenti o lavoratori internazionali e persone
              in mobilità in Italia o all&#39;estero
            </p>
          </div>
          {/* Card 7 — Cambiamento, scelte e identità  */}
          <div className="md:col-span-2 flex flex-col bg-forest/4 border border-forest/10 rounded-2xl p-8 hover:border-forest/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-5">
              <div className="md:order-2 shrink-0">
                <IconBox icon={iconBenessere} />
              </div>
              <h3 className="font-cormorant text-2xl font-normal tracking-tight text-forest md:order-1">
                Cambiamento, scelte e identità
              </h3>
            </div>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/55 mb-4">
              Percorsi di esplorazione dell&apos;identità, momenti di
              transizione, ricerca di direzione personale o lavorativa,
              difficoltà nel prendere decisioni.
            </p>
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
              <Tag label="Identità personale" />
              <Tag label="Transizioni di vita" />
              <Tag label="Orientamento formativo e lavorativo" />
              <Tag label="Incertezza e dubbio" />
              <Tag label="Prendere decisioni" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
