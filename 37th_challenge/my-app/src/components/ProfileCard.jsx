// export function ProfileCard(props) {
//   return (
//     <div>
//       <div>Title is {props.title}</div>
//       <div>Handle is {props.handle}</div>
//     </div>
//   )
// }

export function ProfileCard({ title, handle, imageSrc }) { //destructuring
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt='png logo' />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  )
}