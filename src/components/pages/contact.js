import React from "react";

export default function Contact() {
  return (
    <div>
      
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Name"
          aria-label=".form-control-sm example"
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Address
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
        ></textarea>
      </div>
      <button>Submit</button>
    </div>
  );
}
