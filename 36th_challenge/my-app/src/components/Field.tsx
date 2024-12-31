import React from "react";
import { Flower } from "../../public/svg/flower";

// Typ dla właściwości komponentu Field
interface FieldProps {
  value: string; // Wartość w polu tekstowym
  onChange: (newValue: string) => void; // Funkcja zmieniająca wartość
}

export function Field({ value, onChange }: FieldProps) {
  return (
    <div className="field">
      {/* <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" /> */}
      <h1>Translate App</h1>
      <label>Enter English</label>
      <input
        className="input"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
}