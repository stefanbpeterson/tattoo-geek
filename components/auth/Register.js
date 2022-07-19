import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, getFirestore, doc, setDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyCjxfizKu-Khifosk53aJeuLvdSiaVVtjo",
    authDomain: "tattoo-geek.firebaseapp.com",
    projectId: "tattoo-geek",
    storageBucket: "tattoo-geek.appspot.com",
    messagingSenderId: "837757489782",
    appId: "1:837757489782:web:d14077496f2bc71cc08557",
    measurementId: "G-Q0JBWQFDQ6"
  };
initializeApp(firebaseConfig)

const firestore = getFirestore()

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const auth = getAuth()
        const { email, password, name } = this.state;
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
                setDoc(doc(firestore, 'users', auth.currentUser.uid), {
                    name,
                    email
                })
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
        <View>
            <TextInput 
                placeholder='name'
                onChangeText={(name) => this.setState({ name })}
            />
            <TextInput 
                placeholder='email'
                onChangeText={(email) => this.setState({ email })}
            />
            <TextInput 
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
            />

            <Button 
                onPress={() => this.onSignUp()}
                title='Sign Up'
            />
        </View>
        )
    }
}

export default Register