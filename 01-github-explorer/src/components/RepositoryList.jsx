import { RepositoryItem } from "./RepositoryItem.jsx";
import "../styles/repositories.scss";
import { useState } from "react";
import { useEffect } from "react";

const repository = {
    name: "unform1",
    description: "forms in react",
    link: "https://github.com/unform/unform"
}

// https://www.api.github.com/orgs/rocketseat/repos

export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect( () => {
        fetch("https://api.github.com/users/rocketseat/repos").then(
            (response) => response.json()
            .then((data) => setRepositories(data))
        )
    }, [])

    return (
        <section className='repository-list'>
            <h1>
                Lista de repositórios
                <ul>
                    {repositories.map((repository => {
                        return <RepositoryItem key={repository?.id} repository={repository}/>
                    }))}
                    <RepositoryItem repository={repository}/>
                    <RepositoryItem />
                </ul> 
            </h1>
        </section>
    )
}