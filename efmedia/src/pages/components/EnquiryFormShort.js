import React from 'react'

export default function EnquiryFormShort() {
  return (
    <>
    <form action="https://formsubmit.co/info@efmedia.co" method="POST">
        <div class="form-group">
                <input class="form-control" placeholder="Name" id="nameInput" type="text" name="name" required />
    
        </div>
        <br></br>
        <div class="form-group">
                <input class="form-control" placeholder="Email" id="emailInput" type="text" name="email" required />
        </div>
        <button type="submit" class="btn btn-warning form-submit">Submit</button>
    </form>
    </>
  )
}
