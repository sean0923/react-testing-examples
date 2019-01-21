import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';

import axios from 'axios';

import Async, { urlUsers, urlPosts } from '../pages/Async';

const userId = 'user_id';
const postId = 'post_id';

describe('Async get test', () => {
  beforeEach(() => {
    axios.get = jest.fn(url => {
      switch (url) {
        case urlUsers:
          return Promise.resolve({ data: [{ id: userId }] });

        case urlPosts:
          return Promise.resolve({ data: [{ id: postId }] });

        default:
          return Promise.resolve({ data: [{ id: 'something is not right ...' }] });
      }
    });
  });

  afterEach(cleanup);

  test('render user and post id', async () => {
    const { getByText, getByTestId, debug, container } = render(<Async />);

    const loading = getByText(/loading/i);
    expect(loading).toBeDefined();

    await waitForElement(() => getByText(/Data from Users/i));

    const userIdElement = getByText(userId);
    const postIdContainer = getByTestId(/post list/i);

    expect(userIdElement).toBeDefined();
    expect(postIdContainer.childElementCount).toEqual(1);
  });
});
