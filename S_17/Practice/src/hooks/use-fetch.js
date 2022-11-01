import { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, cb) => {
    setIsLoading(true);
    try {
      const res = await fetch(config.url, {
        body: config.body && JSON.stringify(config.body),
        headers: config.headers && config.headers,
        method: config.method ? config.method : "GET",
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      cb(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { error, isLoading, sendRequest };
};

export default useFetch;
