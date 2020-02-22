import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Loader from 'react-loader-spinner'

const TeamUpCalendar = () => {
  return (
    <div className="container rsvp-wrapper">
      <iframe
        src="https://teamup.com/ksf12ax3gcxer5i8w5?showProfileAndInfo=0&showSidepanel=1&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
        width="100%"
        height="700"
        //onLoad={this.hideSpinner}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  )
}

export default TeamUpCalendar


