//Popup js
function PopupWindow(){}

PopupWindow.prototype.setSize = function(){
  this.popupWidth = this.sizeWindow ? this.sizeWindow * 100 : 100;
  return this.popupWidth;
};

PopupWindow.prototype.setOpt = function(){
	var sizeSet = this.setSize();
	
	this.popupOptLeft = ($(window).width()/2)-(this.popupWidth/2);
  	this.popupOptTop =  ($(window).height()/2)-(this.popupWidth/2) ;
  	
  	return sizeSet ? 'width='+this.popupWidth+', height='+this.popupWidth+', top='+this.popupOptTop+', left='+this.popupOptLeft : '';
};

PopupWindow.prototype.open = function(url, size){
  this.sizeWindow = size;

  var opt = this.setOpt(); 
  var win=window.open(url, '_blank', opt);
  win.focus();
  return false;
};

var _popupWindow = new PopupWindow();