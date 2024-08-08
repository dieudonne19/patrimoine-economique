import { Container, Table } from "./Container";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import infos from "../../../data/data.json";
import { useState } from "react";
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        children: [
            {
                path: "possessions",
                children: <Table className="table" data={data} />
            }
        ]
    }
])

export function Homepage() {
    const [data, setData] = useState(infos);

    console.log(data);
    

    return <main className="home">
        <Header data={data.possessions} />
        <Sidebar data={data.flux}/>
        <Container data={data.possessions} />
    </main>
}