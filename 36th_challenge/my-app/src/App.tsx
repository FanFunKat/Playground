import './App.css';
import { useState } from 'react';
import { Field } from './components/Field';
import { Languages } from './components/Languages';
import { Translate } from './components/Translate';

export default function App(): JSX.Element {
  const [language, setLanguage] = useState<string>('es');
  const [text, setText] = useState<string>('');

  return (
    <div>
      <Field value={text} onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate language={language} text={text} />
    </div>
  );
}
