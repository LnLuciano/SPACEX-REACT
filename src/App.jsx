import { useState, useEffect } from 'react'
import './App.css'
import { getData } from './utils/GetData'
import { LaunchesGrid } from './components/LaunchesGrid'
import { LaunchData } from './components/LaunchData'
import { Error404 } from './components/Error404'
import { ResolveRoute } from './utils/ResolveRoute'


export const App = () => {
    const [launches, setLaunches] = useState([]);
    const [component, setComponent] = useState(null)
    const [hashChange, setHashChange] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLaunches(await getData());
        }
       
        fetchData();     
    }, [])
    

    useEffect(() => {
        const handleHashChange = () => {
            setHashChange()
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("'hashchange'", handleHashChange);
        };
    }, [launches]);

    
    useEffect(() => {
        const route = ResolveRoute();

        if (route === '/') {
            setComponent(<LaunchesGrid launches={launches}/>);
        } else {
            const launch = launches.find(launch => launch.id === route);
            const comp = launch ? <LaunchData launch={launch}/> : <Error404 />;
            setComponent(comp);
        }
    }, [hashChange, launches])
   

    return (
        <>
            <a href="/"><h1>TP Nº 6</h1></a>
            {component}
        </> 
    )
}

export default App;