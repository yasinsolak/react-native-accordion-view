# react-native-accordion-view

Simple accoridon view

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

# Install
```sh
$ npm install react-native-accordion-view
```
  or
```sh
$ yarn add react-native-accordion-view
```

## Usage
![gif1](https://user-images.githubusercontent.com/40208646/87800185-bc4b1000-c856-11ea-8620-0ffbe033f87c.gif)
```
import AccordionView from 'react-native-accordion-view'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
        //you can turn the button on or off if you want
        <Button title="Open" onPress={() => setOpen(!open)}></Button>
        <AccordionView
          open={open}
          onPress={() => setOpen(!open)}
          title="Hello Everyone !"
          rightIcon={true}
        >
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
        </AccordionView>
    </View>
  );
}
```


![gif2](https://user-images.githubusercontent.com/40208646/87802146-6e83d700-c859-11ea-8334-94cfa3c7a726.gif)

```
 <AccordionView
      open={open2}
      onPress={() => setOpen2(!open2)}
      headerComponent={<HeaderComponent />}
      style={{ margin: 15 }}
      headerStyle={{
        backgroundColor: "#4d5dbe",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
      subContainerStyle={{
        backgroundColor: "#5e6dc4",
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
      }}
    >
      //.....
  </AccordionView>
```

## License

[MIT] © Yasin Solak(../LICENSE)
