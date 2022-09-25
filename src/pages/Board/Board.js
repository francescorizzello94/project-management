import { Lane } from "../../components/Lane/Lane";
import { useDataFetch } from "../../hooks/useDataFetch";
import { useEffect, useState } from "react";
import './Board.css';

const lanes = [
  { id: 1, title: 'Pending' },
  { id: 2, title: 'In progress' },
  { id: 3, title: 'Code Review' },
  { id: 4, title: 'Completed' },
];

function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}

function onDragOver(e) {
  e.preventDefault();
}


export const Board = () => {

  const [data, loading, error] = useDataFetch('http://localhost:3001/projects');
  const [projects, loadProjects] = useState([]);

  useEffect(() => {
    loadProjects(data);
  }, [data]);

  /*
onDrop takes an element and the id of the lane because it needs
the id of the dragged element and the lane it should be moved into.
It then uses a filter function to find the task that needs to be
moved and changes the id of the lane.
The updated information will replace the current object for the
project in the state with the setState function.
*/

  function onDrop(e, laneId) {
    const id = e.dataTransfer.getData('id');
    const updatedProjects = projects.filter((element) => {
      if (element.id.toString() === id) {
        element.lane = laneId;
      }
      return element;
    });
    loadProjects(updatedProjects);
  }

  return (
    <div className='board-wrapper'>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          projects={projects
            .filter(
              (element) => element.lane === lane.id
            )}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  )
}