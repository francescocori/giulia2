import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Tag = ({ label }: { label: string }) => (
  <span className="font-dm-sans text-xs px-2.5 py-1 rounded-full bg-forest/[0.07] border border-forest/[0.08] text-forest/55">
    {label}
  </span>
);

const SidebarSection = ({
  label,
  tags,
  withDivider = true,
}: {
  label: string;
  tags: string[];
  withDivider?: boolean;
}) => (
  <div className={withDivider ? "border-t border-forest/[0.08] pt-4 mt-4" : ""}>
    <p className="font-dm-sans text-[10px] tracking-widest uppercase text-forest/35 mb-3">
      {label}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  </div>
);

export default function ChiSono() {
  return (
    <main className="overflow-x-hidden bg-sage">
      <Navbar />

      {/* 1. Page hero */}
      <section className="bg-sage pt-36 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <a
            href="/"
            className="inline-block font-dm-sans text-xs text-forest/40 hover:text-forest/60 transition-colors duration-200 mb-10"
          >
            ← Torna alla home
          </a>

          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-forest/40 mb-4">
            Chi sono
          </p>

          <h1 className="font-cormorant text-5xl md:text-6xl font-normal text-forest tracking-tight leading-tight mb-6">
            Un percorso che nasce dall&apos;ascolto
          </h1>

          {/* <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
            Psicologa iscritta all&apos;Albo della Regione Abruzzo, con una
            formazione in psicologia applicata ai contesti della salute, del
            lavoro e giuridico-forense.
          </p> */}
        </div>
      </section>

      {/* 2. Two-column content section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="">
          {/* Left — prose */}
          <div className="md:col-span-2">
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Sono una psicologa iscritta all'Albo della Regione Abruzzo, con
              una formazione in psicologia applicata ai contesti della salute,
              del lavoro e giuridico-forense (Università La Sapienza di Roma).
              Nel tempo ho maturato esperienza in contesti diversi, lavorando a
              contatto con situazioni di vulnerabilità e in realtà dedicate al
              supporto di persone che attraversano momenti complessi dal punto
              di vista emotivo e relazionale.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Nell’ambito educativo ho lavorato come docente di sostegno e come
              Tutor DSA (Disturbi Specifici dell’Apprendimento), accompagnando
              studenti e studentesse, anche universitari, nella costruzione di
              un metodo di studio personale, nel potenziamento delle proprie
              abilità e nello sviluppo di una maggiore fiducia nelle proprie
              capacità e autostima. Ho inoltre svolto interventi domiciliari a
              sostegno di minori e famiglie e collaborato nell'organizzazione e
              conduzione di laboratori di gioco e condivisione, pensati per
              favorire apprendimento ed espressione.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Attualmente sono coinvolta nello sviluppo di attività ed
              interventi psico-educativi nell'ambito progettuale. Parallelamente
              collaboro con associazioni che si occupano di violenza di genere e
              centri antiviolenza, in cui mi dedico all'accompagnamento in
              percorsi di ascolto, orientamento e sostegno psicologico. In
              questi contesti ho maturato una solida formazione ed esperienza,
              arricchita anche dal tirocinio post-laurea presso un'associazione
              attiva e impegnata sul tema a livello internazionale.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Gran parte del mio percorso si è svolto all'estero - Spagna,
              Portogallo e Argentina, dove ho avuto modo di confrontarmi e
              lavorare con realtà sociali e diversi contesti culturali. Queste
              esperienze arricchiscono oggi il mio modo di ascoltare e
              comprendere. Offro la possibilità di svolgere colloqui in lingua
              Spagnola, per tutti coloro che si sentono a proprio agio ad
              esprimersi in questa lingua.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Pull quote */}
      <div className="border-t border-forest/10 py-16 px-6">
        <blockquote className="max-w-2xl mx-auto text-center">
          <p className="font-cormorant text-2xl md:text-3xl font-normal text-forest/70 leading-relaxed italic">
            &ldquo;Credo nell'importanza di avere uno spazio in cui poter
            connettersi con sè, riconoscere le proprie risorse e lasciarle
            fiorire, per costruire una vita in cui potersi rispecchiare.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* 4. Approach section */}
      <section className="bg-forest/[0.03] border-y border-forest/[0.08] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-forest/40 mb-4">
            Come lavoro
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-normal text-forest tracking-tight leading-tight mb-12">
            Strumenti e prospettive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-forest/[0.04] border border-forest/10 rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl font-normal text-forest mb-4">
                Consapevolezza
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-forest/65">
                Nel percorso può esserci spazio anche per strumenti orientati
                alla consapevolezza e alla gestione dello stress, come pratiche
                di Mindfulness e Training Autogeno. Non è necessario avere
                esperienze pregresse: le pratiche si adattano alla persona, ad
                ogni età e ai diversi momenti di vita.
              </p>
            </div>

            <div className="bg-forest/[0.04] border border-forest/10 rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl font-normal text-forest mb-4">
                Sguardo interculturale
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-forest/65">
                Sto conseguendo la qualifica in Mediatrice Interculturale,
                percorso che si intreccia con il mio pensiero: ogni vissuto
                prende forma dentro un ambiente e una cultura; tenere insieme la
                persona e il suo mondo, riconoscendo il valore dei significati
                che ciascuno porta con sè, è parte del mio modo di lavorare.
              </p>
            </div>

            <div className="bg-forest/[0.04] border border-forest/10 rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl font-normal text-forest mb-4">
                Aggiornamento continuo
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-forest/65">
                Il mio lavoro si nutre di curiosità e di un aggiornamento
                costante verso nuovi strumenti e prospettive. Credo in una
                pratica che sappia evolvere insieme alle persone che incontra,
                rispettandone i tempi, i bisogni e l’unicità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact */}
      <Contact />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
