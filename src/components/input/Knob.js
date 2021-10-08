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
        .dial-svg {
                stroke: ${teal};
                width: 100%;
                stroke-dasharray: 189px;

                ${({ offset }) => `
                    stroke-dashoffset: ${offset}px;
                    `}
        }
`;
const KnobLine = styled.div`
        width: 2px;
        height: 15px;
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

        /* background-color: white; */

        transform-origin: center;
        ${({ rotation }) => `
                transform: translate(-50%, -50%) rotate(${rotation}deg);
        `};
`;

const KnobDisplay = styled.span`
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        font-size: 0.8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
`;

export default function Knob({ min, max, step, value, onChange }) {
        const [offset, setOffset] = useState(189);
        const [active, setActive] = useState(false);
        const [stateValue, setStateValue] = useState(0);
        const [stepCount, setStepCount] = useState(0);
        const [rotation, setRotation] = useState(0);

        function countDecimals(num) {
                const value = parseFloat(num);
                console.log('value', value);
                if (value) {
                        if (Math.floor(value) === value) return 0;
                        return value.toString().split('.')[1].length || 0;
                }
        }

        function updateOffset(e) {
                console.log(e.target);
                onChange(e);
        }

        useEffect(() => {
                if (step) {
                        const steps = countDecimals(step);
                        setStepCount(steps);
                }
        }, []);

        function dragHandler(e) {
                if (active) {
                        if (e.movementY === -1) {
                                if (Math.floor(offset) > 0) {
                                        setOffset(offset - (189 / max) * step);
                                        setRotation(rotation + (265 / max) * step);

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
                                        setOffset(offset + (189 / max) * step);
                                        setRotation(rotation - (265 / max) * step);

                                        const newVal = (max - (offset / 189) * Math.abs(max - min) - step).toFixed(
                                                stepCount
                                        );
                                        onChange(e, newVal);
                                        return setStateValue(parseFloat(newVal));
                                }
                        }
                }
        }

        function toggleActive() {
                setActive((act) => !act);
        }
        function leaveToggleActive() {
                if (active) {
                        setActive((act) => !act);
                }
        }
        console.log('rotation', rotation);
        console.log('offset', offset);

        return (
                <KnobContainer
                        active={active}
                        onMouseDown={toggleActive}
                        onMouseUp={toggleActive}
                        onMouseLeave={leaveToggleActive}
                        onMouseMove={dragHandler}
                        offset={offset}
                >
                        <LineContainer rotation={rotation}>
                                <KnobLine />
                        </LineContainer>
                        <KnobDisplay>{value}</KnobDisplay>
                        <svg viewBox="0 0 100 100">
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" stroke="#55595C" />
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" />
                        </svg>
                        <svg className="dial-svg" viewBox="0 0 100 100">
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" stroke="#55595C" />
                                <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" />
                        </svg>

                        <input type="range" value={value} min={min} max={max} step={step} onChange={updateOffset} />
                </KnobContainer>
        );
}
