import React from 'react';

const Table = (props) => {
    const {categories} = props.table;
    return (
        <>
            <ul>
                {categories.map(item => {
                    let color = {backgroundColor: item.color};
                    return (
                        <li key={item.id}>
                            <span style={color}>{item.color}</span>
                            <span>{item.categorie}</span>
                            <span>{item.sum}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Table;