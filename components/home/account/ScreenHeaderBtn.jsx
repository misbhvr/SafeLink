import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ScreenHeaderBtn = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onPress} 
           // style={{ ...props.style }} // Optional: if you want to provide custom styles
        >
            <Image 
                source={props.iconUrl} 
                style={{ width: props.dimension, height: props.dimension, resizeMode: 'contain' }} 
            />
        </TouchableOpacity>
    );
}

export default ScreenHeaderBtn;