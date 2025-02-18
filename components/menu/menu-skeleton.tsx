import { grotesque } from "@/components/font";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function MenuSkeleton() {
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

      <Table>
        <TableHeader>
          <TableRow className="bg-muted">
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
          {Array.from({ length: 30 }).map((_, index) => (
            <TableRow
              key={index}
              className={cn(index % 2 === 0 ? "bg-muted" : "")}
            >
              <TableCell>
                <Skeleton className="h-4 w-6" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-48" />
              </TableCell>
              <TableCell>
                <Skeleton className="mx-auto h-4 w-16" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
