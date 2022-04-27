import { Header } from '../../components/Header'
import {Container, Content, Info, Details, Aside, Navigation} from '../../styles/stylesCrew'
import Server from '../../../server.json'
import { useState } from 'react';
import { useEffect } from 'react';

type CrewTypes = {
    id: number;
    slug: string;
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}

export default function Crew() {
    const crew: CrewTypes[] = Server.crew
    const [crewSpace, setCrewSpace] = useState<CrewTypes>({} as CrewTypes)
    const [slug, setSlug] = useState<string>('douglas')

    useEffect(() => {
        const value = crew.find((item) => {
            return item.slug === slug
        })
        setCrewSpace(value)
    }, [slug])

    return(
        <Container>
            <Header />
            <Content>
                <Details>
                    <strong>02</strong>
                    <h5>Meet your crew</h5>
                </Details>
                <Info>
                    <h4>{crewSpace.role}</h4>
                    <h1>{crewSpace.name}</h1>
                    <p>{crewSpace.bio}</p>
                    <Navigation>
                        <ul>
                            {crew.map(item => (
                                <li key={item.id}className={item.slug === slug && 'active'}>
                                    <a onClick={() => setSlug(item.slug)}>.</a>
                                </li>
                            ))}
                        </ul>
                    </Navigation>
                </Info>
                
            <Aside>
                <img src={crewSpace.images?.png} />       
            </Aside>
            </Content>
        </Container>
    )
}