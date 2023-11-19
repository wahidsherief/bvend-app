// TextColumn.js
import React from 'react';
import { configColumn } from './configColumn';

const TextColumn = ({ info }) => {
    const columnConfigData = () => {
        return {
            type: 'text',
            data: {
                style: info.style ?? 'text-bold',
                text: info.text // Set text dynamically based on info.text
                // Other properties can be dynamically set based on info as needed
            }
        };
    };

    const column = configColumn(columnConfigData());

    return <div>{column}</div>; // Rendering the column component
};

export default TextColumn;
