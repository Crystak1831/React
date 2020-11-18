import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list:[]
        }
    }

    changeHandler =(e) =>{
        this.setState({
            noteText: e.target.value
        })
    }

    // addHandler = (e) =>{
    //     //选中复选框。like checkbox
    //     e.preventDefault();
    //     if(!this.state.noteText.length) {
    //         return;
    //     }
    //
    //     const newItem = {
    //         text:this.state.noteText,
    //         id: Date.now()
    //     }
    //
    //     this.setState(prevState => ({
    //         items:prevState.items.concat(newItem),
    //         noteText: ' '
    //     }))
    // }

    updateInput(e){
        this.setState({
            newItem: e.target.value
        })
    }

    addItem=()=>{
        const newItem = {
            id: 1 + Math.random(),
            value:this.state.newItem.slice()
        };

        const list = [...this.state.list]

        list.push(newItem);

        this.setState({
            list,
            newItem:""
        })
    }

    deleteItem =(id) => {
        const list = [...this.state.list]

        const updateList = list.filter(item =>item.id !== id)

        this.setState({
            list:updateList
        })
    }

  render() {
    return (
        <div className="App">
            <div>
                <h1>TODO List</h1>
                <input type="text"
                       value = {this.state.newItem}
                       // onChange = {this.changeH}
                      // onChange={this.updateInput}
                       onChange = {e=>{this.updateInput(e)}}
                />
                <button onClick={this.addItem}>+</button>
                {/*<button onClick={()=>{this.addItem()}}>+</button>*/}
                <br/>
                <ul>
                    {this.state.list.map(item =>{
                        return(
                            <li key = {item.id}>{item.value}
                                {/*<button onClick={this.deleteItem}>X</button>*/}
                                <button onClick={() =>this.deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    );
  }
}



export default App;




