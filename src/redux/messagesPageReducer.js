const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_MESSAGE = "UPDATE_MESSAGE"

const initialState = {
  dialogsData: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Karina" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Tania" },
    { id: 5, name: "Vitalik" },
    { id: 6, name: "Anna" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Well done" },
  ],
  newMessage: "",
}

const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      let countMessage = state.messagesData.length;
      let newMessage = {
        id: countMessage++,
        message: state.newMessage,
      };
      state.messagesData.push(newMessage);
      state.newMessage = "";
      return state
      case "UPDATE_MESSAGE":
          state.newMessage = action.message;
          return state
    default:
      return state;
  }
};

export const addMessageAC = () => {
    return {
      type: ADD_MESSAGE
    }
  }
  
  export const updateMessageAC = (message) => {
    return {
      type: UPDATE_MESSAGE,
      message: message
    }
  }

  export default messagesPageReducer