import React from 'react';

function NotFound(props) {
  const { history } = props;

  setTimeout(() => {
    history.push('/');
  }, 7000);

  return <div>404 Not Found</div>;
}

export default NotFound;
