import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, ImageBackground, Button } from 'react-native'
// import Message from './components/message'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ' ' };
  }
  generateRandomNum = () => {
    let lowNum = 6
    let highNum = 21
    return Math.floor(Math.random()*(highNum-lowNum+1)+lowNum).toString()
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./resources/43478.jpg')} style={{width: '102%', height: '100%'}}>
            <Text style={styles.welcome}>REACT NATIVE DEMO</Text>
            <View style={styles.middleBox}>
            <Button title="Get Random Number" onPress={() => this.setState({text: this.generateRandomNum()})}
              style={styles.myButton}
            />
            </View>
            <TextInput value={this.state.text} style={styles.randomNum}/>
            {/* <Message /> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  middleBox: {
    width: 200,
    height:50,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginLeft: 90,
    marginTop: 70,
    borderRadius: 4,
    opacity: 0.70
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 150,
    color: 'white',
    fontWeight: 'bold'

  },
  randomNum: {
    fontSize: 50,
    textAlign: 'center',
    margin: 100,
    color: 'white',
    marginTop: 100,
    fontWeight: 'bold'
  },
  myButton: {
    color: '#7fffd4',
    borderRadius: 4,
    backgroundColor: 'grey'
  }
})

