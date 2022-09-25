import { Project } from "../Project/Project";
import { useDataFetch } from "../../hooks/useDataFetch";
import './Backlog.css';

export const Backlog = () => {
  const [projects, loading, error] = useDataFetch('http://localhost:3001/projects');

  return (
    <>
      <div className="backlog-wrapper">
        <h2>Backlog</h2>
        <div className="projects-backlog-wrapper">
          {
            loading
              ||
              error
              ?
              (
                <span>
                  {
                    error
                    ||
                    'Loading...'
                  }
                </span>
              )
              :
              (
                projects.map((element) => (
                  <Project
                    key={element.id}
                    name={element.name}
                    lesson={element.lesson}
                  />
                ))
              )
          }
        </div>
      </div>
    </>
  )
}