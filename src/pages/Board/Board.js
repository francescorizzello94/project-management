import { Lane } from "../../components/Lane/Lane";
import { useDataFetch } from "../../hooks/useDataFetch";
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

  const [projects, loading, error] = useDataFetch('http://localhost:3001/projects');

  return (
    <div className='board-wrapper'>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          projects={projects
            .filter(
              (element) => element.lane === lane.id
            )}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
        />
      ))}
    </div>
  )
}