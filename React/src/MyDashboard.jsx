import React from "react";
import Activities from "./Card";
import Profile from "./Profile";
import Layout from "./Layout";
import { userData } from "./api/Session";

export default function MyDashboard(){
    
    return(
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        <Profile/>
                        
                    </div>
                    <div className="col-sm-7">
                        <Activities/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

