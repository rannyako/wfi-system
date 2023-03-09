import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component {

  constructor(props)
  {
     super(props);
     this.state={UserEmail:'',UserPw:''};
  }

  InsertRecord=()=>
  {
    var UserEmail=this.state.UserEmail;
    var UserPw=this.state.UserPw;

    if(UserEmail.length==0 || UserPw.length==0)
    {
      alert("Required Field is Missing");
    }
    else
    {
      var InsertAPIURL="http://10.0.2.2:80/api/SignUp.php";
      
      var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
      };
      var Data={
          UserEmail:UserEmail,
          UserPw:UserPw
      };

      fetch(InsertAPIURL,{
        
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data)
      })
      .then((response)=>response.json())
      .then((response)=>
      {
        alert(response.Message);
      }
      )
      .catch((error)=>
      {
        alert("Error"+error);
      })
      
    }
  }
  
  render(){
  
  return (

    <View style={styles.ViewStyle}>

<TextInput
    placeholder={"UserEmail"}
    placeholderTextColor={"#000000"}
    keyboardType={"numeric"}
    style={styles.txtStyle}
    onChangeText={UserEmail=>this.setState({UserEmail})}
    />
    
    <TextInput
    placeholder={"UserPw"}
    placeholderTextColor={"#000000"}
    keyboardType={"numeric"}
    style={styles.txtStyle}
    onChangeText={UserPw=>this.setState({UserPw})}
    />
    <Button
    title={"SignUp"}
    onPress={this.InsertRecord}
    />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewStyle:
  {
    flex:1,
    padding:30,
    marginTop:20
  },

  txtStyle:
  {
    borderBottomWidth:1,
    borderBottomColor:'black',
    marginBottom:30

  }
});
