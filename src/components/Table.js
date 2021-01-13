import React from "react";

function Table(props) {
  return (
    <table className="employeeInfo">
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>
  );
}

export default Table;