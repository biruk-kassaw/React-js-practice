import axios from 'axios';

const fetch = async () => {
  try {
    const newposts = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/'
    );
    return newposts.data;
  } catch (err) {
    if (err.response) {
      alert('404');
    } else {
      alert('server error');
    }
  }
};
export default fetch;
