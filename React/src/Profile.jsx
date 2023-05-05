import Layout from "./Layout";
import kai from "./assets/kai.jpeg";

export default function Profile(){
    return (
        <Layout>
            <div className="container text-center">
                <img src={kai} style={{width:"20%"}} className="rounded"/>
                <h2 className="mt-4">Ricky Kai</h2>
                
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="p-5 text-white rounded" style={{background:"#6F67B4"}}>
                        <h2>75 Kgs</h2>
                        <h2>WEIGHT</h2>
                    </div>
                    <div className="p-5 text-white rounded" style={{background:"#6F67B4"}}>
                        <h2>170 cm</h2>
                        <h2>HEIGHT</h2>
                    </div>
                    <div className="p-5 text-white rounded" style={{background:"#6F67B4"}}>
                        <h2>49 Years</h2>
                        <h2>AGE</h2>
                    </div>
                </div>

                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 3</h1>
                </div>
                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 2</h1>
                </div>
                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 1</h1>
                </div>
            </div>
        </Layout>
    );
}