
// Page1.js
import React from 'react';
import Link from 'next/link';
import ModalParent from './modalparent/page';

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <ModalParent openModal1={openModal1}/>
      <Link href="#" onClick={props.openModal1}>
        <a>Open Modal 1</a>
      </Link>
    </div>
  );
};

export default Page1;
