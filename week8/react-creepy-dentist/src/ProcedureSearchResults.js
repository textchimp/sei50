import React from 'react';




class ProcedureSearchResults extends React.Component {

  // If you create a method with this name, it will automatically
  // run when your component is first added to the DOM
  // - a bit like the DOM ready function of jQuery: $(document).ready( fn );
  // This is called a "lifecycle method"
  componentDidMount(){
    console.log('componentDidMount()');
  } // componentDidMount()

  componentWillUnmount(){
    console.log('componentWillUnmount()');
  } // componentDidMount()


  render(){

    // const query = this.props.match.params.query;
    // const id = this.props.match.params.id;
    // const {params} = this.props.match;
    // const {query} = this.props.match.params;

    // DON'T do an axios request here in the render()
    // Why not? Because the request will happen every time a render() happens...
    // and renders happen any time you update state in React! So it will happen
    // too often! And worse, if you save your API response into state using setState(),
    // you will have an infinite loop!


    return (
      <div>
        <h3>Search results for: { this.props.match.params.query }</h3>
      </div>
    );

  } // render()

} // class ProcedureSearchResults

export default ProcedureSearchResults;
