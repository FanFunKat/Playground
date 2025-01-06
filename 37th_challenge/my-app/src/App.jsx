import './App.css'
import { ProfileCard } from './components/ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() {
  return (
    <div>
      <img src={AlexaImage} />
      <img src={'/images/siri.png'} />
      <div>Personal Digital Assistants</div>
      <ProfileCard title='Alexsa' handle='@alexa99' />
      <ProfileCard title='Cortana' handle='@cortana32' />
      <ProfileCard title='Siri' handle='@siri01' />
    </div>
  );
}

export default App