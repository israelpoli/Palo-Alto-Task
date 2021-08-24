import { useState } from 'react';
import './card.css';
import Row from './row';



function Card(props) {

    const data = props.data;
    const [clous, setClous] = useState();
    const [open, setOpen] = useState();

    const changeOpen = () => {

        if (open == clous) {

            setClous(null);
        }
        else {
            setClous(open);
        }
    }


    const mappingList = () => {

        return (
            data.map((d, index) => {

                if (index == open && index != clous) {
                    return (<Row data={d} key={index} id={index} open={true} setOpen={setOpen} changeOpen={changeOpen} />)
                }

                if (index == open && index == clous) {

                    return (<Row data={d} key={index} id={index} open={false} setOpen={setOpen} changeOpen={changeOpen} />)
                }
                return (

                    <Row data={d} key={index} id={index} open={false} setOpen={setOpen} changeOpen={changeOpen} />
                )
            }));
    }


    return (
        <div >

            <div className="card">
                <div className="title">
                    {data.length} Total
                </div>
                <div className="container">

                    {mappingList()}

                </div>
            </div>
        </div >
    );
}


export default Card;