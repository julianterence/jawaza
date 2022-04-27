import styled from 'styled-components';
import NoiseImage from '../images/noise.png'

export const StyledHeader = styled.header`
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem 0;
    position: fixed;
    background: yellow;
    left: 0;
    top: 0;
    border-bottom: solid 4px black;
    z-index: 1;
    &::before, &::after {
        content: '';
        background: url(${NoiseImage}) center center no-repeat;
        background-size: contain;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 45px;
    }
    &::before {
        transform: rotate(-12deg);
        left: 120px;
    }
    &::after {
        transform: rotate(-170deg);
        right: 120px;
    }
    img {
        width: 50px;
    }
    img:first-of-type {
        transform: rotate(-20deg)
    }

    img:last-of-type {
        transform: rotate(20deg)
    }
`
export const StyledButton = styled.button`
    height: 50px;
    width: 120px;
    margin: 0.6rem 0;
    border: 0;
    border-radius: 5px;
    box-shadow: 5px 5px black;
    border: solid 4px black;
    background: red;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Jost';
    position: relative;
    overflow: hidden;
    &:active {
        box-shadow: 0px 0px black;
        transform: translate(5px, 5px);
    }
`

export const ButtonSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    clip: rect(auto, auto, auto, auto);
    background: ${props => props.secondary ? 'yellow' : 'red'};
`

export const ButtonLabel = styled.div`
    color: red;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledSettingsPanel = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 10px;
    left: 20px;
    width: calc(100% - 40px);
    border: solid 5px black;
    box-shadow: 6px 6px black;
    border-radius: 25px;
    background-color: white;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${props => props.open === true ? 'translateY(0)' : 'translateY(207px)'};
    transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05);
    span {
        background: white;
        border: solid 5px black;
        position: absolute;
        top: -32px;
        left: 50%;
        padding: 2px 4px;
    }
`

export const StyledInput = styled.input`
    appearance: none;
    background: black;
    height: 4px;
    display: block;
    width: 70%;
    border-radius: 4px;
    margin-bottom: 30px;
    &::-webkit-slider-thumb {
        background: red;
        width: 15px;
        height: 15px;
        appearance: none;
        border-radius: 100%;
    }
    + label {
        font-size: 30px;
    }
`