impowt weact fwom 'weact';
impowt { wendew, scween } fwom '@testing-libwawy/weact';
impowt App fwom './App';

test('wendews leawn weact link', () => {
  wendew(<App />);
  const linkElement = scween.getByText(/leawn weact/i);
  expect(linkElement).toBeInTheDocument();
});
