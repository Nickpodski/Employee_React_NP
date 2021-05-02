import React, { useState } from "react";

function Navbar(props) {
  const [value, setValue] = useState("");

  const submit = props.onSubmit;

  const handleChange = event => {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <span class="navbar-brand">Employee Database</span>
        <form class="form-inline" onSubmit={submit} value={value}>
          <input id="search" class="form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search" onChange={handleChange}/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;