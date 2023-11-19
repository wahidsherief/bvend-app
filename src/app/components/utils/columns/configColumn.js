import { Checkbox, Image, Text, Button, Toggle } from "./columnItems";

const columnTypes = (type) => {
    const components = {
        checkbox: Checkbox,
        image: Image,
        text: Text,
        toggle: Toggle,
        button: Button
        // Add more types here as needed
    };

    return components[type] || null;
};

export const configColumn = ({ type, data }) => {
    const Component = columnTypes(type);

    if (Component) {
        return <Component item={data} />;
    }

    return null;
};