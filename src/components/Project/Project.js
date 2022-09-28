import './Project.css';

export const Project = ({ id, name, lesson, onDragStart}) => {
  return (
    <div className="project-wrapper" draggable onDragStart={(e) => onDragStart(e, id)}>
      <h3>{name}</h3>
      <span id="lesson"><i>Technical summary:</i> <br /><br />{lesson}</span>
    </div>
  )
}
