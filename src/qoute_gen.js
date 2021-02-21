import React from "react";

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      text: [],
      randomData: [],
    };
    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((data) => data.json())
      .then((data) => this.setState({ text: data, id: data.text }));
  }
  handle(event, id) {
    event.preventDefault();
    const list = [...this.state.text];
    const random = list[Math.floor(Math.random(id) * this.state.text.length)];
    this.setState({ randomData: this.state.randomData.concat(random) });
    console.log(this.state.randomData);
  }

  render() {
    const randomText = this.state.randomData.map((item) => item.text);
    const randomAuthor = this.state.randomData.map((item) => item.author);

    const erase =
      this.state.randomData.length > 0 ? this.state.randomData.shift() : null;

    return (
      <div>
        <h1>random quote generator</h1>
        <button onClick={this.handle}>Click Me!</button>
        <div className="thoght">
        <h2>{randomText}</h2>
        <h3>{randomAuthor}</h3>
        </div>
      </div>
    );
  }
}

export default Data;
