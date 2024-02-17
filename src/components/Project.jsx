import Image from 'next/image'
import icon from '../../public/images/svgs/github.svg'

export default function Main({ title, description, technologies, image_1, image_2 }) {
  return (
    <div class="h-screen flex justify-evenly content-center">
      <div className="self-center">
        <Image src={`${image_1}`} width={800} height={800} className="shadow-2xl"/>
        {/* <Image fill={true} src={`${image_2}`} className=""/> */}
      </div>
      <div className="w-3/12 flex flex-col justify-center gap-y-1 text-left">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ title }</h1>
        <h2 className="font-medium text-gray-900">{ description }</h2>
        <span className="mt-2 italic font-normal text-gray-600">{ technologies }</span>
        <div className="mt-5 flex gap-x-6">
          <Image src={icon} className="w-10" alt="icon"/>
          <span className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline">Visit Project</span>
        </div>
      </div>
    </div>
  )
}
