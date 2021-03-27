

function Header() {
    return (
        <>
            <header className="main_header">
                <div className="main_header_content">
                    <a href="#" className="logo">
                        <img src="_img/logo.png" alt="Bem vindo ao projeto prático HTML5 e CSS3"
                            title="Bem vindo ao projeto prático HTML5 e CSS3" />
                    </a>
                    <nav className="main_header_content_menu">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">A escola</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="main_header_content_menu_mobile">
                        <ul>
                            <li><span className="main_header_content_menu_mobile_obj icon-menu icon-notext"></span>
                                <ul className="main_header_content_menu_mobile_obj_sub ds_none">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">A escola</a>
                                    </li>
                                    <li>
                                        <a href="#">Contato</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;