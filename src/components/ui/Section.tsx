import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const sectionVaraints =
  "py-12 px-8 sm:pt-24 grid justify-center";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} {...props} className={cn(sectionVaraints, className)}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
