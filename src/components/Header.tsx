import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useMediaQuery } from 'react-responsive'
import { elastic as Menu } from 'react-burger-menu'
import { AiOutlineMenu } from "react-icons/ai";
const Header = ()=>{
    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
      })

      const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
      })

    const navArr = [
        "Projects",
        "Skills",
        "About",
        "Contact",
    ]

    return (
        <>
       { isMobile &&
        <header className='flex justify-between px-5 py-6 items-center w-screen bg-white'>
            <h1 className='text-xl'>Ryunosuke Yokokawa</h1>
            <AiOutlineMenu size={30} />
        </header>}
        {isDesktop && 
         <header className="z-10 flex justify-between items-center px-12 py-12 text-2xl text-bg bg-white">
                <h1>Ryunosuke Yokokawa</h1>
            <nav>
                <ul className="flex">
                    {navArr.map((el, i)=>
                    <li key={i} className="px-4">
                        <AnchorLink href={`#${el}`}>{el}</AnchorLink>
                    </li>
                    )}
                </ul>
            </nav>
        </header>
        }
        </>
    )
}

export default Header