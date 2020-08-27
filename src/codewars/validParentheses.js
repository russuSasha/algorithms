function validParentheses(parens) {
  let balance = 0

  for (let i = 0; i < parens.length; i++) {
    balance += parens[i] === '(' ? 1 : -1

    if (balance < 0) {
      return false
    }
  }

  return balance === 0
}

console.log(validParentheses(')()('))
