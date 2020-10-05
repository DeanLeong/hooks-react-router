import React from "react";
import { Link } from "react-router-dom";

import currencies from "./currencies.json";

export default function Currencies() {
  return (
    <div>
      {currencies.map((currency) => (
        <h2>
          <Link to={`/price/${currency.currency}`}>{currency.currency}</Link>:
          {currency.country}
        </h2>
      ))}
    </div>
  );
}
