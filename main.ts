import { App, Notice, Plugin, PluginManifest, PluginSettingTab, Setting, TFile, FileSystemAdapter, addIcon } from 'obsidian';
const { exec } = require('child_process')

addIcon('Marked-logo-neutral', `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 78 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><use xlink:href="#_Image1" x="3" y="9" width="73px" height="38px"/><defs><image id="_Image1" width="73px" height="38px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAmCAYAAACI0bZTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFI0lEQVRogd3aSYhcRRgH8F/39EwWoyYjmphETKJEDUbEBdSIC+LBg5KbRnEBieBNBG9eRM+elIiIGoLx4AYqRKMe1IBLcEMUFYwal7jEmH2WzEx7qPeY7tev+7166YnBPxTT3dP176/+31dffVX1BsThJJyOizALExhHM4JjNk7BBVia9J9MuMqihgVYnvA0MYWxCI6+YxjPYgcOYRSH8RM2CYMuQh134xP8k3CMYA+24+qStqzC6/glsSG15Xs8KjjhmKGGS/EYDgoDmhC8lrbJxMDtmNuFZxj34gtB4HHB6ynHlGnBbu7CMYjrsRn7k+9OZmw5ktj5HE6oNOIIDOJ8vIUDggitg8prY3hFEFbydz4eEIQ5qFPgbBvHzxhqsWU2LsdHiS2jBRyp4Pf1S4w83IT3hCmQ9XiRcfuwRMgzz2CnfI/3apO4P7FlvRB9+4UoKWvLEUHUvmMVtggeH4swqLVN4G3sFqKvKHK6ib0L3yQcYxU40qhMo7ovGMJniVFVDGo17LC4yMmLpENCNByNLU2c2E+RlgnzuEr0HM9tZb8EquNcoebpa3j+x2hicb/I6sL8b/aL8DhBDYv6RVYXEuXX/n9CLegXUV1YQW7BB0LibM1NVZH2H8G3CW9VjqZQP41G9u9W3GYxIDLdrMCNuA6XCeV/TEIfw5d4CFcJTlggRGvMCrcLz+MuYb8IL0RwTOGRHuOcgxuw1XSxuw9PCAtZFDaKE2mrTo8MC7VTWY6D8lemDyM4msKeMg8LE679pjfX6QZ7FH/gKS17wEZXeaYJY1a9uTqnaUPwXFnUu3y+LIKDUP1ncY5QNC8SRMiObUDYrK9L7FiPyW4GpZgVadjynM8Glc8PBEMHM5/VTE+7shjO+exhwfFzdHf+QPL/dbid7l5L/xcrUt6yOxDJkSbSVtQq2JIVYrWQb8scpdQSO26lWKSi6ZiHbBTMEbdS1nM4hsQXu3Xt47tDGE/R7EnRwDWYVSRSlQOsbJ+TxA2wpjOHzRNfkjS0H7usUV6g1I46zu7VKS/syxBnD7zKnFpmke0Tu4AQbG91WDroGAwo6FTT7omyODXzPi+Z90JTZ9KdV8GOhvZp+3EFjinsKBIpVvmm4PVWrIjkoFOkhvjplrV/o/jK/32MFE23mPqG/BUxNhprOqMxJuGmGMj0+RRvRHJsVvDDVUoAOhN3lalycuZ9rLMIImVX5wfxe8n+L+NpZkakbOKuckKY5aiyox/S6bDPcTF+0H36juNV3Ca5CywSqUrizkbBaRU48la3WOSJBL8Jl6t3CicfqVhjwnXUGqzVcurQq1jM29uUQXZASytwZHNStrgsg7RqzsNeYQO8SdCgYfrSoQO9RKpS39A5vaqsbtnfrlL515QTd0LBFXuv6TY/xqIunHXVojGvBKiCKhHYgV4i7VTtdHJPy+tZFTnmaRd3pAJHU7jiOmr0Eulv4bAsFttaXldJ/Clao6dKtbxX+eW+Mup4Tdxp4FfaB9dQ7T5vVHskDeG7SI4t4gvQSjgDv5Y0agRX5HC8WbJ/a3sph+cS4ci1TP8f9fHerQyuFaZe0bn02i79V4t7LmBSeJIkD/coFmq3cA50zLEYj3cxaoveV8oNvNOlb157V+9VaaVQEef13SA8iddXxC7PC3GhUAuNCpeaO0r2exFXFnxvm3DEurcE51k4T9jXHRC2HDOeqGcaDTyJv7Q/eTIpTJENjtPnEY61UekxyBKcKYi0U9hP/alaTTXj+BdDV2lbthw25AAAAABJRU5ErkJggg=="/></defs></svg>`);

