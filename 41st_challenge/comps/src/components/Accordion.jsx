export function Accordion({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.label}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}