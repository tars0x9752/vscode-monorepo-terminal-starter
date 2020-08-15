import * as vscode from 'vscode'

const EXTENSION_ID = 'monorepo-terminal-starter'

export function activate(context: vscode.ExtensionContext) {
  const helloWorldCmdDisposable = vscode.commands.registerCommand(
    `${EXTENSION_ID}.helloWorld`,
    () => {
      vscode.window.showInformationMessage('YO')
    }
  )

  const startCmdDisposable = vscode.commands.registerCommand(`${EXTENSION_ID}.start`, () => {
    vscode.window.createTerminal({
      shellPath: '/usr/bin/fish',
      name: 'terminal',
    })
    vscode.window.showInformationMessage('Terminal Started')
  })

  context.subscriptions.push(helloWorldCmdDisposable)
}

export function deactivate() {}
