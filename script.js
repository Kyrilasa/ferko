function opwin(urlPop){

//function opwin(urlPop,windowW,windowH,windowX,windowY){
// var autoclose = true
//s = "width="+windowW+",height="+windowH;
//    NFW = window.open("","popFrameless","fullscreen,"+s)
    NFW = window.open("","popFrameless","fullscreen,")
    NFW.blur()
    NFW.window.focus()       
//    NFW.resizeTo(windowW,windowH)
//    NFW.moveTo(windowX,windowY)
    var frameString=""+
//"<html><head><title>KÉP</title></head>"+
//"<frameset onBlur='self.close()' rows='*,0' framespacing=0 border=0 frameborder=0>"+
//"<frame name='top' src='"+urlPop+"' scrolling=no leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>"+
//"<frame name='bottom' src='about:blank' scrolling='no' leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>"+
//"</frameset>"+
//"</html>"


"<html><head><title>KEP</title></head>"+

"<body background= link=#f000000  vlink=#000000 onBlur='self.close()'><table width=100% border=0 cellspacing=0 cellpadding=0 height=100%><tr><td valign=middle align=center><a href=javascript:; onclick='self.close()'><img src='"+urlPop+"' border=1></a></td></tr></table></body>"+

"</html>"


    NFW.document.open();
    NFW.document.write(frameString)
    NFW.document.close()
	
  NFW.focus()   
//  if (autoclose){
//    window.onunload = function(){NFW.close()}
//  }
}



function ovwin(urlPop){
//var windowW=368
//var windowH=288
//var windowX = 180
//var windowY = 140
//s = "width="+windowW+",height="+windowH;
//    NFW = window.open("","popFrameless","fullscreen,"+s)     
//    NFW.blur()
//    window.focus()       
//    NFW.resizeTo(windowW,windowH)
//    NFW.moveTo(windowX,windowY)
//    var frameString=""+
//"<html><head><title>VIDEO</title></head>"+

//"<body onBlur='self.close()' scrolling=no scrollbar=no leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>"+
//"<embed src="+urlPop+" width=352 height=288 border=1 vspace=0 hspace=0 autostart=true></embed>"+
//"<frameset onBlur='self.close()' rows='*,0' framespacing=0 border=0 frameborder=0>"+
//"<frame name='top' src="+urlPop+" scrolling=no leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>"+
//"<frame name='bottom' src='about:blank' scrolling='no' leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>"+
//"</frameset>"+
//"</body>"+

//"</html>"
NFW = window.open (urlPop)
//NFW.moveTo(160,140)
//NFW.blur()
//document.write("<html>"+urlPop+"</html>")

//    NFW.document.open();
//    NFW.document.write(frameString)
//    NFW.document.close()
//    NFW.focus()   
}