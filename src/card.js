import { useState } from 'react';
import './card.css';
import Row from './row';

function Card(props) {


    const data = props.data;
    var flag = props.flag;
    const [oneOpen, setOneOpen] = useState(false);

    const isOpen = () => {
        console.log(oneOpen);
        return oneOpen;
    }

    const mappingList = data.map((d) => {
        return (
            <Row data={d} flag={flag} isOpen={isOpen} setOneOpen={setOneOpen} />
        )
    });

    return (
        <div >

            <div className="card">
                <div className="title">
                    {data.length} Total
                </div>
                <div className="container">
                    {mappingList}
                </div>
            </div>
        </div >
    );
}


export default Card;