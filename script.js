draggableElementList=document.getElementsByClassName("draggable");
function mouseOverEvent(){
	this.style.background="yellow";
};
function mouseOutEvent(){
	this.style.background="red";
};
function mouseDownEvent(event){
	this.draggable=true;
	this.positionX=event.x;
	this.positionY=event.y;
	/*this.ElementPositionTop=this.offset.top;
	this.ElementPositionLeft=this.offset.left;*/
};
function mouseUpEvent(){
	console.log("firibg");
	console.log(this.draggable);
	this.draggable=false;
	console.log(this.draggable);
};
function mouseMoveEvent(event){
	if(this.draggable == true){
		console.log(this.draggable);
		console.log("asd");
		this.style.top=(this.clientY+event.y-this.positionY) + "px";
		this.style.left=(this.clientX+event.x-this.positionX) + "px";
		this.positionX=event.x;
		this.positionY=event.y;
	}
};
for (i=0;i<draggableElementList.length;i++){
	draggableElementList[i].addEventListener("mouseover",mouseOverEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mouseout",mouseOutEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mousedown",mouseDownEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mousemove",mouseMoveEvent.bind(draggableElementList[i]));
	draggableElementList[i].addEventListener("mouseup",mouseUpEvent.bind(draggableElementList[i]));
	draggableElementList[i].style.position="relative";
};