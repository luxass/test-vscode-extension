import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(ctx: ExtensionContext) {
  ctx.subscriptions.push(
    commands.registerCommand('test-extension.hello', async () => {
      window.showInformationMessage('Hello!')
    }),
  )
}

export function deactivate() { }
