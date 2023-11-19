import React from 'react';
import { configColumn } from './configColumn';

const ButtonColumn = ({ info }) => {
    const columnConfigData = () => {
        return {
            type: 'button',
            data: {
                name: info.name ?? 'default',
                action: info.action ?? '',
                style: info.style ?? '',
                icon: {
                    style: info.icon.style
                }
                // Add other necessary properties for the button
            }
        };
    };

    const column = configColumn(columnConfigData());

    return <div>{column}</div>; // Rendering the column component
};

export default ButtonColumn;