import { useEffect, useState } from "react";
import { Lane } from "../../components/Lane/Lane";
import './Board.css';

const lanes = [
  { id: 1, title: 'Outstanding' },
  { id: 2, title: 'In progress' },
  { id: 3, title: 'Code Review' },
  { id: 4, title: 'Completed' },
];

export const Board = () => {

  const [data, loadData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {

      }
      catch (error) {

      }
    }
  });



  return (
    <div className='board-wrapper'>
      {lanes.map((lane) => (
        <Lane key={lane.id} title={lane.title} />
      ))}
    </div>
  )
}