import React, { useState, createContext, useEffect } from 'react';
import scale from 'music-scale';

const minor = scale('1 2 2# 4 5 5# 6#', 'C4');

minor.push('C5');

const cMin = { ...minor };

export const ScaleContext = createContext();

export function ScaleProvider({ children }) {
        const [scaleData, setScaleData] = useState({
                rootNotes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
                setScale: (root, octave, type) => {
                        if (type === 'minor') {
                                const newScale = scale('1 2 3b 4 5 6b 7b', `${root}${octave}`);
                                newScale.push(`${root}${octave + 1}`);
                                console.log('New Scale', newScale);
                                return newScale;
                        }
                        const newScale = scale('1 2 3 4 5 6 7', `${root}${octave}`);
                        newScale.push(`${root}${octave + 1}`);
                        return newScale;
                },
        });

        const [currentScale, setCurrentScale] = useState(cMin);
        const [curScaleType, setCurScaleType] = useState('minor');
        const [key, setKey] = useState('C');
        const [octave, setOctave] = useState(4);

        function increaseOctave() {
                if (octave < 6) {
                        setOctave(octave + 1);
                        const newScale = scaleData.setScale(key, octave, curScaleType);
                        setCurrentScale({ ...newScale });
                }
        }
        function decreaseOctave() {
                if (octave > 0) {
                        setOctave(octave - 1);
                        const newScale = scaleData.setScale(key, octave, curScaleType);
                        setCurrentScale({ ...newScale });
                }
        }

        function changeScale(e) {
                setCurScaleType(e.target.value);
                e.target.blur();
        }
        function changeKey(e) {
                setKey(`${e.target.value}`);
                e.target.blur();
        }

        // current scale must be updated in useEffect because of the asynchronus nature of setState.
        // Otherwise the state change is not reflected until the next state change
        useEffect(() => {
                const newScale = scaleData.setScale(key, octave, curScaleType);
                setCurrentScale({ ...newScale });
        }, [key, curScaleType, octave]);

        return (
                <ScaleContext.Provider
                        value={{
                                currentScale,
                                curScaleType,
                                key,
                                octave,
                                setCurrentScale,
                                scaleData,
                                increaseOctave,
                                decreaseOctave,
                                changeScale,
                                changeKey,
                        }}
                >
                        {children}
                </ScaleContext.Provider>
        );
}
