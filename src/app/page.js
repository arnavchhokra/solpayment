"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { MoonPayProvider } from '@moonpay/moonpay-react';
import { useState } from "react";
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';


export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <MoonPayProvider
    apiKey=""
    debug
>
<MoonPayBuyWidget
            variant="embedded"
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCurrencyCode="sol"
            visible={visible}
        />
        <button onClick={() => setVisible(!visible)}>
            Toggle widget
        </button>
</MoonPayProvider>
  );
}
