import React from "react";
import PropTypes from "prop-types";


class Header extends React.Component {
    render() {
      const { pageName, isLoading } = this.props;

      const menuTop = (
        <div className="app-header">
        <div className="row">
            <div className="ml-3 mt-2"><i className="material-icons">arrow_back_ios</i></div>
            <div className="mt-2"><h5>{pageName}</h5></div>
        </div>
        </div>
      )
  

  
      const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
  
      return (
          <div>
            {isLoading ? loadingMessage : menuTop}
          </div>

      );
    }
  }
  
  Header.propTypes = {
    name: PropTypes.string,
    isLoading: PropTypes.bool
  };
  
  export default Header;