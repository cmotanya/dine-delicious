// app/actions/currency.ts
"use server"; // Mark this function as a server action

export const formatCurrency = async (price: number): Promise<string> => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 2,
  }).format(price);
};
