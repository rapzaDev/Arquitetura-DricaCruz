import React, { useCallback, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import Hero from '../../components/Hero';
import Drieli from '../../components/Drieli';
import QuemSomos from '../../components/QuemSomos';
import Navbar from '../../components/Navbar';

import quemSomosData from '../../components/QuemSomos/data';

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <QuemSomos {...quemSomosData} />
      <Drieli />
    </>
  );
};

export default Dashboard;
