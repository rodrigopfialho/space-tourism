import { Header } from '../../components/Header'
import {Container, Details, Info, Navigation, InfoSpace, TextNavigation, ImageAside} from '../../styles/stylesTechnology' 
import Server from '../../../server.json'
import { useState } from 'react';
import { useEffect } from 'react';

type techTypes = {
    id: number;
    slug: string;
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

export default function Tecnology() {
    const technology: techTypes[] = Server.technology
    const [technologys, setTechnologys] = useState<techTypes>({}as techTypes)
    const [slug, setSlug] = useState<string>('launchvehicle')

    useEffect(() => {
        const value = technology.find((item) => {
            return item.slug === slug
        })
        setTechnologys(value)
    }, [slug])
    return (
        <Container>
            <Header />

            <Details>
                <span>03</span>
                <h4>SPACE LAUNCH</h4>
            </Details>
            <InfoSpace>
                <Info>
                    <Navigation>
                        <ul>
                            {technology.map(item => (
                                <li key={item.id}
                                    className={item.slug === slug && 'active'}
                                    onClick={() => setSlug(item.slug)}
                                >
                                    <a>{item.id}</a>
                                </li>
                            ))}
                        </ul>
                    </Navigation>
                    <TextNavigation>
                        <h4>THE TERMINOLOGY…</h4>
                        <h1>{technologys.name}</h1>
                        <p>{technologys.description}</p>
                    </TextNavigation>
                </Info>
                <ImageAside>
                    <img src={technologys.images?.portrait} />
                </ImageAside>
            </InfoSpace>    
        </Container>
    )
}