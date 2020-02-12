let blackKeys = Array.from(document.getElementsByClassName("whitekey"));
let whiteKeys = Array.from(document.getElementsByClassName("blackkey"));
let keys = blackKeys.concat(whiteKeys);


function playSound(note) {
    let sound = new Audio("sounds/" + note + ".mp3");
    sound.volume = 0.1;
    sound.play();
}

for(key = 0; key < keys.length; key++) {
    keys[key].addEventListener("click", function(event) {
       playSound(event.currentTarget.id);
    });
}

let keyMap = {};

// White keys
keyMap["KeyA"] = "c4";
keyMap["KeyS"] = "d4";
keyMap["KeyD"] = "e4";
keyMap["KeyF"] = "f4";
keyMap["KeyG"] = "g4";
keyMap["KeyH"] = "a4";
keyMap["KeyJ"] = "b4";
keyMap["KeyK"] = "c5";

// Black keys
keyMap["KeyW"] = "c_sharp4";
keyMap["KeyE"] = "d_sharp4";
keyMap["KeyT"] = "f_sharp4";
keyMap["KeyY"] = "g_sharp4";
keyMap["KeyU"] = "a_sharp4";

// Stores the original colour of the key
previousState = {};

function pianoKeyboardPress(keyPressed) {
	document.getElementById(keyMap[keyPressed]).click();
	previousState[keyPressed] = document.getElementById(keyMap[keyPressed]).style.background;
	document.getElementById(keyMap[keyPressed]).style.background = "red";
}

function pianoKeyboardRelease(keyReleased) {
	document.getElementById(keyMap[keyReleased]).style.background = previousState[keyReleased];
}

// When the keyboard key for a key is pressed 
window.addEventListener("keypress", function(event) {
    pianoKeyboardPress(event.code);
})


// When the keyboard key for a key is released
window.addEventListener("keyup", function(event) {
	pianoKeyboardRelease(event.code);
});

let playingChord = false;

// Function to play a c chord
function cchord() {
	if(!playingChord) {
    	pianoKeyboardPress("KeyA");
    	pianoKeyboardPress("KeyD");
    	pianoKeybaordPress("KeyG");
    	playingChord = true;

    	setTimeout(function() {
        	pianoKeyboardRelease("KeyA");
        	pianoKeyboardRelease("KeyD");
        	pianoKeyboardRelease("KeyG");
        	playingChord = false;
    	}, 500);
    }
}

function dchord() {
	if(!playingChord) {
		pianoKeyboardPress("KeyS");
		pianoKeyboardPress("KeyT");
		pianoKeyboardPress("KeyH");
    	playingChord = true;

		setTimeout(function() {
    		pianoKeyboardRelease("KeyS");
    		pianoKeyboardRelease("KeyT");
    		pianoKeyboardRelease("KeyH");
        	playingChord = false;
    	}, 500);
    }
}

function echord() {
	if(!playingChord) {
		pianoKeyboardPress("KeyD");
		pianoKeyboardPress("KeyY");
		pianoKeyboardPress("KeyJ");
    	playingChord = true;

		setTimeout(function() {
    		pianoKeyboardRelease("KeyD");
    		pianoKeyboardRelease("KeyY");
    		pianoKeyboardRelease("KeyJ");
        	playingChord = false;
    	}, 500);
    }
}
	


