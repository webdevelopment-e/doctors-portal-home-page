import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
   

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active mr-5" href="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="about">about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="service">Dental Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="link">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="link">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="link">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
