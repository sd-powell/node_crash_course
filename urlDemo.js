import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);

console.log('URL Object:', urlObj);

// format()
console.log('Formatted URL:', url.format(urlObj));

// import.meta.url - file URL of the current module
console.log('Current Module URL:', import.meta.url);

// fileURLToPath() - Convert file URL to path
console.log('File Path from URL:', url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);
