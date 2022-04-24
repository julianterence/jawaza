import ChrisRock from '../images/chris-rock.png'
import WillSmith from '../images/will-smith.png'

function AppHeader() {
    return (
        <header className='flex app-header'>
          <img src={ChrisRock} alt="Chris Rock's face" />
          <img src={WillSmith} alt="Will Smith's face" />
        </header>
    )
}

export default AppHeader;