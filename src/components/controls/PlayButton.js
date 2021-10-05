import React from 'react';
import { ControlsToggleButton } from '../../elements/Buttons';
import { ControlContainer } from '../../utilities';

export default function PlayButton({ isPlaying, playSequence, togglePlaying }) {
        return (
                <ControlContainer>
                        <ControlsToggleButton
                                className={isPlaying ? 'toggled' : ''}
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
