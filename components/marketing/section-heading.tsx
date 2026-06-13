import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  align?: "start" | "center"
  description: string
  eyebrow?: string
  title: string
}

export function SectionHeading({
  align = "start",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center"
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-medium tracking-normal text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-pretty text-muted-foreground sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  )
}
