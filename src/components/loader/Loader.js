import React from 'react';

function Loader({ loading, children }) {
  return <>{{ loading } ? <span>Loarding...</span> : { children }}</>;
}

export default Loader;
