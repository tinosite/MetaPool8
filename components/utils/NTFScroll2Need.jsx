function sideScroll(element,direction,speed,step) {
    console.log("scroll")
    let scrollAmount = 0;
    var slideTimer = setInterval(() => {
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
    }, speed);
  } 

class cardData{
    constructor(_id,_VideoName,_orginalIndex,_Power,_Aim,_Time,_Spin){
        this.id=_id;
        this.VideoName=_VideoName;
        this.orginalIndex=_orginalIndex;
        this.Power=_Power;
        this.Aim=_Aim;
        this.Time=_Time;
        this.Spin=_Spin;
    }
    id=""
    VideoName=""
    active=false
    orginalIndex=-1
    Power=0
    Aim=0
    Time=0
    Spin=0
}
function generateUID() {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

export {cardData,sideScroll,generateUID}