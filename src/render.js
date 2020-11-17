import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updatePost} from '../src/redux/state'


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} updatePost={updatePost}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}