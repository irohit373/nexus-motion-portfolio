import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface CardSkeletonProps {
  hasImage?: boolean;
  lines?: number;
}

const shimmer = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function CardSkeleton({ hasImage = true, lines = 3 }: CardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden"
    >
      {hasImage && (
        <motion.div variants={shimmer} initial="initial" animate="animate">
          <Skeleton className="h-48 w-full rounded-none" />
        </motion.div>
      )}
      <div className="p-6 space-y-4">
        <motion.div variants={shimmer} initial="initial" animate="animate">
          <Skeleton className="h-6 w-3/4" />
        </motion.div>
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            variants={shimmer}
            initial="initial"
            animate="animate"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Skeleton className={`h-4 ${i === lines - 1 ? "w-1/2" : "w-full"}`} />
          </motion.div>
        ))}
        <div className="flex gap-2 pt-2">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={shimmer} initial="initial" animate="animate">
              <Skeleton className="h-6 w-16 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
