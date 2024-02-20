"use client";

import Script from "next/script";
import cryptoRandomString from "crypto-random-string";
import { ScriptIndicator } from "../_components/ScriptIndicator";

function getScriptSrc() {
  const urlObject = new URL("script.js", "http://localhost:3000");

  const id = cryptoRandomString({ length: 10, type: "url-safe" });
  urlObject.searchParams.set("id", id);

  return urlObject.toString();
}

export default function Page2() {
  return (
    <>
      <div>
        <h1>You are on page 2</h1>
        <p>Script is fetched and executed every time.</p>
        <br />
        <ScriptIndicator />
      </div>
      <Script src={getScriptSrc()} />
    </>
  );
}
