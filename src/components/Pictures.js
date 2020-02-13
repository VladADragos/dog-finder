import React, { useState } from 'react'

const Pictures = ({ data }) => {
    const [i, setI] = useState(0);
    function next() {
        setI(i + 1);
    }
    function back() {
        setI(i - 1);
    }

    return (
        <div className="pictures">
            {data ?
                <>
                    <h2 className="pictures__index">{`${i + 1}/${data.message.length}`}</h2>
                    <div className="pictures__buttons">
                        {i > 0 &&
                            <button className="pictures__button" onClick={back}><i class="fas fa-caret-left"></i> back </button>
                        }
                        {i < data.message.length - 1 &&
                            <button className="pictures__button" onClick={next}>next <i class="fas fa-caret-right"></i></button>
                        }
                    </div>
                    <img className="pictures__picture" src={data.message[i]} alt="" />
                </>
                : <i className="fas fa-dog pictures__placeholder"></i>
            }
        </div>
    )

}

export default Pictures;