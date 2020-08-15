import * as vscode from 'vscode'
import { fs } from './fs'
import { terminal } from './terminal'

const EXTENSION_ID = 'monorepo-terminal-starter'

const openTerminalsCmd = async () => {
  const { getPackageFolders } = fs()

  const { createTerminals, createTerminal } = terminal()

  const rootUri = fs().getRootUri()

  if (!rootUri) {
    console.log('no workspace')
    return
  }

  const packagesRoot = (
    await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      defaultUri: rootUri,
      canSelectMany: false,
    })
  )?.shift()

  if (packagesRoot === undefined) {
    return
  }

  const packageFolders = await getPackageFolders(packagesRoot)

  createTerminal(packagesRoot, 'root')

  createTerminals(packageFolders)
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(`${EXTENSION_ID}.openTerminals`, openTerminalsCmd)
  )
}

export function deactivate() {}
