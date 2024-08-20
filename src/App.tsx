import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { add } from "./lib/calculator";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutPut] = useState(0);
  const [error, setError] = useState("");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  useEffect(() => {
    document.title = "String Calculator!!";
  }, []);

  const calculate = () => {
    setError("");
    setSubmittedOnce(true);
    try {
      const addition = add(input);
      setOutPut(addition);
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <div className="flex flex-col flex-1 md:justify-center w-full m-4  mx-auto">
      <div className="max-w-lg m-4">
        <h2 className="text-2xl">String Calculator</h2>
        <div className="flex items-center my-2">
          <div className="relative w-full">
            <input
              value={input}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter String"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={calculate}
          >
            Calculate!
            <span className="sr-only">Search</span>
          </button>
        </div>
        {submittedOnce && (
          <p>
            {error ? (
              <b className="text-red-700">{error}</b>
            ) : (
              <b className="text-green-800">Output: {output}</b>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
