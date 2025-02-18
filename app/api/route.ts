import { MenuItem } from "@/lib/types";
import { NextResponse } from "next/server";

// Pre-compute categorized menu data

const menuData: MenuItem[] = [
  // Breakfast
  { id: 1, name: "Avocado Toast", price: 8.5, category: "Breakfast" },
  {
    id: 2,
    name: "Pancakes with Maple Syrup",
    price: 9.0,
    category: "Breakfast",
  },
  { id: 3, name: "Eggs Benedict", price: 12.0, category: "Breakfast" },
  { id: 4, name: "French Toast", price: 10.5, category: "Breakfast" },
  { id: 5, name: "Vegetable Omelette", price: 11.0, category: "Breakfast" },
  { id: 6, name: "Breakfast Burrito", price: 9.5, category: "Breakfast" },
  {
    id: 7,
    name: "Granola with Yogurt and Fresh Fruit",
    price: 7.5,
    category: "Breakfast",
  },
  { id: 8, name: "Bagel with Cream Cheese", price: 6.0, category: "Breakfast" },
  {
    id: 9,
    name: "Croissant (Plain or Filled)",
    price: 5.5,
    category: "Breakfast",
  },
  {
    id: 10,
    name: "Full English Breakfast",
    price: 15.0,
    category: "Breakfast",
  },

  // Sandwiches & Wraps
  {
    id: 11,
    name: "Grilled Cheese Sandwich",
    price: 8.0,
    category: "Sandwiches & Wraps",
  },
  {
    id: 12,
    name: "Club Sandwich",
    price: 10.5,
    category: "Sandwiches & Wraps",
  },
  {
    id: 13,
    name: "Turkey and Avocado Wrap",
    price: 9.5,
    category: "Sandwiches & Wraps",
  },
  {
    id: 14,
    name: "Chicken Caesar Wrap",
    price: 10.0,
    category: "Sandwiches & Wraps",
  },
  { id: 15, name: "Veggie Panini", price: 9.0, category: "Sandwiches & Wraps" },
  { id: 16, name: "BLT Sandwich", price: 8.5, category: "Sandwiches & Wraps" },
  { id: 17, name: "Tuna Melt", price: 9.5, category: "Sandwiches & Wraps" },
  {
    id: 18,
    name: "Caprese Sandwich",
    price: 9.0,
    category: "Sandwiches & Wraps",
  },
  {
    id: 19,
    name: "Pulled Pork Sandwich",
    price: 11.0,
    category: "Sandwiches & Wraps",
  },
  { id: 20, name: "Falafel Wrap", price: 8.5, category: "Sandwiches & Wraps" },

  // Salads
  { id: 21, name: "Caesar Salad", price: 10.0, category: "Salads" },
  { id: 22, name: "Greek Salad", price: 9.5, category: "Salads" },
  { id: 23, name: "Cobb Salad", price: 12.0, category: "Salads" },
  { id: 24, name: "Quinoa Salad", price: 11.5, category: "Salads" },
  { id: 25, name: "Caprese Salad", price: 9.0, category: "Salads" },
  {
    id: 26,
    name: "Spinach and Strawberry Salad",
    price: 10.0,
    category: "Salads",
  },
  { id: 27, name: "Asian Chicken Salad", price: 11.0, category: "Salads" },
  { id: 28, name: "Waldorf Salad", price: 9.5, category: "Salads" },
  { id: 29, name: "Nicoise Salad", price: 12.5, category: "Salads" },
  { id: 30, name: "Kale Salad", price: 10.0, category: "Salads" },

  // Main Courses
  {
    id: 31,
    name: "Spaghetti Bolognese",
    price: 14.0,
    category: "Main Courses",
  },
  { id: 32, name: "Margherita Pizza", price: 12.0, category: "Main Courses" },
  {
    id: 33,
    name: "Grilled Salmon with Vegetables",
    price: 18.0,
    category: "Main Courses",
  },
  {
    id: 34,
    name: "Chicken Alfredo Pasta",
    price: 15.0,
    category: "Main Courses",
  },
  {
    id: 35,
    name: "Beef Burger with Fries",
    price: 13.5,
    category: "Main Courses",
  },
  { id: 36, name: "Fish and Chips", price: 16.0, category: "Main Courses" },
  { id: 37, name: "Vegetable Stir-Fry", price: 12.5, category: "Main Courses" },
  { id: 38, name: "BBQ Ribs", price: 20.0, category: "Main Courses" },
  { id: 39, name: "Mushroom Risotto", price: 14.5, category: "Main Courses" },
  {
    id: 40,
    name: "Steak with Mashed Potatoes",
    price: 22.0,
    category: "Main Courses",
  },

  // Desserts
  { id: 41, name: "Cheesecake", price: 7.0, category: "Desserts" },
  { id: 42, name: "Chocolate Lava Cake", price: 8.5, category: "Desserts" },
  { id: 43, name: "Tiramisu", price: 7.5, category: "Desserts" },
  {
    id: 44,
    name: "Apple Pie with Ice Cream",
    price: 6.5,
    category: "Desserts",
  },
  { id: 45, name: "Brownie Sundae", price: 8.0, category: "Desserts" },
  { id: 46, name: "Creme Brulee", price: 7.5, category: "Desserts" },
  { id: 47, name: "Fruit Tart", price: 6.0, category: "Desserts" },
  { id: 48, name: "Panna Cotta", price: 7.0, category: "Desserts" },
  { id: 49, name: "Red Velvet Cake", price: 8.0, category: "Desserts" },
  { id: 50, name: "Lemon Meringue Pie", price: 7.5, category: "Desserts" },
];

export const runtime = "edge"; // Use edge runtime for faster response

export async function GET() {
  return NextResponse.json(menuData, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
