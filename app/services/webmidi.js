import Service from '@ember/service';
import WebMidi from 'webmidi'
import { tracked } from '@glimmer/tracking'
export default class WebmidiService extends Service {

  inputs = [];
  outputs = [];
  errors = [];

  @tracked midiEnabled = false

  inputs() {
    return this.inputs
  }

  midiStatus() {
     return WebMidi.enabled
  }

  updateInputs(){
    this.inputs = WebMidi.inputs
  }

  updateOutputs(){
    this.outputs = WebMidi.outputs
  }

  async enable(){
    await WebMidi.enable({},true)
    this.midiEnabled = true
    this.updateInputs()
    this.updateOutputs()

  }

  disable(){
    WebMidi.disable()
    this.midiEnabled = false
    this.updateInputs()
    this.updateOutputs()
  }

}
