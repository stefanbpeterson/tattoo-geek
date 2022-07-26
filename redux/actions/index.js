import { USER_STATE_CHANGE } from '../constants'
import { firebase } from '../../config'

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                }
            })
    })
}