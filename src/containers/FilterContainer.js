import React from "react";
import {setFilter, setSearchQuery} from "../actions/filter";
import { connect } from "react-redux";
import Filter from "../components/Filter";

class FilterContainer extends React.Component {

    
  render() {
   
    return <Filter {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  filterBy: state.filter.filterBy,
});

export default connect(mapStateToProps, { setFilter, setSearchQuery })(FilterContainer);
