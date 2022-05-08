



const Header = ()=>{

    const navArr = [
        "Projects",
        "Skills",
        "Contact",
        "About",
    ]

    return (
        <header className="flex justify-between items-center px-12 py-12">
                <h1>Ryunosuke Yokokawa</h1>
            <nav>
                <ul className="flex">
                    {navArr.map((el, i)=>
                    <li key={i} className="px-4">
                        <a href="#">{el}</a>
                    </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header