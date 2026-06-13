import Image from "next/image"

import faberLogoBlack from "@/faber_assets/faber_logo_black.png"
import faberLogoWhite from "@/faber_assets/faber_logo_white.png"
import { cn } from "@/lib/utils"

type FaberLogoProps = {
  className?: string
  tone?: "auto" | "dark" | "light"
}

export function FaberLogo({ className, tone = "auto" }: FaberLogoProps) {
  if (tone !== "auto") {
    return (
      <span className={cn("relative inline-flex size-6 shrink-0", className)}>
        <Image
          src={tone === "dark" ? faberLogoBlack : faberLogoWhite}
          alt=""
          fill
          sizes="32px"
          className="object-contain"
          priority
        />
      </span>
    )
  }

  return (
    <span className={cn("relative inline-flex size-6 shrink-0", className)}>
      <Image
        src={faberLogoBlack}
        alt=""
        fill
        sizes="32px"
        className="object-contain dark:hidden"
        priority
      />
      <Image
        src={faberLogoWhite}
        alt=""
        fill
        sizes="32px"
        className="hidden object-contain dark:block"
        priority
      />
    </span>
  )
}
