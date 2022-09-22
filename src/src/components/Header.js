import React, { useEffect, useState, useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Mdlogout} from "./react-icons/bi"


function Header() {
    const navigate = useNavigate();
    const {success, loading, user, authLogout} = useContext(AuthContext)

useEffect(() => {
  if (!user) {
    navigate("/login");
  }
}, [user] );
  return (

      <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">registration app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>

<ul class="navbar-nav ml-auto>"
<li class="nav-item"></li>
<a class="nav-link" href="#">

<faUser />
{user.username}
</a>

<li class ="nav-item">
<a class="nav-link" type="button"
onClick={() => authLogout()}
href="/"><FaSignOutAlt/></a>
</li>


</nav>
        </div>  
      </div>
  )
}

export default Header