import { ArrowUpRight, CalendarDays, Clock3, Users, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLASS_PRICES, FAMILY_PLANS, WEEKLY_PLANS, TAEKWONDO_SCHEDULES, formatPrice } from "@/lib/plans";

const IG = "https://www.instagram.com/teamimperios/";

export function PlansSection() {
  return (
    <section id="planos" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-deep">Invista em você</p>
          <h2 className="text-5xl md:text-7xl">Planos e <span className="text-gold">Valores</span></h2>
          <div className="led-line mx-auto mt-6 w-40" />
        </div>

        <div className="mb-5 flex items-center gap-3">
          <CalendarDays className="size-5 text-gold-deep" aria-hidden="true" />
          <h3 className="text-3xl">Planos mensais</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WEEKLY_PLANS.map(({ times, price }) => (
            <article key={times} className={`reveal flex flex-col rounded-lg p-6 ${times === 3 ? "glass-ink text-ink-foreground" : "glass"}`}>
              <h3 className="text-3xl">{times}x na semana</h3>
              <p className="mt-6 font-display text-5xl text-gold">{formatPrice(price)}</p>
              <p className="mt-2 text-sm opacity-75">por mês</p>
              <Button asChild className="mt-6 w-full bg-gold text-primary-foreground">
                <a href={IG} target="_blank" rel="noreferrer">Escolher plano <ArrowUpRight /></a>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="reveal border-t border-border pt-6">
            <div className="mb-5 flex items-center gap-3"><Users className="size-5 text-gold-deep" /><h3 className="text-3xl">Plano familiar</h3></div>
            <div className="grid grid-cols-2 gap-5">
              {FAMILY_PLANS.map(({ people, pricePerPerson }) => (
                <div key={people}>
                  <p className="text-sm font-semibold">{people} pessoas</p>
                  <p className="mt-2 font-display text-4xl text-gold">{formatPrice(pricePerPerson)}</p>
                  <p className="mt-2 text-xs text-muted-foreground">mensal por pessoa</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal border-t border-border pt-6">
            <div className="mb-5 flex items-center gap-3"><Ticket className="size-5 text-gold-deep" /><h3 className="text-3xl">Aula avulsa</h3></div>
            <p className="font-display text-4xl text-gold">{formatPrice(CLASS_PRICES.single)}</p>
            <p className="mt-2 text-xs text-muted-foreground">por aula</p>
          </div>
        </div>

        <div className="mt-14 mb-5 flex items-center gap-3"><Clock3 className="size-5 text-gold-deep" /><h3 className="text-3xl">Modalidades e horários</h3></div>
        <div className="grid gap-4 md:grid-cols-3">
          {TAEKWONDO_SCHEDULES.map(({ days, hours }) => (
            <article key={days} className="reveal glass flex flex-col rounded-lg p-6">
              <h3 className="text-3xl">Taekwondo</h3>
              <p className="mt-3 text-sm font-bold text-accent">{days}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{hours.map(hour => <li key={hour}>{hour}</li>)}</ul>
              <p className="mt-auto pt-6"><span className="font-display text-4xl text-gold">{formatPrice(CLASS_PRICES.taekwondo)}</span><span className="ml-2 text-xs text-muted-foreground">mensal</span></p>
            </article>
          ))}
          <article className="reveal glass flex flex-col rounded-lg p-6">
            <h3 className="text-3xl">Boxe</h3>
            <p className="mt-3 text-sm font-bold text-accent">Terça e quinta</p>
            <Button asChild variant="link" className="mt-3 h-auto justify-start px-0 text-gold-deep">
              <a href={IG} target="_blank" rel="noreferrer">Consultar horários <ArrowUpRight /></a>
            </Button>
            <p className="mt-auto pt-6"><span className="font-display text-4xl text-gold">{formatPrice(CLASS_PRICES.boxing)}</span><span className="ml-2 text-xs text-muted-foreground">mensal</span></p>
          </article>
        </div>
      </div>
    </section>
  );
}