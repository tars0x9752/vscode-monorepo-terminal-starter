import * as vscode from 'vscode'
import { posix } from 'path'

export const fs = () => {
  const { workspaceFolders } = vscode.workspace

  const getUriFromPath = (path: string) => {
    return vscode.Uri.file(path)
  }

  const getRootUri = () => {
    return workspaceFolders ? workspaceFolders[0].uri : false
  }

  const getPackageFolders = async (packagesRoot: vscode.Uri) => {
    const entries = await vscode.workspace.fs.readDirectory(packagesRoot)

    const dirNames = entries
      .filter(([_, type]) => type === vscode.FileType.Directory)
      .map(([name]) => name)

    const dirUris = dirNames.map(name => vscode.Uri.joinPath(packagesRoot, name))

    return dirUris
  }

  const addWorkspaces = (urisToAdd: vscode.Uri[]) => {
    const start = workspaceFolders ? workspaceFolders.length : 0
    const deleteCount = null
    const workspaceFoldersToAdd = urisToAdd.map(uri => {
      return {
        uri,
        name: posix.basename(uri.path),
      }
    })

    vscode.workspace.updateWorkspaceFolders(start, deleteCount, ...workspaceFoldersToAdd)
  }

  return {
    workspaceFolders,
    getUriFromPath,
    getRootUri,
    getPackageFolders,
    addWorkspaces,
  }
}
