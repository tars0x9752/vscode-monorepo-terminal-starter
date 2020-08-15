import * as vscode from 'vscode'
import { posix } from 'path'

export const terminal = (shellPath?: string) => {
  const createTerminal = (cwd: vscode.Uri, name: string) => {
    vscode.window
      .createTerminal({
        cwd,
        name,
        shellPath,
      })
      .show()
  }

  const createTerminals = (dirs: vscode.Uri[]) => {
    dirs.map(dir => {
      const name = posix.basename(dir.path)

      createTerminal(dir, name)
    })
  }

  return {
    createTerminal,
    createTerminals,
  }
}
