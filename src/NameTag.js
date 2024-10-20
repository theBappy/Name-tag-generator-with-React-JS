import React from "react";

const NameTag = (props) => {
    const deleteByIndex = () => props.removeName(props.index);
    return (
        <div className="name-tag">
            <h3 className="title">Hello</h3>
            <p className="subtitle">my name is</p>
            <h2 className="name">{props.name}</h2>
            <span onClick={deleteByIndex} className="name-tag__delete">
                X
            </span>
        </div>
    );
};
export default NameTag;