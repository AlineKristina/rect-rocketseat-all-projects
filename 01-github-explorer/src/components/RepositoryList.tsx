import { RepositoryItem } from "./RepositoryItem.tsx";
import "../styles/repositories.scss";
import { useState } from "react";
import { useEffect } from "react";

const repository = {
    name: "unform1",
    description: "forms in react",
    html_url: "https://github.com/unform/unform"
}

// https://www.api.github.com/orgs/rocketseat/repos

interface Repository{
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

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
                </ul> 
            </h1>
        </section>
    )
}