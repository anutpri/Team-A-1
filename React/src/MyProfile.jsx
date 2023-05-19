import Layout from "./Layout";
import person from "./assets/person.png";
import { userData } from "./api/Session";
import {React} from "react";

//Add MyProfile for using inside MyDashboard
export default function MyProfile(){
    
    const birthdateObj = userData.birthdate;
    const age = birthdateObj ? new Date().getFullYear() - new Date(birthdateObj).getFullYear() : '';
       
    return (
        
            <div className="container text-center">
                <img src={person} style={{width:"20%"}} className="rounded"/>
                <h2 className="mt-4">{userData && userData.username}</h2>
                
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>{userData && userData.weight} Kgs</h4>
                        <h4>WEIGHT</h4>
                    </div>
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>{userData && userData.height} cm</h4>
                        <h4>HEIGHT</h4>
                    </div>
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>{age} Years</h4>
                        <h4>AGE</h4>
                    </div>
                </div>

                {/* <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 3</h1>
                </div>
                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 2</h1>
                </div>
                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 1</h1>
                </div> */}
            </div>
        
    );
}