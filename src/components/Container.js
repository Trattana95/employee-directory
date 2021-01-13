import React from "react";
import Api from "../utils/API";
import Table from "./Table";
import Searchbar from "./Search";
import "../styles/Container.css";


class Container extends React.Component {
  state = {
    employees: [],
    search: "",
    employessList: [],
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
          employees: employeeData,
          employessList: employeeData,
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
    this.employessData(value);
  
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
    this.employeeData();
  };



  render() {
    return (
      <div className="container">
        <div className="wrapper">
        <p className="lead text-center"><strong> Search for employees </strong> </p>

          <Searchbar
            search={this.state.search}
            searchChange={this.searchChange}
          />
          <p>{this.state.search}</p>
          <Table>
              {this.state.employessList.map((employee) => (
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