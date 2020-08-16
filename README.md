# Monorepo Terminal Starter

monorepo の各 packages/modules 毎にターミナルを開きます。

## Features

下記のコマンドをコマンドパレットに追加します。

- `monorepo-terminal-starter: Open Terminals`
- `monorepo-terminal-starter: Open Workspaces`
- `monorepo-terminal-starter: Bootstrap Terminals`

## Demo

![demo](https://user-images.githubusercontent.com/46079709/90333051-65735a80-dffd-11ea-9fb8-8a7ca6824a6d.gif)

## Usage

### `Open Terminals` コマンド

指定したフォルダの配下にあるものを `packages/modules` とみなしてターミナルを起動します。

> Multi-root Workspaces を使わない場合にこのコマンドを使うことを想定しています。

### `Open Workspaces` コマンド

指定したフォルダの配下にあるものを `packages/modules` とみなして Workspace に追加します。

> VSCode の Reload Window を伴います。

### `Bootstrap Terminals` コマンド

現在開いている Workspace 毎にターミナルを起動します。

> すでに monorepo の各 `packages/modules` を Multi-root Workspaces として開いている場合にこのコマンドを使うことを想定しています。

## Requirements

- Linux または macOS
- Windows のファイルシステムはサポートしていません。

## Extension Settings

起動するターミナルは `"terminal.integrated.shell.*"` などの VSCode 標準のターミナル設定に従います。

この拡張機能のためだけの特別な設定はありません。

## Changelog

See [CHANGELOG](CHANGELOG.md) for more information.

## License

[MIT](LICENSE)
