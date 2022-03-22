import { Container, Content, Menu } from './styles'
import { ActiveLink } from '../ActiveLink';

export function Header() {
    return (
        <Container>
            <Content>
                <img src="./logo.svg" alt="logo" />

                <Menu>
                    <ul>
                        <ActiveLink activeClassName="active" href="/">
                            <li>
                                <a>
                                    <span>00</span>
                                    HOME
                                </a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/destinations">
                            <li>
                                <a>
                                    <span>01</span>
                                    DESTINATION
                                </a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="">
                            <li>
                                <a>
                                    <span>02</span>
                                    CREW
                                </a>
                            </li>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="">
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

