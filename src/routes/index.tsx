/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import wesleyImg from "@/assets/wesley.jpg";
import cristianoImg from "@/assets/cristiano.jpg";
import davyImg from "@/assets/davy.jpeg";
import logoImg from "@/assets/logo-team-imperios.jpg";
import dojangImg from "@/assets/dojang.jpg";
import gallery01 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.23.jpeg";
import gallery02 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.24.jpeg";
import gallery03 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.25.jpeg";
import gallery04 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.25 (1).jpeg";
import gallery05 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.26.jpeg";
import gallery06 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.27.jpeg";
import gallery07 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.27 (1).jpeg";
import gallery08 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.28.jpeg";
import gallery09 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.29.jpeg";
import gallery10 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.30.jpeg";
import gallery11 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.30 (1).jpeg";
import gallery12 from "@/assets/WhatsApp Image 2026-11-16 at 13.42.30 (2).jpeg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlansSection } from "@/components/plans-section";

const TITLE = "Team Impérios Taekwondo | Dojang Moo Duk Kwan em Varginha/MG";
const DESC =
  "Aulas de Taekwondo coreano em Varginha/MG para crianças, jovens e adultos. Disciplina, respeito e superação com Mestre Wesley Lúcio, 4º Dan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "taekwondo Varginha, artes marciais Varginha, Team Impérios, Moo Duk Kwan, aula de taekwondo infantil",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Team Impérios Taekwondo",
          description: DESC,
          sport: "Taekwondo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Varginha",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/teamimperios/"],
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  ["sobre", "Sobre"],
  ["valores", "Valores"],
  ["aulas", "Aulas"],
  ["planos", "Planos"],
  ["estrutura", "Estrutura"],
  ["mestres", "Mestres"],
  ["galeria", "Galeria"],
  ["documentos", "Documentos"],
  ["contato", "Contato"],
] as const;

const IG = "https://www.instagram.com/teamimperios/";
const WHATSAPP = "https://wa.me/5535991950352";
const APOSTILA_URL = "/documentos/APOSTILA%20TAEKWONDO.pdf";
const GALLERY = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10,
  gallery11,
  gallery12,
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  const target = el ? el.getBoundingClientRect().top + window.scrollY - 88 : 0;
  animateTo(target, 1100);
  window.history.replaceState(null, "", id === "inicio" ? location.pathname : `#${id}`);
}

