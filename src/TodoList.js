import React, { Component } from 'react'

export default class TodoList extends Component {
    onEditClick = (event) => {
        console.log(event.target.id)
    }

    onDeleteClick = (event, a) => {
        console.log(event.target.id)        
    }

    RenderTodos = () => {
        var mock = [{
            id: 1,
            description: "test",
            date: Date()
        }, {
            id: 2,
            description: "test",
            date: Date()
        }, {
            id: 3,
            description: "test",
            date: Date()
        }, {
            id: 4,
            description: "test",
            date: Date()
        }]
        return mock.map(todo => {
            return (
                <tr key={todo.id}>
                    <th scope="row">{todo.id}</th>
                    <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td className="text-center">
                        <a href="#" id={todo.id} onClick={this.onEditClick}>Edit</a>
                        <a href="#" className="ml-2" id={todo.id} onClick={this.onDeleteClick}>Delete</a>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col" className="text-center">Actions</th>
                </thead>
                <tbody>
                    {this.RenderTodos()}
                </tbody>
            </table>
        )
    }
}