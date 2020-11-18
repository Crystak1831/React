import logo from './logo.svg';
import React from 'react'
import './App.css';
import Person from './Person/Person'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons:[
                {name:'Linda', age:18},
                {name:'Marc', age: 20},
                {name:'Lora', age:30}
            ],
            showState: false
        }
    }

    //pass the value:newName, 两种方法： bind，和 arrow function
    switchHandler = (newName) =>{
        this.setState({
            persons:[

                {name:newName, age:18},
                {name:'Sara', age: 20},
                {name:'Ming', age:30}
            ],
            showState: false
        });
    };

    changeNameHandler = (e) =>{
        this.setState({
            persons:[
                {name: e.target.value, age:18},
                {name:'haha', age: 20},
                {name:'Ming', age:30}
            ]
        })
    }

    togglePerson = () =>{
        const doesShow = this.state.showState;
        this.setState({showState: !doesShow});
    }

    deleteNameHandler=(personIndex)=>{
        //fetch persons
        const persons = this.state.persons;
        persons.splice(personIndex,1);
        //update persons
        this.setState({persons: persons})
    }

    render() {

        let persons = null;
        if(this.state.showState){
            
            // return some jsx code
            persons = (
            <div>
                {this.state.persons.map((person,index) => {
                    return <Person name = {person.name}
                                    age = {person.age}
                                   click = {() => this.deleteNameHandler(index)}
                    />
                })}
                {/*use arrow function, but don't use this one, since it not efficient*/}
                {/*<button onClick={() => {this.switchHandler('max')}}>toggle</button>*/}
                {/*<Person name = {this.state.persons[0].name}*/}
                {/*        age = {this.state.persons[0].age}*/}
                {/*        click = {this.switchHandler.bind(this,'max')}*/}
                {/*        changed = {this.changeNameHandler}*/}
                {/*/>*/}

                {/*<Person name ={this.state.persons[1].name}*/}
                {/*        age = {this.state.persons[1].age}*/}
                {/*>my hobby is swimming</Person>*/}
                {/*<Person name = {this.state.persons[2].name}/>*/}
            </div>
            )
        }

        return (
            <div className="App">
               <h1>Hi, I'm a React APP</h1>
                <p>This is really working</p>
                {/*/!*pass newName from switchHandler*!/*/}
                {/*<button onClick={this.switchHandler.bind(this,'max')}>toggle</button>*/}

                {/*toggle Person*/}

                <button onClick={this.togglePerson}>toggle</button>
                {persons}
                {/*{this.state.showState?*/}
                {/*    <div>*/}
                {/*    /!*use arrow function, but don't use this one, since it not efficient*!/*/}
                {/*    /!*<button onClick={() => {this.switchHandler('max')}}>toggle</button>*!/*/}
                {/*    <Person name = {this.state.persons[0].name}*/}
                {/*            age = {this.state.persons[0].age}*/}
                {/*        // click = {this.switchHandler.bind(this,'max')}*/}
                {/*            changed = {this.changeNameHandler}*/}
                {/*    />*/}

                {/*    <Person name ={this.state.persons[1].name}*/}
                {/*            age = {this.state.persons[1].age}*/}
                {/*    >my hobby is swimming</Person>*/}
                {/*    <Person name = {this.state.persons[2].name}/>*/}
                {/*</div>*/}
                {/*: null}*/}


            </div>
        );
    }


}

export default App;

