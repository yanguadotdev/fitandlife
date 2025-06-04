import { $ } from '@/lib/dom-selector'

export function initHeroAnimation() {
  const textCrossed = $('#textCrossed') as HTMLElement
  const textCrossedSpan = $('div', textCrossed)
  const textPerm = $('#textPerm')
  textCrossed?.classList.add('before:scale-x-100')
  textCrossedSpan?.classList.remove('translate-y-full')
  textPerm?.classList.remove('translate-y-full')
}