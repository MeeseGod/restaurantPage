(()=>{"use strict";const t=function(){!function(){let t=document.createElement("img");t.setAttribute("id","advertImage"),t.src="images/soylent.png",document.getElementById("display").appendChild(t)}()},e=function(){document.getElementById("display").innerHTML=""};!function(){let t=document.createElement("h1");t.setAttribute("id","header"),t.textContent="O'Brien's Greenery",document.getElementById("content").appendChild(t)}(),function(){let t=document.createElement("p");t.setAttribute("id","slogan"),t.textContent="O'Brien's Soylent - The Food of the People!",document.getElementById("content").appendChild(t)}(),function(){let t=document.createElement("div");t.setAttribute("id","nav"),document.getElementById("content").appendChild(t),function(){let t=document.createElement("button");t.setAttribute("id","homeButton"),t.textContent="Home",document.getElementById("nav").appendChild(t)}(),function(){let t=document.createElement("button");t.setAttribute("id","menuButton"),t.textContent="Menu",document.getElementById("nav").appendChild(t)}(),function(){let t=document.createElement("button");t.setAttribute("id","contactButton"),t.textContent="Contact",document.getElementById("nav").appendChild(t)}()}(),function(){let t=document.createElement("div");t.setAttribute("id","display"),document.getElementById("content").appendChild(t)}(),t(),document.getElementById("homeButton").addEventListener("click",(function(){e(),t()})),document.getElementById("menuButton").addEventListener("click",(function(){e(),function(){let t=document.createElement("div");t.setAttribute("id","menuGrid"),document.getElementById("display").appendChild(t)}()})),document.getElementById("contactButton").addEventListener("click",(function(){e(),function(){let t=document.createElement("div");t.setAttribute("id","contactInfo"),document.getElementById("display").appendChild(t)}()}))})();