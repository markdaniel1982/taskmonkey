import { useEffect, useRef, useState } from "react";

export default function MyComponent() {
  const [loading, setLoading] = useState(false);
  const [someData, setSomeData] = useState({});
  const componentMounted = useRef(true); // (3) component is mounted
  // ...
  useEffect(() => {
    (async () => {
      setLoading(true);
      someResponse = await doVeryLongRequest(); // it takes some time
      // When request is finished:
      if (componentMounted.current) {
        // (5) is component still mounted?
        setSomeData(someResponse.data); // (1) write data to state
        setLoading(false); // (2) write some value to state
      }
      return () => {
        // This code runs when component is unmounted
        componentMounted.current = false; // (4) set it to false when we leave the page
      };
    })();
  }, []);

  return (
    <div className={loading ? "loading" : ""}>
      {someData}
      <Link to="SOME_LOCAL_LINK">Go away from here!</Link>
    </div>
  );
}
