function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  

  const token = getCookie('token');
  
//   if (token) {
//     console.log('Token is:', token);  
//   } else {
//     console.log('Token not found');
//   }
  
    export default token;