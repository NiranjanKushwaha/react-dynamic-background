export const isValidImageUrl = (url:string) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

export const encodeUrlComponents = (url:string) => {
  try {
    const parsedUrl = new URL(url);
    // Encode path, search, and hash components of the URL
    parsedUrl.pathname = encodeURI(parsedUrl.pathname);
    parsedUrl.search = encodeURI(parsedUrl.search);
    parsedUrl.hash = encodeURI(parsedUrl.hash);
    return parsedUrl.toString();
  } catch (error) {
    return '';
  }
};  