import 'bulma/css/bulma.css'
import './App.css'
import { ProfileCard } from './components/ProfileCard'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard title='Alexsa' handle='@alexa99' imageSrc={'images/alexa.png'} />
            </div>
            <div className='column is-3'>
              <ProfileCard title='Cortana' handle='@cortana32' imageSrc={'images/cortana.png'} />
            </div>
            <div className='column is-3'>
              <ProfileCard title='Siri' handle='@siri01' imageSrc={'images/siri.png'} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App