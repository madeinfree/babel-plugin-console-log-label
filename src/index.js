export default function (babel) {
  const { types: t } = babel;

  return {
    visitor: {
      LabeledStatement(path) {
        const { node } = path
        if (node.label.name === 'log') {
          const { expression } = node.body
          const consoleCall = t.ExpressionStatement(
          t.CallExpression(
            t.Identifier('console.log'),
            [expression]
          ))
          path.replaceWith(consoleCall)
        }
      }
    }
  }
}
