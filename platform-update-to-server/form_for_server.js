import React, { useState } from 'react'


function FormForData() {

    const [data, setData] = useState()
    const [resource, setResource] = useState();
    const [category, setCategory] = useState();
    const [severity, setSeverity] = useState();
    const [status, setStatus] = useState();
    const [name, setName] = useState();
    const [size, setSize] = useState();
    const [region, setRegion] = useState();
    const [type, setType] = useState()
    const [tag, setTag] = useState()

    const sendToServer = () => {
        setData({ resource, category, severity, status, "tags": [{ name }, { size }, { region }, type ? { type } : "", tag ? { tag } : ""] })
        fetch("http://localhost:8080/POST", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((res) => res.json()).then((resp) => console.log(resp));
        setTag(""); setType(""); setName(""); setRegion(""); setResource(""); setSeverity(""); setSize(""); setStatus(""); setCategory("");
    }

    return (
        <div className="grid-cards">
            <div className="container-general">
                <div className="item-general">
                    <div className="grid-form">
                        <div className="headder-general">general</div>
                        <div className="item-form-general">resource:
                            <textarea className="form-input" value={resource} onChange={(e) => { setResource(e.target.value) }} />

                        </div>
                        <div className="item-form-general">category:
                            <textarea className="form-input3" value={category} onChange={(e) => { setCategory(e.target.value) }} />

                        </div>

                    </div>
                </div>
                <div className="item-send">
                    <button className="send-form" onClick={sendToServer}>SEND</button>
                </div>
            </div>
            <div className="container-details">
                <div className="grid-form">
                    <div className="headder-general">details</div>
                    <div className="item-form-details">severity:
                        <textarea className="form-input3" value={severity} onChange={(e) => { setSeverity(e.target.value) }} />
                    </div>
                    <div className="item-form-details">status:
                        <textarea className="form-input3" value={status} onChange={(e) => { setStatus(e.target.value) }} />

                    </div>
                    <div className="item-form-tags"><a>tags</a></div>
                    <div className="item-form2">name:
                        <textarea className="form-input" value={name} onChange={(e) => { setName(e.target.value) }} />

                    </div>
                    <div className="item-form2">size:
                        <textarea className="form-input" value={size} onChange={(e) => { setSize(e.target.value) }} />
                    </div>
                    <div className="item-form2">region:
                        <textarea className="form-input" value={region} onChange={(e) => { setRegion(e.target.value) }} />
                    </div>
                    <div className="item-form2">type:
                        <textarea className="form-input" value={type} onChange={(e) => { setType(e.target.value) }} />
                    </div>
                    <div className="item-form2">tag:
                        <textarea className="form-input" value={tag} onChange={(e) => { setTag(e.target.value) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormForData;