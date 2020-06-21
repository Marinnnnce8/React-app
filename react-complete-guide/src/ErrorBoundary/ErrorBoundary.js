import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessasge: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessasge: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessasge}</h1>;
    } else {
        return this.props.children;
    }
  }
}

export default ErrorBoundary;
