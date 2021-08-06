import { useEffect, useState } from "react";

interface State<T> {
  data?: T
  error?: Error
}

const useFetch = <R extends any = any>(url: string) => {
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    fetchData();
  }, [url]);

  return { loading, error, data };
}

export default useFetch;