const phoneHref = "tel:+5491100000000";
const whatsappHref = "https://wa.me/5491100000000";
const hoursLabel = "Lunes a viernes, de 15:00 a 18:00";

const sections = {
  receive: [
    "Una explicación clara sobre qué es una adicción y por qué afecta a toda la familia.",
    "Herramientas para manejar angustia, culpa, miedo e ira sin quedar paralizado.",
    "Guía para entender el consumo problemático y cómo hablar con tu hijo o ser querido.",
    "Conceptos clave en palabras simples: baja respuesta emocional, co-adicción y amor responsable.",
    "Pasos concretos para el hogar: retirar sustancias, cuidar el manejo del dinero y ordenar límites.",
    "Orientación para sostener el vínculo sin convalidar conductas que hacen daño.",
    "Recomendaciones de comunidades y centros (ambulatorios e internación) según cada situación.",
    "Sugerencia de próximos pasos, porque acompañar a la familia también es parte del cuidado."
  ]
};

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="text-base font-semibold tracking-tight text-slate-900">
            Una Voz de Ayuda
          </a>
          <PrimaryButton href={phoneHref}>Hacer el primer llamado</PrimaryButton>
        </div>
      </header>

      <section id="inicio" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
            Llamadas gratuitas · {hoursLabel}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl">
            Cuando no sabés cómo ayudar, hablar con alguien puede ordenar el camino.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Orientación humana y primera contención para familias y personas atravesadas por el consumo problemático.
            Un llamado para entender qué está pasando y qué paso dar ahora.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href={phoneHref}>Hacer el primer llamado</PrimaryButton>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Cómo funciona</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Nos llamás o escribís por WhatsApp", "Te escuchamos y ordenamos la situación", "Te llevás pasos concretos para hoy"].map(
            (item, index) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-brand-700">Paso {index + 1}</p>
                <p className="mt-2 text-lg font-medium text-slate-900">{item}</p>
              </article>
            )
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Para quién es</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Madres, padres y familiares que no saben cómo actuar frente al consumo.",
            "Personas cercanas que viven angustia, miedo o desgaste por esta situación.",
            "Quienes necesitan una primera orientación antes de buscar tratamiento."
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base leading-relaxed text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Qué vas a recibir</h2>
        <ul className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {sections.receive.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-800">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Qué NO es</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-800">
            Este espacio no reemplaza un tratamiento. No hacemos terapia individual ni grupal. Es una primera consulta
            de orientación y contención para ayudarte a tomar decisiones más cuidadas.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-red-900 sm:text-3xl">Si hay emergencia, actuá ya</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-red-900/90">
            Si hay riesgo de vida, violencia o una situación fuera de control, llamá de inmediato a emergencias o a la
            policía de tu zona.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:911"
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
            >
              Llamar emergencias
            </a>
            <a
              href="#cta-final"
              className="inline-flex items-center justify-center rounded-full border border-red-300 bg-white px-6 py-3 text-base font-semibold text-red-900 transition hover:bg-red-100"
            >
              Ver recursos
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Confidencialidad y encuadre</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
          Durante el llamado aplican confidencialidad y encuadre de consulta terapéutica. La orientación brindada no
          sustituye indicaciones médicas ni legales. Las decisiones y pasos a seguir son responsabilidad del
          consultante.
        </p>
      </section>

      <section id="cta-final" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">No tenés que resolver esto en soledad.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            Te acompañamos en una primera llamada para ordenar la situación y definir los próximos pasos.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Hacer el primer llamado
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-300">Llamadas gratuitas · Horario de atención: {hoursLabel}.</p>
        </div>
      </section>

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
