import {React, useState} from "react";
import Activities from "./Card";
import Profile from "./Profile";
import Layout from "./Layout";
import { userData } from "./api/Session";
import MyProfile from "./MyProfile";

//Add MyProfile to use instead of Profile
export default function MyDashboard(){
    const [name, setName] = useState();

    return(
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        <MyProfile/>
                        
                    </div>
                    <div className="col-sm-7">
                        <Activities/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

