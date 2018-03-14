import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
        <div className="navbar-header">
        <a className="" href="#"><img className="image-responsive" id="navbar-logo" src="http://www.beardeddragonlady.com/uploads/1/3/5/3/13536865/editor/national-geographic-logo.png?1500583448" />
        </a>
          
      </div>
   <div id="menu-standard" className="nav">
        <ul>
          <li id="menu-item" className="shop main-nav text-uppercase font-weight-bold"><a href="#">Shop</a></li>
          <li id="menu-item" className="subscribe main-nav text-uppercase font-weight-bold"><a href="#">Subscribe</a></li>
          <li id="menu-item" className="sign-in main-nav text-uppercase font-weight-bold"><a href="#">Sign-in</a></li>
        </ul>
      </div>
  </nav>

  <div className="text-center banner jumbotron">
    <span><img className="banner-image" src="http://pluspng.com/img-png/logo-national-geographic-png-logo-natgeo-png-1000.png" /></span>
  </div>

  <div className="row">
    <div className="col-md-3">
      <div>
        <div>
          <img className="side-image" src="https://cdn.cnn.com/cnnnext/dam/assets/170927102814-tented-camps-safari-anantara-golden-triangle-super-tease.jpg" />
          <h3>Lorem ipsum dolor</h3>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore alias nihil, inventore necessitatibus enim provident.</p>
          <button className="btn btn-secondary" type="button">Read More</button>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div>
        <div>
          <img className="center-image" src="http://image.pbs.org/video-assets/rc6moTn-asset-mezzanine-16x9-RVQaqL3.jpg" />
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, pariatur. Animi molestiae doloremque pariatur tempora architecto quos tenetur deserunt, sequi odit eaque ex? Autem repellendus vel, dignissimos tenetur magnam? Odit!.</p>
          <button className="btn btn-secondary" type="button">Read More</button>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div>
        <div>
          <img className="side-image" src="https://www.nationalgeographic.com/content/dam/travel/2018-digital/meghalaya-india/school-boys-living-root-bridge-meghalaya-india.adapt.1190.1.jpg" />
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eius voluptatibus ipsam eos, temporibus, officia.</p>
          <button className="btn btn-secondary" type="button">Read More</button>
        </div>
      </div>
    </div>

    <footer className="main-footer">
      <span>&copy;2018 React Bootcamp</span>
    </footer>
</div>
</div>
    );
  }
}

export default App;
