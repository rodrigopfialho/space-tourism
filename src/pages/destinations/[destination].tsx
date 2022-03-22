import { Header } from "../../components/Header";
import {Container, Content, Planet, Info, Distance} from './styles'
import { GetStaticPaths, GetStaticProps } from 'next';
import {api} from "../../service/api"
import { useEffect, useState } from "react";


type DestinationType = {
    id: number;
    name: string;
    description: string;
    distance: number;
    travel: string;
    images: [{
        png: string;
        webp: string;
    }]
}

interface DestinationProps {
    destinations: DestinationType
}

export default function Destination({destinations}:DestinationProps) {
    // const [destination, setDestination] = useState<DestinationProps>({} as DestinationProps)
    
    // useEffect(() => {
    //     api.get('/destinations')
    //         .then((response) => {
    //             console.log(response)
    //             setDestination(response.data)
    //         })
    // }, [])
    
    return (
        <Container>
            <Header />
            
            <Content>
                <Planet>
                    <h4><span>01</span>PICK YOUR DESTINATION</h4>
                    <img src="./assets/destination/image-moon.png" />
                </Planet>
                <Info>
                    <ul>
                        <li className="active">
                            <a>moon</a>
                        </li>
                        <li className="active">
                            <a>mars</a>
                        </li>
                        <li className="active">
                            <a>europa</a>
                        </li>
                        <li className="active">
                            <a>titan</a>
                        </li>
                    </ul>

                    <h1>moon</h1>

                    <p>
                        See our planet as you’ve never seen it 
                        before. A perfect relaxing trip away to 
                        help regain perspective and come back 
                        refreshed. While you’re there, take in 
                        some history by visiting the Luna 2 and
                        Apollo 11 landing sites.
                    </p>
                    <Distance>
                        <div>
                            <span>AVG. DISTANCE</span>
                            <h3>384,400 KM</h3>
                        </div>
                        <div>
                            <span>EST. TRAVEL TIME</span>
                            <h3>3 DAYS</h3>
                        </div>
                    </Distance>
                </Info>
            </Content>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],         
      fallback: false
    }
}
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const {destination} = params

    // const response = await api.get(`/destinations?slug=${destination}`)
    const response = await api.get(`/destinations?slug=${destination}`)

    const destinationInfos: DestinationType = response.data[0]

    return {
        props: {
            destination: destinationInfos
        }
    }
}