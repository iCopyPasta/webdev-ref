import { Component } from "react";

class ErrorBoundary extends Component {
    // cannot be added to functional components

    constructor() {
        super();
        this.state = {hasError: false};
    };

    componentDidCatch(error) {
        console.log(error);
        // send to analytics
        this.setState({hasError: true});
    };

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    };
}

export default ErrorBoundary ;