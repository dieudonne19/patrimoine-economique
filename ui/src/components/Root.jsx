import { Header } from "./Header";
import JSON from "../../../data/data.json";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Patrimoine } from "../../../models/Patrimoine";
import { flux, Moi, possessions } from "../../..";


const patrimony = new Patrimoine(Moi, possessions, flux, "2024-08-08");


export function Root() {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(JSON);
    const [date, setDate] = useState("");
    const [isThereError, setIsThereError] = useState(false);
    const [patrimonyValue, setPatrimonyValue] = useState(0);
    // console.log(data);
    const handleClick = () => {
        
        if (!isNaN(new Date(date).getDate())) {

            
            setPatrimonyValue(patrimony.getPatrimoineValueAt(date).total);
            sessionStorage.setItem("patrimoine", patrimony.getPatrimoineValueAt(date).total)
            sessionStorage.setItem("savingsAccount", patrimony.getPatrimoineValueAt(date).savingsAccount)

            data.push({patrimoine: patrimony.getPatrimoineValueAt(date).total})
            setDate("")
            
        } else {
            console.log(date.length, "lenghthhthth");
            setIsThereError(!isThereError)
        }
    }


    return <main>
        <Header data={data[1].data.possessions} />
        <Sidebar data={data[1].data.flux}/>
    
        <div className="container round" >

            <nav className="nav" >
                <a  href="/flux">flux</a>
                <a href="/">possessions</a>
            </nav>

            <Outlet/>

            <div className={`date-picker round ${isThereError ? "border-danger": ""}`}>
                <input 
                    id="date"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button className="btn" onClick={() => handleClick()}>Valid</button>
                <p hidden={isThereError ? false : true} className={`${isThereError ? "text-danger" : ""}`}>
                    Date is invalid
                </p>
            </div>

        </div>
    </main>
}