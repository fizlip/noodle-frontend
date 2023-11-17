import Link from 'next/link';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
type Props = {
  title: string,
  icon: any,
  mouseHover: boolean,
  href:string,
}

const SidebarComponent:React.FC<Props> = ({title, mouseHover, icon, href}) => {
  return (
    <div>
      {mouseHover && window.innerWidth >= 680?
        <li>
          <Link href={href} className="pt-1 pb-1 flex text-sm items-center text-base font-normal hover:bg-pink-100 rounded-xl m-2">
            <span className="flex flex-row ml-3 text-md text-lg">{icon} <span className="p-2 pt-1">{title}</span></span>
          </Link>
        </li>
        :
        <div>
          <Link href={href} className="pt-1 pb-1 flex pl-3 items-center text-base font-normal">
            <span className="flex flex-row">{icon}</span>
          </Link>
        </div>
      }
    </div>
  )
}

export default SidebarComponent;