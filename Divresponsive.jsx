import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import suvs from "./animals/icon-suvs.svg";
import sedans from "./animals/icon-sedans.svg";
import luxury from "./animals/icon-luxury.svg";
import './div.css'
import { Container } from "react-bootstrap";
import { authorize } from "passport";
import "@fontsource/big-shoulders-display"
class Divresponsiv extends Component{
    state={
        btn1:false,
        btn2:false,
        btn3:false
    }
    handlebtn=(num)=>{
        let s1={...this.state};
        if(num==1){
            s1.btn1=true;
            s1.btn2=false;
            s1.btn3=false;
        }else if(num==2){
            s1.btn1=false;
            s1.btn2=true;
            s1.btn3=false;
        }else {
            s1.btn1=false;
            s1.btn2=false;
            s1.btn3=true;
        }
        this.setState(s1);
    }
    
    render(){
        let {btn1,btn2,btn3}=this.state;
        return(
            <div className="  "  style={{height:"100vh",weidth:"100vw",padding:"10%",fontSize:"15px"}}>
                <div className="row p-4" style={{display:"flex"}}>
                    <div className="div1 col-md-6 col-sm-12 col-lg-4 p-4">
                        <img src={sedans}></img><br/><br/>
                        

                        
                        <h4 >SEDANS</h4> 
                        <span className="text">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</span>
                        <br/><br/><br/>
                        {btn1===false 
                            ?<button className="unclickbtn btn text-light" onClick={()=>this.handlebtn(1)} >
                                Learn More
                            </button>
                            :<button className="btn btn-light" onClick={()=>this.handlebtn(1)} style={{color:"hsl(31, 77%, 52%)",borderRadius:50}}>
                                Learn More
                            </button>}
                    </div>
                    <div className="div2 col-md-6 col-sm-12 col-lg-4 p-4">
                        <img src={suvs}></img><br/><br/>
                        <h4>SUVs</h4> 
                        <span className="text">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</span>
                        <br/><br/><br/>
                        {btn2===false 
                            ?<button className="unclickbtn btn text-light" onClick={()=>this.handlebtn(2)}>
                                Learn More
                            </button>
                            :<button className="btn btn-light" onClick={()=>this.handlebtn(2)} style={{color:"hsl(184, 100%, 22%)",borderRadius:50}}>
                                Learn More
                            </button>}
                    </div>
                    <div className="div3 col-md-6 col-sm-12 col-lg-4 p-4">
                        <img src={luxury}></img><br/><br/>
                        <h4>LUXURY</h4> 
                        <span className="text">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</span>
                        <br/><br/><br/>
                        {btn3===false 
                            ?<button className="unclickbtn btn text-light" onClick={()=>this.handlebtn(3)}>
                                Learn More
                            </button>
                            :<button className="btn btn-light" onClick={()=>this.handlebtn(3)} style={{color:"hsl(179, 100%, 13%)",borderRadius:50}}>
                                Learn More
                            </button>}
                    </div>
                </div>
            </div>
        )
    }
}
export default Divresponsiv;