export function RepositoryItem(props){

    return (
        <li>
            <strong>
                {props.repository?.name ?? 'Default'}
            </strong>
            <p>Forms in ReactJS</p>
            <a href={props.repository?.html_url}>
                Acessar repositórios
            </a>
        </li>
    )
}