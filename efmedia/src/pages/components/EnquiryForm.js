import React from 'react'

export default function EnquiryForm() {
  return (
    <>
    <form action="https://formsubmit.co/info@efmedia.co" method="POST">
        <div class="form-group">
            <label for="nameInput">Name:
                <input class="form-control" placeholder="Enter name" id="nameInput" type="text" name="name" required />
            </label>
        </div>
        <div class="form-group">
            <label for="emailInput">Email:
                <input class="form-control" placeholder="Enter email" id="emailInput" type="text" name="email" required />
            </label>
        </div>
        <div class="form-group">
            <label for="messageInput">Message:
                <textarea class="form-control form-long-message" placeholder="Tell us how we can help" id="messageInput" type="text" name="message" required />
            </label>
        </div>
        <button type="submit" class="btn btn-warning form-submit">Submit</button>
    </form>
    </>
  )
}