function animateTo(target: number, duration = 1100) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, target);
    return;
  }
  const start = window.scrollY;
  const startTime = performance.now();
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + (target - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("has-scroll-reveal");
    return () => document.documentElement.classList.remove("has-scroll-reveal");
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    let animationFrame = 0;
    let animationTimer = 0;
    let touchStartY = 0;
    const scrollToTarget = (target: number, duration: number) => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(animationTimer);
      const start = window.scrollY;
      const startTime = performance.now();
      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        window.scrollTo(0, start + (target - start) * ease(progress));
        if (progress < 1) animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
      animationTimer = window.setTimeout(() => {
        animationFrame = 0;
      }, duration + 30);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const section = document.getElementById(id);
      event.preventDefault();
      scrollToTarget(section ? section.getBoundingClientRect().top + window.scrollY - 88 : 0, 1100);
      window.history.replaceState(null, "", `#${id}`);
    };
    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024 || event.ctrlKey || event.deltaY === 0) return;
      const element = event.target;
      if (element instanceof Element && element.closest("[data-native-scroll], [role=dialog]"))
        return;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id]"));
      if (!sections.length) return;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 80;
      const topInset = headerBottom + 16;
      const viewHeight = window.innerHeight - topInset;
      const marker = topInset + 2;
      const direction = event.deltaY > 0 ? 1 : -1;
      const visible = sections
        .map((section, index) => ({ section, index, rect: section.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > topInset + 2 && rect.top < window.innerHeight - 2);
      if (!visible.length) return;
      const current =
        direction > 0
          ? (visible.find(({ rect }) => rect.top <= topInset + 2) ?? visible[0])
          : ([...visible].reverse().find(({ rect }) => rect.top < topInset + viewHeight * 0.55) ??
            visible[0]);
      const currentIndex = current.index;
      const currentSection = current.section;
      const sectionTop = currentSection.getBoundingClientRect().top;
      const sectionBottom = currentSection.getBoundingClientRect().bottom;
      const sectionIsTall = currentSection.offsetHeight > viewHeight + 8;

      // Em seções altas, liberar a roda enquanto ainda há conteúdo abaixo/acima no viewport.
      if (sectionIsTall && direction > 0 && sectionBottom > window.innerHeight + 2) return;
      if (
        sectionIsTall &&
        direction < 0 &&
        sectionTop < topInset - 2 &&
        sectionBottom > topInset + viewHeight * 0.55
      )
        return;

      event.preventDefault();
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
      const next = sections[nextIndex];
      if (!next || next === currentSection) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextTop = Math.max(0, next.getBoundingClientRect().top + window.scrollY - topInset);
      scrollToTarget(Math.min(maxScroll, nextTop), 950);
      window.history.replaceState(null, "", `#${next.id}`);
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (window.innerWidth >= 1024) return;
      const endY = event.changedTouches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - endY;
      if (Math.abs(delta) < 60) return;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id]"));
      const topInset =
        (document.querySelector("header")?.getBoundingClientRect().bottom ?? 80) + 16;
      const viewHeight = window.innerHeight - topInset;
      const marker = topInset + 2;
      const direction = delta > 0 ? 1 : -1;
      const visible = sections
        .map((section, index) => ({ section, index, rect: section.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > topInset + 2 && rect.top < window.innerHeight - 2);
      if (!visible.length) return;
      const current =
        direction > 0
          ? (visible.find(({ rect }) => rect.top <= marker) ?? visible[0])
          : ([...visible].reverse().find(({ rect }) => rect.bottom >= window.innerHeight - 2) ??
            visible[visible.length - 1]);
      const currentIndex = current.index;
      const currentSection = current.section;
      if (currentSection.offsetHeight > viewHeight + 8) {
        if (direction > 0 && currentSection.getBoundingClientRect().bottom > window.innerHeight + 2)
          return;
        if (direction < 0 && currentSection.getBoundingClientRect().top < topInset - 2) return;
      }
      const next = sections[Math.max(0, Math.min(sections.length - 1, currentIndex + direction))];
      if (!next || next === currentSection) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextTop = Math.max(0, next.getBoundingClientRect().top + window.scrollY - topInset);
      scrollToTarget(Math.min(maxScroll, nextTop), 950);
      window.history.replaceState(null, "", `#${next.id}`);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.clearTimeout(animationTimer);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV.map(([id]) => ({ id, el: document.getElementById(id) })).filter(
        (item): item is { id: (typeof NAV)[number][0]; el: HTMLElement } => item.el !== null,
      );
      const lastSection = sections.at(-1);
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const marker = (document.querySelector("header")?.getBoundingClientRect().bottom ?? 80) + 12;
      const visibleEntries = sections.map(({ id, el }) => {
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, marker);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        return {
          id,
          area: Math.max(0, visibleBottom - visibleTop),
          distance: Math.abs(rect.top - marker),
        };
      });
      const current = atBottom
        ? lastSection?.id
        : visibleEntries
          .filter(({ area }) => area > 0)
          .sort((a, b) => b.area - a.area || a.distance - b.distance)[0]?.id;
      setActive(current ?? "");
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"}`}
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Logo Team Impérios Taekwondo"
            className="h-10 w-10 rounded-full object-cover shadow-gold"
          />
          <span className="font-display text-xl tracking-wider md:text-2xl">
            Team <span className="text-gold">Impérios</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${active === id ? "bg-ink text-ink-foreground" : "text-foreground/75 hover:text-foreground"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={IG}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105 lg:inline-flex"
        >
          Aula experimental
        </a>
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </Button>
      </nav>
      <div
        inert={!open}
        className={`glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-500 lg:hidden ${open ? "max-h-[28rem] opacity-100" : "max-h-0 border-0 opacity-0"}`}
      >
        <ul className="flex flex-col p-3">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-semibold hover:bg-muted"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function SectionTitle({ kicker, title, gold }: { kicker: string; title: string; gold: string }) {
  return (
    <div className="reveal mb-12 text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-deep">{kicker}</p>
      <h2 className="text-5xl md:text-7xl">
        {title} <span className="text-gold">{gold}</span>
      </h2>
      <div className="led-line mx-auto mt-6 w-40" />
    </div>
  );
}

const VALORES = [
  ["예의", "Cortesia", "Respeito ao próximo, ao mestre e ao dojang."],
  ["염치", "Integridade", "Saber o que é certo e agir com honestidade."],
  ["인내", "Perseverança", "Persistir até alcançar cada objetivo."],
  ["극기", "Autocontrole", "Dominar o corpo e a mente, dentro e fora do tatame."],
  ["백절불굴", "Espírito Indomável", "Coragem para nunca desistir diante dos desafios."],
];

const AULAS = [
  [
    "Kids",
    "4 a 12 anos",
    "Coordenação, foco e disciplina de forma lúdica, formando cidadãos confiantes.",
  ],
  [
    "Teens & Adultos",
    "13+ anos",
    "Condicionamento, defesa pessoal e técnica tradicional do Taekwondo coreano.",
  ],
  [
    "Competição",
    "Equipe",
    "Treino de alto rendimento para campeonatos estaduais, nacionais e internacionais.",
  ],
];

function Index() {
  useReveal();
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const selectedGalleryImage = selectedGalleryIndex === null ? null : GALLERY[selectedGalleryIndex];
  const navigateGallery = (direction: number) =>
    setSelectedGalleryIndex((current) =>
      current === null ? null : (current + direction + GALLERY.length) % GALLERY.length,
    );
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative flex min-h-svh items-center pt-28 pb-16">
          <div className="bg-halo animate-glow pointer-events-none absolute -top-20 left-1/2 h-[600px] w-[900px] -translate-x-1/2" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div className="reveal">
              <p className="glass mb-6 inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em]">
                Dojang · Moo Duk Kwan · Varginha/MG
              </p>
              <h1 className="text-7xl md:text-8xl lg:text-9xl">
                Team <br />
                <span className="text-gold">Impérios</span>
                <br />
                Taekwondo
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Disciplina, respeito e superação. Taekwondo coreano para todas as idades.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gold px-7 py-3.5 font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105"
                >
                  Agende sua aula grátis
                </a>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sobre");
                  }}
                  className="glass rounded-full px-7 py-3.5 font-bold transition-transform hover:scale-105"
                >
                  Conheça o dojang
                </a>
              </div>
            </div>
            <div className="reveal relative">
              <div className="animate-float-slow glass rounded-[2rem] p-2">
                <img
                  src={wesleyImg}
                  alt="Mestre Wesley Lúcio no dojang Team Impérios"
                  width={960}
                  height={1216}
                  className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-[50%_8%]"
                />
              </div>
              <div className="dan-card glass-ink absolute -bottom-6 -left-4 rounded-2xl px-5 py-4 text-ink-foreground md:-left-10">
                <p className="font-display text-4xl text-gold">4º Dan</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Mestre Wesley Lúcio</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div className="reveal glass rounded-[2rem] p-2">
              <img
                src={logoImg}
                alt="Logo Team Impérios — Dojang Taekwondo Moo Duk Kwan"
                loading="lazy"
                className="w-full rounded-[1.6rem]"
              />
            </div>
            <div className="reveal">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-deep">
                Nossa história
              </p>
              <h2 className="text-5xl md:text-6xl">
                Muito além do <span className="text-gold">tatame</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  A Team Impérios nasceu com um propósito que vai muito além de ensinar técnicas de
                  luta: formar pessoas melhores por meio do Taekwondo.
                </p>
                <p>
                  Acreditamos que cada aluno carrega um potencial único, que pode ser desenvolvido
                  através da disciplina, do respeito, da perseverança e da dedicação.
                </p>
                <p>
                  Seguindo a tradição Moo Duk Kwan, preservamos os ensinamentos e a filosofia dessa
                  arte marcial milenar, unindo tradição, evolução técnica e espírito esportivo.
                </p>
                <p>
                  Nossa missão é transformar vidas, construir campeões dentro e fora do tatame e
                  ensinar valores que acompanham nossos alunos por toda a vida.
                </p>
                <p>
                  Mais do que uma equipe, somos uma família. Mais do que medalhas, buscamos
                  conquistas pessoais. Mais do que atletas, formamos cidadãos.
                </p>
                <p className="font-bold tracking-wide text-gold-deep">
                  TEAM IMPÉRIOS — FORMANDO CAMPEÕES, CONSTRUINDO CARÁTER E TRANSFORMANDO VIDAS!
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["4º", "Dan"],
                  ["+100", "Alunos"],
                  ["🏆", "Campeões"],
                ].map(([n, l]) => (
                  <div key={l} className="dan-stat glass rounded-2xl p-4 text-center">
                    <p className="font-display text-4xl text-gold">{n}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section id="valores" className="relative py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Os 5 princípios" title="Nosso" gold="Código" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {VALORES.map(([kr, t, d], i) => (
                <article
                  key={t}
                  className="reveal glass group rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="font-display text-3xl text-accent">{kr}</p>
                  <h3 className="mt-3 text-3xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AULAS */}
        <section id="aulas" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Turmas" title="Nossas" gold="Aulas" />
            <div className="grid gap-6 md:grid-cols-3">
              {AULAS.map(([t, a, d], i) => (
                <article
                  key={t}
                  className={`reveal relative overflow-hidden rounded-3xl p-8 ${i === 1 ? "glass-ink text-ink-foreground" : "glass"}`}
                >
                  <div className="bg-halo pointer-events-none absolute -right-16 -top-16 h-48 w-48" />
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">{a}</p>
                  <h3 className="mt-3 text-5xl">{t}</h3>
                  <p className={`mt-4 text-sm ${i === 1 ? "opacity-80" : "text-muted-foreground"}`}>
                    {d}
                  </p>
                  <a
                    href="#planos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("planos");
                    }}
                    className="mt-6 inline-block text-sm font-bold text-gold"
                  >
                    Ver horários →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PlansSection />

        {/* ESTRUTURA */}
        <section id="estrutura" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Nosso espaço" title="O" gold="Dojang" />
            <div className="reveal glass rounded-[2rem] p-2">
              <img
                src={dojangImg}
                alt="Dojang Team Impérios Taekwondo"
                loading="lazy"
                className="w-full rounded-[1.6rem] object-cover object-center"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Tatame profissional",
                "Sacos e bonecos de treino",
                "Vestiário e banho",
                "Recepção climatizada",
              ].map((f) => (
                <div
                  key={f}
                  className="reveal glass flex items-center gap-3 rounded-2xl px-5 py-4 font-semibold"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-gold" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MESTRES */}
        <section id="mestres" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Quem ensina" title="Nossos" gold="Mestres" />
            <div className="grid gap-6 md:grid-cols-2">
              {[
                [
                  "Mestre Wesley Lúcio",
                  "Faixa preta 4º Dan",
                  "Anos de experiência ensinando todas as idades, com participação em competições e seminários.",
                ],
                [
                  "Prof. Davy Emanuel",
                  "Faixa preta 1º Dan",
                  "Instrutor dedicado à formação técnica e ao desenvolvimento dos atletas da equipe.",
                ],
              ].map(([n, g, d]) => (
                <article key={n} className="reveal glass flex gap-5 rounded-3xl p-7">
                  <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-ink">
                    <img
                      src={n === "Mestre Wesley Lúcio" ? wesleyImg : davyImg}
                      alt={n}
                      loading="lazy"
                      className="h-full w-full object-cover object-[50%_15%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl">{n}</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-accent">{g}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="reveal glass-ink mt-6 rounded-3xl p-8 text-ink-foreground md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Impacto social
              </p>
              <h3 className="mt-2 text-4xl md:text-5xl">Projeto Despertar</h3>
              <p className="mt-3 max-w-2xl opacity-80">
                Aulas gratuitas de Taekwondo para crianças e adolescentes, usando a arte marcial
                como ferramenta de transformação social.
              </p>
              <div className="mt-8 grid gap-5 border-t border-white/15 pt-7 md:grid-cols-2">
                {[
                  ["Mestre Wesley Lúcio", wesleyImg],
                  ["Prof. Cristiano Lima", cristianoImg],
                ].map(([name, image]) => (
                  <div
                    key={name}
                    className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-4"
                  >
                    <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-ink">
                      <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="h-full w-full object-cover object-[50%_15%]"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                        Idealizador
                      </p>
                      <h3 className="mt-2 text-3xl">{name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Momentos do dojang" title="Nossa" gold="Galeria" />
            <details className="reveal glass group rounded-3xl p-5">
              <summary className="cursor-pointer list-none text-center font-display text-3xl text-gold group-open:mb-6">
                Ver fotos da equipe <span className="ml-2 text-foreground/50">⌄</span>
              </summary>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {GALLERY.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedGalleryIndex(index)}
                    aria-label={`Ampliar foto ${index + 1} da Team Impérios`}
                    className="group overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    <img
                      src={image}
                      alt={`Momento da Team Impérios ${index + 1}`}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </details>
            <Dialog
              open={selectedGalleryImage !== null}
              onOpenChange={(open) => !open && setSelectedGalleryIndex(null)}
            >
              <DialogContent
                className="gallery-lightbox max-h-[94vh] w-[calc(100%-2rem)] max-w-6xl overflow-hidden border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-2xl sm:p-4"
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    navigateGallery(-1);
                  }
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    navigateGallery(1);
                  }
                }}
              >
                <DialogTitle className="sr-only">Foto ampliada da Team Impérios</DialogTitle>
                {selectedGalleryImage && (
                  <div className="relative flex min-h-[50vh] items-center justify-center">
                    <img
                      src={selectedGalleryImage}
                      alt={`Foto ${selectedGalleryIndex! + 1} de ${GALLERY.length} da Team Impérios Taekwondo`}
                      className="max-h-[82vh] w-full rounded-xl object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => navigateGallery(-1)}
                      aria-label="Foto anterior"
                      className="gallery-nav-button left-3"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateGallery(1)}
                      aria-label="Próxima foto"
                      className="gallery-nav-button right-3"
                    >
                      <ChevronRight />
                    </button>
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md">
                      {selectedGalleryIndex! + 1} / {GALLERY.length}
                    </span>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section id="documentos" className="py-24">
          <div className="mx-auto max-w-4xl px-5">
            <SectionTitle kicker="Material de apoio" title="Nossos" gold="Documentos" />
            <article className="reveal glass flex flex-col items-start gap-6 rounded-3xl p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gold text-primary-foreground shadow-gold">
                  <BookOpen className="size-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-4xl">Apostila de Taekwondo</h3>
                  <p className="mt-2 text-muted-foreground">
                    Material de apoio da Team Impérios para estudo e prática do Taekwondo.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-wrap gap-3 md:w-auto">
                <a
                  href={APOSTILA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105 md:flex-none"
                >
                  Visualizar <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={APOSTILA_URL}
                  download="Apostila-Taekwondo.pdf"
                  className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:scale-105 md:flex-none"
                >
                  Baixar <Download className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="min-h-[calc(100svh-6rem)] scroll-mt-28 py-24">
          <div className="mx-auto max-w-4xl px-5">
            <div className="reveal glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16">
              <div className="bg-halo animate-glow pointer-events-none absolute inset-0" />
              <div className="relative">
                <h2 className="text-6xl md:text-8xl">
                  Comece sua <span className="text-gold">jornada</span>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                  Agende uma aula experimental gratuita. Fale com a gente pelo WhatsApp.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105"
                >
                  (35) 99195-0352
                </a>
                <p className="mt-6 text-sm font-semibold text-muted-foreground">
                  Varginha · Minas Gerais
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Team Impérios Taekwondo · Varginha/MG
      </footer>
    </div>
  );
}
