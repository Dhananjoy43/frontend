import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH2({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={cn(
                "scroll-m-20 pb-2 text-2xl md:text-4xl font-semibold tracking-tight first:mt-0",
                className
            )}
        >
            {children}
        </h2>
    );
}
