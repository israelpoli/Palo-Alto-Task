import React, { useState } from 'react'
import './up_to_server.css'

function FromJson(props) {

    const [inputJson, setInputJson] = useState()
    const send_json = () => {
        var for_map = JSON.parse(inputJson)

        var data = {
            resource: for_map.resource,
            category: for_map.category,


            severity: for_map.details.severity,
            status: for_map.details.status,
            tags: for_map.details.tags,
        }

        fetch("http://localhost:8080/POST", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((res) => res.text()).then((resp) => console.log(resp));

    }

    return (
        <>
            <textarea className="fromJson" onChange={(e) => { setInputJson(e.target.value) }} />
            <button className="send" onClick={send_json}>SEND</button>
        </>
    )
}

export default FromJson;