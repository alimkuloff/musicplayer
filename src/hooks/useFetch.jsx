import { useState, useEffect } from 'react';
import axios from '../api';

const useFetch = (ENDPOINT) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const response = await axios(ENDPOINT);
            setData(response.data);
         } catch (error) {
            setError(error);
         }
         setLoading(false);
      }
      fetchData();   
   }, [ENDPOINT]);

   return { data, loading, error };
}

export default useFetch