//-- FontAwesome Icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
// --styles import
import '../styles/Nav.css'

export default function Nav(){
    return (
        <nav className="nav">
            <FontAwesomeIcon icon={faEarthAmericas} beat size="xl" style={{color: '#fff'}}/>
            <h2 className="nav-title">my travel journal</h2>
        </nav>
    )
}