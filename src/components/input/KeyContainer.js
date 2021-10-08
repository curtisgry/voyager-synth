import React, { useEffect, useState, useContext } from 'react';
import Key from './Keys';
import { FlexRow } from '../../utilities';

import { ScaleContext } from '../../context/ScaleContext';
import SynthContext from '../../context/SynthContext';

export default function KeyContainer({ wave, attack, sustain, release, curKey }) {
        const [key, setKey] = useState([]);
        const { currentScale, curScaleType, octave } = useContext(ScaleContext);
        const synth = useContext(SynthContext);

        const [keyValues, setKeyValues] = useState(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']);

        const [notes, setNotes] = useState({
                a: '0',
                s: '1',
                d: '2',
                f: '3',
                g: '4',
                h: '5',
                j: '6',
                k: '7',
                A: '0',
                S: '1',
                D: '2',
                F: '3',
                G: '4',
                H: '5',
                J: '6',
                K: '7',
        });

        // This is doing the same thing as click should refactor
        function handleKeyDown(e) {
                if (!e.repeat) {
                        if (notes[e.key]) {
                                const currentNote = currentScale[`${parseInt(notes[e.key])}`];

                                synth.playNote(`${currentNote}`, {
                                        sustainTime: sustain,
                                        attackTime: attack,
                                        releaseTime: release,
                                });
                        }

                        setKey((key) => {
                                if (key.length < 9) {
                                        return [...key, e.key];
                                }
                                return [...key];
                        });
                }
        }
        function handleKeyUp(e) {
                setKey((prev) => prev.filter((k) => k !== e.key));
        }

        function handleMouseDown(e) {
                const keyClicked = e.target.dataset.keyval;

                if (notes[keyClicked]) {
                        const currentNote = currentScale[`${parseInt(notes[keyClicked])}`];

                        synth.playNote(`${currentNote}`, {
                                sustainTime: sustain,
                                attackTime: attack,
                                releaseTime: release,
                        });

                        setKey((key) => {
                                if (key.length < 4) {
                                        return [...key, keyClicked];
                                }
                                return [...key];
                        });
                }
        }

        function handleMouseUp(e) {
                const keyClicked = e.target.dataset.keyval;
                setKey((prev) => prev.filter((k) => k !== keyClicked));
        }

        useEffect(() => {
                window.addEventListener('keydown', handleKeyDown);
                window.addEventListener('keyup', handleKeyUp);

                return () => {
                        window.removeEventListener('keydown', handleKeyDown);
                        window.removeEventListener('keyup', handleKeyUp);
                };
        }, [octave, wave, attack, sustain, release, currentScale, curKey, curScaleType]);

        return (
                <FlexRow justify="space-evenly">
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['0']}
                                keyValue={keyValues[0]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['1']}
                                keyValue={keyValues[1]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['2']}
                                keyValue={keyValues[2]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['3']}
                                keyValue={keyValues[3]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['4']}
                                keyValue={keyValues[4]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['5']}
                                keyValue={keyValues[5]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['6']}
                                keyValue={keyValues[6]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={currentScale['7']}
                                keyValue={keyValues[7]}
                        />
                </FlexRow>
        );
}
