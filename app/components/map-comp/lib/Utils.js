export const camelize = function (str) {
  return str.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}


export const loadJS = (src) => {
  return new Promise((resolve, reject) => {
    const script = window.document.createElement("script");
    script.id = 'mapScript';
    const head = window.document.getElementsByTagName("head")[0];
    head.appendChild(script)
    let handleResult = (state) => {
      return (evt) => {
        if (state === 'loaded') {
          resolve(src);
        } else if (state === 'error') {
          reject(evt)
        }
      }
    }
    script.addEventListener('load', handleResult('loaded'))
    script.addEventListener('error', handleResult('loaded'));
    script.src = src;
  })
} 