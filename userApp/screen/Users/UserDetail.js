import React,  {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import UserTabs from "./UserTab";

class UserDetails extends Component{
    static navigationOptions = {
        title:"User Details"
    };

    render(){
        const userDetails =  this.props.navigation.state.params
        return(
            <React.Fragment>
                <View>
                <Text>Id : {userDetails.id}</Text>
                <Text>Name : {userDetails.name}</Text>
                <Text>Username : {userDetails.username}</Text>
                <Text>Email : {userDetails.email}</Text>
                <Text>Address :</Text>
                <Text>Zipcode : {userDetails.address.zipcode}</Text>
                <Text>Website : {userDetails.website}</Text>                
            </View>
            <UserTabs/>
            </React.Fragment>
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

export default UserDetails;