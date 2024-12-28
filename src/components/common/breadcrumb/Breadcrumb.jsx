import React from 'react';
import styles from './BreadCrumb.module.css';

function Breadcrumb({ title, buttonText }) {
  return (
    <section className={`${styles.breadcrumb} position-relative container-fluid p-0 m-0`}>
      <img
        src="/breadcrumb.jpg"
        alt="Can't Download Img"
        className="w-100 h-100"
      />
      <h1 className="position-absolute text-center text-uppercase">
        {title}
      </h1>
      <button
        type="button"
        className={`${styles.button} btn position-absolute py-3 px-4`}
      >
        Home // {buttonText}
      </button>
    </section>
  );
}

export default Breadcrumb;
