import Image from 'next/image'
import icon from '../../public/images/svgs/github.svg'

export default function Main({ title, description, technologies, image_1, image_2 }) {
  return (
    <div class="h-screen flex justify-evenly content-center">
      <div className="relative w-1/12 h-">
        <Image fill={true} src={`${image_1}`} className="object-contain"/>
        <Image fill={true} src={`${image_2}`} className="object-contain"/>
      </div>
      <div>
        <h1>{ title }</h1>
        <h2>{ description }</h2>
        <span>{ technologies }</span>
        <div>
          <Image src={icon} className="" alt="icon"/>
          <Image src={icon} className="" alt="icon"/>
        </div>
      </div>
    </div>
  )
}
