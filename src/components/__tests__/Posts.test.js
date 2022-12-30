import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Posts from '../Posts';

// Cleans up and removes render after testing it
afterEach(() => {
  cleanup();
});

test('Should render non-completed Post component', () => {
  const post = {id: 1, text: 'hello world', completed: false};
  render(<Posts posts={post}/>);
  const postsElement = screen.getByTestId('Post-1')
  expect(postsElement).toBeInTheDocument();
  expect(postsElement).toHaveTextContent('hello world');
})

test('Should render completed Post component', () => {
  const post = {id: 2, text: 'hello world', completed: true};
  render(<Posts posts={post}/>);
  const postsElement = screen.getByTestId('Post-2')
  expect(postsElement).toBeInTheDocument();
  expect(postsElement).toHaveTextContent('hello world');
})

test('Matches snapshot', () => {
  const post = {id: 1, text: 'hello world', completed: false};
  const tree = renderer.create(<Posts posts={post}/>).toJSON();
  expect(tree).toMatchSnapshot();
})