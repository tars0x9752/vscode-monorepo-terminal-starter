import * as vscode from 'vscode'
import { fs } from './fs'
import { terminal } from './terminal'
import { showPackageRootInput } from './input'
const { addWorkspaces, getRootUri } = fs()
const { createTerminals, createTerminal } = terminal()

export const openTerminalsCmd = async () => {
  const inputs = await showPackageRootInput()

  const rootUri = getRootUri()

  if (inputs === undefined || !rootUri) {
    return
  }

  const { packageFolders } = inputs

  createTerminal(rootUri, 'root')

  createTerminals(packageFolders)
}

export const openWorkspacesCmd = async () => {
  const inputs = await showPackageRootInput()

  if (inputs === undefined) {
    return
  }

  const { packageFolders } = inputs

  addWorkspaces(packageFolders)
}

export const bootstrapTerminalsCmd = async () => {
  const { workspaceFolders } = vscode.workspace

  if (workspaceFolders === undefined) {
    return
  }

  createTerminals(workspaceFolders.map(v => v.uri))
}
