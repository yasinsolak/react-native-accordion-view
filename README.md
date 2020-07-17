# react-native-accordion-view

This is an example file with maximal choices selected.

This is a long description.

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

Note: The `license` badge image link at the top of this file should be updated with the correct `:user` and `:repo`.


## Contributing

See [the contributing file](CONTRIBUTING.md)!

## License

[MIT] © Yasin Solak(../LICENSE)
