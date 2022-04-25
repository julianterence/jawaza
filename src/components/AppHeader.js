import ChrisRock from '../images/chris-rock.png'
import WillSmith from '../images/will-smith.png'
import { StyledHeader } from './styled-components';

function AppHeader() {
    return (
        <StyledHeader className='flex'>
          <img src={ChrisRock} alt="Chris Rock's face" />
          <img src={WillSmith} alt="Will Smith's face" />
        </StyledHeader>
    )
}

export default AppHeader;