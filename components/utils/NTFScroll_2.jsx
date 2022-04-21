import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
class cardData{
    constructor(_orginalId,_id,_VideoName,_orginalIndex,_Power,_Aim,_Time,_Spin){
        this.id=_id;
        this.VideoName=_VideoName;
        this.Power=_Power;
        this.Aim=_Aim;
        this.Time=_Time;
        this.Spin=_Spin;
        this.orginalId=_orginalId;
    }
    id=""
    orginalId=""
    VideoName=""
    active=false
    Power=0
    Aim=0
    Time=0
    Spin=0
}


export default function NTFScroll({items}){
    var num=0;
    let allItems= items.map((value,index)=> 
    new cardData("NTF"+(++num),value.id,value.VideoName,index,Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)));
    
    var getcircleJob = ()=>{
        var circleJob=[]
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 4; y++) {
                circleJob.push(Object.assign({},allItems[y]))
            }
        }
        return [...circleJob];
    }
    var firstR=JSON.parse(JSON.stringify(getcircleJob()));
    var circle = JSON.parse(JSON.stringify(firstR));
    let temp = [].concat(allItems.slice(0,3));
    temp=[...[allItems[3]].concat(temp).concat([allItems[3]])]
    temp[2].active=true;
    temp[0]=Object.assign({},temp[0]);
    temp[0].id="NTF-1"
    const [Carditems,setCarditems] = React.useState(temp)
    const [update,SetUpdate] = React.useState([0,""]);
    const [ActiveItem,SetActiveItem] = React.useState(new cardData());
    const [lastIndex,setlastIndex] = React.useState(4);
    
    const findIndexInCircle=(item)=>{
        for (let index = 3; index < circle.length; index++) {
            if(item.VideoName==circle[index].VideoName){
                return index;
            }
        }
    }
    React.useEffect(()=>{
        var index = findIndexInCircle(ActiveItem)
        var newval = JSON.parse(JSON.stringify(Carditems));
        setTimeout(()=>{        
            if(update[1]=="next"){
                newval.shift();
                newval.push(Object.assign({},circle[index+2]));
                newval[4].id="NTF"+(lastIndex.toString());
            }else if(update[1]=="prev"){
                newval.pop();
                newval=[(Object.assign({},circle[index-2]))].concat(newval);
                newval[0].id="NTF"+(lastIndex.toString());
            }
            setCarditems(newval);
        },200)
    },[ActiveItem,lastIndex])
    
    const Next= ()=>{
        SetActiveItem(Carditems[3]);
        setlastIndex(lastIndex+1);
        SetUpdate([update+1,"next"]);
    }

    const Previous=()=>{
        SetActiveItem(Carditems[1]);
        setlastIndex(lastIndex+1)
        SetUpdate([update+1,"prev"]);
    }

    return(
        <>
            <div className="NTFScroll">
                {
                    Carditems.map(({ id , VideoName },i) => (
                        <div
                            key={id}
                            id={id}
                            active={(i==2).toString()}
                            far={(i==0 || i==4).toString()}
                            style={{display: "inline-block"}}
                            firstorlast={(i==0 || i==4).toString()}
                            className="card">
                                <video 
                                autoPlay={i==2} 
                                playsInline={i==2} 
                                loop
                                muted
                                id={"player" + VideoName}
                                style={{width:"100%"}}>
                                    <source src={"/NTFs/"+VideoName+".mp4"} type="video/mp4"/>
                                </video>
                        </div>
                    ))
                }
            </div>
            <Row style={{margin:"auto",width:"80%"}}>
                <div className="col" style={{justifyContent:"space-between"}}>
                    <button style={{width: "6rem",
                                    height: "3rem",
                                    borderTopRightRadius: "1rem",
                                    borderBottomLeftRadius: "1rem",
                                    color: "white",
                                    backgroundColor: "#0B50D7",
                                    border: "none"}}
                            onClick={()=>Previous()}>Previous</button>
                </div>
                <div className="col">
                    <button style={{width: "6rem",
                                    float: "right",
                                    height: "3rem",
                                    borderTopLeftRadius: "1rem",
                                    borderBottomRightRadius: "1rem",
                                    color: "white",
                                    backgroundColor: "#0B50D7",
                                    border: "none"}}
                            onClick={()=>Next()}>Next</button>
                </div>
            </Row>
            <Row style={{justifyContent: "center"}}>
                <div glass="true" style={{width: "40vw",borderRadius:"2rem",color:"white",fontSize:"min(1.25rem,2vw)",padding:"1rem"}}>
                    <Row>
                        <div className="col">
                            <span>Power</span>
                            <Progress percent={ActiveItem.Power} status="success" />
                        </div>
                        <div className="col">
                            <span>Time</span>
                            <Progress percent={ActiveItem.Time} status="success" />
                        </div>
                    </Row>
                    <Row>
                        <div className="col">
                            <span>Aim</span>
                                <Progress percent={ActiveItem.Aim} status="success" />
                            </div>
                        <div className="col">
                            <span>Spin</span>
                                <Progress percent={ActiveItem.Spin} status="success" />
                            </div>
                    </Row>
                </div>
            </Row>
        </>
    );
}