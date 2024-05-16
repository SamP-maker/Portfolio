import React, { Component } from 'react';
import styled from 'styled-components';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error or send it to an error tracking service
    console.error('Caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return <ErrorPopUp>Something went wrong.</ErrorPopUp>;
    }

    return this.props.children;
  }
}



const ErrorPopUp = styled.div`

border-radius: 5px;
  border: 1px solid hsla(5, 80%, 50%, 1);
  background-color: hsla(5, 62%, 54%, 0.77);
  color: white;
  position: absolute;
  left:45%;
  padding:20px 40px; /* Add some padding for visibility */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 20px;
  
  


`


export default ErrorBoundary;
