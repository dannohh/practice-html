import * as Tone from "tone";

const synth = new Tone.synth().toDestination();

const playIt = synth.triggerAttackRelease("C4", "8n");

document.querySelector(".player").addEventListener("click", playIt());
