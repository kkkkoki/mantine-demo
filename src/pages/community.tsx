import React from 'react';
import Link from 'next/link';

const community = () => {
  return (
    <>
      <div>Community</div>
      <p>
        <Link href="/">Top</Link>
      </p>
      <p>
        <Link href="/home">Home</Link>
      </p>
    </>
  );
};

export default community;
