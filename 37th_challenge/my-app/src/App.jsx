import 'bulma/css/bulma.css'
import './App.css'
import { ProfileCard } from './components/ProfileCard'

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                title='Alexsa'
                handle='@alexa99'
                imageSrc={'images/alexa.png'}
                description='Alexa was created by Amazon and helps you buy things.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Cortana'
                handle='@cortana32'
                imageSrc={'images/cortana.png'}
                description='Cortana was made by Microsoft. Who knows what it does?'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Siri'
                handle='@siri01'
                imageSrc={'images/siri.png'}
                description='Siri was made by Apple and is being phased out.'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App