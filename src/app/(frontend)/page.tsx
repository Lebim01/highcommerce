'use client'
import React, { useId, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// ------------------------------------------------------------
// Landing: E‑commerce para catálogos grandes (100k+ productos)
// Diseño: TailwindCSS + React (un solo archivo, listo para pegar)
// ------------------------------------------------------------
// Notas:
// - Este componente es autodependiente y usa sólo Tailwind.
// - Incluye navegación interna por anclas y pequeñas animaciones.
// - Los textos están orientados a negocio (no técnicos) y en español.
// - Reemplaza URLs/acciones de formularios según tu stack.
// ------------------------------------------------------------

const NAV = [
  { href: '#dolores', label: 'Problemas que resolvemos' },
  { href: '#para-quien', label: 'Para quién' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#prueba', label: 'Prueba gratis' },
  { href: '#faq', label: 'FAQ' },
]

const trustBadges = [
  'Para electrónica',
  'Multi‑tienda',
  'Listo para Google Shopping',
  'Soporte en español',
]

const dolores = [
  {
    title: 'Tu catálogo es enorme',
    desc: 'La web se hace lenta o la gente no encuentra lo que busca.',
  },
  {
    title: 'Google no te muestra',
    desc: 'Tus categorías no traen tráfico ni ventas.',
  },
  {
    title: 'Promos complicadas',
    desc: 'Configurar cupones y descuentos es un dolor de cabeza.',
  },
  {
    title: 'Ventas perdidas',
    desc: 'No recuperas carritos ni avisas cuando vuelve el stock.',
  },
  {
    title: 'Desorden de inventario',
    desc: 'Agotados inesperados, errores y clientes molestos.',
  },
]

const soluciones = [
  {
    title: 'Búsqueda y filtros claros',
    desc: 'Que cualquier cliente entienda y use en segundos.',
  },
  {
    title: 'Carga veloz en categorías',
    desc: 'Miles de productos sin que la tienda se sienta lenta.',
  },
  {
    title: 'Promos simples y efectivas',
    desc: '% o $ fijo, por volumen y primera compra; con fechas y límites.',
  },
  {
    title: 'Emails que venden solos',
    desc: 'Bienvenida, carrito abandonado, ‘volvió a stock’ y post‑compra.',
  },
  {
    title: 'Inventario bajo control',
    desc: 'Multi‑almacén, reservas en checkout y opción de dropshipping.',
  },
]

const featuresHuman = [
  {
    title: 'Catálogo flexible',
    desc: 'Agrega características a tus productos sin enredarte.',
  },
  {
    title: 'Búsqueda inteligente',
    desc: 'Escribe ‘cable 2m’ y lo encuentra; filtra por marca y precio.',
  },
  {
    title: 'Promos y cupones sin dolor',
    desc: 'Descuentos por % o $; por volumen o primera compra; con vigencias.',
  },
  {
    title: 'Emails automáticos',
    desc: 'Plantillas listas: bienvenida, carrito, back‑in‑stock y gracias.',
  },
  {
    title: 'Google Shopping listo',
    desc: 'Tu inventario se envía a Google para aparecer donde te buscan.',
  },
  {
    title: 'Rendimiento de primera',
    desc: 'Páginas rápidas incluso con catálogos gigantes.',
  },
]

const beneficiosMuchos = [
  'Tus clientes encuentran lo que buscan en segundos.',
  'Menos rebote, más ‘añadir al carrito’ en categorías largas.',
  'Promos que convierten sin pelearte con la herramienta.',
  'Reportes claros de lo que la gente busca y no encuentra.',
]

const beneficiosNuevos = [
  'Lanza tu tienda con plantillas listas y acompañamiento.',
  'Conéctate a Google Shopping para aparecer donde compran.',
  'Cobros fáciles (Stripe, Mercado Pago, Openpay).',
  'Emails listos para empezar a vender desde el día uno.',
]

const faqs = [
  {
    q: '¿Necesito saber de tecnología?',
    a: 'No. Te acompañamos en la instalación y dejamos todo listo.',
  },
  {
    q: '¿Puedo tener varias tiendas?',
    a: 'Sí, y con reglas por región si lo necesitas.',
  },
  {
    q: '¿Hasta cuántos productos soporta?',
    a: 'Trabajamos bien con 100,000+ productos.',
  },
  {
    q: '¿Qué métodos de pago integran?',
    a: 'Stripe, Mercado Pago y Openpay (MXN).',
  },
  {
    q: '¿Hacen facturación?',
    a: 'Por ahora no ofrecemos facturación dentro de la plataforma.',
  },
  {
    q: '¿Qué pasa con mis emails?',
    a: 'Se envían desde tu dominio con nuestras plantillas modulares.',
  },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10 shadow-sm backdrop-blur">
      {children}
    </span>
  )
}

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 flex-none"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.095a.75.75 0 1 0-1.22-.86l-3.236 4.589-1.64-1.64a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.154-.094l3.752-5.305Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  )
}

