import "./style/App.css";
import {Table} from "./Components/Table.jsx";
import {DatePicker} from "./Components/DatePicker.jsx";
import data from "../../data/data.json";
import {useEffect, useState} from "react";
import {Moi, flux, possessions} from "../../index.js";
import {Patrimoine} from "../../models/Patrimoine.js";

function App() {
    const [goods, setGoods] = useState(data[1]);
    const [date, setDate] = useState("");
    const [patrimony, setPatrimony] = useState([]);
    const [patrimonyValue, setPatrimonyValue] = useState(0);

    useEffect(() => {
        const createPatrimony = () => {
            const patrimonies = new Patrimoine(Moi, possessions, flux);
            setPatrimony(patrimonies);
        }

        createPatrimony();
    }, []);
    console.log("render")

    const handleDateChange = (v) => {
        setDate(v)
    }

    const handleClick = () => {
        setPatrimonyValue(patrimony.getPatrimoineValueAt(date))
        setDate("")
    }

    return <div className="col-md-8">
        <Table biens={goods}/>
        <DatePicker onChange={handleDateChange} value={date} onClick={handleClick}/>
        <p>
            Patrimony : {patrimonyValue.toLocaleString()}
        </p>
    </div>
}



export default App