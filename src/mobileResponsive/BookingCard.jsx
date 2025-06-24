import React from "react";
import styles from "./BookingCard.module.scss";

const BookingCard = ({ data }) => {
  const { name, from, to, departure, priority, payment, email, phone } = data;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>{name}</span>
        <span>
          📍 {from} → {to}
        </span>
      </div>
      <div className={styles.row}>
        <span>
          Departure <strong>{departure}</strong>
        </span>
        <span>
          Priority{" "}
          <strong className={priority === "High" ? styles.high : styles.low}>
            {priority}
          </strong>
        </span>
      </div>
      <div className={styles.row}>
        <span>
          Payment <strong>{payment} INR</strong>
        </span>
      </div>
      <div className={styles.row}>
        <span>@ {email}</span>
        <span>📞 {phone}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.accept}>Accept</button>
        <button className={styles.deny}>Deny</button>
      </div>
    </div>
  );
};

export default BookingCard;
