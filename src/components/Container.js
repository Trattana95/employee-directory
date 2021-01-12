import React from "react";
import Api from "../utils/API";
import Table from "./Table";
import Searchbar from "./Search";

class Container extends React.Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
  };
  componentDidMount() {
    Api.search()
      .then((data) => {
        let employeeData = data.data.results.map((dataRow) => {
          return {
            id: dataRow.login.uuid,
            image: dataRow.picture.thumbnail,
            name: dataRow.name.first + " " + dataRow.name.last,
       
          };
        });
        this.setState({
          employees: employeeData,
          filteredEmployees: employeeData,
        });
        console.log(this.state.employees);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  searchChange = (event) => {
  
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Searchbar
            search={this.state.search}
            searchChange={this.searchChange}
          />
          <p>{this.state.search}</p>
          <Table>
              {this.state.filteredEmployees.map((emp) => (
                <tr className="userData" key={emp.id}>
                  <td>
                    <img src={emp.image} alt="" />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.email}</td>
                  <td>{emp.dob}</td>
                </tr>
              ))}
          </Table>
        </div>
      </div>
    );
  }
}

export default Container;