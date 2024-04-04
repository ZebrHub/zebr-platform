import { ProjectTop3 } from './ProjectTop3'
import './style.scss'

export function Top3Project() {
    return (
        <div className='top3Project-container'>
            <div className='div-title'>
                <h3>Top 3 |</h3> <span>Os queridinhos da Hub</span>
            </div>
            <div className='content'>
                <ProjectTop3 />
                <ProjectTop3 />
                <ProjectTop3 />
            </div>
        </div>
    )
}