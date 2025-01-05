// export function ProfileCard(props) {
//   return (
//     <div>
//       <div>Title is {props.title}</div>
//       <div>Handle is {props.handle}</div>
//     </div>
//   )
// }

export function ProfileCard({ title, handle }) { //destructuring
  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  )
}