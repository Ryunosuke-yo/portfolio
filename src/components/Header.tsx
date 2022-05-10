import AnchorLink from 'react-anchor-link-smooth-scroll'



const Header = ()=>{

    const navArr = [
        "Projects",
        "Skills",
        "About",
        "Contact",
    ]

    return (
        <header className="flex justify-between items-center px-12 py-12 text-2xl text-bg">
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
    )
}

export default Header