import React from "react";
import Api from "../utils/API";
import Table from "./Table";
import "../styles/Container.css";


class Container extends React.Component {
  state = {
    employees: [],
    search: "",
    employeeList: [],
  };
  componentDidMount() {
    Api.search()
      .then((data) => {
        let employeeData = data.data.results.map((data) => {
          return {
            id: data.login,
            image: data.picture.thumbnail,
            name: data.name.first + " " + data.name.last,
            phone: data.phone,
            email: data.email,
          };
        });
        this.setState({
          employee: employeeData,
          employeeList: employeeData,
        });
        console.log(this.state.employees);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

    handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      search: value
    })
    ;
  
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
    this.employee();
  };



  render() {

    const filteredEmployees = this.state.employeeList.filter(employee => {
        return employee.name.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <div className="container">
        <div className="wrapper">
        <p className="lead text-center"><strong> Search for employees </strong> </p>

          {/* <Searchbar
            value={this.state.search}
            onChange={this.handleInputChange}
          /> */}
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleInputChange}
            placeholder="Search Here"
          />
          <Table>
              {filteredEmployees.map((employee) => (
                <tr className="userData" key={employee.id}>
                  <td>
                    <img src={employee.image} alt="" />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
          </Table>
        </div>
      </div>
    );
  }
}

export default Container;