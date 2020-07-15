import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccordionView from './components/Accordion/AccordionView';

const SA = () => {
  return (
    <View>
      <Text>asdasdasdasd</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <AccordionView title="selamun aleykum" titleStyle={{ fontSize: 24 }}>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <View style={{ backgroundColor: "red" }}>
            <Text style={{ fontSize: 16 }}>Yasbnasodasd</Text>
          </View>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
        </AccordionView>
        <AccordionView
          title="selamun aleykum"
          titleStyle={{ fontSize: 24 }}
          headerStyle={{ marginTop: 50 }}
          borderRadius={12}
          iconColor="blue"
        >
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <View style={{ backgroundColor: "red" }}>
            <Text style={{ fontSize: 16 }}>Yasbnasodasd</Text>
          </View>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
        </AccordionView>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5',
  },
});
