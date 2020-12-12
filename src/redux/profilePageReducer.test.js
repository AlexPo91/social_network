const { default: profilePageReducer, addPostAC, deletePostAC } = require("./profilePageReducer");

let state = {
  postsData: [
    { id: 1, message: "Helo! How are you?", likeCount: 10 },
    { id: 2, message: "Hello World", likeCount: 20 },
    { id: 3, message: "I'm fine!", likeCount: 0 },
  ],
  profile: null,
  status: ''
}
test('length posts should increment', () => {
  let action = addPostAC('new post')
  let newState = profilePageReducer(state, action)
  expect(newState.postsData.length).toBe(4)
});

test('message new posts should be new post', () => {
  let action = addPostAC('new post')
  let newState = profilePageReducer(state, action)
  expect(newState.postsData[3].message).toBe('new post')
});
test('delete post decrement', () => {
  let action = deletePostAC(1)
  let newState = profilePageReducer(state, action)
  expect(newState.postsData.length).toBe(2)
});