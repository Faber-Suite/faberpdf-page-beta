import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribeToMobileChange,
    getIsMobile,
    () => false
  )
}

function getIsMobile() {
  return window.innerWidth < MOBILE_BREAKPOINT
}

function subscribeToMobileChange(onStoreChange: () => void) {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  mql.addEventListener("change", onStoreChange)

  return () => mql.removeEventListener("change", onStoreChange)
}
