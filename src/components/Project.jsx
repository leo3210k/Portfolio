import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_about.png'
import icon from '../../public/images/svgs/github.svg'

export default function Main({ title, description, technologies }) {
  return (
    <div class="flex content-center">
      <div>
        <Image src={profile} className="rounded-2xl bg-slate-950" alt="profile"/>
        <Image src={profile} className="rounded-2xl bg-slate-950" alt="profile"/>
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
