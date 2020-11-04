import { Middleware } from '@styli/core'
import { isPseudoKey } from '@styli/utils'

const pseudoMap: any = {
  a: 'active',
  c: 'checked',
  d: 'disabled',
  e: 'empty',
  f: 'focus',
  h: 'hover',
  l: 'link',
  v: 'visited',
}

export default (): Middleware => {
  return (plugin, atom, sheet) => {
    const { propKey } = atom
    const propIsPseudo = isPseudoKey(propKey)
    const [key, pseType] = propIsPseudo ? propKey.split('_') : [propKey]

    if (!plugin.isMatch(key)) return atom

    let newAtom = plugin.onVisitProp({ ...atom, propKey: key }, sheet)

    if (propIsPseudo) {
      newAtom.propKey = propKey
      newAtom.type = 'prefix'
      newAtom.style = {
        [':' + pseudoMap[pseType]]: newAtom.style,
      }
    }

    return newAtom
  }
}
