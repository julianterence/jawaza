import './App.css';
import Soundbite from './components/Soundbite';
import AppHeader from './components/AppHeader';
import SettingsPanel from './components/SettingsPanel';
import { useState } from 'react';


function App() {
     const [playbackRate, setPlaybackRate] = useState(1)

     const soundBites = {
          jada: "Jada, I love you",
          gijane2: "GI Jane 2",
          aight: "Aight",
          jawaza: "It's Jawaza!",
          niceOne: "That was a nice one",
          outHere: "Out here",
          uhoh: "Uh Oh",
          richard: "Richard",
          lol: "LOL",
          slap: "The Slap",
          wow: "Oh Wow",
          wow2: "Wow",
          just: "Just smacked",
          mouth: "Out your mouth",
          dude: "Wow dude",
          joke: "It was a joke",
          mouth2: "Out your mouth!",
          goingTo: "I'm going to",
          could: "Oh, I could",
          greatest: "Greatest night"
     }

     return (
          <div className="App">
               <AppHeader />
               <div className="soundbites">
                    {Object.keys(soundBites).map((keyName, i) => (
                         <Soundbite key={i} label={soundBites[keyName]} audioId={keyName} playbackRate={playbackRate} />
                    ))}
               </div>
               <SettingsPanel playbackRate={playbackRate} setPlaybackRate={setPlaybackRate} />
          </div>
     );
}

export default App;
