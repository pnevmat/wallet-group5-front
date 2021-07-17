import React from 'react';

const Table = (props) => {
    const {table} = props;
    return (
        <>
            <ul>
                {table.map(item => {
                    let color = {backgroundColor: item.color};
                    return (
                        <li key={item.id}>
                            <span style={color}>{item.color}</span>
                            <span>{item.name}</span>
                            <span>{item.amount}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Table;