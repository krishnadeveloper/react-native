import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, Button} from "react-native";
import PostRequest from "../../api/Request/Post/postRequest"

class Post extends Component{
    constructor(){
        super();
        this.state = {
            list:[],
            noData:false,
            loading:true,
        }


        // Fetch All Posts
        this.fetchAllPost = this.fetchAllPost.bind(this);
        
    }

    componentWillMount(){
        this.fetchAllPost();
    }

    fetchAllPost(){
        PostRequest.getPost().then((response)=>{
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

    render(){
        return(
            <SafeAreaView style={style.container}>
                <Text style={style.heading}>All Post ({this.state.list.length})</Text>
                <Text>
                {this.state.noData?
                    'No Network Available'
                    :''
                }
                </Text>
                <FlatList 
                    data = {this.state.list}
                    renderItem={({item})=><Text key={item.id} style={style.userRow}>{item.id}. {item.title}</Text>}
                    keyExtractor={(item,index)=> index.toString() }
                />
                <ActivityIndicator style={style.loader} size="large" color="blue" hidesWhenStopped={true} animating={this.state.loading}>

                </ActivityIndicator>
                
            </SafeAreaView>
        );
    };
};

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


export default Post;