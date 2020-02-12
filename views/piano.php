<?php require("views/templates/header.php")?>

<body>
	<div class="container">
    	<div class="row">
        	<h1>Piano</h1>
    	</div>
		<div class="row">
    		<div id="keyboard">
        		<div class="whitekey" id="c4"></div>
        		<div class="blackkey" id="c_sharp4"></div>
        		<div class="whitekey" id="d4"></div>
        		<div class="blackkey" id="d_sharp4"></div>
        		<div class="whitekey" id="e4"></div>
        		<div class="whitekey" id="f4"></div>
        		<div class="blackkey" id="f_sharp4"></div>
        		<div class="whitekey" id="g4"></div>
        		<div class="blackkey" id="g_sharp4"></div>
        		<div class="whitekey" id="a4"></div>
        		<div class="blackkey" id="a_sharp4"></div>
        		<div class="whitekey" id="b4"></div>
        		<div class="whitekey" id="c5"></div>
    		</div>
    	</div>
    	<div class="row">
    		<button type="button" onclick="cchord()" class="btn btn-primary">C Chord</button>
    		<button type="button" onclick="dchord()" class="btn btn-primary">D Chord</button>
    		<button type="button" onclick="echord()" class="btn btn-primary">E Chord</button>
    	</div>
    </div>
    <h2>Click a note to play</h2>
    <script src="js/pianosounds.js"></script>
</body>


