const phoneHref = "tel:+5491100000000";
const whatsappHref = "https://wa.me/5491100000000";
const emailHref = "mailto:hola@unavozdeayuda.org?subject=Quiero%20sumarme%20como%20profesional%20capacitado/a";
const hoursLabel = "Lunes a viernes, de 15:00 a 18:00";

const professionalsCanHelp = [
  "Brindar horas de escucha y orientación inicial con enfoque humano y lenguaje claro.",
  "Aportar supervisión, formación o acompañamiento al equipo de voluntariado.",
  "Colaborar en instancias de derivación responsable y articulación con recursos de la comunidad.",
  "Donar tiempo de forma gratuita en el marco de una propuesta solidaria."
];

export default function SumatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            ← Volver a Una Voz de Ayuda
          </a>
          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Llamar ahora
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-3xl border border-brand-200 bg-brand-50 p-6 shadow-sm sm:p-10">
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700 sm:text-sm">
            Colaboración profesional gratuita · {hoursLabel}
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Sumate a Una Voz de Ayuda
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Este espacio está dirigido exclusivamente a profesionales capacitados que deseen brindar parte de su
            tiempo de forma gratuita para acompañar a familias en crisis.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Soy profesional: sumarme por WhatsApp
            </a>
            <a
              href={emailHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Soy profesional: sumarme por email
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">¿Cómo podés ayudar como profesional capacitado/a?</h2>
          <ul className="mt-5 grid gap-3">
            {professionalsCanHelp.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="profesionales" className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Perfil profesional requerido</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Estamos buscando profesionales capacitados en estas temáticas para reforzar la calidad del acompañamiento.
            Si cumplís este perfil y querés colaborar, te invitamos a contactarte para coordinar la modalidad de participación.
          </p>
          <ul className="mt-5 grid gap-3">
            {professionalsCanHelp.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Coordinar colaboración profesional
            </a>
            <a
              href={phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Prefiero llamar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
