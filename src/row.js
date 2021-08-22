import { useState } from 'react';
import './card.css';
import Win from './window';

function Row(props) {

    var flag = props.flag;
    var date = String(new Date(parseInt(props.data.creation_date))).split(" ");
    var data = {
        "resource": props.data.resource,
        "category": props.data.category,
        "creation_date": date[1] + " " + date[2] + " " + date[3]
    }


    const [open, setOpen] = useState(false)

    const toOpen = () => {

        if (open) {

            setOpen(!open);
            props.setOneOpen(!props.isOpen());
        }
        else {
            if (props.isOpen() == false) {
                console.log(props.isOpen())
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
                <div className="time">{data.creation_date}</div>
            </div>
            <div className="item4">

                {open ? <Win data={props.data} flag={flag} /> : null}
            </div>
        </div>


    );
}


export default Row;