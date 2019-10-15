import Controller from '@ember/controller';
import { action, computed } from '@ember/object'
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'
import { equal } from '@ember/object/computed'

export default class ApplicationController extends Controller {

  midiInputs  = []
  midiOutputs = []
  midiError = 'shit'

  @tracked selectedInput = null
  @tracked selectedOutput = null

  @service webmidi;

  @action
  updateInputSelection(ev){
    this.selectedInput = ev.target.value
  }

  @action
  async midiEnabler(){
    await this.webmidi.enable()
  }

  @action
  midiDisabler(){
    this.webmidi.disable()
  }



  @computed('webmidi.midiEnabled')
  get midiEnabled(){
    return this.webmidi.midiEnabled
  }

  @action
  updateOutputSelection(ev){
    this.selectedOutput = ev.target.value
  }

  // @equal(this.webmidi.midiStatus(), true) midiEnabled
  // @equal(this.webmidi.midiStatus(), false) midiDisabled

}
