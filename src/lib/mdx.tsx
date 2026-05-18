import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type MdxContentProps = ComponentPropsWithoutRef<"div">;

export function MdxContent({ className, ...props }: MdxContentProps) {
  return <div className={cn("prose max-w-none prose-slate", className)} {...props} />;
}