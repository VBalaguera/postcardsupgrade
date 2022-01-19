import '../../styles/App.css';
import {Navigation, NavigationList, NavigationLinks} from '../../styled-components/Navigation'; 
import Name from './Name'; 

function Nav() {
  return (
    <div>
    <Navigation>
    <Name/>
    <NavigationList>
      <NavigationLinks>
        FROM THE TOP
      </NavigationLinks>
      <NavigationLinks>
        UPDATES FIRST
      </NavigationLinks>
      <NavigationLinks>
        CREDITS
      </NavigationLinks>
    </NavigationList>
    </Navigation>
    </div>
  );
}

export default Nav;
