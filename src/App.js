import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      things: [
        {id: 1, name: "mantequilla de cacahuete", description: "peanuts, of the buttered variety"},
        {id: 2, name: "water", description: "drink frequently or you will die"},
        {id: 3, name: "thing one", description: "its that thing, you know it"},
        {id: 4, name: "basket", description: "can carry things, which is very useful for this list"},

      ]
    }
    this.onCreated = this.onCreated.bind(this)
  }
  
  onCreated(thing) {
    const things = [...this.state.things, thing];

    thing.id = things.length;

    this.setState({ things });
  }

  render(){
    return (
      <div className="App">
        <Header thingCount={this.state.things.length}className="App-header"/>
        <ThingList things={this.state.things} onCreated={this.onCreated} />
        <Footer />
      </div>
    );
  }
}


class ThingList extends React.Component {
  render() {
    return (
      <div>
        <ThingForm onCreated={this.props.onCreated} />
        <ul>
          {this.props.things.map((thing) => (
            <ThingItem key={thing.id} name={thing.name} />
          ))}
        </ul>
      </div>
    )
  }

}


class ThingForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {name: "", description:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCreated(this.state);
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Add Thing</p>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </>
    )
  }
}

function Header(props) {
  return (
    <h2>Thing Counter: {props.thingCount}</h2>
  )
}

function ThingItem(props) {
	return <li>{props.name}</li>;
}

function Footer() {
  return <h2>TM LEE THOMAS</h2>
}

export default App;
