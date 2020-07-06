import React from 'react'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.css'

function CardChildren(props) {
  return (
    <div className="card my-3 mx-auto" style={{ width: '18rem' }}>
      {props.img && (
        <img
          src={props.img}
          className="card-img-top"
          alt=""
          width="100%"
          height="180"
        />
      )}
      <div className="card-body">
        {props.children}
        <a href="/" className="btn btn-primary">
          <strong>Go somewhere</strong>
        </a>
      </div>
    </div>
  )
}

CardChildren.propTypes = {
  props: PropTypes.objectOf({
    img: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default CardChildren
