import React from "react";
import '../css/ProjectCard2.css';
// import projectExample from '../img/code.png'

function ProjectCard2() {
	return (
<div class="product-card">
  <div class="product-image"></div>
  <div class="product-details">
    <h2 class="product-title">Product Title</h2>
    <p class="product-description">Product Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div class="product-icons">
      <i class="material-icons">star</i>
      <i class="material-icons">favorite</i>
      <i class="material-icons">share</i>
    </div>
  </div>
</div>
	);
}

export default ProjectCard2;
