import Service from '@ember/service';
import WebMidi from 'webmidi'

export default class WebmidiService extends Service {

  inputs = [];
  outputs = [];

  midiEnabled = false

  async add(){

    WebMidi.enable(function(err){
      if(err){
        console.warn(err)
      }
    }, true
    )
    this.enabled = true
    this.inputs =  WebMidi.inputs;
    this.outputs = WebMidi.outputs;
    console.log( WebMidi.inputs )

  }

  empty(){
    this.inputs.clear()
    this.outputs.clear()

  }
  refresh(){
   const self = this
    WebMidi.enable( function(err){
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
    console.log( WebMidi.inputs )
    console.log( WebMidi.outputs )

    self.add()
  }
    }, true)

  }
}
