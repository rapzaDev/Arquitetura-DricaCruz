import React, { useCallback, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import Hero from '../../components/Hero';
import InfoSection from '../../components/InfoSection';
import Navbar from '../../components/Navbar';

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
      <InfoSection />
    </>
  );
};

export default Dashboard;
