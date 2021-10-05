import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import GlobalStyle from './Global';
import Header from './components/layout/Header';
import particles from './particles.gif';
import record from './record.png';
import KeyContainer from './components/input/KeyContainer';
import ScaleContext from './context/ScaleContext';
import SequenceContainer from './components/input/SequenceContainer';

import SynthContext from './context/SynthContext';
import { FlexRow } from './utilities';
import Octave from './components/controls/Octave';
import Scale from './components/controls/Scale';
import WaveForm from './components/controls/WaveForm';
import Envelope from './components/controls/Envelope';
import Tempo from './components/controls/Tempo';
import Reverb from './components/controls/Reverb';
import Filter from './components/controls/Filter';
import PlayButton from './components/controls/PlayButton';

const BgGif = styled.img`
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
        background-color: teal;
        filter: hue-rotate(90deg);
        z-index: -1;
        @media (max-width: 1200px) {
                display: none;
        }
`;

const CornerImage = styled.img`
        width: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;

        @media (max-width: 1200px) {
                display: none;
        }
`;

function App() {
        // Synth envelope values
        const [attack, setAttack] = useState(0.01);
        const [sustain, setSustain] = useState(0.1);
        const [release, setRelease] = useState(0.03);
        const synth = useContext(SynthContext);

        // Scale and bse synth settings
        const [octave, setOctave] = useState(4);
        const [wave, setWave] = useState('square');
        const scales = useContext(ScaleContext);
        const [curScale, setCurScale] = useState('cMin');

        function changeScale(e) {
                setCurScale(e.target.value);
        }

        // Step sequencer state
        const [tempo, setTempo] = useState(120);
        const [isPlaying, setIsPlaying] = useState(false);
        const [intervalId, setIntervalId] = useState(null);

        const [step, setStep] = useState(null);
        const [sequence, setSequence] = useState([
                [0],
                [2],
                [4],
                [5],
                [0],
                [2],
                [4],
                [5],
                [0],
                [2],
                [4],
                [5],
                [0],
                [2],
                [4],
                [7],
        ]);

        // Reverb settings values
        const [reverb, setReverb] = useState(false);

        // filter
        const [filter, setFilter] = useState(false);

        function toggleFilter() {
                setFilter((filter) => !filter);
        }

        function increaseOctave() {
                if (octave < 6) {
                        setOctave(octave + 1);
                }
        }
        function decreaseOctave() {
                if (octave > 0) {
                        setOctave(octave - 1);
                }
        }

        function changeWave(e) {
                setWave(e.target.value);
                if (isPlaying) {
                        setIsPlaying((isPlaying) => !isPlaying);
                }
                clearInterval(intervalId);
        }

        function changeTempo(e) {
                setTempo(e.target.value);
        }

        function togglePlaying() {
                setStep(null);
                setIsPlaying((isPlaying) => !isPlaying);
                clearInterval(intervalId);
        }

        function updateSequence(e) {
                const row = parseInt(e.target.dataset.row);
                const block = parseInt(e.target.dataset.index);
                const newSeq = [...sequence];
                // If index is in sequenc already remove it otherwise add it to the sequence for that row
                if (newSeq[row].indexOf(block) === -1) {
                        newSeq[row].push(block);
                } else {
                        const remove = newSeq[row].indexOf(block);
                        newSeq[row].splice(remove, 1);
                }
                setSequence(newSeq);
        }

        function playSequence() {
                if (!isPlaying) {
                        const secondsPerBeat = 30.0 / tempo;
                        let seqIndex = 0;
                        setIntervalId(
                                setInterval(() => {
                                        for (let i = 0; i < sequence[seqIndex].length; i++) {
                                                setStep(seqIndex);
                                                const note = scales[curScale][sequence[seqIndex][i]];

                                                if (sequence[seqIndex][i] === 7) {
                                                        synth.playNote(`${note}${octave + 1}`, wave, {
                                                                sustainTime: sustain,
                                                                attackTime: attack,
                                                                releaseTime: release,
                                                        });
                                                } else {
                                                        synth.playNote(`${note}${octave}`, wave, {
                                                                sustainTime: sustain,
                                                                attackTime: attack,
                                                                releaseTime: release,
                                                        });
                                                }
                                        }
                                        if (seqIndex < 15) {
                                                seqIndex++;
                                        } else {
                                                seqIndex = 0;
                                        }
                                }, secondsPerBeat * 1000)
                        );
                }
        }

        function updateAttack(e) {
                const nextAttackTime = parseFloat(e.target.value);

                setAttack(nextAttackTime);
        }
        function updateSustain(e) {
                const nextTime = parseFloat(e.target.value);
                setSustain(nextTime);
        }

        function updateRelease(e) {
                const nextTime = parseFloat(e.target.value);
                setRelease(nextTime);
        }

        function toggleReverb() {
                setReverb((verb) => !verb);
        }

        useEffect(() => {}, [curScale, setCurScale]);

        return (
                <div className="App">
                        <BgGif src={particles} />
                        <Header />
                        <FlexRow justify="space-evenly">
                                <Octave
                                        octave={octave}
                                        increaseOctave={increaseOctave}
                                        decreaseOctave={decreaseOctave}
                                />
                                <Scale scale={curScale} changeScale={changeScale} />
                                <WaveForm wave={wave} changeWave={changeWave} />
                                <Envelope
                                        attack={attack}
                                        release={release}
                                        updateAttack={updateAttack}
                                        updateRelease={updateRelease}
                                />
                        </FlexRow>
                        <KeyContainer
                                wave={wave}
                                octave={octave}
                                tempo={tempo}
                                sequence={sequence}
                                curScale={curScale}
                                attack={attack}
                                sustain={sustain}
                                release={release}
                                reverb={reverb}
                                filter={filter}
                        />
                        <SequenceContainer
                                sequence={sequence}
                                updateSequence={updateSequence}
                                scale={scales[curScale]}
                                step={step}
                                reverb={reverb}
                        />
                        <FlexRow justify="space-evenly">
                                <Tempo tempo={tempo} changeTempo={changeTempo} />
                                <Reverb reverb={reverb} toggleReverb={toggleReverb} />
                                <Filter filter={filter} toggleFilter={toggleFilter} />
                                <PlayButton
                                        isPlaying={isPlaying}
                                        togglePlaying={togglePlaying}
                                        playSequence={playSequence}
                                />
                        </FlexRow>
                        <GlobalStyle />
                        <CornerImage src={record} />
                </div>
        );
}

export default App;
