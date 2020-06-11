import { Mark } from 'tiptap'
import { toggleMark, markInputRule, markPasteRule } from 'tiptap-commands'

export default class Tailwind extends Mark {

  constructor(className, parseDom = []) {
    super()
    this.className = className
    this.parseDom = parseDom
  }

  get name() {
    return this.className
  }

  get schema() {
    return {
      parseDOM: [
        ...this.parseDom,
        {
          tag: 'span',
          getAttrs: node => node.className === this.className
        },
      ],
      toDOM: () => ['span', { class: this.className }, 0],
    }
  }

  commands({ type }) {
    return () => toggleMark(type)
  }

  inputRules({ type }) {
    return [
      markInputRule(/~([^~]+)~$/, type),
    ]
  }

  pasteRules({ type }) {
    return [
      markPasteRule(/~([^~]+)~/g, type),
    ]
  }

}
