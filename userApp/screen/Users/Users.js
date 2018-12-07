import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, Button, TouchableOpacity} from "react-native";
import {createStackNavigator,createAppContainer} from "react-navigation"
import UserRequest from "../../api/Request/Users/UserRequest";
import UserDetails from "./UserDetail";

class AllUsersScreen extends Component{
    
    constructor(){
        super();
        this.state = {
            list:[],
            noData:false,
            loading:true,
        }


        // Fetch All Posts
        this.fetchAllPost = this.fetchAllPost.bind(this);
        this.moveToDetails = this.moveToDetails.bind(this);
        
    }

    moveToDetails(){
        this.props.navigation.navigate('UserDetails');
    }

    componentWillMount(){
        this.fetchAllPost();
    }

    fetchAllPost(){
        
        UserRequest.allUsers().then((response)=>{
            if(response.status===200){
                this.setState({
                    loading:false,
                    list:response.data
                })
                //console.warn(response.data);
            }
        }).catch((error)=>{
            this.setState({noData:true})
            //console.warn(error);
        })
    }
    static navigationOptions = {
        //title:'Users',
        header:null,
    };
    render(){
        return(
            <SafeAreaView style={style.container}>
                <Text style={style.heading}>All Users ({this.state.list.length})</Text>
                <Text>
                {this.state.noData?
                    'No Network Available'
                    :''
                }
                </Text>
                <FlatList 
                    data = {this.state.list}
                    renderItem={({item})=><TouchableOpacity onPress={()=>this.props.navigation.navigate('UserDetails',item)} key={item.id} style={style.userRow}><Text>{item.id}. {item.name}</Text></TouchableOpacity>}
                    keyExtractor={(item,index)=> index.toString() }
                />
                <ActivityIndicator style={style.loader} size="large" color="blue" hidesWhenStopped={true} animating={this.state.loading}>

                </ActivityIndicator>
                
            </SafeAreaView>
        );
    };
};

const UserStackNavigation = createStackNavigator({
    Users:{
        screen:AllUsersScreen,
        title:'Users',
    },
    UserDetails:{
        screen:UserDetails,
        title:'User Details'
    }

},{
    initialRouteName:"Users",
})

export default createAppContainer(UserStackNavigation)

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"skyblue",
    },
    heading:{
        marginTop:5,
        justifyContent:"center",
        fontSize:28,
        textAlign:'center',
        borderTopColor:"blue",
        borderTopWidth:5
    },
    loader:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'center'
    },
    userRow:{
        padding:5,
        backgroundColor:"#FFFFFF",
        marginBottom:2,
        textTransform:"capitalize",
        fontSize:13
    }

})
