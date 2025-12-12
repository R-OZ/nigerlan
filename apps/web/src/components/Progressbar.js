import React from "react";

const Progressbar = (props) => {
    const {bgcolor, completed} = props;
    let cc = completed
    if (cc>100){cc=100}

    const containerStyles={
        height: 18,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 6
    }
    const fillerStyles={
        height: '100%',
        width: `${cc}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
        textAlign: 'right',
        fontSize: 15
        
    }
    const labelStyles={
        padding: 8,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${cc}%`}</span>
            </div>
        </div>
    )
}

export default Progressbar
