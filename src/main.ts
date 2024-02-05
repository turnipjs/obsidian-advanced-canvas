import { ItemView, Plugin } from 'obsidian'
import AdvancedCanvasSettingsManager from './settings'
import ShapesCanvasExtension from './canvas-extensions/shapes-canvas-extension'
import GroupCanvasExtension from './canvas-extensions/group-canvas-extension'
import PresentationCanvasExtension from './canvas-extensions/presentation-canvas-extension'
import InteractionTaggerCanvasExtension from './canvas-extensions/interaction-tagger-canvas-extension'
import UnknownDataTaggerCanvasExtension from './canvas-extensions/unknown-data-tagger-canvas-extension'
import CanvasEventEmitter from './events/canvas-event-emitter'
import { Canvas } from './types/Canvas'

const CANVAS_EXTENSIONS: any[] = [
  UnknownDataTaggerCanvasExtension,
  InteractionTaggerCanvasExtension,
  GroupCanvasExtension,
  PresentationCanvasExtension,
  ShapesCanvasExtension,
]

export default class AdvancedCanvasPlugin extends Plugin {
  settingsManager: AdvancedCanvasSettingsManager
  canvasEventEmitter: CanvasEventEmitter
  canvasExtensions: any[]

	async onload() {
    this.settingsManager = new AdvancedCanvasSettingsManager(this)
    await this.settingsManager.loadSettings()
    this.settingsManager.addSettingsTab()

    this.canvasEventEmitter = new CanvasEventEmitter(this)
    this.canvasExtensions = CANVAS_EXTENSIONS.map((Extension) => new Extension(this))
	}

  onunload() {}

  getCurrentCanvas(): Canvas|null {
    const canvasView = this.app.workspace.getActiveViewOfType(ItemView)

		if (canvasView?.getViewType() !== 'canvas') return null
    return (canvasView as any).canvas
  }
}