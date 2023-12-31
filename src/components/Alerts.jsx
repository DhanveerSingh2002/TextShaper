import React from 'react'

const Alerts = (props) => {
  return (
        props.alert && <div class="alert alert-warning alert-dismissible fade show bg-green-600 text-white text-xl px-0 py-3" role="alert">
            {props.alert.message}
        </div>
  )
}

export default Alerts
