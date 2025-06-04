type ObserverOptions = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

type Callback = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void

const defaultOptions: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}


/**
 * Observe when an element enters to the viewport and run a callback
 * @param element - Element to observe
 * @param callback - Function to execute when the element is visible
 * @param options - Options from IntersectionObserver.
 * @returns Function to stop the watching.
 */
export function observeWhenVisible(
  element: Element,
  callback: Callback,
  options?: ObserverOptions
): () => void {
  const mergedOptions = { ...defaultOptions, ...options }
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry, observerInstance)
      }
    })
  }, options)

  observer.observe(element)

  return () => {
    observer.unobserve(element)
    observer.disconnect()
  }
}
