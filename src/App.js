/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


class App extends Component{
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;





















// import firebase from 'firebase';
// import { Header, Button, Spinner, Card, CardSection} from './components/common';
// import LoginForm from './components/LoginForm';

// class App extends React.Component{

//   state = { loggedIn: null }

//   componentWillMount(){
//     firebase.initializeApp({
//         apiKey: 'AIzaSyB4gvNV9M8bKUz1wOByOVgN6vXbuSbxWqo',
//         authDomain: 'authentic8.firebaseapp.com',
//         databaseURL: 'https://authentic8.firebaseio.com',
//         projectId: 'authentic8',
//         storageBucket: '',
//         messagingSenderId: '995734008026',
//         appId: '1:995734008026:web:70ffb3ae136fd63b',
//     });
//     firebase.auth().onAuthStateChanged( (user) => {
//       if (user) { this.setState({ loggedIn: true });}
//       else { this.setState({ loggedIn: false});}
//     });
//   }

//   renderContent(){

//     switch (this.state.loggedIn){
//       case true:
//         return (
//           <Card>
//             <CardSection>
//               <Button onPress={() => firebase.auth().signOut()}>
//                 Log Out
//               </Button>
//             </CardSection>
//           </Card>
//           );
//       case false:
//         return (
//           <LoginForm />
//           );
//       default: <Spinner size="large"/>;
//     }
//   }

//   render() {
//     return (
//       <View>
//         <Header headerText="authentic8"/>
//         {this.renderContent()}
//       </View>
//     );
//   }
// }

// export default App;
