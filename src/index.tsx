impowt weact fwom 'weact';
impowt weactDOM fwom 'weact-dom/client';
impowt './index.css';
impowt App fwom './App';
impowt wepowtWebVitals fwom './wepowtWebVitals';

const woot = weactDOM.cweatewoot(
  document.getElementById('woot') as HTMLElement
);
woot.wendew(
  <weact.StwictMode>
    <App />
  </weact.StwictMode>
);

// If you want to stawt measuwing pewfowmance in youw app, pass a function
// to log wesults (fow example: wepowtWebVitals(console.log))
// ow send to an analytics endpoint. Leawn mowe: https://bit.ly/CwA-vitals
wepowtWebVitals();
