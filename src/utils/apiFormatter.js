export default function apiFormatter(response) {
  return response.map((art) => {
    Object.keys(art).forEach((key) => {
      if (typeof art[key] !== 'string') return;
      art[key] = art[key].replace('[\r\n  \"', '');
      art[key] = art[key].replace('\"\r\n]', '');
      if (key === 'Id') {
        art[key] = art[key].replace('http://content.emii.com/documents/', '');
      }
    });
    return art;
  }); 
}
