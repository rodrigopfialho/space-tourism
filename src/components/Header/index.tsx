import { Container, Content, Menu } from './styles'
import { ActiveLink } from '../ActiveLink';
import { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi'

export function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpen = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }


    return (
        <Container>
            <Content>
                <img src="./logo.svg" alt="logo" />

                <Menu  >
                    <button className='btnmobile' onClick={handleOpen}>
                        {openMenu !== true ?
                            <FiAlignJustify /> :
                            ''
                        }
                    </button>

                    <ul className={openMenu !== true ? '' : 'open'}>
                        <FiX className={openMenu !== true ? 'close' : ''} onClick={handleOpen} />

                        <ActiveLink activeClassName="active" href="/">
                            <li>
                                <a>
                                    <span>00</span>
                                    HOME
                                </a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/destination">
                            <li>
                                <a>
                                    <span>01</span>
                                    DESTINATION
                                </a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/crew">
                            <li>
                                <a>
                                    <span>02</span>
                                    CREW
                                </a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/technology">
                            <li>
                                <a>
                                    <span>03</span>
                                    TECHNOLOGY
                                </a>
                            </li>
                        </ActiveLink>
                    </ul>
                </Menu>
            </Content>
        </Container>
    )
}

