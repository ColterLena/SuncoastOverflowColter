import React from 'react'
import { Link } from 'react-router-dom'

export function ShowQuestion() {
  return (
    <div className="taco-listing">
      <div className="media mb-5">
        <span className="pr-3 display-2" role="img" aria-label="taco">
          🖥
        </span>
        <div className="media-body">
          <h1 className="mt-0">How do you create an object in Javascript?</h1>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          <p></p>
          <p>Programming Languages Used: Javascript</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3>Answers</h3>
          <ul className="timeline">
            <li>
              <p className="mb-2">
                Sed ut perspiciatis unde
                <span className="float-right">6 July, 2020</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
            <li>
              <p className="mb-2">
                At vero eos et accusamus et
                <span className="float-right">4 July, 2020</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Enter your own answer</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                aria-describedby="summaryHelp"
              />
              <small id="summaryHelp" className="form-text text-muted">
                Enter a brief answer to the user's question. Example:{' '}
                <strong>Add this.props. in front of the Park variable.</strong>
              </small>
            </div>
            <div className="form-group">
              <label for="review">Description</label>
              <textarea type="text" className="form-control" id="review" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
