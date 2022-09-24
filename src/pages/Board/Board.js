import { useEffect, useState } from "react";
import { Lane } from "../../components/Lane/Lane";
import './Board.css';

const lanes = [
  { id: 1, title: 'Pending' },
  { id: 2, title: 'In progress' },
  { id: 3, title: 'Code Review' },
  { id: 4, title: 'Completed' },
];

export const Board = () => {

  const [data, loadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {
        const projects = await fetch();
        const result = await projects.json();
        if (result) {
          loadData(result);
          setLoading(false);
        }
      }
      catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchData();
  }, []);



  return (
    <div className='board-wrapper'>
      {lanes.map((lane) => (
        <Lane key={lane.id} title={lane.title} />
      ))}
    </div>
  )
}