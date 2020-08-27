const closeToOpenMap: {
  [key: string]: string
} = {
  '}': '{',
  ')': '(',
  ']': '[',
}

export function validBraces(braces: string): boolean {
  let opened = ''

  for (let i: number = 0; i < braces.length; i++) {
    if (['(', '[', '{'].includes(braces[i])) {
      opened += braces[i]
    } else if (opened.endsWith(closeToOpenMap[braces[i]])) {
      opened = opened.slice(0, opened.length - 1)
    } else {
      return false
    }
  }

  return opened === ''
}

console.log(validBraces('([{}])'))
