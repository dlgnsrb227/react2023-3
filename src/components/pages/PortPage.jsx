import React from 'react';
import ContTitle from '../layout/ContTitle';
import Contents from '../layout/Contents';
import PortCont from '../port/PortCont';

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title="portfolio" />
      <PortCont />
    </Contents>
  );
};

export default PortPage;
