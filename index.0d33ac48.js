var e=document.querySelector("tbody"),n=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),t=document.querySelector(".remove-column"),d=4,c=4;function l(){o.disabled=c>=10,t.disabled=c<=2,n.disabled=d>=10,r.disabled=d<=2}n.addEventListener("click",function(){for(var n=e.insertRow(),r=2;r<c;r++)n.insertCell();d++,l()}),r.addEventListener("click",function(){e.deleteRow(-1),d--,l()}),o.addEventListener("click",function(){for(var n=0;n<d;n++)e.rows[n].insertCell();c++,l()}),t.addEventListener("click",function(){for(var n=0;n<d;n++)e.rows[n].deleteCell(-1);c--,l()});
//# sourceMappingURL=index.0d33ac48.js.map