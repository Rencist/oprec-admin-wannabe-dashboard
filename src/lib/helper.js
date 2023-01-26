export function bearerToken(contentType) {
  const token = localStorage.getItem('token');
  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}