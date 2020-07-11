import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './components/Card'
// import CardChildren from './components/CardChildren'

function App() {
  return (
    <div className="container-fluid px-lg-5">
      <div className="row w-90 mx-lg-n5 align-content-center justify-content-center">
        <section className="col-sm">
          <Card
            title="Card title"
            content="Some quick example text to build on the card title and make up the
              bulk of the card's content.">
            <img
              src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&auto=format&fit=crop&h=180&q=80"
              className="card-img-top"
              alt=""
              width="100%"
              height="180"
            />
          </Card>
          <Card
            title="Special title treatment"
            content="With supporting text below as a natural lead-in to additional
              content."
          />
        </section>
      </div>
    </div>
  )
}

export default App
