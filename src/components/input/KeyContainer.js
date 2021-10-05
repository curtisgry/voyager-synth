import React, { useEffect, useState, useContext } from 'react';
import Key from './Keys';
import { FlexRow } from '../../utilities';

import ScaleContext from '../../context/ScaleContext';
import SynthContext from '../../context/SynthContext';

export default function KeyContainer({ octave, wave, curScale, attack, sustain, release }) {
        const [key, setKey] = useState([]);
        const scales = useContext(ScaleContext);
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
        });

        // This is doing the same thing as click should refactor
        function handleKeyDown(e) {
                if (!e.repeat) {
                        if (notes[e.key]) {
                                const currentNote = scales[curScale][`${notes[e.key]}`];
                                if (notes[e.key] === '7') {
                                        synth.playNote(`${currentNote}${octave + 1}`, wave, {
                                                sustainTime: sustain,
                                                attackTime: attack,
                                                releaseTime: release,
                                        });
                                } else {
                                        synth.playNote(`${currentNote}${octave}`, wave, {
                                                sustainTime: sustain,
                                                attackTime: attack,
                                                releaseTime: release,
                                        });
                                }
                        }

                        setKey((key) => {
                                if (key.length < 4) {
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
                        const currentNote = scales[curScale][`${notes[keyClicked]}`];

                        if (notes[keyClicked] === '7') {
                                synth.playNote(`${currentNote}${octave + 1}`, wave, {
                                        sustainTime: sustain,
                                        attackTime: attack,
                                        releaseTime: release,
                                });
                        } else {
                                synth.playNote(`${currentNote}${octave}`, wave, {
                                        sustainTime: sustain,
                                        attackTime: attack,
                                        releaseTime: release,
                                });
                        }

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

        useEffect(() => {}, [key]);

        useEffect(() => {
                window.addEventListener('keydown', handleKeyDown);
                window.addEventListener('keyup', handleKeyUp);

                return () => {
                        window.removeEventListener('keydown', handleKeyDown);
                        window.removeEventListener('keyup', handleKeyUp);
                };
        }, [octave, wave, attack, sustain, release, curScale]);

        return (
                <FlexRow justify="space-evenly">
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['0']}
                                keyValue={keyValues[0]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['1']}
                                keyValue={keyValues[1]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['2']}
                                keyValue={keyValues[2]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['3']}
                                keyValue={keyValues[3]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['4']}
                                keyValue={keyValues[4]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['5']}
                                keyValue={keyValues[5]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['6']}
                                keyValue={keyValues[6]}
                        />
                        <Key
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                keyPressed={key}
                                note={scales[curScale]['7']}
                                keyValue={keyValues[7]}
                        />
                </FlexRow>
        );
}
