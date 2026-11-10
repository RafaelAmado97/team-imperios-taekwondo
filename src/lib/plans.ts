export const WEEKLY_PLANS = [
  { times: 1, price: 80 },
  { times: 2, price: 100 },
  { times: 3, price: 140 },
  { times: 5, price: 200 },
] as const;

export const FAMILY_PLANS = [
  { people: 2, pricePerPerson: 120 },
  { people: 3, pricePerPerson: 100 },
] as const;

export const CLASS_PRICES = { taekwondo: 140, boxing: 100, single: 35 };

export const TAEKWONDO_SCHEDULES = [
  { days: "Segunda, quarta e sexta", hours: ["6h às 7h", "19h às 20h", "20h às 21h"] },
  { days: "Terça, quinta e sábado", hours: ["19h às 20h · terça e quinta", "14h · sábado"] },
] as const;

export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(price);
}