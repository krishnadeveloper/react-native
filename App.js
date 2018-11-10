/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableHighlight

} from 'react-native';
import ToDo from "./database/Todo/TodoTable";

let cls = 'odd';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      todotxt:'',
      todos:[]
    }
    //this.keyPress = this.keyPress.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  // keyPress = (e) =>{
  //   this.setState({
  //     todotxt:e
  //   })
  // }


  addTodo = () =>{
    let dataToAdd = {
      todo:this.state.todotxt,
      createAt: new Date()
    }
    this.state.todos.push(dataToAdd);
    ToDo.add(dataToAdd);
    this.setState({
      todotxt:''
     })
  }
  fetch = ()=>{
    if(ToDo.all().length>0){
      this.setState({
        todos:ToDo.all()
      })  
    }
    
  }

  componentWillMount(){
    this.fetch()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listHeadingTop}><Text>TODO App</Text></View>
        <View style={styles.inputArea}>
          <View style={styles.input}><TextInput style={styles.text} defaultValue={this.state.todotxt} onChangeText={text=>this.setState({todotxt:text})} /></View>
          <View style={styles.button}>
            <TouchableHighlight style={styles.addBtn} >
              <Button title="Add" onPress={this.addTodo}></Button>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.listHeading}><Text style={styles.hdText}>ToDo List</Text></View>
        <View style={styles.container1}>
          <ScrollView style={styles.listview}>
          {
            this.state.todos.length>0?
              this.state.todos.map((todo,index)=>{
                cls = cls==='odd'?'even':'odd';
                return(<Text key={index} style={cls=='even'?styles.todolistEven:styles.todolistOdd}>{todo.todo} </Text>)
              })
            :
            <Text style={styles.todoNoItem}>To Do Not available</Text>
          }
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop:'10%'
  },
  container1: {
    justifyContent: 'center',
    alignItems:'center',
    color:'silver',
    backgroundColor: 'white',
  },
  text:{
    backgroundColor:'white',
    width:'98%',
    height:55,
    paddingStart:'2%',
    margin:'1%',
    borderRadius:5
  },
  inputArea:{
    flexDirection:'row',
    height:60,
    backgroundColor:'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
    width:'80%',
  },
  button:{
    fontStyle:'italic',
    width:'20%',
  },
  addBtn:{
    flex:1,
    height:'100%',
    width:'100%',
    padding:10,
    borderStyle:'solid',
    borderColor:'red',
    borderWidth:2,
    backgroundColor:'yellow',
    borderRadius:5
  },
  listHeadingTop:{
    flex:1,
    maxHeight:'5%',
    alignItems:'center',
    fontSize:15
  },
  listHeading:{
    flex:1,
    maxHeight:'10%',
    alignItems:'center',
    marginTop:10
  },
  hdText:{
    backgroundColor:'orange',
    fontSize:25,
    width:'100%',
    height:'100%',
    textAlign:'center',
  },
  todolistEven:{
    flex:1,
    margin:2,
    padding:5,
    color:'#000000',
    width:'100%',
    borderColor:'green',
    borderWidth:1,
    borderStyle:'dashed',
    height:40,
    fontSize:20
  },
  todolistOdd:{
    flex:1,
    margin:2,
    padding:5,
    color:'#000000',
    width:'100%',
    borderColor:'red',
    borderWidth:1,
    borderStyle:'dashed',
    height:40,
    fontSize:20
  },
  todoNoItem:{
    flex:1,
    margin:2,
    padding:5,
    color:'#000000',
    width:'100%',
    borderColor:'red',
    borderWidth:1,
    borderStyle:'dashed',
    height:50,
    fontSize:20,
    textAlign:'center'
  },
  listview:{
    alignContent:'center',
    width:'100%'
  }


});
