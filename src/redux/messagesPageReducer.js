const ADD_MESSAGE = "social-network/messagesPageReducer/ADD_MESSAGE";

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
};

const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let countMessage = state.messagesData.length;
      let newMessage = {
        id: ++countMessage,
        message: action.newMessage,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};

export const addMessageAC = (newMessage) => {
  return {
    type: ADD_MESSAGE,
    newMessage
  };
};

export default messagesPageReducer;
