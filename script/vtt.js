let vtt = {



}

/* resizable sidebar */
$("#sidebar").resizable({
	handles: "w",
	minWidth: "250"
});
$("#sidebar").tabs();
$("#new-message").buttonset();
$("#sidebar-toggle").click(()=>$("#sidebar").toggle("slide", {direction: "right"}));
