"use client";

import Script from "next/script";
import cryptoRandomString from "crypto-random-string";
import { ScriptIndicator } from "../_components/ScriptIndicator";

function getScriptSrc() {
  const urlObject = new URL("script.js", "http://localhost:3000");
  urlObject.hash = cryptoRandomString({ length: 10, type: "url-safe" });
  return urlObject.toString();
}

export default function Page3() {
  return (
    <>
      <div>
        <h1>You are on page 3</h1>
        <p>Script is fetched once and executed every time.</p>
        <br />
        <ScriptIndicator />
      </div>
      <Script src={getScriptSrc()} />
    </>
  );
}
