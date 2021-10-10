import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { teal } from '../../utilities';

const KnobContainer = styled.div`
        width: 100px;
        height: 100px;

        margin: 0 auto;
        position: relative;
        background-color: rgba(60, 60, 60, 0.15);
        border-radius: 5px;
        input[type='range'] {
                display: none;
        }
        svg {
                position: absolute;
                left: 0;
        }
`;

const DialSvg = styled.svg.attrs(({ offset }) => ({
        strokeDashoffset: offset,
}))`
        stroke: ${teal};
        width: 100%;
        stroke-dasharray: 189px;
`;

const KnobLine = styled.div`
        width: 2px;
        height: 18px;
        background-color: ${teal};
        position: absolute;
        left: 0;
        bottom: -5px;
        transform: rotate(45deg);
`;
const LineContainer = styled.div`
        width: 50px;
        height: 50px;
        left: 50%;

        position: absolute;
        top: 50%;
        z-index: 100;

        /* background-color: white; */

        transform-origin: center;

        ${({ rotation }) => `
                transform: translate(-50%, -50%) rotate(${rotation}deg);
        `};
`;

const KnobText = styled.p`
        color: ${teal};
        position: absolute;
        font-size: 0.78rem;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
`;

const KnobDisplay = styled.span`
        font-size: 0.7rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
`;

export default function Knob({ title, min, max, step, value, valueDetail, onChange }) {
        const [offset, setOffset] = useState(189);
        const [active, setActive] = useState(false);
        const [stateValue, setStateValue] = useState();
        const [stepCount, setStepCount] = useState(0);
        const [rotation, setRotation] = useState(4);

        function countDecimals(num) {
                const value = parseFloat(num);

                if (value) {
                        if (Math.floor(value) === value) return 0;
                        return value.toString().split('.')[1].length || 0;
                }
        }

        function updateOffset(e) {
                onChange(e);
        }

        useEffect(() => {
                if (step) {
                        const steps = countDecimals(step);
                        setStepCount(steps);
                }

                const startingOffset = ((max - min) / value).toFixed(2);

                setOffset(offset - (189 / startingOffset).toFixed(2));

                setRotation((260 / startingOffset).toFixed(2));
        }, []);

        function dragHandler(e) {
                if (active) {
                        // console.log(e);
                        if (e.movementY === -1) {
                                if (Math.floor(offset) > 0) {
                                        setOffset(offset - (189 / max) * parseFloat(step));
                                        setRotation(parseFloat(rotation) + (260 / max) * parseFloat(step));

                                        const newVal = (
                                                max -
                                                (offset / 189) * Math.abs(max - min) +
                                                parseFloat(step)
                                        ).toFixed(stepCount);
                                        onChange(e, newVal);
                                        return setStateValue(parseFloat(newVal));
                                }
                        }
                        if (e.movementY === 1) {
                                if (Math.floor(offset) < 189) {
                                        setOffset(offset + (189 / max) * parseFloat(step));
                                        setRotation(rotation - (264 / max) * parseFloat(step));

                                        const newVal = (max - (offset / 189) * Math.abs(max - min) - step).toFixed(
                                                stepCount
                                        );
                                        onChange(e, newVal);
                                        return setStateValue(parseFloat(newVal));
                                }
                        }
                }
        }

        function toggleActive(e) {
                console.log(e.target);
                setActive((act) => !act);
        }
        function toggleActiveUp(e) {
                setActive(false);
        }
        function leaveToggleActive(e) {
                console.log(e.target);
                if (active) {
                        setActive((act) => !act);
                }
        }

        return (
                <KnobContainer
                        active={active}
                        onMouseDown={toggleActive}
                        onMouseUp={toggleActiveUp}
                        onMouseLeave={leaveToggleActive}
                        onMouseMove={dragHandler}
                        offset={offset}
                >
                        <LineContainer rotation={rotation}>
                                <KnobLine />
                        </LineContainer>
                        <KnobDisplay>
                                {value}
                                {valueDetail || ''}
                        </KnobDisplay>
                        <svg viewBox="0 0 100 100">
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" stroke="#55595C" />
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" />
                        </svg>
                        <DialSvg offset={offset} viewBox="0 0 100 100">
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" stroke="#55595C" />
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" />
                        </DialSvg>

                        <input type="range" value={value} min={min} max={max} step={step} onChange={updateOffset} />
                        <KnobText>{title}</KnobText>
                </KnobContainer>
        );
}
