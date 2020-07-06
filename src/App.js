import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './components/Card'
import CardChildren from './components/CardChildren'

function App() {
  return (
    <div className="container-fluid px-lg-5">
      <div className="row w-90 mx-lg-n5 align-content-center justify-content-center">
        {/* Children */}
        <section className="col-sm">
          <h4 className="text-center">Version 1</h4>
          <CardChildren img="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&auto=format&fit=crop&h=180&q=80">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </CardChildren>
          <CardChildren>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </CardChildren>
        </section>

        {/* Props */}
        <section className="col-sm">
          <h4 className="text-center">Version 2</h4>
          <Card
            img="https://images.unsplash.com/photo-1496147433903-1e62fdb6f4be?ixlib=rb-1.2.1&auto=format&fit=crop&h=180&q=80"
            title="Card title"
            content="Some quick example text to build on the card title and make up the
              bulk of the card's content."
          />
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
