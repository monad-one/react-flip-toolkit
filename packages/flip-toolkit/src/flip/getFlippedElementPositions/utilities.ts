import { toArray, assign } from '../../utilities'
import * as constants from '../../constants'
import { BoundingClientRect } from './types'

export const addTupleToObject = (acc: {}, curr: [any, any]) =>
  assign(acc, { [curr[0]]: curr[1] })

export const getAllElements = (
  element?: HTMLElement,
  portalKey?: string
): HTMLElement[] => {
  if (portalKey) {
    return toArray(
      document.querySelectorAll(`[${constants.DATA_PORTAL_KEY}="${portalKey}"]`)
    )
  } else {
    return toArray(element!.querySelectorAll(`[${constants.DATA_FLIP_ID}]`))
  }
}
export const getRects = (flippedElements: HTMLElement[]) => {
  return flippedElements.map((child: HTMLElement): [
    HTMLElement,
    BoundingClientRect
  ] => [child, child.getBoundingClientRect()])
}
