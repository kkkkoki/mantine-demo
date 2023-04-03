import React from 'react';
import Link from 'next/link';

const about = () => {
  return (
    <>
      <div>About</div>
      <p>
        <Link href="/">Top</Link>
      </p>
      <p>
        <Link href="/home">Home</Link>
      </p>
    </>
  );
};

export default about;
