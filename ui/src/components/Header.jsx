

const TITLE = ["Patrimony", "Money", "Savings Account", "Current Account"]


export function Header({data}) {
    

    return <header className="round">
        {
            TITLE.map((title, index) => {
                return (
                    <MoneyCard 
                        key={index}  
                        title={title} 
                        value={matchValueWithTitle(title, data)} 
                    />
                )
            })
        }
    </header>
}

/**
 * 
 * @param {String} title
 * @param {Array} data 
 * @returns 
 */
function matchValueWithTitle(title, data) {
    if (title === "Money") return data?.[3].valeur
    else if (title === "Savings Account") return data?.[4].valeur
    else if (title === "Current Account")return data?.[5].valeur
    else return 0;
}


function MoneyCard({title, value}) {

    return <div className="card round centered">
        <p style={{color: "#40408080"}} >{title}</p>
        <h3>
            <span style={{fontSize: "1rem"}}>Ar </span>
            {value.toLocaleString()}
        </h3>
    </div>
}