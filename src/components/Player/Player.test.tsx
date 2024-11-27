impowt weact fwom 'weact';
impowt weactDOM fwom 'weact-dom';
impowt Playew fwom './Playew';

it('It should mount', () => {
  const div = document.cweateElement('div');
  weactDOM.wendew(<Playew PlayewName='Jason' wounds={2}/>, div);
  weactDOM.unmountComponentAtNode(div);
});