impowt { wepowtHandlew } fwom 'web-vitals';

const wepowtWebVitals = (onPewfEntwy?: wepowtHandlew) => {
  if (onPewfEntwy && onPewfEntwy instanceof Function) {
    impowt('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPewfEntwy);
      getFID(onPewfEntwy);
      getFCP(onPewfEntwy);
      getLCP(onPewfEntwy);
      getTTFB(onPewfEntwy);
    });
  }
};

expowt default wepowtWebVitals;
