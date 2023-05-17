import Layout from "./Layout";
import kai from "./assets/kai.jpeg";
import { userData } from "./api/Session";
import { updateUserData } from "./api/Session";

export default function Profile(){
    return (
        
            <div className="container text-center">
                <img src={kai} style={{width:"20%"}} className="rounded"/>
                <h2 className="mt-4">{userData && userData.username}</h2>
                
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>75 Kgs</h4>
                        <h4>WEIGHT</h4>
                    </div>
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>170 cm</h4>
                        <h4>HEIGHT</h4>
                    </div>
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>49 Years</h4>
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