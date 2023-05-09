// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import MusicVideos from './MusicVideos';

// export default function SearchVideos({ navigation }) {
//   const [searchText, setSearchText] = useState('');
//   const [videos, setVideos] = useState({ data: [], searchText: '' });

//   const handleTextChange = (text) => {
//     setSearchText(text);
//   };

//   const handleSearchPress = async () => {

//     if (!searchText) {
//         setVideos({ data: [], searchText });
//         return;
//       }

//     try {
//       const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           q: `${searchText} music videos`,
//           part: 'snippet',
//           maxResults: 10,
//           key: 'AIzaSyCW6dJXm7xlVlDSsc3t-G9jXIQ7Z5l4SXg',
//           type: 'video',
//         },
//       });

//       const videos = response.data.items.map(item => ({
//         id: item.id.videoId,
//         title: item.snippet.title,
//         thumbnail: item.snippet.thumbnails.medium.url,
//       }));

//       setVideos({ data: videos, searchText });
//     } catch (error) {
//       console.error(error);
//       setVideos({ data: [{ error: error.message }], searchText });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.smallText}>Search for music videos:</Text>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           onChangeText={handleTextChange}
//           value={searchText}
//           placeholder="Enter search text"
//           placeholderTextColor="#ffffff"
//         />
//       </View>
//       <TouchableOpacity style={styles.loginBtn} onPress={handleSearchPress}>
//         <Text style={styles.loginText}>SEARCH</Text>
//       </TouchableOpacity>
//       <MusicVideos videos={videos.data} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   smallText: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     color: '#fb5b5a',
//     marginBottom: 40,
//   },
//   inputView: {
//     width: '80%',
//     backgroundColor: '#465881',
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   inputText: {
//     height: 50,
//     color: 'white',
//   },
//   loginBtn: {
//     width: '80%',
//     backgroundColor: '#fb5b5a',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: 'white',
//   },
// });