import React from "react";

export default function Contact() {
  return (
    <div>
      
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Name"
          aria-label=".form-control-lg example"
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
        ></textarea>
      </div>
      <button>Submit</button>
    </div>
  );
}
