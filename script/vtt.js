let vtt = {



}


$("#side-panel").resizable({
	handles: "w",
	minWidth: "250"
});
$("#side-panel").tabs();
$("#new-message").buttonset();
$("#side-panel-toggle").click(()=>$("#side-panel").toggle("blind", {direction: "right"}));
