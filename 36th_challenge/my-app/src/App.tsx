import React, { useState } from 'react';
import { Field } from './components/Field';
import { Languages } from './components/Languages';
import { Translate } from './components/Translate';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [text, setText] = useState('');

}
