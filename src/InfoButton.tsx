import React from 'react';
import styles from './style.module.css';

interface InfoButtonProps {
  url: string;
  label: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({ url, label }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button className={styles.infoButton} onClick={handleClick}>
      {label}
    </button>
  );
};

export default InfoButton;