import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export function ChartSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
    >
      <Skeleton className="h-6 w-40 mb-6" />
      <div className="h-64 flex items-end justify-between gap-2 px-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            style={{ originY: 1 }}
            className="flex-1"
          >
            <Skeleton
              className="w-full rounded-t"
              style={{ height: `${Math.random() * 60 + 20}%` }}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between mt-4 px-4">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <Skeleton key={day} className="h-3 w-8" />
        ))}
      </div>
    </motion.div>
  );
}
