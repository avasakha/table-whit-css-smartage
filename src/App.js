import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userArray: [],
    }
  }
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        })
      })
      .then(json=>{
        const {users}=this.state
        let arr = [], temp = [];
      for (let i = 1; i <= 10; i++) {
          arr = []
          arr = users.filter(item => item.userId === i)
          temp.push(arr)
        }
    
        const arr2 = temp.map(item => item.map(element => element.title))
        this.setState({
          userArray: arr2.map((item, index) => {
            return {
              userId: index + 1,
              title: item
            }
          })
        })
      })
      }
        
          
        

render() {
    return <>
  
      <table>
        <thead>
          <tr>
            <th> UserId</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>

          {this.state.userArray.map(item => (
            <tr >
              <td>{item.userId}</td>
              <td className="last">{item.title.map(element => (<div><span>{element}</span></div>))}</td>
            </tr>

          ))}

        </tbody>
      </table>
    </>
  }

}




