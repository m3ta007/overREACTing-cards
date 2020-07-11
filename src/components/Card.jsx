import React from 'react'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.css'

function Card(props) {
  return (
    <div
      className="card my-3 mx-auto align-content-center"
      style={{ width: '18rem' }}>
      {/* Image element goes here, if provided */}
      {props.children}

      {/* Default card */}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href="/" className="btn btn-primary">
          <strong>Go somewhere</strong>
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  props: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }),
}

export default Card
