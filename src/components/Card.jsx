import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'

function Card(props) {
  return (
    <section>
      <div className="card m-3" style={{ width: '18rem' }}>
        <img
          src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&auto=format&fit=crop&h=180&q=80"
          className="card-img-top"
          alt="Black road bike by Josh Nuttall at Unsplash"
          width="100%"
          height="180"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            <strong>Go somewhere</strong>
          </a>
        </div>
      </div>
      <div className="card m-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary">
            <strong>Go somewhere</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {}

export default Card
