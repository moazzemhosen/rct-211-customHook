import { useEffect, useState } from "react"


export const useFetch = () => {
    const [data, setData] = useState([])


    const getData = () => {
        fetch("https://api.github.com/search/users?q=masai")
          .then((r) => r.json())
          .then((r) => {
            setData(r.items);
          });
        
        
        
    }
    useEffect(() => {
        getData();
    }, [])
    
    return  data
    
}