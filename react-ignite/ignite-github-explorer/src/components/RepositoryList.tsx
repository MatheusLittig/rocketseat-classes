import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList: React.FC = () => {
  const [ repositories, setRepositories ] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repostory-list" >
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository}/>
        ))}
      </ul>
    </section>
  )
}

export default RepositoryList;