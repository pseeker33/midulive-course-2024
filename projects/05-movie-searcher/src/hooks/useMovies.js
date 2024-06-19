import { useState, useRef, useMemo } from 'react';
import { fetchingMovies } from '../services/fetching.js';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])  
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ( { search }) => {
      if (search === previousSearch.current) return
      //const newMovies = await fetchingMovies({ search })
      //setMovies(newMovies)
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await fetchingMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        // tanto en el try como en el catch
        setLoading(false)
      }
    }
  },[])  
 
  const sortedMovies = useMemo(() => {
    return sort
      ? [ ... movies].sort((a, b) => a.title.localeCompare(b.title)) 
      : movies
  }, [movies, sort])
 
  return {movies: sortedMovies, getMovies, loading}
}

