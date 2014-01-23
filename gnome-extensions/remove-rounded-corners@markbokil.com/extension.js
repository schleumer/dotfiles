// remove rounded corners Gnome Shell Extension
// it is still cool to be square ;)

const Main = imports.ui.main;


function init() {
}

function enable() {
	removeRoundedCorners();
}

function disable() { 
	restoreRoundedCorners();
}

function removeRoundedCorners() {
	Main.panel._leftCorner.actor.set_style("-panel-corner-radius: 0px");
	Main.panel._rightCorner.actor.set_style("-panel-corner-radius: 0px");
}

function restoreRoundedCorners() {
	Main.panel._leftCorner.actor.set_style("-panel-corner-radius: 10px");
	Main.panel._rightCorner.actor.set_style("-panel-corner-radius: 10px");
}

