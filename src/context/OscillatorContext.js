import React from 'react';

const waveForms = {
        sine: 'sine',
        square: 'square',
        sawtooth: 'sawtooth',
        triangle: 'triangle',
};

const OscillatorContext = React.createContext(waveForms);
