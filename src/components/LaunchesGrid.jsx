import './LaunchesGrid.css'

export const LaunchesGrid = ({ launches }) => {
   
    return (    
        <ol className='launches-grid'>
        {
            launches.map(launch => (
                <a href={`#/${launch.id}/`} key={launch.id}>
                    <article>
                        <h3>{launch.name}</h3>
                        <img src={launch.image}/>
                    </article>
                </a>
            ))
        }    
        </ol>
    )
}