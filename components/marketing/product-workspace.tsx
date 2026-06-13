import Image from "next/image"

import screenshotEditor from "@/faber_assets/opened_pdf.png"
import screenshotWelcome from "@/faber_assets/welcome_page.png"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ProductWorkspaceProps = {
  className?: string
  compact?: boolean
  labels?: {
    editorAlt: string
    editorBadge: string
    welcomeAlt: string
    welcomeBadge: string
  }
  variant?: "editor" | "welcome"
}

export function ProductWorkspace({
  className,
  compact,
  labels = {
    editorAlt: "FaberPDF editor with an open PDF",
    editorBadge: "PDF editor",
    welcomeAlt: "FaberPDF welcome screen",
    welcomeBadge: "Desktop app",
  },
  variant = "editor",
}: ProductWorkspaceProps) {
  const image = variant === "editor" ? screenshotEditor : screenshotWelcome
  const label = variant === "editor" ? labels.editorAlt : labels.welcomeAlt

  return (
    <figure
      aria-label={label}
      className={cn(
        "group overflow-hidden rounded-xl border bg-card shadow-2xl shadow-foreground/10",
        compact ? "rounded-xl" : "rounded-2xl",
        className
      )}
    >
      <div className="flex items-center justify-between border-b bg-muted/30 px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-muted-foreground/35" />
          <span className="size-2.5 rounded-full bg-muted-foreground/25" />
          <span className="size-2.5 rounded-full bg-muted-foreground/20" />
        </div>
        <Badge variant="secondary">
          {variant === "editor" ? labels.editorBadge : labels.welcomeBadge}
        </Badge>
      </div>
      <div className="bg-foreground">
        <Image
          src={image}
          alt={label}
          sizes={
            compact
              ? "(max-width: 768px) 92vw, 560px"
              : "(max-width: 768px) 92vw, 960px"
          }
          priority={variant === "editor"}
          className="h-auto w-full object-cover"
        />
      </div>
    </figure>
  )
}
