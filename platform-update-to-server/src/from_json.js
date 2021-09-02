import React, { useState } from 'react'
import './up_to_server.css'
import xtype from 'xtypejs'

function FromJson(props) {

    const [inputJson, setInputJson] = useState()
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("Enter json to send to server (wrap package in [ ])");

    const send_json = () => {

        setError("Enter json to send to server (wrap package in [ ])")
        var test = JSON.parse(inputJson);
        console.log(xtype.type(test) == xtype.type([]))

        test.forEach(element => {

            var data = {
                resource: element.resource,
                category: element.category,
                error: element.error,
                severity: element.details.severity,
                status: element.details.status,
                tags: element.details.tags,
            }

            fetch("http://localhost:8080/POST", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((res) => res.text()).then((resp) => {
                    console.log(resp);
                    if (resp === "is not good")
                        setSent("You have not filled in all the required fields, Click Back to Refill")
                    else {
                        setSent("The information was sent, Click Back to send more")
                        setInputJson('');
                    }
                });
        });
    }

    const goBack = () => {

        setSent(false);
    }

    if (sent) {
        return (
            <>
                <h1>{sent}</h1>
                <button className="go-back" onClick={goBack}>go back</button>
            </>
        )
    }
    else {
        return (
            <>

                <div className="error">{error}</div>
                <textarea className="fromJson" onChange={(e) => {
                    if (e.target.value == "")
                        setError("Enter json to send to server (wrap package in [ ])");
                    else {
                        try {
                            if (xtype.type(JSON.parse(e.target.value)) == xtype.type([]))
                                setError("valid")
                            else { setError("Invalid, please note if you wrapped the json in [ ]") }
                        }
                        catch (err) { setError(err.message) }
                        setInputJson(e.target.value)
                    }
                }} />
                {(error == "valid") ? <button className="send" onClick={send_json}>SEND</button> : null}
            </>
        )
    }
}

export default FromJson;