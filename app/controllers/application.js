import Controller from '@ember/controller';
import { action } from '@ember/object'
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class ApplicationController extends Controller {

  midiInputs  = [1,2,3,4]
  midiOutputs = ["a","b"]
  midiEnabled = false

  @tracked selectedInput = null
  @tracked selectedOutput = null

  @service('webmidi') webmidi

  @action
  updateInputSelection(ev){
    this.selectedInput = ev.target.value
  }

  @action
  toggleMidiSwitch(){
    this.toggleProperty("midiEnabled")
  }


  @action
  updateOutputSelection(ev){
    this.selectedOutput = ev.target.value
  }

}
