let url = process.env.NEXT_PUBLIC_BASE_URL;

// if (window.location.href.includes("localhost")) {
//   // For development
//   url = process.env.NEXT_PUBLIC_BASE_URL;
// } else {
//   // For testing
//   url = process.env.NEXT_PUBLIC_BASE_URL;
//   // url = process.env.REACT_APP_BASE_DEV_URL;
// }

export const BACKEND_BASE_URL = url;
