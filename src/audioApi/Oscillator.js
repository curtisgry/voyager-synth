import notes from '../data/notes.json';

// create web audio api context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext({
        sampleRate: 44100,
});

const compressor = new DynamicsCompressorNode(audioCtx);
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

// const noteLength = 0.4;
// const attackTime = 0.01;
// const releaseTime = 0.1;

const verb = audioCtx.createConvolver();

function generateImpulse({ rate, seconds, decay, context, input, reverse } = {}) {
        const length = rate * seconds;
        const impulse = context.createBuffer(2, length, rate);
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

        input.buffer = impulse;
}

generateImpulse({ rate: 44100, seconds: 5, decay: 10, reverse: false, context: audioCtx, input: verb });

export function playNote(note, wave = 'square', { sustainTime, attackTime, releaseTime } = {}) {
        console.log('Params', attackTime, sustainTime, releaseTime);
        const notePlayed = notes[note];
        const oscillator = audioCtx.createOscillator();
        const time = audioCtx.currentTime;

        const gainNode = audioCtx.createGain();

        gainNode.gain.cancelScheduledValues(time);
        gainNode.gain.setValueAtTime(0, time);
        console.log(time + attackTime);
        gainNode.gain.linearRampToValueAtTime(1, time + attackTime);
        console.log(time + sustainTime + attackTime);
        gainNode.gain.setValueAtTime(1, time + sustainTime + attackTime);
        gainNode.gain.linearRampToValueAtTime(0, time + attackTime + sustainTime + releaseTime);
        console.log(time + sustainTime + attackTime + releaseTime);
        oscillator.type = wave;
        oscillator.frequency.setValueAtTime(notePlayed, time); // value in hertz
        oscillator.connect(gainNode).connect(compressor).connect(verb).connect(audioCtx.destination);

        oscillator.start(time);
        oscillator.stop(time + attackTime + sustainTime + releaseTime);
}
