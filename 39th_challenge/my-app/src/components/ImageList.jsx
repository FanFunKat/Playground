import { ImageShow } from "./ImageShow"

export function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />
  })
  return (
    <div>{renderImages}</div>
  )
}