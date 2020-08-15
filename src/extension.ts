import * as vscode from 'vscode'
import { openTerminalsCmd, openWorkspacesCmd } from './command'

const EXTENSION_ID = 'monorepo-terminal-starter'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(`${EXTENSION_ID}.openTerminals`, openTerminalsCmd),
    vscode.commands.registerCommand(`${EXTENSION_ID}.openWorkspaces`, openWorkspacesCmd)
  )
}

export function deactivate() {}
