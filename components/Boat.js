import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}}/>
            <Icon name={icon_name} size={20}><Text> {name} ({description})</Text></Icon>
        </View>
    );
}

export default Boat;
