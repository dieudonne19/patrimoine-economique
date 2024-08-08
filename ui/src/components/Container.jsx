/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom"


export function Container({data}) {

    return <div className="container rounded">
        <Navigation/>
        <Outlet/>
        {/* <Table className="table" data={data} /> */}
    </div>
}

function Navigation() {

    return <nav>
        
    </nav>
}

export function Table({className, data}) {
    const types = ["EPARGNE", "ESPECE", "COURANT"]    

    const biens = data.filter(dt => !types.includes(dt.type))    

    return <table className={className}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Valeur</th>
                <th>Type</th>
                <th>Date</th>
                <th>Propriétaire</th>
            </tr>
        </thead>
        <tbody>
            {biens.map((bien, index) => {
                return (
                    <TableRow key={index} value={bien}/>
                )
            })}
        </tbody>
    </table>
}


function TableRow({value}) {

    return <tr>
        <td>{value.libelle}</td>
        <td>{value.valeur}</td>
        <td>{value.type}</td>
        <td>{value.dateDebut}</td>
        <td>{value.possesseur.nom}</td>
    </tr>
}