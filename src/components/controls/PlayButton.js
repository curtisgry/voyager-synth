import React from 'react';
import { ControlsToggleButton, ControlContainer } from '../../elements';

export default function PlayButton({ isPlaying, playSequence, togglePlaying }) {
        return (
                <ControlContainer>
                        <ControlsToggleButton
                                toggle={isPlaying}
                                onClick={() => {
                                        togglePlaying();
                                        setTimeout(() => {
                                                playSequence();
                                        }, 0);
                                }}
                        >
                                {isPlaying ? 'Stop' : 'Play'}
                        </ControlsToggleButton>
                </ControlContainer>
        );
}
