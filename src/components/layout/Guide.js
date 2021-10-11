import React, { useState } from 'react';
import { HelpButton, HelpContainer } from '../../elements';
import { GuideList } from '../../elements/Lists';

export default function Guide() {
        const [visible, setVisible] = useState(false);

        function handleClick() {
                setVisible((vis) => !vis);
        }

        return (
                <HelpContainer>
                        <HelpButton onClick={handleClick}>?</HelpButton>
                        <GuideList toggle={visible}>
                                <li>Use keys a,s,d,f,g,h,j,k or click to play notes.</li>
                                <li>Click the squares in the grid to toggle the notes in the sequence.</li>
                                <li>
                                        Change to octave, scale and tempo will apply when sequence is stopped and
                                        started.
                                </li>
                        </GuideList>
                </HelpContainer>
        );
}
