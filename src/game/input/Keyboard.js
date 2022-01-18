class Keyboard {

	constructor(target) {

		this.target = target;

		this.keyNames = [];
		this.keys = [];

		function handleKey(tracker) {
			return function(evt) {
				tracker.updateKey(evt, tracker);
			}
		}

		this.target.addEventListener("keydown", handleKey(this));
		this.target.addEventListener("keyup", handleKey(this));


		this.KEY_BACKSPACE = 8; this.KEY_BS = 8;
		this.KEY_TAB = 9;

		this.KEY_ENTER = 13;
		this.KEY_SHIFT = 16;
		this.KEY_CONTROL = 17; this.KEY_CTRL = 17;
		this.KEY_ALT = 18;
		this.KEY_PAUSE = 19; this.KEY_BREAK = 19;

		this.KEY_CAPSLOCK = 20;

		this.KEY_ESCAPE = 27; this.KEY_ESC = 27;

		this.KEY_SPACE = 32;
		this.KEY_PAGEUP = 33; this.KEY_PGUP = 33;
		this.KEY_PAGEDOWN = 34; this.KEY_PGDN = 34;
		this.KEY_END = 35;
		this.KEY_HOME = 36;

		this.KEY_LEFT = 37;
		this.KEY_UP = 38;
		this.KEY_RIGHT = 39;
		this.KEY_DOWN = 40;

		this.KEY_INSERT = 45; this.KEY_INS = 45;
		this.KEY_DELETE = 46; this.KEY_DEL = 46;

		this.KEY_0 = 48;
		this.KEY_1 = 49;
		this.KEY_2 = 50;
		this.KEY_3 = 51;
		this.KEY_4 = 52;
		this.KEY_5 = 53;
		this.KEY_6 = 54;
		this.KEY_7 = 55;
		this.KEY_8 = 56;
		this.KEY_9 = 57;

		this.KEY_A = 65;
		this.KEY_B = 66;
		this.KEY_C = 67;
		this.KEY_D = 68;
		this.KEY_E = 69;
		this.KEY_F = 70;
		this.KEY_G = 71;
		this.KEY_H = 72;
		this.KEY_I = 73;
		this.KEY_J = 74;
		this.KEY_K = 75;
		this.KEY_L = 76;
		this.KEY_M = 77;
		this.KEY_N = 78;
		this.KEY_O = 79;
		this.KEY_P = 80;
		this.KEY_Q = 81;
		this.KEY_R = 82;
		this.KEY_S = 83;
		this.KEY_T = 84;
		this.KEY_U = 85;
		this.KEY_V = 86;
		this.KEY_W = 87;
		this.KEY_X = 88;
		this.KEY_Y = 89;
		this.KEY_Z = 90;

		this.KEY_NUMPAD0 = 96;
		this.KEY_NUMPAD1 = 97;
		this.KEY_NUMPAD2 = 98;
		this.KEY_NUMPAD3 = 99;
		this.KEY_NUMPAD4 = 100;
		this.KEY_NUMPAD5 = 101;
		this.KEY_NUMPAD6 = 102;
		this.KEY_NUMPAD7 = 103;
		this.KEY_NUMPAD8 = 104;
		this.KEY_NUMPAD9 = 105;

		this.KEY_MULTIPLY = 106;
		this.KEY_ADD = 107;
		this.KEY_SUBTRACT = 109;
		this.KEY_DECIMAL = 110;
		this.KEY_DIVIDE = 111;

		this.KEY_F1 =  112;
		this.KEY_F2 =  113;
		this.KEY_F3 =  114;
		this.KEY_F4 =  115;
		this.KEY_F5 =  116;
		this.KEY_F6 =  117;
		this.KEY_F7 =  118;
		this.KEY_F8 =  119;
		this.KEY_F9 =  120;
		this.KEY_F10 = 121;
		this.KEY_F11 = 122;
		this.KEY_F12 = 123;

		this.KEY_NUMLOCK = 144;
		this.KEY_SCROLLLOCK = 145;

		this.KEY_SEMICOLON = 186;
		this.KEY_EQUAL = 187;
		this.KEY_COMMA = 188;
		this.KEY_DASH = 189;
		this.KEY_PERIOD = 190;

		this.KEY_SLASH = 191;
		this.KEY_GRAVE = 192;
		this.KEY_OPENBRACKET = 219;
		this.KEY_BACKSLASH = 220;
		this.KEY_CLOSEBRACKET = 221;
		this.KEY_SINGLEQUOTE = 222;


		this.keyNames[this.KEY_BACKSPACE] = "backspace";
		this.keyNames[this.KEY_TAB] = "tab";

		this.keyNames[this.KEY_ENTER] = "enter";
		this.keyNames[this.KEY_SHIFT] = "shift";
		this.keyNames[this.KEY_CONTROL] = "control";
		this.keyNames[this.KEY_ALT] = "alt";
		this.keyNames[this.KEY_PAUSE] = "pause/break";

		this.keyNames[this.KEY_CAPSLOCK] = "caps lock";

		this.keyNames[this.KEY_ESCAPE] = "esc";

		this.keyNames[this.KEY_SPACE] = "space";
		this.keyNames[this.KEY_PAGEUP] = "page up";
		this.keyNames[this.KEY_PAGEDOWN] = "page down";
		this.keyNames[this.KEY_END] = "end";
		this.keyNames[this.KEY_HOME] = "home";

		this.keyNames[this.KEY_LEFT] = "left arrow";
		this.keyNames[this.KEY_UP] = "up arrow";
		this.keyNames[this.KEY_RIGHT] = "right arrow";
		this.keyNames[this.KEY_DOWN] = "down arrow";

		this.keyNames[this.KEY_INSERT] = "insert";
		this.keyNames[this.KEY_DELETE] = "delete";

		this.keyNames[this.KEY_0] = "0";
		this.keyNames[this.KEY_1] = "1";
		this.keyNames[this.KEY_2] = "2";
		this.keyNames[this.KEY_3] = "3";
		this.keyNames[this.KEY_4] = "4";
		this.keyNames[this.KEY_5] = "5";
		this.keyNames[this.KEY_6] = "6";
		this.keyNames[this.KEY_7] = "7";
		this.keyNames[this.KEY_8] = "8";
		this.keyNames[this.KEY_9] = "9";

		this.keyNames[this.KEY_A] = "a";
		this.keyNames[this.KEY_B] = "b";
		this.keyNames[this.KEY_C] = "c";
		this.keyNames[this.KEY_D] = "d";
		this.keyNames[this.KEY_E] = "e";
		this.keyNames[this.KEY_F] = "f";
		this.keyNames[this.KEY_G] = "g";
		this.keyNames[this.KEY_H] = "h";
		this.keyNames[this.KEY_I] = "i";
		this.keyNames[this.KEY_J] = "j";
		this.keyNames[this.KEY_K] = "k";
		this.keyNames[this.KEY_L] = "l";
		this.keyNames[this.KEY_M] = "m";
		this.keyNames[this.KEY_N] = "n";
		this.keyNames[this.KEY_O] = "o";
		this.keyNames[this.KEY_P] = "p";
		this.keyNames[this.KEY_Q] = "q";
		this.keyNames[this.KEY_R] = "r";
		this.keyNames[this.KEY_S] = "s";
		this.keyNames[this.KEY_T] = "t";
		this.keyNames[this.KEY_U] = "u";
		this.keyNames[this.KEY_V] = "v";
		this.keyNames[this.KEY_W] = "w";
		this.keyNames[this.KEY_X] = "x";
		this.keyNames[this.KEY_Y] = "y";
		this.keyNames[this.KEY_Z] = "z";

		this.keyNames[this.KEY_NUMPAD0] = "numpad 0";
		this.keyNames[this.KEY_NUMPAD1] = "numpad 1";
		this.keyNames[this.KEY_NUMPAD2] = "numpad 2";
		this.keyNames[this.KEY_NUMPAD3] = "numpad 3";
		this.keyNames[this.KEY_NUMPAD4] = "numpad 4";
		this.keyNames[this.KEY_NUMPAD5] = "numpad 5";
		this.keyNames[this.KEY_NUMPAD6] = "numpad 6";
		this.keyNames[this.KEY_NUMPAD7] = "numpad 7";
		this.keyNames[this.KEY_NUMPAD8] = "numpad 8";
		this.keyNames[this.KEY_NUMPAD9] = "numpad 9";

		this.keyNames[this.KEY_MULTIPLY] = "multiply";
		this.keyNames[this.KEY_add] = "add";
		this.keyNames[this.KEY_SUBTRACT] = "subtract";
		this.keyNames[this.KEY_DECIMAL] = "decimal point";
		this.keyNames[this.KEY_DIVIDE] = "divide";

		this.keyNames[this.KEY_F1]  = "f1";
		this.keyNames[this.KEY_F2]  = "f2";
		this.keyNames[this.KEY_F3]  = "f3";
		this.keyNames[this.KEY_F4]  = "f4";
		this.keyNames[this.KEY_F5]  = "f5";
		this.keyNames[this.KEY_F6]  = "f6";
		this.keyNames[this.KEY_F7]  = "f7";
		this.keyNames[this.KEY_F8]  = "f8";
		this.keyNames[this.KEY_F9]  = "f9";
		this.keyNames[this.KEY_F10] = "f10";
		this.keyNames[this.KEY_F11] = "f11";
		this.keyNames[this.KEY_F12] = "f12";

		this.keyNames[this.KEY_NUMLOCK] = "num lock";
		this.keyNames[this.KEY_SCROLLLOCK] = "scroll lock";

		this.keyNames[this.KEY_SEMICOLON] = "semicolon";
		this.keyNames[this.KEY_EQUAL] = "equal sign";
		this.keyNames[this.KEY_COMMA] = "comma";
		this.keyNames[this.KEY_DASH] = "dash";
		this.keyNames[this.KEY_PERIOD] = "period";

		this.keyNames[this.KEY_SLASH] = "slash";
		this.keyNames[this.KEY_GRAVE] = "grave accent";
		this.keyNames[this.KEY_OPENBRACKET] = "open bracket";
		this.keyNames[this.KEY_BACKSLASH] = "backslash";
		this.keyNames[this.KEY_CLOSEBRACKET] = "close bracket";
		this.keyNames[this.KEY_SINGLEQUOTE] = "single quote";

	}


	keyName(key) {
		return this.keyNames[key] ? this.keyNames[key] : "{" + key + "}";
	}

	isPressed() {
		var keyList = arguments;
		for (var i = 0; i < keyList.length; i++) {
			if (!this.keys[keyList[i]]) {
				return false;
			}
		}
		return true;
	}

	anyPressed() {
		var keyList = arguments;
		if (keyList.length == 0) {
			for (var i = 0; i < this.keys.length; i++) {
				if (this.keys[i]) {
					return true;
				}
			}
		} else {
			for (var i = 0; i < keyList.length; i++) {
				if (this.keys[keyList[i]]) {
					return true;
				}
			}
		}
		return false;
	}

	keysDown() {
		var result = [];
		for (var i = 0; i < this.keys.length; i++) {
			if (this.keys[i]) {
				result.push(i);
			}
		}
		return result;
	}

	updateKey(evt, tracker) {
		tracker.keys[evt.which] = evt.type == "keydown";
	}


}