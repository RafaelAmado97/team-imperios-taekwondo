import { describe, expect, it } from "vitest";
import { CLASS_PRICES, FAMILY_PLANS, WEEKLY_PLANS, TAEKWONDO_SCHEDULES } from "@/lib/plans";

describe("Academy flyer offers", () => {
  it.each([[1, 80], [2, 100], [3, 140], [5, 200]])("charges %i weekly classes at R$%i monthly", (times, price) => {
    expect(WEEKLY_PLANS.find(plan => plan.times === times)?.price).toBe(price);
  });
  it.each([[2, 120], [3, 100]])("charges a %i-person family R$%i per person monthly", (people, price) => {
    expect(FAMILY_PLANS.find(plan => plan.people === people)?.pricePerPerson).toBe(price);
  });
  it("charges R$140 for monthly Taekwondo", () => expect(CLASS_PRICES.taekwondo).toBe(140));
  it("charges R$100 for monthly boxing", () => expect(CLASS_PRICES.boxing).toBe(100));
  it("charges R$35 per single class", () => expect(CLASS_PRICES.single).toBe(35));
  it("offers Monday Wednesday Friday classes at 6–7, 19–20 and 20–21", () => {
    expect(TAEKWONDO_SCHEDULES[0]).toEqual({ days: "Segunda, quarta e sexta", hours: ["6h às 7h", "19h às 20h", "20h às 21h"] });
  });
  it("offers Tuesday Thursday 19–20 and Saturday at 14", () => {
    expect(TAEKWONDO_SCHEDULES[1]).toEqual({ days: "Terça, quinta e sábado", hours: ["19h às 20h · terça e quinta", "14h · sábado"] });
  });
});