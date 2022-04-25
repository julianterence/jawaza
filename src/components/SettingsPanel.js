import { StyledSettingsPanel } from './styled-components'
import { useState } from 'react';

function SettingsPanel(props) {
    const [panelOpen, setPanelOpen] = useState(false)

    const playbackRate = props.playbackRate;

    const rangeHandler = (e) => {
        props.setPlaybackRate(e.target.value)
   }

   const panelClick = () => {
        setPanelOpen(!panelOpen)
   }

    return(
        <StyledSettingsPanel open={panelOpen}>
            <span onClick={panelClick}>
                {panelOpen ? 'close panel': 'toggle speed'}
            </span>
            <input id="playback-rate" type="range" min="0.4" max="2.0" step="0.1" value={playbackRate} onChange={rangeHandler} />
            <label htmlFor="playback-rate">{playbackRate}</label>
        </StyledSettingsPanel>
    )
}

export default SettingsPanel