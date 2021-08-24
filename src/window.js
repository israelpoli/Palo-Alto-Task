import { useState } from 'react';
import './card.css';
import logo from "./img_card.svg"


function for_tags(tags) {

    var stringForTags = ""
    Object.keys(tags).map((key, index) => {

        stringForTags += key + ": " + tags[key] + ", ";
    })
    return stringForTags;
}

function checkIfDetails(data) {

    if (!data.severity && !data.status && Object.entries(data.tags).length === 0) {
        return false;
    }
    return true;

}

function Win(props) {

    var flag = checkIfDetails(props.data);

    var data = {

        "severity": props.data.severity ? props.data.severity : null,
        "status": props.data.status ? props.data.status : null,
        "tags": for_tags(props.data.tags)
    }


    const mapping_dict = Object.keys(data).map((key, index) => {
        if (data[key] != null && data[key] != "")
            return (
                <div className="grid-win">
                    <div className="item-win1">{key}:</div>
                    <div className="item-win2">{data[key]}</div>
                </div>
            )
    });

    return (

        <div className={flag ? "win" : "win-logo"}>

            {flag ? mapping_dict : <img className="img-card" src={logo} />}

        </div>
    )

}

export default Win;