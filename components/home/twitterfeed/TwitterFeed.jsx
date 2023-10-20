import React, { useState, useEffect }from 'react'
import {View, Text, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './twitterfeed.style'

const DATA = [
    {
        id: 'tweet1',
    },
    {
        id: 'tweet2',
    },
    {
        id: 'tweet3',
    }
];
function TwitterFeed(props){

    let JS = '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

    let source = JS + '<blockquote class ="twitter-tweet"><a href="https://twitter.com/NZcivildefence/status/1714386083297861694"></a></blockquote>';
    const renderItem = ({item}) => (
        <WebView style = {styles.container} source = {{html: source}}/>
    )

    return(
        <FlatList
            data = {DATA}
            renderItem = {renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default TwitterFeed;