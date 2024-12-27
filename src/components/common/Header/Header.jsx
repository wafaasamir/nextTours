import React from "react";
import styles from "./Header.module.css";

const HomePageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <div className="header-content">
        <h2 className="subtitle">Memories For Life</h2>
        <h1 className="title">Let's Explore The World</h1>
        <div className="search-bar">
          {["Location", "Check In", "Check Out", "Guest"].map((label, idx) => (
            <div className="search-field" key={idx}>
              <label>{label}</label>
              <input
                type={label.includes("Check") ? "date" : "text"}
                placeholder={
                  label === "Location" ? "Where Are You Going?" : "Total Guests"
                }
              />
            </div>
          ))}
          <div className="search-field">
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
