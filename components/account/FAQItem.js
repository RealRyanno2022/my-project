import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Collapsible from 'react-native-collapsible';

const FAQItem = ({ question, answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View>
      <Button onPress={() => setIsCollapsed(!isCollapsed)}>
        {question}
      </Button>
      <Collapsible collapsed={isCollapsed}>
        <Text style={styles.faqAnswer}>{answer}</Text>
      </Collapsible>
    </View>
  );
};
export default FAQItem;
