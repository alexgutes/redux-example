import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { title, body } = this.state;
    const post = {
      title,
      body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">
              Title:
              <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}
              />
            </label>
          </div>
          <div>
            <label htmlFor="body">
              Body:
              <br />
              <textarea name="body" onChange={this.onChange} value={body} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
