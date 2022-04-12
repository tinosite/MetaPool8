import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {cardData,sideScroll, generateUID} from"./NTFScroll2Need"


export default function NTFScroll({items}){
    var ids=["NTF_ljvv","NTF_23cd","NTF_ufde","NTF_8htb","NTF_30vf"]
    var ShowCount = 5;

    var Items=items.map((value,index)=> 
        new cardData(ids[index],value.VideoName,index,Math.floor(Math.random() * 100),
                     Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)));
    
    Items[1].active=true;

    const [activeItem,SetActiveItem] = React.useState(2);
    
    const GetSliderItems = (ActiveItem)=>{

        const normalizeIndex=(index)=>((index-1) < 0 ? (index-1) + ShowCount-1 : (index-1))%Items.length;
        
        var result = Array(ShowCount).fill(ActiveItem-2).map((_,index) => Object.assign({},Items[normalizeIndex(index+_)]))
        console.log(result)

        var index=-1;
        result.forEach(((v,_)=>{
            v.id=ids[(++index)]
        }));
        return result;
    }
    React.useEffect(()=>{
        console.log("useEffect")
        var container = document.querySelector(".NTFScroll");
        var middle = container.children[Math.floor((container.children.length - 1) / 2)];
        container.scrollLeft = middle.offsetLeft + middle.offsetWidth / 2 - container.offsetWidth / 2;
    },[activeItem]);

    var firstValue = GetSliderItems(2);
    const [ currentItems , setCurrentItems ] = React.useState(firstValue);

    const next=()=>{
        var index=(activeItem+1)%ShowCount;
        SetActiveItem(index)
        var last= currentItems.shift();
        setCurrentItems(currentItems.concat([last]))
    }

    const perv=()=>{
        var index=(((activeItem -1) < 0 ? activeItem + ShowCount : (activeItem -1)) % ShowCount)
        SetActiveItem(index)
    }

    return(
        <>
            <div className="NTFScroll">
                {
                    currentItems.map(({ id , VideoName , active }) => (
                        <div
                            key={id}
                            id={id}
                            active={(ids[activeItem]==id).toString()}
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
                            onClick={()=>perv()}>Previous</button>
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
                            onClick={()=>next()}>Next</button>
                </div>
            </Row>
            {/* <Row style={{justifyContent: "center"}}>
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
            </Row> */}
        </>
    );
}