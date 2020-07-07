import React from 'react'

export function AddQuestion() {
  return (
    <div className="card">
      <div className="card-header">Ask a Question</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="name">What Question Would You Like to Ask?</label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea type="text" className="form-control" id="description" />
            <small id="descriptionHelp" className="form-text text-muted">
              Please enter a detailed description of the question you would like
              to ask.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Programming Languages Used in Your Code
            </label>
            <textarea type="text" className="form-control" id="address" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
