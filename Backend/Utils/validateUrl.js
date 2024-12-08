import validUrl from 'valid-url';

const validateUrl = (url) => {
  console.log('Validating URL:', url); 
  return validUrl.isUri(url);
};

export default validateUrl;
