import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface CumulativeTransitionDelayProps {
  items: HTMLElement[],
  delayPattern: number,
  start?: number,
  bottomToTop?: boolean,
  sameForAll?: boolean,
  duration?: number
}
export function applyCumulativeTransitionDelay({ items, delayPattern, start = 0, bottomToTop = false, sameForAll = false, duration }: CumulativeTransitionDelayProps) {
  items.forEach((item, index) => {
    const position = bottomToTop ? items.length - index : index + 1;
    const delay = sameForAll ? delayPattern : position * delayPattern;
    item.style.transitionDelay = `${delay + start}s`;
    item.style.transitionDuration = `${duration}s`
  });
}


export function removeInlineStyles(
  items: HTMLElement[],
  ...properties: (keyof CSSStyleDeclaration)[]
) {
  items.forEach((item) => {
    item.style.transitionDelay = '0s'
    properties.forEach((property) => {
      ; (item.style as any)[property] = ''
    })
  })
}