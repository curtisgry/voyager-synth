import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../utilities';
import { ControlContainer } from './Controls';

const PlayPauseButton = styled.button``;

export default function SequenceControls({ isPlaying, togglePlaying, tempo, changeTempo, playSequence }) {
        return (
                <FlexRow justify="space-evenly">
                        <ControlContainer>
                                <h3>Tempo</h3>
                                <input type="number" value={tempo} onChange={changeTempo} />
                        </ControlContainer>
                        <ControlContainer>
                                <PlayPauseButton
                                        onClick={() => {
                                                togglePlaying();
                                                setTimeout(() => {
                                                        playSequence();
                                                }, 0);
                                        }}
                                >
                                        {isPlaying ? 'Stop' : 'Play'}
                                </PlayPauseButton>
                        </ControlContainer>
                </FlexRow>
        );
}
