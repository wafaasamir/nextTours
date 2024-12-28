import React, { useState } from "react";
import styles from './BookingPageForm.module.css'
import Swal from 'sweetalert2';

function BookingPackageForm() {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [totalCost, setTotalCost] = useState(399.00);

  const basePrice = 399.00;  

  const handleChange = (target, type) => {
    if (target === 'adults') {
      type === 'increase' ? setAdults(adults + 1) : setAdults(Math.max(adults - 1, 0));
    } else if (target === 'kids') {
      type === 'increase' ? setKids(kids + 1) : setKids(Math.max(kids - 1, 0));
    } else if (target === 'children') {
      type === 'increase' ? setChildren(children + 1) : setChildren(Math.max(children - 1, 0));
    }
  };

  const handleServiceChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setTotalCost((prevCost) => prevCost + parseFloat(value));
    } else {
      setTotalCost((prevCost) => prevCost - parseFloat(value));
    }
  };

  const calculateTotalCost = () => {
    return basePrice * (adults + kids + children) + totalCost - 399.00;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      setErrorMsg("Please select a date.");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select a date.',
      });
      return;
    }

    setErrorMsg("");
    const total = calculateTotalCost();
    setTotalCost(total);

    Swal.fire({
      icon: 'success',
      title: 'Form Submitted!',
      text: `Total cost: $${total.toFixed(2)}`,
    });
    // navigate(`/booking`);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className={`${styles.bookingPackage} rounded`}>
      <h4 className={`${styles.toursDetailsPartTitle} p-3 text-white text-center rounded-top`}>
        Package Details
      </h4>
      <form className="package-form p-4" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="date" className="fw-bold">Date </label>
          <input
            type="date"
            name="date"
            className={`${styles.dateInput}`}
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <h5 className="my-4 fw-bold">Tickets</h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <label htmlFor="adults" className="form-label">
            Adults (18+ years)
          </label>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-outline-secondary btn-decrease px-2 py-1"
              onClick={() => handleChange('adults', 'decrease')}
            >
              -
            </button>
            <input
              type="number"
              name="adults"
              value={adults}
              min="0"
              className={`text-center mx-1 ${styles.numberInput}`}
              readOnly
            />
            <button
              type="button"
              className={`btn btn-outline-secondary ${styles.btnIncrease} px-2 py-1`}
              onClick={() => handleChange('adults', 'increase')}
            >
              +
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <label htmlFor="kids" className="form-label">
            Kids (13+ years)
          </label>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className={`btn btn-outline-secondary ${styles.btnDecrease} px-2 py-1`}
              onClick={() => handleChange('kids', 'decrease')}
            >
              -
            </button>
            <input
              type="number"
              name="kids"
              value={kids}
              min="0"
              className={`text-center mx-1 ${styles.numberInput}`}
              readOnly
            />
            <button
              type="button"
              className={`btn btn-outline-secondary ${styles.btnIncrease} px-2 py-1`}
              onClick={() => handleChange('kids', 'increase')}
            >
              +
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <label htmlFor="children" className="form-label">
            Children (5+ years)
          </label>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className={`btn btn-outline-secondary ${styles.btnDecrese} px-2 py-1`}
              onClick={() => handleChange('children', 'decrease')}
            >
              -
            </button>
            <input
              type="number"
              name="children"
              value={children}
              min="0"
              className={`text-center mx-1 ${styles.numberInput}`}
              readOnly
            />
            <button
              type="button"
              className={`btn btn-outline-secondary ${styles.btnIncrease} px-2 py-1`}
              onClick={() => handleChange('children', 'increase')}
            >
              +
            </button>
          </div>
        </div>
        <h5 className="my-4 fw-bold">Additional Services</h5>
        <div className="form-check">
          <input
            className={`form-check-input ${styles.checkboxInput}`}
            type="checkbox"
            value="120"
            name="service"
            onChange={handleServiceChange}
          />
          <label className="form-check-label d-flex justify-content-between" htmlFor="guide">
            <p className="text-muted">Additional Guide</p>
            <p className="text-muted">$120</p>
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className={`form-check-input ${styles.checkboxInput}`}
            type="checkbox"
            value="120"
            name="service"
            onChange={handleServiceChange}
          />
          <label className="form-check-label d-flex justify-content-between" htmlFor="internet">
            <p className="text-muted">Internet</p>
            <p className="text-muted">$120</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className={`form-check-input ${styles.checkboxInput}`}
            type="checkbox"
            value="120"
            name="service"
            onChange={handleServiceChange}
          />
          <label className="form-check-label d-flex justify-content-between" htmlFor="photography">
            <p className="text-muted">Photography</p>
            <p className="text-muted">$120</p>
          </label>
        </div>
        <div className={`${styles.totalCostPart} my-4`}>
          <p className="my-4">
            Total Cost:
            <span className={`${styles.greenColor}`}>${calculateTotalCost().toFixed(2)}</span>
            / per person
          </p>
        </div>
        {errorMsg && (
          <p className="error-msg text-center text-danger">{errorMsg}</p>
        )}
        <div className="d-flex justify-content-center">
          <button type="submit" className={`btn ${styles.proceedButton}`}>
            Proceed to Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingPackageForm;
