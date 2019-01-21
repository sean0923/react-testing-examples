import React, { Component } from 'react';
import axios from 'axios';

export const urlUsers = 'https://jsonplaceholder.typicode.com/users';
export const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

class Async extends Component {
  initialState = {
    dataFromUsers: [],
    dataFromPosts: [],
  };

  state = { ...this.initialState };

  componentDidMount = () => {
    this.fetch();
  };

  fetch = async () => {
    const { data: dataFromUsers } = await axios.get(urlUsers);
    const { data: dataFromPosts } = await axios.get(urlPosts);

    this.setState({ dataFromUsers, dataFromPosts });
  };

  render() {
    const { dataFromUsers, dataFromPosts } = this.state;
    if (dataFromUsers.length === 0 && dataFromPosts.length === 0) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <h2>Data from Users</h2>
        <div data-testid="user list">
          {dataFromUsers.map(user => {
            return <div key={user.id}>{user.id}</div>;
          })}
        </div>

        <h2>Data from Posts</h2>
        <div data-testid="post list">
          {dataFromPosts.map(post => {
            return <div key={post.id}>{post.id}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Async;
