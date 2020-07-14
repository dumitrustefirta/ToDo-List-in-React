// import React, { Component } from 'react';


// class ToDo extends Component {
//     constructor(props) {
//         super(props);
//         this.state={}
//     }

//     // static getDerivedStateFromProps(props, state) {
//     //     return {
//     //         ...props,
//     //     }
//     // }

//     handleAddItem = () => {
//         const newItem = {
//           id: new Date(),
//           text: this.state.input,
//           status: false
//         } 
//         this.setState({
//           input: '',
//           todos: this.state.todos.concat(newItem)
//         })
//       }

//     removeItem(item) {
//         const newTodos = this.state.todos.filter(todos => {
//           return todos !== item;
//         })
    
//         this.setState({
//           todos: [...newTodos]
//         })
//       }

//     render() {
//         return (
//             <ul className="todolist" id="todolist">
//                 {this.state.todos.length ? (
//                   this.state.todos.map((item) => {
//                   return (<li className='todolist__item'>
//                     <input className={item.status ? 'complete' : ''} type="checkbox" />
//                     <span className={item.status ? 'complete.todolist__item span' : ''}>{item.text}</span>
//                     <button onClick={(e) => this.removeItem(item)}>X</button> 
//                     </li>)
//                   })
//                 ) : null}
//               </ul>
//         );
            
//     }
// }

// export default ToDo