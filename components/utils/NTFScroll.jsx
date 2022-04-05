import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
const sleep = ms => new Promise(r => setTimeout(r, ms));
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

export default function NTFScroll({items}){
    var allItems=items.map((value,index)=> 
        new cardData(value.id,value.VideoName,index,Math.floor(Math.random() * 100),
                     Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)));
   
    var temp = [].concat(allItems.slice(0,3));
    temp[1].active=true;
    
    const [Carditems, setCarditems] = React.useState(temp)
    const [removeLast,SetRemoveLast] = React.useState(0);
    const [ActiveItem,SetActiveItem] = React.useState(new cardData());

    const currentActive= () => Carditems.filter(x=>x.active)[0];
    const setActiveNTF=()=>{
        var current = currentActive();
        var newItem = allItems[(current.orginalIndex + 2 )%allItems.length];
        var newValue=(Carditems.concat(newItem));
        newValue.forEach(item=>{
            if(item.ative){
                current=item;
            }
            item.active=false;
        })
        //+ | -
        newValue.forEach((v,i)=>{
            if(i==newValue.length-2)
                v.active=true;
        });
        
        setCarditems(newValue)
    }
    
    React.useEffect(()=>{
        SetActiveItem(currentActive());
    },[currentActive()])

    React.useEffect(()=>{
        console.log("useEffect")
        setTimeout(()=>{
            console.log("scroll",removeLast)
            document.getElementsByClassName("NTFScroll")[0].scroll(Math.ceil((window.innerWidth * 26 / 100)) , 0);            
        },300)
        setTimeout(() => {
            console.log("delete",[].concat(removeLast==0?Carditems:Carditems.slice(1)))
            setCarditems(()=>[].concat(removeLast==0?Carditems:Carditems.slice(1)))
        },1000)

    },[removeLast])


    const Next=()=>{
        console.log(currentActive())
        setActiveNTF(allItems[((currentActive().orginalIndex + 2 ) % allItems.length)])
        SetRemoveLast(removeLast+1)
    }

    const Previous=()=>{
        // if(activeNTF+1 >= Carditems.length)
        //     setActiveNTF(0);
        // else
        //     setActiveNTF(activeNTF+1);
        // document.getElementsByClassName("NTFScroll")[0].scroll(Math.ceil((window.innerWidth * 26 / 100)) , 0)
        
    }
    return(
        <>
            <div className="NTFScroll">
                {
                    Carditems.map(({ id , VideoName , active }) => (
                        <div
                            key={id}
                            id={id}
                            active={active.toString()}
                            style={{display: "inline-block"}}
                            className="card">
                            {/*autoPlay={true} playsInline={true} loop*/}
                                <video   muted  id={"player" + VideoName} style={{width:"100%"}}>
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