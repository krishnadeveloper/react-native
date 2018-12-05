import React,  {Component} from "react";
import {View, Text, Button, StyleSheet,SafeAreaView} from "react-native";
import {createDrawerNavigator, createAppContainer} from "react-navigation"
import Post from "../Post";
import Users from "../Users";


class Top extends Component{
    render()
    {
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Button title="Open Menu" onPress={()=>this.props.navigation.openDrawer()} ></Button>
                    <Text>Welcome to react native app</Text>
                    
                </View>
            </SafeAreaView>
        )

    }
}

const leftDrawer = createDrawerNavigator({
    Home:{
        screen: Top
    },
    AllPost:{
        screen:Post
    },
    AllUsers:{
        screen:Users
    }

},{
    initialRouteName: "Home"
})

export default createAppContainer(leftDrawer);


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }

})