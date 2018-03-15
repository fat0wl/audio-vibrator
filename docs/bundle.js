/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var oscs = {};
var keys = [];
var deadZone = 0;

var osc = T("sin", {freq:440, mul:0.5});

// env.play();

// audioSequence.start(); // Start the Sequence

// interval.stop(); // Stop the interval
// audioSequence.stop();  // Stop the Sequence
// interval.start(); // Restart the Interval
// audioSequence.start();  // Restart the Sequence

window.onload=function(){
	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	parentElem.addEventListener("pointerdown", pointDown, false);
	parentElem.addEventListener("pointerup", pointUp, false);
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);
}

function pointDown(e) {
	//test to make sure touch is actually in an element
	if (e.target.id !== ""){
		var clickedItem = e.target.id;
		e.stopPropagation();
		// oscs[clickedItem] = {"selected": "true"};
	}
}

function pointUp(e) {

}

function mouseMoved(e){
	var mouseY = e.clientY;
	console.log(mouseY);

	// var mouseDelta = Math.abs(mouseY - e.clientY);
	// if (mouseDelta>deadZone){
	// 	pitchAdjust(mouseY);
	// }
}


function pitchUp(value){
	console.log("increasing pitch");
	osc.freq.value++;
}

function pitchDown(value){
	console.log("decreasing pitch");
	osc.freq.value--;
}

function keyDown(e){
	// console.log(keys);
	if (e.key === 'ArrowDown'){
		pitchDown();
	} else if (e.key === 'ArrowUp'){
		pitchUp();
	} else if (keys.indexOf(e.key) === -1){ // if key hasn't been pressed, add it to keys array
		keys.push(e.key);
		playSound(e.key);
	}
}

function keyUp(e){
	var keyLoc = keys.indexOf(e.key);
	// if key is in keys array, and releases, remove it from keys array
	if (keyLoc !== -1) {
		keys.splice(keyLoc, 1);
		stopSound(e.key);
	}
	// console.log(keys);
}

function playSound(key){
	// console.log("playing " + key);
	osc.play();

}

