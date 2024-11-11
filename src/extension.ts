import * as vscode from 'vscode';

function toggleExplorerAutoReveal() {
	const settingKey = 'explorer.autoReveal';
	const config = vscode.workspace.getConfiguration();
	const currentValue = config.get<boolean>(settingKey);
	const newValue = !currentValue;
	config.update(settingKey, newValue, vscode.ConfigurationTarget.Global);
}

export function activate(context: vscode.ExtensionContext) {
	const disposable1 = vscode.commands.registerCommand('vscode-locate-current-file.locateCurrentFile', () => {
		vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");
	});

	const disposable2 = vscode.commands.registerCommand('vscode-locate-current-file.toggleExplorerAutoReveal', toggleExplorerAutoReveal);

	context.subscriptions.push(disposable1, disposable2);
}

export function deactivate() { }
