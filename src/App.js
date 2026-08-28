import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Welcome from './content/Welcome';
// import CountdownTimer from './content/CountdownTimer';
import Rsvp from './content/Rsvp';
// import DressCode from './content/DressCode';
import DateTime from './content/DateTime';

import { BrowserView, MobileView} from 'react-device-detect';

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className="page-wrapper">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
       <MobileView>
        <Welcome/>
        {/* <CountdownTimer/> */}
        <Rsvp/>
        {/* <DressCode/> */}
        <DateTime/>
      </MobileView>
    </div>
  );
}

export default App;
