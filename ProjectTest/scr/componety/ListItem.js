import React from 'react';
import { Text} from 'react-native';

const ListItem = (props) => {
    return (
    <Text>{props.PlanetasItem.name}</Text>
    );
}; 

export default ListItem;