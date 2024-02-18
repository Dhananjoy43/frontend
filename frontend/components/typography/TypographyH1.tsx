import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH1({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h1
            className={cn(
                "text-2xl font-extrabold tracking-tight md:text-6xl",
                className
            )}
        >
            {children}
        </h1>
    );
}
