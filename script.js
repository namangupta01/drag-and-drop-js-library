//Before Using this library do remember that all the div that is to be moved is to have position absolute.
draggableElementList=document.getElementsByClassName("draggable");
function mouseOverEvent(){
	this.style.background="yellow";
}
function mouseOutEvent(){
	this.style.background="red";
}
function mouseDownEvent(event){
	this.counter=true;
	this.positionX=event.x;
	this.positionY=event.y;
	this.style.position="absolute";
}
function mouseUpEvent(){
	this.counter=false;
}
function mouseMoveEvent(event){
	if(this.counter==true){
		this.style.top=(this.offsetTop+event.y-this.positionY) + "px";
		this.style.left=(this.offsetLeft+event.x-this.positionX) + "px";
		this.positionX=event.x;
		this.positionY=event.y;
	}
}
for (i=0;i<draggableElementList.length;i++){
	draggableElementList[i].addEventListener("mouseover",mouseOverEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mouseout",mouseOutEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mousedown",mouseDownEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mouseup",mouseUpEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mousemove",mouseMoveEvent.bind(draggableElementList[i]));
	draggableElementList[i].style.position="absolute";
};