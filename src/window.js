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


// "size: " + props.data.tags[1].size + ",  region: " + props.data.tags[2].region
function Win(props) {

    var flag = props.flag;
    var data = {

        "severity": props.data.severity,
        "status": props.data.status,
        "tags": for_tags(props.data.tags)
    }


    const mapping_dict = Object.keys(data).map((key, index) => {
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