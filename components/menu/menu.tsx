"use client";

import { MenuSkeleton } from "@/components/menu/menu-skeleton";
import { FormattedMenuItem, MenuItem } from "@/lib/types";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "@/lib/utils";
import { grotesque } from "../font";
import { Badge } from "../ui/badge";

export default function Menu() {
  const [menu, setMenu] = useState<FormattedMenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/api");
        const data = (await response.json()) as MenuItem[];

        // Check if data exists and has the menu property
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid data format received from API");
        }

        // Initial simple price formatting
        const InitialPriceFormat = data.map((item) => ({
          id: item.id,
          name: item.name,
          formattedPrice: "KES " + item.price.toFixed(2),
        }));

        setMenu(InitialPriceFormat);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load menu");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, [menu]);

  if (isLoading) {
    return <MenuSkeleton />;
  }

  if (error) {
    return (
      <Alert>
        <AlertCircle className="size-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg md:max-w-2xl",
        grotesque.className,
      )}
    >
      <div className="border-b border-gray-100 p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Our Menu</h2>
        <p className="mt-2 text-gray-500">Discover our delicious offerings</p>
      </div>

      <div className="">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
              <TableHead className="text-center font-bold text-gray-900">
                #
              </TableHead>
              <TableHead className="font-bold text-gray-900">Item</TableHead>
              <TableHead className="text-center font-bold text-gray-900">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menu.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="py-8 text-center">
                  <div className="flex flex-col items-center text-gray-500">
                    <svg
                      className="mb-4 h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      No menu items available
                    </p>
                    <p className="mt-1 text-sm">Check back later for updates</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              menu.map((item) => (
                <TableRow
                  key={item.id}
                  className={cn(
                    "transition-colors hover:bg-gray-50",
                    item.id % 2 === 0 ? "bg-muted" : "",
                  )}
                >
                  <TableCell className="text-center font-medium text-gray-700">
                    <Badge variant="outline" className="px-2 py-1">
                      {item.id}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-2 text-left">
                    <span className="whitespace-nowrap font-semibold text-gray-900">
                      {item.formattedPrice}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 p-4">
        <p className="text-center text-sm text-gray-500">
          Prices are subject to change. All items include applicable taxes.
        </p>
      </div>
    </div>
  );
}
