import notes from '../data/notes.json';

// create web audio api context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext({
        sampleRate: 44100,
});

// const noteLength = 0.4;
// const attackTime = 0.01;
// const releaseTime = 0.1;

// const verb = audioCtx.createConvolver();

export class Synth {
        constructor() {
                if (!audioCtx) {
                        throw new Error('Browser does not support Web Audio API');
                }

                this._context = audioCtx;
                this._verb = this._context.createConvolver();
                this.biquadFilter = this._context.createBiquadFilter();

                this.compressor = new DynamicsCompressorNode(this._context);
                this.compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
                this.compressor.knee.setValueAtTime(40, audioCtx.currentTime);
                this.compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
                this.compressor.attack.setValueAtTime(0, audioCtx.currentTime);
                this.compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
        }

        addFilter(freq = 350, type = 'lowpass') {
                this.biquadFilter.type = type;
                this.biquadFilter.frequency.value = freq;
                this.biquadFilter.gain.value = 25;
        }

        generateImpulse({ rate = 44100, seconds = 5, decay = 10, reverse = false } = {}) {
                const length = rate * seconds;
                const impulse = this._context.createBuffer(2, length, rate);
                const impulseL = impulse.getChannelData(0);
                const impulseR = impulse.getChannelData(1);
                let n;
                let i;

                for (i = 0; i < length; i++) {
                        n = reverse ? length - i : i;
                        // eslint-disable-next-line
            impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
                        // eslint-disable-next-line
            impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
                }

                this._verb.buffer = impulse;
        }

        playNote(note, wave = 'square', { reverb = false, filter = false, sustainTime, attackTime, releaseTime } = {}) {
                console.log('Params', attackTime, sustainTime, releaseTime);
                const notePlayed = notes[note];
                const oscillator = this._context.createOscillator();
                const time = this._context.currentTime;

                const gainNode = this._context.createGain();

                gainNode.gain.cancelScheduledValues(time);
                gainNode.gain.setValueAtTime(0, time);
                console.log(time + attackTime);
                gainNode.gain.linearRampToValueAtTime(1, time + attackTime);
                console.log(time + sustainTime + attackTime);
                // gainNode.gain.setValueAtTime(1, time + sustainTime + attackTime);
                gainNode.gain.linearRampToValueAtTime(0, time + attackTime + sustainTime + releaseTime);
                console.log(time + sustainTime + attackTime + releaseTime);
                oscillator.type = wave;
                oscillator.frequency.setValueAtTime(notePlayed, time); // value in hertz
                console.log('reverb', reverb);

                oscillator.connect(gainNode);
                if (reverb && filter) {
                        gainNode.connect(this._verb);
                        this._verb.connect(this.biquadFilter);
                        this.biquadFilter.connect(this.compressor);
                } else if (filter) {
                        gainNode.connect(this.biquadFilter);
                        this.biquadFilter.connect(this.compressor);
                } else if (reverb) {
                        gainNode.connect(this._verb);
                        this._verb.connect(this.compressor);
                } else {
                        gainNode.connect(this.compressor);
                }

                this.compressor.connect(this._context.destination);

                oscillator.start(time);
                oscillator.stop(time + attackTime + sustainTime + releaseTime);
        }
}
