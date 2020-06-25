import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onPress = () => {
    this.setState({
      
    });
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
        </View>
        {/* <TouchableOpacity
          style={styles.button}
          //onPress={this.onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#cfcccc",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 0
  }
});
