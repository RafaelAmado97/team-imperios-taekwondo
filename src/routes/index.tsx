import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-kick.jpg";
import placa from "@/assets/placa.jpg.asset.json";
import dojang from "@/assets/dojang.jpg.asset.json";

const TITLE = "Team Impérios Taekwondo | Dojang Moo Duk Kwan em Varginha/MG";
const DESC =
  "Aulas de Taekwondo coreano em Varginha/MG para crianças, jovens e adultos. Disciplina, respeito e superação com Mestre Wesley Lúcio, 4º Dan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "taekwondo Varginha, artes marciais Varginha, Team Impérios, Moo Duk Kwan, aula de taekwondo infantil" },
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
          address: { "@type": "PostalAddress", addressLocality: "Varginha", addressRegion: "MG", addressCountry: "BR" },
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
  ["estrutura", "Estrutura"],
  ["mestres", "Mestres"],
  ["contato", "Contato"],
] as const;

const IG = "https://www.instagram.com/teamimperios/";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "";
      for (const [id] of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"}`}
        aria-label="Navegação principal"
      >
        <a href="#inicio" onClick={go("inicio")} className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink shadow-gold">
            <span className="font-display text-lg text-gold">TI</span>
          </span>
          <span className="font-display text-xl tracking-wider md:text-2xl">
            Team <span className="text-gold">Impérios</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={go(id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === id ? "bg-ink text-ink-foreground" : "text-foreground/75 hover:text-foreground"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href={IG} target="_blank" rel="noreferrer" className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105 md:inline-flex">
          Aula experimental
        </a>
        <button aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)} className="glass grid h-10 w-10 place-items-center rounded-xl md:hidden">
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      <div className={`glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-500 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 border-0 opacity-0"}`}>
        <ul className="flex flex-col p-3">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={go(id)} className="block rounded-xl px-4 py-3 font-semibold hover:bg-muted">
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
  ["Kids", "4 a 12 anos", "Coordenação, foco e disciplina de forma lúdica, formando cidadãos confiantes."],
  ["Teens & Adultos", "13+ anos", "Condicionamento, defesa pessoal e técnica tradicional do Taekwondo coreano."],
  ["Competição", "Equipe", "Treino de alto rendimento para campeonatos estaduais, nacionais e internacionais."],
];

function Index() {
  useReveal();
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
              <p className="mt-6 max-w-md text-lg text-muted-foreground">Disciplina, respeito e superação. Taekwondo coreano para todas as idades.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={IG} target="_blank" rel="noreferrer" className="rounded-full bg-gold px-7 py-3.5 font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105">
                  Agende sua aula grátis
                </a>
                <a href="#sobre" className="glass rounded-full px-7 py-3.5 font-bold transition-transform hover:scale-105">
                  Conheça o dojang
                </a>
              </div>
            </div>
            <div className="reveal relative">
              <div className="animate-float-slow glass rounded-[2rem] p-2">
                <img src={heroImg} alt="Atleta faixa preta executando chute lateral no dojang" width={1600} height={1008} className="aspect-[4/5] w-full rounded-[1.6rem] object-cover md:aspect-[4/5]" />
              </div>
              <div className="glass-ink absolute -bottom-6 -left-4 rounded-2xl px-5 py-4 text-ink-foreground md:-left-10">
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
              <img src={placa.url} alt="Placa Team Impérios — Dojang Taekwondo Moo Duk Kwan" loading="lazy" className="w-full rounded-[1.6rem]" />
            </div>
            <div className="reveal">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-deep">Nossa história</p>
              <h2 className="text-5xl md:text-6xl">
                Muito além do <span className="text-gold">tatame</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                A Team Impérios forma atletas e cidadãos mais conscientes através do Taekwondo — arte marcial milenar coreana e esporte olímpico desde Sydney 2000.
              </p>
              <p className="mt-4 text-muted-foreground">
                Seguimos a linhagem tradicional Moo Duk Kwan, unindo técnica, filosofia e competição em um ambiente acolhedor para crianças, jovens e adultos.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[["4º", "Dan"], ["+100", "Alunos"], ["🏆", "Campeões"]].map(([n, l]) => (
                  <div key={l} className="glass rounded-2xl p-4 text-center">
                    <p className="font-display text-4xl text-gold">{n}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</p>
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
                <article key={t} className="reveal glass group rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-2" style={{ transitionDelay: `${i * 80}ms` }}>
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
                <article key={t} className={`reveal relative overflow-hidden rounded-3xl p-8 ${i === 1 ? "glass-ink text-ink-foreground" : "glass"}`}>
                  <div className="bg-halo pointer-events-none absolute -right-16 -top-16 h-48 w-48" />
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">{a}</p>
                  <h3 className="mt-3 text-5xl">{t}</h3>
                  <p className={`mt-4 text-sm ${i === 1 ? "opacity-80" : "text-muted-foreground"}`}>{d}</p>
                  <a href={IG} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-bold text-gold">
                    Ver horários →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ESTRUTURA */}
        <section id="estrutura" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle kicker="Nosso espaço" title="O" gold="Dojang" />
            <div className="reveal glass rounded-[2rem] p-2">
              <img src={dojang.url} alt="Estrutura do dojang: tatame, recepção, vestiário e banho" loading="lazy" className="w-full rounded-[1.6rem]" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Tatame profissional", "Sacos e bonecos de treino", "Vestiário e banho", "Recepção climatizada"].map((f) => (
                <div key={f} className="reveal glass flex items-center gap-3 rounded-2xl px-5 py-4 font-semibold">
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
                ["Mestre Wesley Lúcio", "Faixa preta 4º Dan", "Anos de experiência ensinando todas as idades, com participação em competições e seminários."],
                ["Prof. Cristiano Lima", "Faixa preta 2º Dan", "Instrutor dedicado à formação técnica e ao desenvolvimento dos atletas da equipe."],
              ].map(([n, g, d]) => (
                <article key={n} className="reveal glass flex gap-5 rounded-3xl p-7">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-ink">
                    <span className="font-display text-3xl text-gold">{n.split(" ").slice(-1)[0][0]}</span>
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
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Impacto social</p>
              <h3 className="mt-2 text-4xl md:text-5xl">Projeto Despertar</h3>
              <p className="mt-3 max-w-2xl opacity-80">
                Aulas gratuitas de Taekwondo para crianças e adolescentes, usando a arte marcial como ferramenta de transformação social.
              </p>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-24">
          <div className="mx-auto max-w-4xl px-5">
            <div className="reveal glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16">
              <div className="bg-halo animate-glow pointer-events-none absolute inset-0" />
              <div className="relative">
                <h2 className="text-6xl md:text-8xl">
                  Comece sua <span className="text-gold">jornada</span>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Agende uma aula experimental gratuita. Fale com a gente pelo Instagram.</p>
                <a href={IG} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 font-bold text-primary-foreground shadow-gold transition-transform hover:scale-105">
                  @teamimperios
                </a>
                <p className="mt-6 text-sm font-semibold text-muted-foreground">Varginha · Minas Gerais</p>
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
