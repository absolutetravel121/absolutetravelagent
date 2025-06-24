import React from "react";
import styles from "./OffersCard.module.scss";

const offers = [
  "Access exclusive group pricing and early-bird deals for Haj & Umrah packages — limited-time seasonal offers available.",
  "Refer a fellow agent and earn ₹1000 when they make their first booking. No cap on referrals.",
  "Get an instant ₹500 bonus for each of your first 5 bookings. A perfect start to your journey with us!",
];
const OffersCard = () => {
  return (
    <div className={styles.offerCardWrapper}>
      <h3 className={styles.title}>{"Offers"}</h3>
      <div className={styles.offerList}>
        {offers.map((offer, idx) => (
          <div key={idx} className={`${styles.offerItem} ${idx === 0 ? styles.highlighted : ""}`}>
            <span className={styles.dot}></span>
            <p>{offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersCard;
