<h3 align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
        <img alt="Logo" src="./assets/logo-light.svg" width="100">
    </picture><br/><br/>
	Advanced Canvas for <a href="https://obsidian.md">Obsidian.md</a>
</h3>

<p align="center">
    <a href="https://github.com/Developer-Mike/obsidian-advanced-canvas/stargazers"><img src="https://img.shields.io/github/stars/Developer-Mike/obsidian-advanced-canvas?colorA=363a4f&colorB=e0ac00&style=for-the-badge" alt="GitHub star count"></a>
    <a href="https://github.com/Developer-Mike/obsidian-advanced-canvas/issues"><img src="https://img.shields.io/github/issues/Developer-Mike/obsidian-advanced-canvas?colorA=363a4f&colorB=e93147&style=for-the-badge" alt="Open issues on GitHub"></a>
    <a href="https://github.com/Developer-Mike/obsidian-advanced-canvas/contributors"><img src="https://img.shields.io/github/contributors/Developer-Mike/obsidian-advanced-canvas?colorA=363a4f&colorB=08b94e&style=for-the-badge" alt="List of contributors"></a>
    <br/>
    <a href="./LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=GPL-3.0&colorA=363a4f&colorB=b7bdf8" alt="GPL-3.0 license"/></a>
    <br/><br/>
    <b>⚡ Supercharge</b> your canvas experience! Create presentations, flowcharts and more!
</p>

> [!WARNING]
> The next version of this plugin will be a complete rewrite. It will be a big improvement over the current version, but it will also break the current flowchart nodes. If you are using the flowchart nodes, please wait for the next release before using them in your notes.

## Installation (waiting for approval for the community plugins list)
- Create a folder named `advanced-canvas` in your vault's plugins folder (`<vault>/.obsidian/plugins/`).
- Download `main.js`, `styles.css` and `manifest.json` from the latest release and put them in the `advanced-canvas` folder.
- Enable the plugin in Settings -> Community plugins -> Installed plugins

## Features
- Create groups independently of the nodes ([Updated card menu](#updated-canvas-card-menu))
- (Flowchart) [Node shapes](#node-shapes)
  - Process shape
  - Terminal shape
  - Decision shape
  - Input/Output shape
  - On-page Reference shape
  - Predefined Process shape
  - Document shape
  - Database shape
- [Presentation mode](#presentation)
  - Create presentations by connecting nodes with arrows

## Updated UI
### Canvas Card Menu
<img src="./assets/card-menu.png" alt="New canvas card menu"/>

### Node Popup Menu
<img src="./assets/popup-menu.png" alt="New node popup menu"/>

## Node Shapes
<details>
    <summary>Flowchart Example</summary>
    <img src="./assets/sample-flowchart.png" alt="Flowchart Example"/>
</details>

### Usage
- Use the [updated popup menu](#node-popup-menu) set a node's shape

### Shapes
<details>
    <summary>Process/Center Shape</summary>
    <img src="./assets/flowchart-nodes/process.png" alt="Process/Center Shape"/>
</details>

<details>
    <summary>Terminal Shape</summary>
    <img src="./assets/flowchart-nodes/terminal.png" alt="Terminal Shape"/>
</details>

<details>
    <summary>Decision Shape</summary>
    <img src="./assets/flowchart-nodes/decision.png" alt="Decision Shape"/>
</details>

<details>
    <summary>Input/Output Shape</summary>
    <img src="./assets/flowchart-nodes/input-output.png" alt="Input/Output Shape"/>
</details>

<details>
    <summary>On-page Reference Shape</summary>
    <img src="./assets/flowchart-nodes/reference.png" alt="On-page Reference Shape"/>
</details>

<details>
    <summary>Predefined Process Shape</summary>
    <img src="./assets/flowchart-nodes/predefined-process.png" alt="Predefined Process Shape"/>
</details>

<details>
    <summary>Document Shape</summary>
    <img src="./assets/flowchart-nodes/document.png" alt="Document Shape"/>
</details>

<details>
    <summary>Database Shape</summary>
    <img src="./assets/flowchart-nodes/database.png" alt="Database Shape"/>
</details>

## Presentation Mode
<img src="./assets/sample-presentation-simple.gif" alt="Presentation mode example"/>

<details>
    <summary>Canvas File</summary>
    <img src="./assets/sample-presentation.png" alt="Presentation canvas file"/>
</details>

### More Complex Example
<img src="./assets/sample-presentation-complex.gif" alt="Complex presentation mode example"/>

<details>
    <summary>Canvas File</summary>
    <img src="./assets/sample-presentation-complex.png" alt="Complex presentation canvas file"/>
</details>

### Usage
- Create the first slide
  - Create the first slide of the presentation using the [updated popup menu](#node-popup-menu)
  - OR create a node and mark it as the first slide using the [updated card menu](#canvas-card-menu)
- Add more slides
  - Link the slides using arrows
    - If you want to loop back to a previous slide, you can number the arrows in the order you want to navigate through them
  - <b>TIP:</b> Create slides with consistent dimensions by using the [updated card menu](#canvas-card-menu)
- Control the presentation
  - Start the presentation using the command palette (`Advanced Canvas: Start presentation`)
  - Change slides using the arrow keys
  - Exit the presentation using the `ESC` key

## Settings
<img src="./assets/settings.png" alt="Settings Screen"/>

## Roadmap
- [ ] Fix icons in the menu popup
- [ ] Clean up the scss code
- [ ] Add `unknownData` changes to the undo/redo stack

## Known Issues
- None so far 👀 - Create an issue if you find any!