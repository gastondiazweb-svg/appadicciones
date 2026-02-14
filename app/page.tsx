const phoneDisplay = "+54 9 11 0000 0000";
const phoneHref = "tel:+5491100000000";
const whatsappHref = "https://wa.me/5491100000000";
const hoursLabel = "Lunes a viernes, de 15:00 a 18:00";

const howItWorks = [
  {
    title: "Te contactás",
    description: "Nos llamás o escribís por WhatsApp durante el horario de atención."
  },
  {
    title: "Te escuchamos sin juzgar",
    description: "Ordenamos juntos lo que está pasando en tu casa y qué te preocupa hoy."
  },
  {
    title: "Te llevás próximos pasos",
    description: "Terminás con una guía inicial clara y recursos para seguir acompañado/a."
  }
];

const forWho = [
  {
    title: "Madres, padres y referentes",
    description: "Cuando sentís desgaste, miedo o culpa y no sabés cómo intervenir."
  },
  {
    title: "Familia o personas cercanas",
    description: "Cuando el consumo problemático impacta en la convivencia y en el vínculo."
  },
  {
    title: "Quienes buscan orientación inicial",
    description: "Antes de iniciar tratamiento, para comprender opciones y prioridades."
  }
];

const receive = [
  "Explicación simple sobre la enfermedad y cómo impacta en todo el sistema familiar.",
  "Herramientas para gestionar angustia, culpa, miedo e ira con más claridad.",
  "Guía para hablar con tu hijo o ser querido: qué decir y qué evitar.",
  "Conceptos clave en lenguaje humano: baja respuesta emocional, co-adicción y amor responsable.",
  "Pasos concretos para el hogar: sustancias, dinero, límites y concesiones.",
  "Criterios para cuidar el vínculo sin convalidar conductas que hacen daño.",
  "Sugerencias de comunidades y centros (ambulatorio o internación) según la situación.",
  "Recomendación de próximos pasos para la familia, porque también necesita acompañamiento."
];

const faqs = [
  {
    question: "¿La llamada es gratuita?",
    answer: "Sí. La llamada es gratuita dentro del horario de atención publicado en esta página."
  },
  {
    question: "¿Esto reemplaza terapia o tratamiento?",
    answer: "No. Es una instancia de orientación inicial y contención para definir el siguiente paso."
  },
  {
    question: "¿Qué pasa si hay una urgencia?",
    answer: "Si hay riesgo de vida o violencia, llamá de inmediato a emergencias o policía local."
  }
];

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
    >
      {children}
    </a>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Ir al contenido principal
      </a>

      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            Una Voz de Ayuda
          </a>
          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:px-5 sm:text-base"
          >
            Hacer el primer llamado
          </a>
        </div>
      </header>

      <section id="inicio" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 lg:px-8 lg:pt-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 sm:text-sm">
            Llamadas gratuitas · {hoursLabel}
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            No estás solo/a: una llamada puede ayudarte a ordenar este momento.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-xl">
            Si el consumo problemático está afectando a tu familia, te ofrecemos orientación inicial y contención.
            Escucha humana, información clara y pasos concretos para hoy.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href={phoneHref}>Hacer el primer llamado</PrimaryButton>
            <SecondaryButton href="#como-funciona">Ver cómo funciona</SecondaryButton>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            También podés escribir por WhatsApp o llamar al <a className="font-semibold underline" href={phoneHref}>{phoneDisplay}</a>.
          </p>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <SectionTitle
          title="Cómo funciona"
          subtitle="Un primer contacto breve, cercano y claro para que salgas con dirección y no con más incertidumbre."
        />
        <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-3">
          {howItWorks.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Paso {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <SectionTitle
          title="Para quién es"
          subtitle="Para personas y familias que necesitan entender qué está pasando y cómo actuar con más cuidado."
        />
        <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-3">
          {forWho.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <SectionTitle
          title="Qué vas a recibir"
          subtitle="Información útil y aplicable para empezar a tomar decisiones con mayor claridad."
        />
        <ul className="mt-7 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-8 sm:p-7">
          {receive.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-800 sm:text-base">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm sm:p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Qué NO es este espacio</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-800">
            No hacemos terapia individual ni grupal y no brindamos tratamiento. Esta llamada ofrece orientación inicial
            y contención para ayudarte a decidir el siguiente paso con más criterio.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm sm:p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-red-950 sm:text-3xl">Si hay emergencia, actuá de inmediato</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-red-900/90">
            Si hay riesgo de vida, violencia o una situación fuera de control, llamá en ese momento a emergencias o a la
            policía de tu zona. Esta línea no reemplaza servicios de urgencia.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="tel:911"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
            >
              Llamar emergencias
            </a>
            <SecondaryButton href="#cta-final">Ver recursos</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <SectionTitle
          title="Preguntas frecuentes"
          subtitle="Respuestas breves para que tengas claro el alcance de esta ayuda inicial."
        />
        <div className="mt-7 space-y-3 sm:mt-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{faq.question}</summary>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Confidencialidad y encuadre</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Durante el llamado aplican la confidencialidad y el encuadre de consulta terapéutica. La información brindada
            es orientativa y no sustituye indicaciones médicas ni legales. Las decisiones y pasos a seguir son
            responsabilidad del consultante.
          </p>
        </div>
      </section>

      <section id="cta-final" className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Hacé hoy ese primer llamado.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Estamos para escucharte y orientarte. Una conversación puede darte aire, claridad y un camino posible para
            seguir cuidando a tu familia.
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Hacer el primer llamado
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-300">Llamadas gratuitas · Horario de atención: {hoursLabel}.</p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <PrimaryButton href={phoneHref}>Llamar ahora</PrimaryButton>
      </div>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-600 sm:px-6 lg:px-8">
          <p>Una Voz de Ayuda · Organización de orientación inicial en adicciones</p>
          <p>
            Contacto: <a href="mailto:hola@unavozdeayuda.org" className="underline">hola@unavozdeayuda.org</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
