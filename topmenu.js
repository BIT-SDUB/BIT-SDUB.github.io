/**
 *  @file topmenu.js
 *  @brief Button topmenu for Github pages
 *   
 *  @details   Inserts a top menu in front of body with
 *  	- Link to demo page (optional)
 *  	- Link to releases (optional)
 *  	- Link to sources (mandatory)
 *  	- Level up (mandatory)
 *  	- Home (mandatory)
 *  
 *  Place this file in page.io's root dir
 *  NOTE!! Update SITE
 *  
 *  Call from _config.yml
 *  
 *  title: TITLE                 <script async type="text/javascript">var REPO="REPONAME";</script><script async type="text/javascript" src="/topmenu.js"></script>
 *  description: DESCRIPTION
 *  
 *  Or with options
 *  
 *  title: TITLE                 <script async type="text/javascript">var DEMO="demo.html"; RELEASE="releases"; var REPO="REPO_NAME";</script><script async type="text/javascript" src="/topmenu.js"></script>
 *  description: DESCRIPTION
 *  
 *   
 *  @copyright http://www.gnu.org/licenses/lgpl.txt LGPL version 3
 *  @author    Erik Bachmann <ErikBachmann@ClicketyClick.dk>
 *  @since     2022-11-18T10:22:57 / Erik Bachmann
 *  @version   2022-11-18T15:13:24 / Erik Bachmann
 */
// ClicketyClick.github.io/docs/incl.js
console.log("ClicketyClick.github.io/docs/topmenu.js loading");

var SITE  = "bit-sdub";
var HEAD =  "<div align='right'>";

// Activate DEMO button
if ( typeof DEMO !== 'undefined' ) {
	DEMO = "<button onclick=\"location.href='https://"
    + SITE
    + ".github.io/"
    +REPO
  + "/"
  +	DEMO
  + "'\" title='Demo' type='button' title='Demo'>&#x24B9;</button>";
} else {
	DEMO = "";
}

// Activate RELEASE button
if ( typeof RELEASE !== 'undefined' ) {
	RELEASE = "<button onclick=\"location.href='https://"
    + SITE
    + ".github.io/"
    +REPO
  + "/"
  +	RELEASE
  + "'\" title='RELEASE' type='button' title='Releases'>&#x24C7;</button>";
} else {
	RELEASE = "";
}

// Only repos can have home, up etc. buttons
if ( typeof REPO !== 'undefined' ) {
	HEAD	= HEAD

// Demo
	+ DEMO

// Releases
	+ RELEASE

// Source
  + "<button onclick=\"location.href='https://github.com/"
    + SITE
    + "/"
    + REPO
  + "'\" type='button' title='Source'>&lt;&gt;</button>"

  + "&nbsp;"
// Up
  + "<button onclick=\"location.href='..'\" type='button' title='Up'>&#x2303;</button>"
// Home
  + "<button onclick=\"location.href='/'\" type='button' title='Home'>&#x1F3E0;</button>"
} else {
	HEAD	+= ".";
	REPO	= "";
}

HEAD	+= "</div>";

console.log("SITE=["+SITE+"] REPO=["+REPO+"]");


var FOOTER = "<hr>&copy;2022 Clicketyclick.dk";
document.getElementsByTagName("body")[0].innerHTML = HEAD + document.getElementsByTagName("body")[0].innerHTML + FOOTER;

console.log("ClicketyClick.github.io/docs/topmenu.js  Header and footer inserted");
console.log("ClicketyClick.github.io/docs/topmenu.js  ended");