import React from 'react';

class StudentReport extends React.Component {
    constructor() {
        super();
        this.state = {
            students: [],
        }
    }

    componentDidMount() {
        fetch("/students")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    students: data,
                });
            });
    }

    render() {
        return (
            <div>
                Student Report
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentReport;
