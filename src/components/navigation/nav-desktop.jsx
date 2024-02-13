import { routes } from '../../routes'
import { useContext } from 'react'
import { RefContext } from '../../context/ref-context'

const NavDesktop = () => {
    const {scrollToVolunteer} = useContext(RefContext)
  return (
    <div className="hidden lg:flex lg:items-center gap-4 text-sm pr-2 justify-between w-[30%] h-[5rem]">
      {routes.map(route => {
        const { Icon, href, title } = route
        return (
            <button
            onClick={scrollToVolunteer}
              key={title}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all desktop-link"
            >
              <Icon />
              {title}
            </button>
        )
      })}
    </div>
  )
}

export default NavDesktop
