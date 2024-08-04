import {useState} from "react";
import {TableRow} from "./TableRow.jsx";


const TITLE = ["Libelle", "Type", "Valeur", "Date", "Propriétaire"]
const style = {
    color: "#4d4d4d"
}

export function Table ({biens}) {



    return <table className="table">
        <thead>
            <tr>
                {TITLE.map((title, index) => {
                    return (<th key={index} style={style}>{title}</th>)
                })}
            </tr>
        </thead>
        <tbody>
            {biens.map((p, index) => {
                return (
                    <TableRow key={index} data={p} />
                )
            })}
        </tbody>
    </table>
}