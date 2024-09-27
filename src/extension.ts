import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('vscode-locate-current-file.locateCurrentFile', () => {
		vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
