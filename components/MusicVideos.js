import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const MusicVideos = ({ searchText }) => {
    const [responseData, setResponseData] = useState({ data: [], searchText: '' });

    useEffect(() => {
        searchVideos(searchText);
      }, [searchText]);
    
      const searchVideos = async (artistName) => {
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              q: `${artistName} music videos`,
              part: 'snippet',
              maxResults: 10,
              key: 'AIzaSyCW6dJXm7xlVlDSsc3t-G9jXIQ7Z5l4SXg',
              type: 'video',
            },
          });
    
          const simplifiedData = response.data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }));
          setResponseData({ data: simplifiedData, searchText: artistName });
        } catch (error) {
          console.error(error);
          setResponseData([{ error: error.message }]);
        }
      };

  return (
    <ScrollView>
        <View style={styles.container}>
          <Text>Showing results for "{responseData.searchText}"</Text>
          {responseData.data.length > 0 ? (
            responseData.data.map(item => (
              <View key={item.id}>
                <Text>{item.title}</Text>
                <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
              </View>
            ))
          ) : (
            <Text>No data found</Text>
          )}
          
        </View>
        <StatusBar style="auto" />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    thumbnail: {
      width: 320,
      height: 180,
    },
  });

export default MusicVideos;