function stopSound(key){
	// console.log("stopping " + key);
	osc.pause();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDhmMDA4MGNjZWUxMWVmMmI5NGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGtCQUFrQjs7QUFFdEM7O0FBRUEseUJBQXlCOztBQUV6QixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUUsc0NBQXNDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ4ZjAwODBjY2VlMTFlZjJiOTRjIiwidmFyIG9zY3MgPSB7fTtcbnZhciBrZXlzID0gW107XG52YXIgZGVhZFpvbmUgPSAwO1xuXG52YXIgb3NjID0gVChcInNpblwiLCB7ZnJlcTo0NDAsIG11bDowLjV9KTtcblxuLy8gZW52LnBsYXkoKTtcblxuLy8gYXVkaW9TZXF1ZW5jZS5zdGFydCgpOyAvLyBTdGFydCB0aGUgU2VxdWVuY2VcblxuLy8gaW50ZXJ2YWwuc3RvcCgpOyAvLyBTdG9wIHRoZSBpbnRlcnZhbFxuLy8gYXVkaW9TZXF1ZW5jZS5zdG9wKCk7ICAvLyBTdG9wIHRoZSBTZXF1ZW5jZVxuLy8gaW50ZXJ2YWwuc3RhcnQoKTsgLy8gUmVzdGFydCB0aGUgSW50ZXJ2YWxcbi8vIGF1ZGlvU2VxdWVuY2Uuc3RhcnQoKTsgIC8vIFJlc3RhcnQgdGhlIFNlcXVlbmNlXG5cbndpbmRvdy5vbmxvYWQ9ZnVuY3Rpb24oKXtcblx0Ly8gbGlzdGVuIGZvciBldmVudHNcblx0dmFyIHBhcmVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmF1ZGlvLXdyYXBwZXJcIik7XG5cdHBhcmVudEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHBvaW50RG93biwgZmFsc2UpO1xuXHRwYXJlbnRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgcG9pbnRVcCwgZmFsc2UpO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duLCBmYWxzZSk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBwb2ludERvd24oZSkge1xuXHQvL3Rlc3QgdG8gbWFrZSBzdXJlIHRvdWNoIGlzIGFjdHVhbGx5IGluIGFuIGVsZW1lbnRcblx0aWYgKGUudGFyZ2V0LmlkICE9PSBcIlwiKXtcblx0XHR2YXIgY2xpY2tlZEl0ZW0gPSBlLnRhcmdldC5pZDtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdC8vIG9zY3NbY2xpY2tlZEl0ZW1dID0ge1wic2VsZWN0ZWRcIjogXCJ0cnVlXCJ9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBvaW50VXAoZSkge1xuXG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZWQoZSl7XG5cdHZhciBtb3VzZVkgPSBlLmNsaWVudFk7XG5cdGNvbnNvbGUubG9nKG1vdXNlWSk7XG5cblx0Ly8gdmFyIG1vdXNlRGVsdGEgPSBNYXRoLmFicyhtb3VzZVkgLSBlLmNsaWVudFkpO1xuXHQvLyBpZiAobW91c2VEZWx0YT5kZWFkWm9uZSl7XG5cdC8vIFx0cGl0Y2hBZGp1c3QobW91c2VZKTtcblx0Ly8gfVxufVxuXG5cbmZ1bmN0aW9uIHBpdGNoVXAodmFsdWUpe1xuXHRjb25zb2xlLmxvZyhcImluY3JlYXNpbmcgcGl0Y2hcIik7XG5cdG9zYy5mcmVxLnZhbHVlKys7XG59XG5cbmZ1bmN0aW9uIHBpdGNoRG93bih2YWx1ZSl7XG5cdGNvbnNvbGUubG9nKFwiZGVjcmVhc2luZyBwaXRjaFwiKTtcblx0b3NjLmZyZXEudmFsdWUtLTtcbn1cblxuZnVuY3Rpb24ga2V5RG93bihlKXtcblx0Ly8gY29uc29sZS5sb2coa2V5cyk7XG5cdGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpe1xuXHRcdHBpdGNoRG93bigpO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpe1xuXHRcdHBpdGNoVXAoKTtcblx0fSBlbHNlIGlmIChrZXlzLmluZGV4T2YoZS5rZXkpID09PSAtMSl7IC8vIGlmIGtleSBoYXNuJ3QgYmVlbiBwcmVzc2VkLCBhZGQgaXQgdG8ga2V5cyBhcnJheVxuXHRcdGtleXMucHVzaChlLmtleSk7XG5cdFx0cGxheVNvdW5kKGUua2V5KTtcblx0fVxufVxuXG5mdW5jdGlvbiBrZXlVcChlKXtcblx0dmFyIGtleUxvYyA9IGtleXMuaW5kZXhPZihlLmtleSk7XG5cdC8vIGlmIGtleSBpcyBpbiBrZXlzIGFycmF5LCBhbmQgcmVsZWFzZXMsIHJlbW92ZSBpdCBmcm9tIGtleXMgYXJyYXlcblx0aWYgKGtleUxvYyAhPT0gLTEpIHtcblx0XHRrZXlzLnNwbGljZShrZXlMb2MsIDEpO1xuXHRcdHN0b3BTb3VuZChlLmtleSk7XG5cdH1cblx0Ly8gY29uc29sZS5sb2coa2V5cyk7XG59XG5cbmZ1bmN0aW9uIHBsYXlTb3VuZChrZXkpe1xuXHQvLyBjb25zb2xlLmxvZyhcInBsYXlpbmcgXCIgKyBrZXkpO1xuXHRvc2MucGxheSgpO1xuXG59XG5cbmZ1bmN0aW9uIHN0b3BTb3VuZChrZXkpe1xuXHQvLyBjb25zb2xlLmxvZyhcInN0b3BwaW5nIFwiICsga2V5KTtcblx0b3NjLnBhdXNlKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==