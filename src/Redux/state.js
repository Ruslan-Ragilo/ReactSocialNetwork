import {replayLoader} from '../render';

let state = {
    
    profileState: {

        addPost: (postValue) => {
            let newPost = {
                id: Number(3),
                message: postValue,
                like: 0
            };
        
            state.profileState.dataPost.push(newPost);

            replayLoader();
            
        },
        
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
        ]
    }  
}



export default state;