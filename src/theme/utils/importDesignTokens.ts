import get from 'lodash/get'
import {mapValues} from 'lodash'

const INTERPOLATED_VALUE = /^{.*}$/g
const PARENTHESES = /[{}]/g

export default function importDesignTokens<T extends any> (
  theme: object,
  deps: object = {}
): T {
  const processNode = (node: any): any => {
    const isLeaf = node?.$value && node?.$type
    if (isLeaf) {
      let value = node.$value
      if (value?.match?.(INTERPOLATED_VALUE)) {
        const path = value.replace(PARENTHESES, '').split('.')
        const resolvedValue = get({...deps, ...theme}, path)
        value = resolvedValue.$value ?
          processNode(resolvedValue) :
          resolvedValue
      }
      if (node.$type === 'dimension' && typeof value === 'string') {
        return parseInt(value.split('px')[0])
      }
      return value
    }
    return mapValues(node, (e) => {
      return processNode(e)
    })
  }
  return processNode(theme)
}
