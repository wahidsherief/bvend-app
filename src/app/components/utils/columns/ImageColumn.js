// ImageColumn.js
import React from 'react';
import { configColumn } from './configColumn';

const ImageColumn = ({ info }) => {
    const columnConfigData = () => {
        return {
            type: 'image',
            data: {
                src: info.src,
                style: info.style ?? 'image-style',
                alt: info.alt ?? ''
            }
        };
    };

    const column = configColumn(columnConfigData());

    return <div>{column}</div>; // Rendering the column component
};

export default ImageColumn;
