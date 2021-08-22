import { useState } from 'react';
import './card.css';
import Win from './window';

function mappingData(data) {

    var date = String(new Date(parseInt(data.creation_date))).split(" ");
    return {
        "resource": data.resource,
        "category": data.category,
        "creation_date": date[1] + " " + date[2] + " " + date[3]
    }

}


function Row(props) {

    var flag = props.flag;
    var data = mappingData(props.data);

    const [open, setOpen] = useState(false)

    const toOpen = () => {

        if (open) {

            setOpen(!open);
            props.setOneOpen(!props.isOpen());
        }
        else {
            if (props.isOpen() == false) {

                setOpen(!open)
                props.setOneOpen(!props.isOpen());
            }
        }
    }



    return (

        <div className={!open ? "grid" : "grid-open"} onClick={toOpen}>

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

                {open ? <Win data={props.data} flag={flag} /> : null}
            </div>
        </div>


    );
}


export default Row;