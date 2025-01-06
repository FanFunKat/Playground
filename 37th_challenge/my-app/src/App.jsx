import './App.css'
import { ProfileCard } from './components/ProfileCard'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title='Alexsa' handle='@alexa99' imageSrc={'images/alexa.png'} />
      <ProfileCard title='Cortana' handle='@cortana32' imageSrc={'images/cortana.png'} />
      <ProfileCard title='Siri' handle='@siri01' imageSrc={'images/siri.png'} />
    </div>
  );
}

export default App