import { Header } from "../../components/Header";
import {Container, Content, Planet, Info, Distance} from './styles'
import { useEffect, useState } from "react";
import Server from '../../../server.json'


type DestinationType = {
    slug: string;
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

export default function Destination() {
    const destinations: DestinationType[] = Server.destinations
    const [destination, setDestination] = useState<DestinationType>({} as DestinationType)
    const [slug, setSlug] = useState<string>('moon')
    
    useEffect(() => {
        const value = destinations.find((item) => {
            return item.slug === slug
        })

        setDestination(value)
    }, [slug])
    
    return (
        <Container>
            <Header />
            <Content>
                <Planet>
                    <h4><span>01</span>PICK YOUR DESTINATION</h4>
                    <img src={destination.images?.png} />
                </Planet>
                <Info>
                    <ul>
                        {destinations.map(item => (
                            <li className={item.slug === slug && 'active'}>
                                <a onClick={() => setSlug(item.slug)}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <h1>{destination.name}</h1>
                    <p>
                        {destination.description}
                    </p>
                    <Distance>
                        <div>
                            <span>AVG. DISTANCE</span>
                            <h3>{destination.distance}</h3>
                        </div>
                        <div>
                            <span>EST. TRAVEL TIME</span>
                            <h3>{destination.travel}</h3>
                        </div>
                    </Distance>
                </Info>
            </Content>
        </Container>
    )
}
