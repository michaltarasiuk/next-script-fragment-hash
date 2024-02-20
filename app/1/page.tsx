"use client";

import { ScriptIndicator } from "../_components/ScriptIndicator";
import Script from "next/script";

export default function Page1() {
  return (
    <>
      <div>
        <h1>You are on page 1</h1>
        <p>Script is fetched and executed only once.</p>
        <br />
        <ScriptIndicator />
      </div>
      <Script src="/script.js" />
    </>
  );
}
