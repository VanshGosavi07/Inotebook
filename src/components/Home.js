import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Notes</h2>
        <form class="my-2">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
        <h2>You Notes</h2>
      </div>
    </div>
  )
}

export default Home
