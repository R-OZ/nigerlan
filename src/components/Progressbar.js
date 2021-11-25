import React from "react";

const Progressbar = (props) => {
    const {bgcolor, completed} = props;

    const containerStyles={
        height: 20,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 6
    }
    const fillerStyles={
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
        textAlign: 'right',
        fontSize: 15
        
    }
    const labelStyles={
        paddingl: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    )
}

export default Progressbar
