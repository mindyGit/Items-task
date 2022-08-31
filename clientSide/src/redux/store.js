import {creatStore} from 'redux';
import produce from 'immer';
import ItemList from '../components/itemList';


const initalStaste={
     items:{}
  
}

export const store = createStore(items, {})