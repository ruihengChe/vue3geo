import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerTextEditorCommand('vue3geo.generateVue3Component', (editor: vscode.TextEditor) => {
            editor.insertSnippet(new vscode.SnippetString(`veo`), editor.selection.active);
        })
    );
}
