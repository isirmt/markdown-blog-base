// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { readFile, writeFile } from 'fs';
import * as vscode from 'vscode';
import { formatIndentedArray, parseIndentedString } from './formatAnalyzer';

const configurationFileName = "markdown-blog-config.txt";
const defaultNesting: (string | (string | string[])[])[] = ["title", "author", "date", ["published_at", "updated_at"]];

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "markdown-blog-base" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('markdown-blog-base.createBlog', async () => {

		vscode.window.showInformationMessage('Hello World from markdown-blog-base!');

		console.log(vscode.workspace.workspaceFolders);

		if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
			let nesting = defaultNesting;
			const mdFileName = await vscode.window.showInputBox({
				title: "Type markdown file name(slug)"
			});

			readFile(vscode.workspace.workspaceFolders[0].uri.fsPath + "/" + configurationFileName, (err, data) => {
				if (!err) {
					vscode.window.showInformationMessage(`${configurationFileName} is found`);
					nesting = parseIndentedString(data.toString());
					console.log(nesting);
				}
			});

			writeFile(vscode.workspace.workspaceFolders[0].uri.fsPath + "/" + mdFileName + `.md`,
				`---\n${formatIndentedArray(nesting)}---\n`, (err) => {
					if (err) {
						vscode.window.showErrorMessage(`Error: Creating Markdown File (${err.message})`);
					} else {
						vscode.window.showInformationMessage(`Created Markdown File Successfully!`);
					}
				});

		} else {
			vscode.window.showErrorMessage("Error: You Should Open Workspace Directory!");
		}
	}));
}

// This method is called when your extension is deactivated
export function deactivate() { }
