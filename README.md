## Marked 2 - Integrate Obsidian with Marked

[![Validate Plugin Entry](https://github.com/obsidianmd/obsidian-releases/actions/workflows/validate-plugin-entry.yml/badge.svg)](https://github.com/obsidianmd/obsidian-releases/actions/workflows/validate-plugin-entry.yml)

Open or the current note or monitor current vault in [Marked 2](https://marked2app.com).

### How to use

Use the commands via the Command Palette (type <kbd>cmd</kbd>+<kbd>p</kbd>, then search for "Marked"). Or, assign hotkeys to those commands in Obsidian's hotkey preferences.

### How it works

The plugin uses Marked 2's URL handler to open the current note in Marked. Changes will show up with ~2s delay.

If you use the command "Open Vault in Marked," the Marked preview will show the most recently-modified file in your vault, which will be the current note. In order to switch to a new note in the preview, you need to make an edit, but hitting <kbd>Space</kbd> anywhere in the note will update the Marked preview to the new note.

### Installing the plugin

Search Obsidian's Community Plugins gallery for "marked" and select "Install."

### Manually installing the plugin

- Copy over `main.js` and `manifest.json` from [the latest release](https://github.com/ttscoff/Marked2-obsidian/releases/latest) to your vault folder in the directory `VaultFolder/.obsidian/plugins/Marked-obsidian/`.
