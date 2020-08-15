import * as vscode from 'vscode'
import { fs } from './fs'

const EXTENSION_ID = 'monorepo-terminal-starter'

const startCmd = async () => {
  const rootUri = fs().getRootUri()

  if (!rootUri) {
    return
  }

  const packagesRoot = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    defaultUri: rootUri,
  })

  if (packagesRoot === undefined) {
    return
  }

  console.log(await fs().getPackageFolders(packagesRoot[0]))
}

export function activate(context: vscode.ExtensionContext) {
  const helloWorldCmdDisposable = vscode.commands.registerCommand(
    `${EXTENSION_ID}.helloWorld`,
    () => {
      vscode.window.showInformationMessage('YO')
    }
  )

  const startCmdDisposable = vscode.commands.registerCommand(`${EXTENSION_ID}.start`, startCmd)

  context.subscriptions.push(helloWorldCmdDisposable)
  context.subscriptions.push(startCmdDisposable)
}

export function deactivate() {}
