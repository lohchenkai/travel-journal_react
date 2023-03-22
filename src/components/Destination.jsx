//-- FontAwesome Icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
//-- Styles import
import '../styles/Destination.css'

export default function Destination(props){
    // destructure props
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props

    // title: "Mount Fuji",
    // location: "Japan",
    // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    // startDate: "12 Jan, 2021",
    // endDate: "24 Jan, 2021",
    // description:
    //   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    // imageUrl: "https://source.unsplash.com/WLxQvbMyfas",

    return (
        <section className="destination">
            <img src={imageUrl} alt={title} className='destination-image' />
            <div className="destination-info">
                <div className="destination-location">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#F55A5A",}} />
                    <h3 className="destination-country">{location}</h3>
                    <a className='destination-link' href={googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="destination-title bold">{title}</h2>
                <p className="destination-date bold">{`${startDate} - ${endDate}`}</p>
                <p className="destination-description">{description}</p>
            </div>
        </section>
    )
}