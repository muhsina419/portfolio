import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedProgress = React.forwardRef(({ className, value = 0, ...props }, ref) => {
  const progressRef = React.useRef(null);
  const isInView = useInView(progressRef, { once: false });
  const [animatedValue, setAnimatedValue] = React.useState(0);

  // Animate from 0 to actual value
  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setAnimatedValue(value);
      }, 100); // small delay to trigger animation
      return () => clearTimeout(timeout);
    }
  }, [isInView, value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <motion.div
        ref={progressRef}
        initial={{ width: "0%" }}
        animate={{ width: `${animatedValue}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: "linear-gradient(90deg, rgba(40, 141, 181, 1) 0%, #FF6F91 100%)",
        }}
      />
    </ProgressPrimitive.Root>
  );
});

AnimatedProgress.displayName = "AnimatedProgress";
export { AnimatedProgress as Progress };
