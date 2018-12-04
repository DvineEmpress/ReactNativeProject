/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';
import {
  Container, Header, Content, List, ListItem, Text, Left, Body, Title, Item,
  Input, Right, Icon, Button
} from 'native-base';

import bgImage from 'ReactNativeProj/images/bg1.jpg';
import logo from 'ReactNativeProj/images/logo.png';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
//type Props = {};

const { width: WIDTH } = Dimensions.get('window');

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: null,
      tasks: [],
      compTasks: [],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getTasks(), 1000);
  }

  async getTasks() {
    return fetch('shttp://192.168.1.103/TodoAPI/public/api/tasks')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          incompTasks: responseJson.tasks,
          compTasks: responseJson.compTasks
        }, function () {
          //comment
        });
      }).catch(error => {
        null;
      });
  }

  addTask = () => {
    fetch('http://192.168.1.103/TodoAPI/public/api/task', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "task": this.state.task,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        "POST Response",
          "Response Body -> " + JSON.stringify(responseData)
      })
      .done();
    this.input._root.clear();
  };

  completeTask = (id) => {
    fetch('http://192.168.1.103/TodoAPI/public/api/task/${id}/complete')
      .done();
  }

  deleteTask = (id) => {
    fetch('http://192.168.1.103/TodoAPI/public/api/task/${id}/delete')
      .done();
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>ToDo</Title>
          </Body>
        </Header>

        <Content>
          <Item rounded>
            <Input placeholder="Add Task"
              onChangeText={input => this.setState({ task: input })}
              ref={(ref) => { this.input = ref }}
            />
          </Item>
          <Button block light onPress={() => this.addTask()}>
            <Text>Add</Text>
          </Button>
          <List
            dataArray={this.state.tasks}
            renderRow={item => (
              <ListItem>
                <Left>
                  <Text>{item.task}</Text>
                </Left>
                <Right>
                  <TouchableOpacity onPress={() => { this.completeTask(item.id) }}>
                    <Icon name="ios-checkmark" />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            )}
          />
          <Text>COMPLETED</Text>
          <List
            dataArray={this.state.compTasks}
            renderRow={item => (
              <ListItem>
                <Left>
                  <Text>{item.task}</Text>
                </Left>
                <Right>
                  <TouchableOpacity onPress={() => { this.deleteTask(item.id) }}>
                    <Icon name="ios-close" />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    )

    /*return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>A To-Do App!</Text>


          <TextInput style={styles.input}
            placeholder={'Enter Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />


          <TextInput style={styles.input}
            placeholder={'Enter Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />

          <Button
            //onPress={onPressLearnMore}
            title='Login'
            color='#841584'
            accessibilityLabel="Login into the ToDo App and set your schedule"
          />
        </View>


      </ImageBackground>
    );*/
  }

}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 120
  },

  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },

  inputContainer: {
    marginTop: 65
  },

  input: {
    width: WIDTH - 55,
    height: 55,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 20,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
});
