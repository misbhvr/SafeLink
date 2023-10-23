import React, { useState, useEffect }from 'react'
import {View, Text, Dimensions, TouchableOpacity, FlatList, VirtualizedList} from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './twitterfeed.style'

const DATA = [
    {
        id: 'tweet1',
        url: "https://twitter.com/NZcivildefence/status/1714386083297861694",
    },
    {
        id: 'tweet2',
        url: "https://twitter.com/NZcivildefence/status/1713684724168675735",
    },
    {
        id: 'tweet3',
        url: "https://twitter.com/NZcivildefence/status/1712647053015228616",
    }
];
function TwitterFeed(props){
    const renderItem = ({ item }) => {

        const source = `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><blockquote class="twitter-tweet"><a href="${item.url}"></a></blockquote>`;
        return(
            <WebView style={styles.container} source={{html: source}}/>
        )
    }

    return (
        <VirtualizedList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            getItemCount={() => DATA.length}
            getItem={(data, index) => data[index]}  // Add this prop
        />
    )
}

export default TwitterFeed;