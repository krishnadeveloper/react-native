import React,  {Component} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import {TabView,SceneMap} from "react-native-tab-view";

class Photos extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text>Photos</Text>
            </View>
        )
    }
}

class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text>Videos</Text>
            </View>
        )
    }
}

export default class UserTabs extends Component{
    state = {
        index:0,
        routes:[
            {key:"first", title:"Photos"},
            {key:"second", title:"Videos"}
        ]
    }
    render(){
        return(
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first:Photos,
                    second:Videos
                })}
                onIndexChange={index=>this.setState({index})}
                initialLayout={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"skyblue",
        justifyContent:"center",
    }
})