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

          <p className="font-dm-sans text-sm leading-relaxed text-forest/55">
            Psicologa iscritta all&apos;Albo della Regione Abruzzo, con una
            formazione in psicologia applicata ai contesti della salute, del
            lavoro e giuridico-forense.
          </p>
        </div>
      </section>

      {/* 2. Two-column content section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left — prose */}
          <div className="md:col-span-2">
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Sono una psicologa iscritta all&apos;Albo della Regione Abruzzo,
              con una formazione in psicologia applicata ai contesti della
              salute, del lavoro e giuridico-forense (Università La Sapienza di
              Roma). Nel tempo ho maturato esperienza in contesti diversi,
              lavorando a contatto con situazioni di vulnerabilità e in realtà
              dedicate al supporto di persone che attraversano momenti complessi
              dal punto di vista emotivo e relazionale.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Nell&apos;ambito educativo ho lavorato come docente di sostegno e
              come Tutor DSA, accompagnando studentesse e studenti nella
              costruzione di un metodo di studio personale, nel potenziamento
              delle proprie abilità e nello sviluppo di una maggiore fiducia in
              sé. Ho inoltre svolto interventi domiciliari a sostegno di minori
              e famiglie e collaborato nella conduzione di laboratori di gioco e
              condivisione.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Collaboro con associazioni che si occupano di violenza di genere e
              centri antiviolenza, dedicandomi all&apos;accompagnamento in
              percorsi di ascolto, orientamento e sostegno psicologico. Ho
              maturato una solida formazione ed esperienza in questo ambito,
              arricchita dal tirocinio post-laurea presso un&apos;associazione
              attiva sul tema a livello internazionale.
            </p>
            <p className="font-dm-sans text-sm leading-relaxed text-forest/65 mb-6">
              Gran parte del mio percorso si è svolto all&apos;estero — in
              Spagna, Portogallo e Argentina — dove ho avuto modo di
              confrontarmi con realtà sociali e contesti culturali diversi.
              Queste esperienze arricchiscono oggi il mio modo di ascoltare e
              comprendere. Offro la possibilità di svolgere colloqui in lingua
              spagnola, per chi si sente più a proprio agio ad esprimersi in
              quella lingua.
            </p>
          </div>

          {/* Right — sidebar */}
          <div className="md:col-span-1">
            <div className="bg-forest/[0.04] border border-forest/10 rounded-2xl p-8 sticky top-8">
              <div>
                <p className="font-dm-sans text-[10px] tracking-widest uppercase text-forest/35 mb-3">
                  Formazione
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "La Sapienza · Roma",
                    "Albo Regione Abruzzo",
                    "Mediatrice Interculturale",
                  ].map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <SidebarSection
                label="Approccio"
                tags={[
                  "Mindfulness",
                  "Training Autogeno",
                  "Psico-educativo",
                  "Interculturale",
                ]}
              />
              <SidebarSection label="Lingue" tags={["Italiano", "Spagnolo"]} />
              <SidebarSection
                label="Sessioni"
                tags={["Online", "Tutta Italia", "Dall'estero"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pull quote */}
      <div className="border-t border-forest/10 py-16 px-6">
        <blockquote className="max-w-2xl mx-auto text-center">
          <p className="font-cormorant text-2xl md:text-3xl font-normal text-forest/70 leading-relaxed italic">
            &ldquo;Credo nell&apos;importanza di avere uno spazio in cui potersi
            connettere con sé, riconoscere le proprie risorse e lasciarle
            fiorire.&rdquo;
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
                Strumenti di consapevolezza
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-forest/65">
                Mindfulness e training autogeno sono pratiche che possono
                accompagnare il percorso. Non è necessaria alcuna esperienza
                pregressa: si adattano alla persona, a ogni età e ai diversi
                momenti di vita.
              </p>
            </div>

            <div className="bg-forest/[0.04] border border-forest/10 rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl font-normal text-forest mb-4">
                Sguardo interculturale
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-forest/65">
                Sto conseguendo la qualifica in Mediatrice Interculturale. Ogni
                vissuto prende forma dentro un ambiente e una cultura: tenere
                insieme la persona e il suo mondo è parte del mio modo di
                lavorare.
              </p>
            </div>

            <div className="bg-forest/[0.04] border border-forest/10 rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl font-normal text-forest mb-4">
                Aggiornamento continuo
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-forest/65">
                Il mio lavoro si nutre di curiosità e aggiornamento costante
                verso nuovi strumenti e prospettive. Credo in una pratica
                clinica che sappia evolvere insieme alle persone che incontra.
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
