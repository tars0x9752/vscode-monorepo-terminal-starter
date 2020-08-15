import * as vscode from 'vscode'
import { fs } from './fs'
const { getPackageFolders, getRootUri } = fs()

export const showPackageRootInput = async () => {
  const rootUri = getRootUri()

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

  return { packagesRoot, packageFolders }
}