addIcon('Marked-logo-blue', `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 78 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><use xlink:href="#_Image1" x="3" y="9" width="73px" height="38px"/><defs><image id="_Image1" width="73px" height="38px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAmCAYAAACI0bZTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF8ElEQVRogd3aW6hdRxkH8N+ca06MSUyJ8do7VoORWgUv9RIQEVlWWl809VaViIQ++BBBxAehb6K1T6H4IEhRKIpY65KiD201WCul9KHGG0ZsoV5TY2o9OafHs3z41ib7svbaa9Y5ltL/y9577Zn/+uY/M99838wkOSir3diHy/EE/oJzirSZwbEDe2qOCqdrjvMZHAl78RK8tOZ4UpHOdebIQOpo1D7cinfgAOaxib/jp/isIp2ZwTGHT+CYEGhFiLSKP+C4It3fwZaD+DKuFh02V9vyZ9yFL2QJ3gHTRYreeiM+jpuEMIv15wCbWMOv8E5F+k8Dzz58EJ/BlTXHwtC7K6zXnzcp0p0NHIs4LER+X82xJAQaYKO25S58WpGentq2TEyKFAZdha/hzUKUHY1lL2AdP8IHFKmqBd6Do/iSEGCHUYHH8Qz+iisUab22ZQdej9twUIiz3MIxEPzzinRbS7ksjDa8rN6P43gtdhnt8TZUeEo0JOEWvAv7TfZ4GzbxOUW6VVkdxc24TEzN+Y62bOBhRXpTx3fORLw05vlX8XbRW4sdDRrGf3Gf8BU7hThtI6cJlRhN/8LFdf2lTA5iVC4rUtWj7gSSslrCg2KKrWyB6xnRi8u6j5xxbOK8EGZhC7bAbkV6aosciMa8DK8RPmMrWBQi9xVoYM9OWxeICA22BXN4tej93On1XEYlOn9bMIff1KTPJyQRaG4L5kQQdsrzT6gXbRfRnCKt4UN4QKxQm0KwrYg2qL+K39a8fTkqPC4ceg52dipVVvPKarmO7RoRTrZIjyrStXgVrse78VaU8sRax6MiTjosYq23iPSlKzZFTngnPom9inQxfpjBUWkbSWW1oqzeq6x+jHM4g7PK6nZldel48dFVpEinRbI4IGvPxyZxP94zEp9EDy1mcKyKFOd3Y89fmcGRcEnjP2V1QKQuB41mAZEWcYOyuhs3D3LAWcv1AXmr3s6GAG5BXvw1zaZLMzjg5RNPyuoq4VZeJ0b5Yv2+OSHWMi7CEZxQVvNtBg3Qlic14bKGZ4u6+ofAIJG+gBiNuzNt2dfw7BbR8Sumd/58/f8RfJQ2kWJrI1ekpmU3NzUZ9OgwUg9bVkaccVkdwnW6Bc2ptuNG2kfSnD6Rb+wiDGOwb9QVcyZ92JL8YHcwjQb4mGhP14xgAYeV1fIskfqkKuN1dstrYDLpw3bJD0kWjCbH18pLmVJd/sq2Sk3DvgvxC8aeXZTJ0VQndwEhbB/usEGjczDTcSf9tin2j/1ucuZtqEw63V097FgwOm1/2YNjE6dniZSrfCV6fRiXZ3IwKdKC/Ok2bv835Uf+P1Ok1VnTLXd/qWlFzB2NyeRozHG4A8yP1CnSw7gnk+PbZry4TwjApOPuM1X2jP3usxk4b3J1/qJIebrge/gG/x+Rxh33C7eBo09Gv2S8w4r0CN6AP5o+fdfxA3xYkTaYLVIfxz0+Cl7cg6NpdcvFpEhQpCdwjTgqe8AFsdbwLREqXD98dtcWLM46RpqG8Qa9ogfHuE/KSZAHGETNkyjSWdyBO5TVgtBhbdrBQZtIfeIbJqdXn9Vt/N199ry77T7ElNpoK9I23fbm2dTAGflfn9HYFAL0QZ8ROIE2kR7Tb3fyyaHvyz05do3tFK724KgweezeA20incE/enCeHPrex/EPMDx6+kTLZ3Vf7lvRJtK/xaFlDk7h3qHffS8trBn1E7/A7zM5HhSnwVvGdJHiztExcQ+pC87j6CC2qDk28JMedpUjK01coLhR3Dfogj/hU1n3plrQHuoX6XF8xKifacLTOKJIP2/477i8nGkTX2mw5aGaa5ZQZ8QVnq6dOxOz86Ei3YtDODGlxD24RpG+P+X/X4sDgq44iYem2PJ1cWfq7il1b8chRbov430zkbc8x0nD1SIWOo9T9QlLl3rfxdtmlDyJ6+pgbxbnFeIOw4oYXY8o0rY46nE8e+f/EdmewA0uXOMjptc/8R0c267rMtuJZ/eSRMQ++8VxzyUilnlMLA5/ey4KBP8D671Sv2mA3gUAAAAASUVORK5CYII="/></defs></svg>`);

