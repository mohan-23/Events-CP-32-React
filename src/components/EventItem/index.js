import './index.css'

const EventItem = props => {
  const {eventDetails, onStatusEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEvent = () => {
    onStatusEvent(registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
