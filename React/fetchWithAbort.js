import React, {useState, useEffect, useRef} from "react";

function fetchWithAbort (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const controllerRef = useRef<AbortController | null>(null);

    const fetchData = async (url) => {
        if(controllerRef.current){
            controllerRef.current.abort();
        }

        const controller = new AbortController();
        controllerRef.current = controller;

        setLoading(true);
        setError(null);
        
        try{
            const response = fetch(url, {signal: controller.signal});
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result);
        }
        catch(error){
            if(error.name === "AbortError"){
                console.log('Fetch aborted');
            }
            console.log(error);
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

}