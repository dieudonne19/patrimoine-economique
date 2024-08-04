

export function TableRow({data}) {

    return <tr>
        <td>{data.libelle}</td>
        <td>{data.type}</td>
        <td>{(data.valeur).toLocaleString()}</td>
        <td>{data.dateDebut}</td>
        <td>{data.possesseur.nom}</td>
    </tr>
}