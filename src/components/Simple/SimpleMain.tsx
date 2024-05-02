'use client';

import { useState } from 'react';
import SimpleEditor from './SimpleEditor';
import SimpleList from './SimpleList';
import { SimpleDataType } from '@/type';

function SimpleMain() {
  const [simples, setSimples] = useState<SimpleDataType[]>([]);
  return (
    <>
      <SimpleList data={simples} />
      <SimpleEditor />
    </>
  );
}

export default SimpleMain;
