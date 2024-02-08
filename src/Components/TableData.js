// Table.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';


const TableData = () => {
    const columns = ['ID', 'Name', 'Age', 'City'];
    const data = [
        { id: 1, name: 'John Doe', age: 25, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco' },
        { id: 3, name: 'Bob Johnson', age: 22, city: 'Los Angeles' },
    ];
    return (
        <div className='mt-2'>
            <div>
                <h3>User Table</h3>
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-3'>
                <h3>User Striped Table</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    );
};

export default TableData;
