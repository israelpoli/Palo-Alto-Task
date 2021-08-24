import React from 'react';
import './card.css';
import Win from './window';

function mappingData(data) {

    var date = String(new Date(parseInt(data.creation_date))).split(" ");
    return {
        "resource": data.resource,
        "category": data.category,
        "creation_date": date[1] + " " + date[2] + " " + date[3],
        "error": data.error
    }

}


function Row(props) {

    var data = mappingData(props.data);

    const toOpen = () => {

        props.changeOpen();
        props.setOpen(props.id);

    }

    return (


        <div className={!props.open ? "grid" : "grid-open"} onClick={toOpen}>

            <div className="item1">
                <div className="category" >{data.resource}</div>
            </div>
            <div className="item2">
                <div className="category">{data.category}</div>
            </div>
            <div className="item3">
                <div className="date">{data.creation_date}</div>
            </div>
            <div className="item4">
                <div className="date">{data.error}</div>
            </div>
            <div className="item5">

                {props.open ? <Win data={props.data} /> : null}
            </div>
        </div>



    );
}


export default Row;