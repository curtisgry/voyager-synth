import React from 'react';
import scale from 'music-scale';

// const rootNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const major = scale('1 2 3 4 5 6 7', 'C');
const minor = scale('1 2 2# 4 5 5# 6#', 'C');

major.push('C');
minor.push('C');

const cMaj = { ...major };
const cMin = { ...minor };

console.log(cMin);

const scales = {
        cMaj,
        cMin,
};

const ScaleContext = React.createContext(scales);

export default ScaleContext;
