import {Component} from 'react'

import './index.css'

const statusList = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {statusLists: statusList}

  renderNoActiveEventView = () => (
    <>
      <p className="no-active-event">
        Click on an event, to view its registration details
      </p>
    </>
  )

  yetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-to-image"
        alt="yet to register"
      />
      <p className="yet-to-para">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="yet-to-button">
        Register Here
      </button>
    </>
  )

  registeredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-image"
        alt="registered"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </>
  )

  registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registration-closed-img"
        alt="registrations closed"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="closed-para">Stay tuned. We will reopen</p>
    </>
  )

  render() {
    const {statusLists} = this.state
    const {eventStatus} = this.props
    console.log(eventStatus)

    switch (eventStatus) {
      case statusLists.yetToRegister:
        return this.yetToRegister()

      case statusLists.registered:
        return this.registeredView()

      case statusLists.registrationsClosed:
        return this.registrationClosed()

      default:
        return this.renderNoActiveEventView()
    }
  }
}

export default ActiveEventRegistrationDetails
