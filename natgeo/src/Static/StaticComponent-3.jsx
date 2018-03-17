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
	    	<NavLinks />
	    </nav>
	);
}

// COMPONENT FOR MAIN LOGO
const NavLogo = () => {
	return (
			<NavLogoLink 
				href={"#"}
				src={"http://www.beardeddragonlady.com/uploads/1/3/5/3/13536865/editor/national-geographic-logo.png?1500583448"}
			/>
	);
}

// PULLS PROPERTIES FROM PARENT COMPONENT, NavLogo
const NavLogoLink = (props) => {
	return (
		<div className="navbar-header">
			<a href={props.href}>
				<img className="image-responsive" id="navbar-logo" src={props.src} />
			</a>
		</div>
	);
}

const NavLinks = () => {
	return (
      <div id="menu-standard" className="nav">
        <ul>
        	<NavLink 
        		href={"#"}
        		linkName={"Shop"}
        	/>
			<NavLink 
        		href={"#"}
        		linkName={"Subscribe"}
			/>
			<NavLink 
        		href={"#"}
        		linkName={"Sign-in"}
			/>
        </ul>
      </div>
	);
}

// PULLS PROPERTIES FROM PARENT COMPONENT, NavLinks
const NavLink = (props) => {
	return (
		<li id="menu-item" className="shop main-nav text-uppercase font-weight-bold">
			<a href={props.href}>{props.linkName}</a>
		</li>
	);
}


// BANNER IMAGE SRC
const Banner = () => {
	return (
		<div className="text-center banner jumbotron">
			<BannerImage 
				src={"http://pluspng.com/img-png/logo-national-geographic-png-logo-natgeo-png-1000.png"}
			/>
		</div>
	);
}

// PULLS PROPERTIES FROM PARENT COMPONENT, Banner
const BannerImage = (props) => {
	return (
		<span>
			<img className="banner-image" src={props.src} />
		</span>
	);
}

// HOLDS ALL ARTLCE COMPONENTS
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
			<Article
				className={"side-image"}
				src={"https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNfNuDs6wgwFZpcVHujEFyJtcjiC5Jm1ob5No2-BIY3xpwgi4VxF-VvhgFraXN6TN8WL5WytlCgwmYZkLhu_jFShzbLcwrgM5rW5Iy6kZBrEEg0ErybNGrEfo6YvfZWwPIrerUhZ-keroeLRpNoPYxSVnWCsdM2N4VbbgipP1cNl6l1/"}
				title={"FIERCE LOOK"}
				description={"A black hawk-eagle takes a shower in Misiones, Argentina. Her eyes are momentarily protected by a nictitating membrane."}
				buttonName={"Read More"}
			/>
		</div>
	);
}

const ArticleCenter = () => {
	return (
		<div className="col-md-6">
			<Article
				className={"center-image"}
				src={"https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNfN00ztqP4IFKCr4JcjiJapY7BlMmanMMt8V8wsKyUci7yVzi5SG3TS7kijrqu0gYfBiROh-79GNIdU3Z5Tabkv4YPS9duBmFDrZcGKigk5K8R7sdMTxK9OTchEABlJV75BsngYUqIbI5Yx3mIWjeDdHVHB1WyII9UBo_sPBjJboYS/"}
				title={"STORM BELOW"}
				description={"A summer storm settles in over Beijing, China. Your Shot photographer Qing Hu captured this dramatic scene by using a long exposure of three seconds."}
				buttonName={"Read More"}
			/>
		</div>
	);
}

const ArticleRight = () => {
	return (
		<div className="col-md-3">
			<Article
				className={"side-image"}
				src={"https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNfMsvLk0GtR_xRU0VYJmz8f7IIMZ02xhzCdgvR15Y-pBlXnwQIlHKoeqSjsHgodjvpoRUlCvmkI1LmGwg_fE9Bo3rA0ZW3C8f1NJRmNGJRZKrKKNq5YLrmDkRWOu663PqjnKEujlERztg3Mzm4Ei0X22eVs2UXL-3GjX9ET8u935Eb/"}
				title={"ICE TUBE"}
				description={"Mer de Glace is a glacier in the French Alps. Here, adventurers climb up a moulin, a vertical shaft inside of the glacier, to emerge back on top."}
				buttonName={"Read More"}
			/>
		</div>
	);
}

// PULLS PROPERTIES FROM PARENT COMPONENT, ArticleRight, ArticleCenter, ArticleLeft
const Article = (props) => {
	return (
        <div>
			<img className={props.className} src={props.src} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<button className="btn btn-secondary" type="button">{props.buttonName}</button>
        </div>
	);
}

const Footer = () => {
	return (
		<footer className="main-footer">
			<span>&copy;2018 React Bootcamp | Mateo</span>
		</footer>
	);
}

export default StaticComponent;