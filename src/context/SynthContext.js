import React from 'react';
import { Synth } from '../audioApi';

const SynthContext = React.createContext(new Synth());

export default SynthContext;