export default function LandingEcommerce() {
  const [showMobile, setShowMobile] = useState(false)

  // ----- Formulario: Hablar con ventas -----
  const [form, setForm] = useState({
    name: '',
    company: '',
    website: '',
    email: '',
    skus: '100k+',
    region: 'México',
    interests: new Set<string>(),
    message: '',
    consent: true,
  })

  const interestsOptions = useMemo(
    () => ['Búsqueda', 'SEO', 'Emails', 'Promos', 'Multi‑tienda', 'Google Shopping'],
    [],
  )

  function toggleInterest(i: string) {
    const next = new Set(form.interests)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    setForm((f) => ({ ...f, interests: next }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // Validación mínima
    if (!form.name || !form.email) {
      alert('Por favor completa nombre y correo.')
      return
    }
    // Aquí integra tu envío real (fetch/axios)
    alert(
      `¡Gracias, ${form.name}! Te contactaremos hoy mismo.\nIntereses: ${[...form.interests].join(', ')}`,
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 ring-1 ring-slate-900/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-600 text-white font-bold shadow">
              E
            </span>
            <span className="text-sm font-semibold tracking-tight">E‑commerce Masivo</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contacto"
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black"
            >
              Hablar con ventas
            </a>
            <a
              href="#prueba"
              className="rounded-2xl ring-1 ring-slate-900/10 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              Probar gratis
            </a>
          </div>
          <button
            className="md:hidden rounded-xl p-2 ring-1 ring-slate-900/10"
            onClick={() => setShowMobile((s) => !s)}
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-5 w-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {showMobile && (
          <div className="md:hidden border-t border-slate-200/80 bg-white/90">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  onClick={() => setShowMobile(false)}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <a
                  href="#contacto"
                  className="flex-1 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white text-center"
                >
                  Hablar con ventas
                </a>
                <a
                  href="#prueba"
                  className="flex-1 rounded-xl ring-1 ring-slate-900/10 px-3 py-2 text-sm font-semibold text-center"
                >
                  Probar gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative isolate pt-16">
        <div className="mx-auto max-w-7xl px-4 h-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Vende más, aunque tengas miles de productos
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700">
              Carga rápida, búsqueda fácil y promociones que sí convierten. Te ayudamos a ordenar tu
              catálogo y a aparecer en Google para que tus clientes te encuentren y compren.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white font-semibold shadow hover:bg-black"
              >
                Hablar con ventas <ArrowRight />
              </a>
              <a
                href="#prueba"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold ring-1 ring-slate-900/10 hover:bg-slate-50"
              >
                Probar gratis (10k productos)
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {trustBadges.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100%] bg-gradient-to-b from-sky-100/60 to-white" />
      </section>

      {/* DOLORES & SOLUCIONES */}
      <section id="dolores" className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Los dolores que resolvemos
            </h2>
            <ul className="mt-6 space-y-4">
              {dolores.map((d) => (
                <li
                  key={d.title}
                  className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/10"
                >
                  <span className="mt-1 text-sky-600">
                    <Check />
                  </span>
                  <div>
                    <p className="font-semibold">{d.title}</p>
                    <p className="text-slate-700 text-sm">{d.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Cómo te ayudamos</h3>
            <ul className="mt-6 grid gap-4">
              {soluciones.map((s) => (
                <li
                  key={s.title}
                  className="flex gap-3 rounded-2xl bg-sky-50/60 p-4 shadow-sm ring-1 ring-sky-200"
                >
                  <span className="mt-1 text-sky-700">
                    <Check />
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-slate-700 text-sm">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section id="para-quien" className="mx-auto max-w-7xl px-4 pb-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">Para quién es</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card
            title="Ya vendes y tienes muchos SKUs"
            cta="Quiero orden y velocidad"
            href="#contacto"
            bullets={beneficiosMuchos}
          />
          <Card
            title="Aún no vendes en línea"
            cta="Quiero abrir mi tienda sin complicarme"
            href="#contacto"
            bullets={beneficiosNuevos}
          />
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Stat number="+ Tráfico" desc="Aparece mejor en Google con categorías optimizadas." />
            <Stat number="+ Conversión" desc="Clientes encuentran rápido lo que quieren." />
            <Stat number="− Carritos perdidos" desc="Emails que llegan en el momento justo." />
          </div>
          <p className="mt-6 text-sm text-white/70">
            *Cuando tengas métricas reales, reemplaza estos textos por números concretos y casos de
            éxito.
          </p>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">Cómo funciona</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Step
            n={1}
            title="Conectamos o importamos tu catálogo"
            desc="Excel/CSV o por API—rápido y guiado."
          />
          <Step
            n={2}
            title="Ordenamos categorías y filtros"
            desc="Para que tu tienda se entienda sola."
          />
          <Step
            n={3}
            title="Activamos promos y emails"
            desc="Y dejamos todo medido para decidir mejor."
          />
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
          Funcionalidades explicadas “en humano”
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresHuman.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Check />
              </div>
              <p className="font-semibold">{f.title}</p>
              <p className="mt-1 text-sm text-slate-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRUEBA GRATIS */}
      <section id="prueba" className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Prueba gratis hasta 10,000 productos
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-sky-700">
                    <Check />
                  </span>{' '}
                  1 tienda, búsqueda con filtros, cupones básicos.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-sky-700">
                    <Check />
                  </span>{' '}
                  Emails de bienvenida y carrito abandonado activados.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-sky-700">
                    <Check />
                  </span>{' '}
                  Opción de conectar Google Shopping.
                </li>
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white font-semibold shadow hover:bg-black"
              >
                Hablar con ventas <ArrowRight />
              </a>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold">Recibe acceso a la demo</h3>
              <p className="text-sm text-slate-700">
                Déjanos tu correo y te enviaremos instrucciones.
              </p>
              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('¡Gracias! Te enviamos la demo a tu correo.')
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  Obtener demo
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-500">
                Sin spam. Puedes darte de baja en un clic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
          Historias de clientes
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
            <p className="text-slate-800">
              “Por fin la gente encuentra lo que busca. Las categorías grandes ya no son un
              problema.”
            </p>
            <footer className="mt-3 text-sm text-slate-600">Marca de electrónica — México</footer>
          </blockquote>
          <blockquote className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
            <p className="text-slate-800">
              “Activamos cupones por volumen y subieron las ventas en dos semanas.”
            </p>
            <footer className="mt-3 text-sm text-slate-600">Retail de refacciones — LATAM</footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 pb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
          Preguntas frecuentes
        </h2>
        <div className="mx-auto mt-6 max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-900/10">
          {faqs.map((f, i) => (
            <details key={i} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                {f.q}
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="h-5 w-5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACTO / HABLAR CON VENTAS */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-sky-500 p-8 text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Hablemos de tu tienda</h2>
            <p className="mt-2 text-white/90">
              Cuéntanos tu contexto y preparamos una demo enfocada en tus productos.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/95">
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <Check />
                </span>{' '}
                Catálogos de 100k+ productos sin dramas.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <Check />
                </span>{' '}
                Búsqueda rápida con filtros claros.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <Check />
                </span>{' '}
                Promos y emails listos para vender.
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#prueba"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900"
              >
                Probar gratis
              </a>
              <a
                href="#faq"
                className="rounded-2xl ring-1 ring-inset ring-white/60 px-4 py-2 text-sm font-semibold text-white/95 hover:bg-white/10"
              >
                Ver preguntas frecuentes
              </a>
            </div>
          </div>
          <form
            onSubmit={submit}
            className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-900/10"
          >
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nombre y apellido" required>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="María López"
                    className="input"
                  />
                </Field>
                <Field label="Empresa">
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Mi Tienda SA"
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Sitio web">
                <input
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  placeholder="https://mitienda.com"
                  className="input"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="maria@mitienda.com"
                  className="input"
                />
              </Field>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Volumen de productos">
                  <select
                    value={form.skus}
                    onChange={(e) => setForm({ ...form, skus: e.target.value })}
                    className="input"
                  >
                    <option>10k</option>
                    <option>50k</option>
                    <option>100k+</option>
                  </select>
                </Field>
                <Field label="País / región">
                  <input
                    value={form.region}
                    onChange={(e) => setForm({ ...form, region: e.target.value })}
                    placeholder="México"
                    className="input"
                  />
                </Field>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-800">Intereses</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {interestsOptions.map((i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => toggleInterest(i)}
                      className={`rounded-2xl px-3 py-1 text-xs font-semibold ring-1 ring-slate-300 ${form.interests.has(i) ? 'bg-sky-600 text-white ring-sky-600' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
              <Field label="Mensaje">
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Cuéntanos en qué te ayudamos…"
                  className="input"
                />
              </Field>
              <label className="flex items-start gap-2 text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5"
                />
                <span>Acepto ser contactad@ y recibir material informativo. Baja 1‑clic.</span>
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CIERRE */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl bg-slate-900 p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Tu catálogo grande no debe ser un problema, debe ser tu ventaja
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-slate-900 font-semibold"
            >
              Hablar con ventas <ArrowRight />
            </a>
            <a
              href="#prueba"
              className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-inset ring-white/30 px-5 py-3 font-semibold text-white/95 hover:bg-white/10"
            >
              Probar gratis
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} E‑commerce Masivo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-900">
              Términos
            </a>
            <a href="#" className="hover:text-slate-900">
              Privacidad
            </a>
            <a href="#contacto" className="hover:text-slate-900">
              Contacto
            </a>
          </div>
        </div>
      </footer>

      {/* estilos utilitarios */}
      <style>{`
        .input { @apply w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500; }
      `}</style>
    </div>
  )
}

function Card({
  title,
  bullets,
  cta,
  href,
}: {
  title: string
  bullets: string[]
  cta: string
  href: string
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-900/10">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 text-sky-700">
              <Check />
            </span>
            {b}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
      >
        {cta} <ArrowRight />
      </a>
    </div>
  )
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 font-bold text-white">
          {n}
        </div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  )
}

function Stat({ number, desc }: { number: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
      <p className="text-xl font-semibold">{number}</p>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
    </div>
  )
}

type FieldProps = {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  id?: string
  children: React.ReactNode
}

function Field({ label, hint, error, required, children, id }: FieldProps) {
  const reactId = useId()
  const child = React.Children.only(children) as React.ReactElement<any>
  const childId = id || child.props.id || `field-${reactId}`
  const invalid = Boolean(error)
  const describedBy = hint || error ? `${childId}-desc` : undefined

  const mergedChild = React.cloneElement(child, {
    id: childId,
    'aria-invalid': invalid || undefined,
    'aria-describedby': describedBy,
    className: [
      child.props.className || '',
      invalid ? 'ring-2 ring-rose-500 border-rose-500 focus:ring-rose-500' : '',
    ]
      .join(' ')
      .trim(),
  })

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={childId} className="text-sm font-medium text-slate-800">
          {label}
          {required && <span className="text-rose-600"> *</span>}
        </label>
      )}
      {mergedChild}
      {(hint || error) && (
        <div id={describedBy} className="space-y-1">
          {hint && <p className="text-xs text-slate-500">{hint}</p>}
          {error && <p className="text-xs font-medium text-rose-600">{error}</p>}
        </div>
      )}
    </div>
  )
}
