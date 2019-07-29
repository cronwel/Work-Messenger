/* eslint-disable prettier/prettier */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import { employeesFetch } from './actions';

class EmployeeList extends Component {

  componentDidMount() {
    this.props.employeesFetch();
  }
  keyExtractor = (item) => item.name;

  renderRow({ item }) {
    return (
      <ListItem name={item} {...this.props}/>
    );
  }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderRow.bind(this)}
            />
        );
    }
}

function mapStateToProps({ employees }) {
    return {
        employees: _.map(employees, (value, uid) => {
            return { ...value, uid };
        }),
    };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
