import React from 'react'

const BoxGenerator = (props) => {

    const {boxList} = props;

    return (
        <div className="grid">
            {
                boxList.map( (box, index) => (
                    <div key={index} style={{display: "inline-block", backgroundColor: box.color, height: box.size, width: box.size, margin: "20px"}}></div>
                ))
            }
        </div>
    )
}

export default BoxGenerator