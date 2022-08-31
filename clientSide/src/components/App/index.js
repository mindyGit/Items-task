import React from 'react';
// import {provider} from 'react-redux';
// import store from '../../redux/store';

import ItemList from '../itemList'
export default function App() {
    return (
        // <provider store={store}>
        <div className = "App" >
   
     <ItemList/>
        </div>
        // </provider>
    );
}