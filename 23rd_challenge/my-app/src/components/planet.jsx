export function Planet({ name, diameter, moons, desc, url }) {
  return (
    <div className="card">
      <div>
        <img src={url} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <h3>Planet Profile</h3>
      <ul>
        <li><strong>Diameter:</strong> {diameter}</li>
        <li><strong>Moons:</strong> {moons}</li>
      </ul>
    </div>
  )
}