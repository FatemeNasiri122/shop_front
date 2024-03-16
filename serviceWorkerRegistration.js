const registerServiceWorker = () => { 
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./serviceworker.js')
      .then((reg) => console.log('Success: ', reg.scope))
      .catch((err) => console.log('Failure: ', err));
  });
}

}

export default registerServiceWorker