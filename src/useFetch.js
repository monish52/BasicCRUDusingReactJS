import {useState,useEffect } from 'react';

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=>{
        const abortCont=new AbortController();

        fetch(url,{signal: abortCont.signal})
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setData(data);
            setIsLoading(false);
        })
        .catch((e)=>{
            if(e.name==='AbortError'){
                console.log('fetch aborted')
            }else{
                setIsLoading(false);
                console.log(e.message);
            }
        })

        return ()=>abortCont.abort();
    },[url]);
    return {data, isLoading};
}

export default useFetch;