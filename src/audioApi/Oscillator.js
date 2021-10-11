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

                this._filterOn = false;
                this._verbOn = false;

                this.waveForm = 'square';

                this.sustainTime = 0.1;
                this.attackTime = 0.01;
                this.releaseTime = 0.01;

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

                        impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);

                        impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
                }

                this._verb.buffer = impulse;
        }

        playNote(note, { wave = this.waveForm, reverb = this._verbOn, filter = this._filterOn } = {}) {
                const notePlayed = notes[note];
                const oscillator = this._context.createOscillator();
                const time = this._context.currentTime;
                console.log(notePlayed);
                // Handle timing for gain node to create the volume envelope of the oscillator output
                const gainNode = this._context.createGain();

                gainNode.gain.cancelScheduledValues(time);
                gainNode.gain.setValueAtTime(0, time);

                gainNode.gain.linearRampToValueAtTime(1, time + this.attackTime);

                gainNode.gain.linearRampToValueAtTime(0, time + this.attackTime + this.sustainTime + this.releaseTime);

                oscillator.type = wave;
                oscillator.frequency.setValueAtTime(notePlayed, time); // value in hertz

                // Connect oscillator to gain node to initialize its chain
                oscillator.connect(gainNode);

                if (reverb && filter) {
                        // disconnects make sure the last connections are reset so the correct effect is heard based on the parameters
                        this._verb.disconnect();
                        this.biquadFilter.disconnect();
                        // Order of effect connnections will alter how the ouput sounds
                        gainNode.connect(this._verb);
                        this._verb.connect(this.biquadFilter);
                        this.biquadFilter.connect(this.compressor);
                } else if (filter && !reverb) {
                        this._verb.disconnect();
                        gainNode.connect(this.biquadFilter);
                        this.biquadFilter.connect(this.compressor);
                } else if (reverb && !filter) {
                        this.biquadFilter.disconnect();
                        gainNode.connect(this._verb);
                        this._verb.connect(this.compressor);
                } else {
                        gainNode.connect(this.compressor);
                }

                // Last connection is compressor to destination
                this.compressor.connect(this._context.destination);

                // Start and stop instance of the oscillator. The stop method handles removing the instance on its own
                oscillator.start(time);
                oscillator.stop(time + this.attackTime + this.sustainTime + this.releaseTime);
        }

        set reverb(boolean) {
                this._verbOn = boolean;
        }

        set filter(boolean) {
                this._filterOn = boolean;
        }

        set wave(wavetype) {
                this.waveForm = wavetype;
        }

        set attack(time) {
                this.attackTime = time;
        }

        set release(time) {
                this.releaseTime = time;
        }
}
