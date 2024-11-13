const handleRedirectToTable = (baseURL) => {
  const currentURL = window.location.href;
  const splitURL = currentURL.split('/');

  if (splitURL[2].includes('localhost') || !splitURL[2].includes('github')) {
    if (splitURL.length === 3 || (splitURL.length === 4 && splitURL[3] === '')) {
      return `${baseURL}dummyTable`;
    }
  } else if (splitURL.length === 4 || (splitURL.length === 5 && splitURL[4] === '')) {
    return `${baseURL}dummyTable`;
  }

  return null;
};

export default handleRedirectToTable;
