import { useEffect, useState } from "react";

export const useDataFetch = (source) => {


  const [projects, loadProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const projects = await fetch(source);
        const result = await projects.json();
        if (result) {
          loadProjects(result);
          setLoading(false);
        }
      }
      catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchData();
  }, [source]);

  return (
    [projects, loading, error]
  )
}
