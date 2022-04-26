import { Container, Content, Menu } from './styles'
import { ActiveLink } from '../ActiveLink';

export function Header() {
    

    return (
        <Container>
            <Content>
                <img src="./logo.svg" alt="logo" />

                <Menu className='nav'>
                    <button className='btn-mobile'> 
                        <span className='hamburguer'></span>
                    </button>
                    <ul className='menu'>
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

