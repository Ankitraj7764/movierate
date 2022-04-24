import React from 'react';

 

function Slide(){
    return(
        
       <>
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <a class="navbar-brand" href="#">Some Polular Movies</a>
    <div className="carousel-item active">
      <img src={require('./joker1.jpg')} />
    </div>
    <div class="carousel-item">
    <img src={require('./jersey11.jpg')} />
    </div>
    <div class="carousel-item">
    <img src={require('./friends.jpg')} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
       </>
        
    );
}
export default Slide;
