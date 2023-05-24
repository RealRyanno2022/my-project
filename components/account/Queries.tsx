import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import FAQItem from './FAQItem';
import { Header, SearchBar, Icon } from 'react-native-elements';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import ShopHeader from '../shop/ShopHeader';
import ShopFooter from '../shop/ShopFooter';

type QueriesProps = {
  navigation: any;
}

const Queries: React.FC<QueriesProps> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
      navigation.push('SearchProducts', { searchTerm });
    }
    

    init('ZDyaFUpjb8MbPWzl3');
  
    const handleSubmit = () => {
        const templateParams = {
          from_name: name,
          from_email: email,
          subject: subject,
          message: body,
        };
    
        emailjs
          .send('service_tk7hucg', 'template_h9wwoit', templateParams)
          .then(
            (response) => {
              console.log('Email sent successfully!', response.status, response.text);
            },
            (error) => {
              console.error('Email failed to send:', error);
            }
          );
      };
  
    const faqData = [
      {
        question: 'Do you ship abroad?',
        answer: 'Yes, we ship to different countries, but it may be more expensive.',
      },
      {
        question: 'My order was damaged. Can I get a refund?',
        answer: 'Of course! Contact us through the form above.',
      },
      {
        question: 'Will you offer new varieties of e-cigarette??',
        answer: 'Certainly. Please suggest some through our form!',
      },
    ];
  
    return (
      <View style={{flex: 1}}>
      <ShopHeader navigation={navigation}  />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.bigText}>Have a query? Feel free to ask us!</Text>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.inputBox}
          maxLength={100}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputBox}
          maxLength={100}
        />
        <TextInput
          label="Subject"
          value={subject}
          onChangeText={(text) => setSubject(text)}
          style={styles.inputBox}
          maxLength={100}
        />
        <TextInput
          label="Body"
          value={body}
          onChangeText={(text) => setBody(text)}
          multiline
          style={styles.inputBox}
        />
        <View style={styles.space}></View>
        <TouchableOpacity
              style={styles.card}
              onPress={handleSubmit}
            >
              <Text style={styles.cardText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.space}></View>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ScrollView>
      <ShopFooter navigation={navigation}/>
      </View>
    );
  };
  

  const styles = StyleSheet.create({
      container: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        alignItems: 'center',
      },
      faqTitle: {
        color: '#1F1F1F',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      card: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      cardText: {
        color: '#1F1F1F',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
      },
      faqAnswer: {
        paddingLeft: 20,
        paddingBottom: 10,
      },
      inputBox: {
        width: '80%',
        color: '#1F1F1F',
        marginTop: 10,
        fontSize: 17,
      },
      bigText: {
        color: '#1F1F1F',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      space: {
        marginTop: 50,
      },
    });

  
  export default Queries;