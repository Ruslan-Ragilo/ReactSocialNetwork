import messagesStateReducer from "./messagesStateReducer";
import profileStateReducer from "./profileStateReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {

        profileState: {

            newPostText: '',


            dataPost: [
                { id: 1, like: Number(2), message: 'Hi, how are you'},
                { id: 2, like: Number(9), message: 'It is my first post'},
            ],


        },

        messagesState: {

            dialogsData: [
                { name: "Ruslan", id: "1"},
                { name: "Ira", id: "2"},
                { name: "Timofey", id: "3"},
                { name: "Mama", id: "4"}
            ],

            dataMessages: [
                { message: 'Hi', id: "1"},
                { message: 'How are you', id: "2"},
                { message: 'What', id: "3"},
                { message: 'Ok', id: "4"}
            ],

            newMessageBody: '',



        },

        sidebar: {}
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profileState = profileStateReducer(this._state.profileState, action);
        this._state.messagesState = messagesStateReducer(this._state.messagesState, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}

export default store;