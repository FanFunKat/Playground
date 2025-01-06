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
    <div>
      <img src={imageSrc} alt='png logo' />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  )
}