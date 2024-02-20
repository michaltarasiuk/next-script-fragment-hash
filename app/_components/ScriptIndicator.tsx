import Link from "next/link";

export function ScriptIndicator() {
  return (
    <div>
      <h2>Instruction</h2>
      <p>
        Status:
        <span
          id="indicator"
          style={{
            backgroundColor: "red",
            width: "1em",
            height: "1em",
            display: "inline-block",
            borderRadius: ".5em",
          }}
        />
      </p>
      <p style={{ maxWidth: "30rem" }}>
        The status should be green if the script has been executed. It loads
        perfectly when you open the page for the first time.
        <br />
        <br />
        Use the link below to go to the homepage and then return to this page to
        see that the status will be red.
      </p>
      <br />
      <Link href="/">Go to home page</Link>
    </div>
  );
}
