import React from 'react';
import useSound from 'use-sound';
import rockSmith from '../audio/rock-smith-full.mp3';

import { useState, useEffect } from 'react';

function Soundbite(props) {
    const [audioLength, setAudioLength] = useState(0)
    const [playing, setPlaying] = useState(false)

    const [play, { sound }] = useSound(rockSmith, {
        interrupt: true,
        sprite: {
            jada: [20500, 1400],
            gijane2: [22000, 2000],
            aight: [24000, 500],
            jawaza: [30700, 920],
            niceOne: [31620, 1500],
            outHere: [33800, 1000],
            uhoh: [34800, 700],
            richard: [35500, 650],
            lol: [36150, 3400],
            slap: [39550, 500],
            wow: [40050, 1300],
            wow2: [42200, 900],
            just: [43800, 3200],
            mouth: [49000, 3800],
            dude: [53500, 1400],
            joke: [55500, 2260],
            mouth2: [57760, 4955],
            goingTo: [62715, 2000],
            could: [66000, 2300],
            greatest: [70100, 5000],
        },
        onend: () => {
            setPlaying(false)
            setAudioLength(0.1)
        }
    });

    const audioId = props.audioId;
    const label = props.label;

    const clickHandler = () => {
        setPlaying(false)
        play({ id: audioId });
        setAudioLength(sound._sprite[audioId][1] / 1000);
        setPlaying(true)
    }

    let spanStyle = {
        transform: playing ? 'translateX(0)' : 'translateX(-100%)',
        transition: `all ${audioLength}s linear`
    }
    let labelStyle = {
        transform: playing ? 'translateX(0)' : 'translateX(100%)',
        transition: `all ${audioLength}s linear`
    }

    return (
        <button onClick={clickHandler}>
            <span><div>{label}</div></span>
            <span style={spanStyle}><div style={labelStyle}>{label}</div></span>
        </button>
    )
}

export default Soundbite;