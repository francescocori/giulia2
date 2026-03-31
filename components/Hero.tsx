import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden rounded-b-[30px] md:rounded-b-[50px]">
      {/* Background image */}
      <Image
        src="/images/heroImage.png"
        alt="Calm therapy setting"
        fill
        priority
        className="object-cover object-bottom md:object-center"
      />

      {/* Warm cream overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(250, 246, 238, 0.25)" }}
      />

      {/* Frosted glass card */}
      <div className="relative z-20 mx-6 animate-fade-in">
        <div className="backdrop-blur-xs rounded-[64px] px-8 py-10 md:px-12 md:py-14 max-w-md text-center mb-[30%] lg:mb-[40%]">
          {/* Eyebrow */}
          <p className="font-dm-sans text-xs tracking-[0.2em] uppercase text-sage mb-4 md:mb-6">
            Terapia &amp; Benessere
          </p>

          {/* Heading */}
          <h1 className="font-cormorant text-4xl md:text-5xl font-normal text-forest tracking-tight leading-tight mb-4 md:mb-6">
            Riconoscersi <br /> non è sempre un percorso{" "}
            <em className="italic text-rose">lineare.</em>
          </h1>

          {/* Subheading */}
          <p className="font-dm-sans text-sm leading-relaxed text-forest/70 mb-6 md:mb-8">
            Non devi affrontarlo da solo. La terapia è uno spazio per
            rallentare, ritrovarti e trovare la tua strada.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block font-dm-sans text-sm text-cream rounded-full px-8 py-2.5 md:py-3 transition-all duration-200 bg-forest"
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  );
}
