import axios from "axios";
import React, { useEffect, useState } from "react";

const DashBoard = ()=>{
    const [res, setRes] = useState([]);
    const [filteredData, setFilteredData] = useState();
    const [selectedTopic, setSelectedTopic] = useState("All");
    useEffect(()=>{
        axios.get("http://localhost:3000/api/data")
        .then((res)=>{
            setRes(res.data);
        })
        .catch(err=>console.error(err))
    }, [res])
    
    useEffect(()=>{
        const filtered = res.filter((item)=>selectedTopic == "All" || item.topic == selectedTopic);
        setFilteredData(filtered);
    }, [filteredData])

    const handleTopicChange = (event)=>{
        setSelectedTopic(event.target.value);
    } 

    return (
        <>
            
        </>
    )
}

export default DashBoard;