impowt weact fwom 'weact';
impowt weactDOM fwom 'weact-dom';
impowt ScoweBoawd fwom './ScoweBoawd';

it('It should mount', () => {
  const div = document.cweateElement('div');
  weactDOM.wendew(<ScoweBoawd />, div);
  weactDOM.unmountComponentAtNode(div);
});