import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  users: any;
  usersList: any;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      users: [
        {
          name: 'Raja',
          department: 'MCA',
          description: 'Computer Application',
        },
        {
          name: 'Kumar',
          department: 'Maths',
          description: 'Maths Dep',
        },
      ],
      usersList: [],
    };

    this.filterdata = this.filterdata.bind(this);
  }

  filterdata = (e) => {
    let data = e.target.value.toLowerCase();
    console.log(e.target.value);

    let d = this.state.users.filter((e1) => {
      if (
        e1.name.toLowerCase().includes(data) ||
        e1.department.toLowerCase().includes(data) ||
        e1.description.toLowerCase().includes(data)
      ) {
        return e1;
      }
    });
    console.log(d);

    this.setState({
      usersList: d,
    });
  };

  componentDidMount() {
    this.setState({ usersList: this.state.users });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <input type="text" onChange={(e) => this.filterdata(e)} name="" />
        <table>
          <thead>
            <th>Student Name</th>
            <th>Department</th>
            <th>Description</th>
          </thead>
          <tbody>
            {this.state.usersList.map((stu) => {
              return (
                <tr>
                  <td>{stu.name}</td>
                  <td>{stu.department}</td>
                  <td>{stu.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
