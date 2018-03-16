import React from 'react';

const StaticComponent = (props) => {
	return (
		<div>
			<NavBar />
			<Banner />
			<Articles />
			<Footer />
	    </div>
	);
}

const NavBar = () => {
	return (
		<nav className="navbar navbar-default">
	    	<NavLogo />
	    	<NavLink />
	    </nav>
	);
}

const NavLogo = () => {
	return (
		<div className="navbar-header">
			<a className="" href="#">
				<img className="image-responsive" id="navbar-logo" src="http://www.beardeddragonlady.com/uploads/1/3/5/3/13536865/editor/national-geographic-logo.png?1500583448" />
			</a>
		</div>
	);
}

const NavLink = () => {
	return (
      <div id="menu-standard" className="nav">
        <ul>
          <li id="menu-item" className="shop main-nav text-uppercase font-weight-bold"><a href="#">Shop</a></li>
          <li id="menu-item" className="subscribe main-nav text-uppercase font-weight-bold"><a href="#">Subscribe</a></li>
          <li id="menu-item" className="sign-in main-nav text-uppercase font-weight-bold"><a href="#">Sign-in</a></li>
        </ul>
      </div>
	);
}

const Banner = () => {
	return (
		<div className="text-center banner jumbotron">
			<BannerImage />
		</div>
	);
}

const BannerImage = () => {
	return (
		<span>
			<img className="banner-image" src="http://pluspng.com/img-png/logo-national-geographic-png-logo-natgeo-png-1000.png" />
		</span>
	);
}

const Articles = () => {
	return (
	  <div className="row">
			<ArticleLeft />
			<ArticleCenter />
			<ArticleRight />
	  </div>
	);
}

const ArticleLeft = () => {
	return (
		<div className="col-md-3">
	      <div>
	        <div>
	          <img className="side-image" src="https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNfNuDs6wgwFZpcVHujEFyJtcjiC5Jm1ob5No2-BIY3xpwgi4VxF-VvhgFraXN6TN8WL5WytlCgwmYZkLhu_jFShzbLcwrgM5rW5Iy6kZBrEEg0ErybNGrEfo6YvfZWwPIrerUhZ-keroeLRpNoPYxSVnWCsdM2N4VbbgipP1cNl6l1/" />
	          <h3>FIERCE LOOK</h3>
	          <p className="text">A black hawk-eagle takes a shower in Misiones, Argentina. Her eyes are momentarily protected by a nictitating membrane.</p>
	          <button className="btn btn-secondary" type="button">Read More</button>
	        </div>
	      </div>
	    </div>
	);
}

const ArticleCenter = () => {
	return (
	    <div className="col-md-6">
	      <div>
	        <div>
	          <img className="center-image" src="https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNfN00ztqP4IFKCr4JcjiJapY7BlMmanMMt8V8wsKyUci7yVzi5SG3TS7kijrqu0gYfBiROh-79GNIdU3Z5Tabkv4YPS9duBmFDrZcGKigk5K8R7sdMTxK9OTchEABlJV75BsngYUqIbI5Yx3mIWjeDdHVHB1WyII9UBo_sPBjJboYS/" />
	          <h3>STORM BELOW</h3>
	          <p>A summer storm settles in over Beijing, China. Your Shot photographer Qing Hu captured this dramatic scene by using a long exposure of three seconds.</p>
	          <button className="btn btn-secondary" type="button">Read More</button>
	        </div>
	      </div>
	    </div>
	);
}

const ArticleRight = () => {
	return (
	    <div className="col-md-3">
	      <div>
	        <div>
	          <img className="side-image" src="https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNfMsvLk0GtR_xRU0VYJmz8f7IIMZ02xhzCdgvR15Y-pBlXnwQIlHKoeqSjsHgodjvpoRUlCvmkI1LmGwg_fE9Bo3rA0ZW3C8f1NJRmNGJRZKrKKNq5YLrmDkRWOu663PqjnKEujlERztg3Mzm4Ei0X22eVs2UXL-3GjX9ET8u935Eb/" />
	          <h3>ICE TUBE</h3>
	          <p>Mer de Glace is a glacier in the French Alps. Here, adventurers climb up a moulin, a vertical shaft inside of the glacier, to emerge back on top.</p>
	          <button className="btn btn-secondary" type="button">Read More</button>
	        </div>
	      </div>
	    </div>
	);
}

const Footer = () => {
	return (
		<footer className="main-footer">
			<span>&copy;2018 React Bootcamp</span>
		</footer>
	);
}

export default StaticComponent;