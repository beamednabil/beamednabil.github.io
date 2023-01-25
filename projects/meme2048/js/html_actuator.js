function HTMLActuator(){this.tileContainer=document.querySelector(".tile-container"),this.scoreContainer=document.querySelector(".score-container"),this.bestContainer=document.querySelector(".best-container"),this.messageContainer=document.querySelector(".game-message"),this.score=0}HTMLActuator.prototype.actuate=function(t,e){var o=this;window.requestAnimationFrame((function(){o.clearContainer(o.tileContainer),t.cells.forEach((function(t){t.forEach((function(t){t&&o.addTile(t)}))})),o.updateScore(e.score),o.updateBestScore(e.bestScore),e.terminated&&(e.over?o.message(!1):e.won&&o.message(!0))}))},HTMLActuator.prototype.continueGame=function(){this.clearMessage()},HTMLActuator.prototype.clearContainer=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},HTMLActuator.prototype.addTile=function(t){var e=this,o=document.createElement("div"),i=document.createElement("div"),n=t.previousPosition||{x:t.x,y:t.y},s=this.positionClass(n),r=["tile","tile-"+t.value,s];t.value>2048&&r.push("tile-super"),this.applyClasses(o,r),i.classList.add("tile-inner"),i.textContent=t.value,t.previousPosition?window.requestAnimationFrame((function(){r[2]=e.positionClass({x:t.x,y:t.y}),e.applyClasses(o,r)})):t.mergedFrom?(r.push("tile-merged"),this.applyClasses(o,r),t.mergedFrom.forEach((function(t){e.addTile(t)}))):(r.push("tile-new"),this.applyClasses(o,r)),o.appendChild(i),this.tileContainer.appendChild(o)},HTMLActuator.prototype.applyClasses=function(t,e){t.setAttribute("class",e.join(" "))},HTMLActuator.prototype.normalizePosition=function(t){return{x:t.x+1,y:t.y+1}},HTMLActuator.prototype.positionClass=function(t){return"tile-position-"+(t=this.normalizePosition(t)).x+"-"+t.y},HTMLActuator.prototype.updateScore=function(t){this.clearContainer(this.scoreContainer);var e=t-this.score;if(this.score=t,this.scoreContainer.textContent=this.score,e>0){var o=document.createElement("div");o.classList.add("score-addition"),o.textContent="+"+e,this.scoreContainer.appendChild(o)}},HTMLActuator.prototype.updateBestScore=function(t){this.bestContainer.textContent=t},HTMLActuator.prototype.message=function(t){var e=t?"game-won":"game-over",o=t?"A winner is you!":"Fail!";this.messageContainer.classList.add(e),this.messageContainer.getElementsByTagName("p")[0].textContent=o},HTMLActuator.prototype.clearMessage=function(){this.messageContainer.classList.remove("game-won"),this.messageContainer.classList.remove("game-over")};
