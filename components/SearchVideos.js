import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MusicVideos from './MusicVideos';

export default function SearchVideos({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [videos, setVideos] = useState({ data: [], searchText: '' });

  const handleTextChange = (text) => {
    setSearchText(text);
  };

  const handleSearchPress = async () => {

    if (!searchText) {
        setVideos({ data: [], searchText });
        return;
      }

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: `${searchText} music videos`,
          part: 'snippet',
          maxResults: 10,
          key: 'AIzaSyCW6dJXm7xlVlDSsc3t-G9jXIQ7Z5l4SXg',
          type: 'video',
        },
      });

      const videos = response.data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      setVideos({ data: videos, searchText });
    } catch (error) {
      console.error(error);
      setVideos({ data: [{ error: error.message }], searchText });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>
      <Text>Search for music videos:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleTextChange}
        value={searchText}
      />
      <Button title="Search" onPress={handleSearchPress} />
      <MusicVideos videos={videos.data} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    textInput: {
      height: 40,
      borderColor: '#bbb',
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
      width: '100%',
      borderRadius: 5,
    },
  });