import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

const Queries = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    

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
        question: 'Question 1?',
        answer: 'Answer to Question 1',
      },
      {
        question: 'Question 2?',
        answer: 'Answer to Question 2',
      },
      {
        question: 'Question 3?',
        answer: 'Answer to Question 3',
      },
    ];
  
    return (
      <ScrollView style={styles.container}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Subject"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <TextInput
          label="Body"
          value={body}
          onChangeText={(text) => setBody(text)}
          multiline
        />
        <Button onPress={handleSubmit}>Submit</Button>
  
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    faqTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    faqAnswer: {
      paddingLeft: 20,
      paddingBottom: 10,
    },
  });
  
  export default Queries;