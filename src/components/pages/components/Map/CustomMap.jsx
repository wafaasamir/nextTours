import React from 'react';
import styles from './Map.module.css'

function CustomMap() {
  return (
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27344.668382416163!2d31.37257652169571!3d31.051773608655004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1733621683561!5m2!1sen!2seg"
            width="auto" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" className={`${styles.map} w-100 p-3`} title='map'></iframe>
  );
}

export default CustomMap;