interface MarkedSettings {
	MarkedIconColor: string;
}

const DEFAULT_SETTINGS: MarkedSettings = {
	MarkedIconColor: 'Marked-logo-blue'
}

export default class MarkedPlugin extends Plugin {
	settings: MarkedSettings;
	ribbonIcon: HTMLElement;

	constructor(app: App, pluginManifest: PluginManifest) {
		super(app, pluginManifest);
	}

	async onload() {
		console.log('Loading the Marked plugin.');

		await this.loadSettings();

		this.ribbonIcon = this.addRibbonIcon(this.settings.MarkedIconColor, 'Marked', () => {
			this.doRibbonAction();
		});


		this.addCommand({
			id: 'open-indexed-note-in-marked',
			name: 'Open indexed note in Marked',
			checkCallback: this.openInMarked.bind(this)
		});

		this.addSettingTab(new MarkedSettingsTab(this.app, this));
	}

	onunload() {
		console.log('Unloading the Marked plugin');
	}

	async resetRibbonIcon() { //Hat-tip to @liam for this elegant way of managing the plugin's ribbon button. The idea is to give the plugin the ribbon icon as an object to hold onto. Then, since the ribbon icons are a `HTMLElement`, you can `.detach()` them to remove them and re-add them, reassigning the object.
		this.ribbonIcon.detach();
		this.ribbonIcon = this.addRibbonIcon(this.settings.MarkedIconColor, 'Marked', () => {
			this.doRibbonAction();
		});
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	doRibbonAction() {
		this.openInMarked();
	};

	async openInMarked() : Promise<boolean> {
		let activeFile = this.app.workspace.getActiveFile();

		if (activeFile) {
			let vaultAdapter = this.app.vault.adapter;
			if (vaultAdapter instanceof FileSystemAdapter) {
				let fileURL = encodeURI(vaultAdapter.getFullPath(activeFile.path));
				exec(`open 'x-marked://${fileURL}'`);
			}
			new Notice("Opened in Marked.");
			return true;
		} else {
			new Notice("No active pane. Try again with a note open.");
		}
		return false;
	};
}

class MarkedSettingsTab extends PluginSettingTab {
	plugin: MarkedPlugin;

	constructor(app: App, plugin: MarkedPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl('h2', { text: 'Open in Marked Settings' });

		new Setting(containerEl)
			.setName('Ribbon button color')
			.setDesc('Should the ribbon button be Marked blue or inherit the theme colour?')
			.addDropdown(buttonMenu => buttonMenu
				.addOption("Marked-logo-neutral", "Inherit the theme colour")
				.addOption("Marked-logo-blue", "Marked blue")
				.setValue(this.plugin.settings.MarkedIconColor)
				.onChange(async (value) => {
					this.plugin.settings.MarkedIconColor = value;
					this.plugin.resetRibbonIcon();
					await this.plugin.saveSettings();
				}));
	}
}
