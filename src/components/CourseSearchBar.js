import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { uid } from "react-uid";

function SearchResults({ results }) {
  if (!results.length) {
    return null;
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="w-full absolute mt-3 py-2 flex flex-col shadow-xl rounded-lg bg-white"
    >
      <ul>
        {results.map((result, index) => (
          <motion.li
            variants={item}
            className="text-base text-gray-400 font-bold px-3 py-2"
            key={uid(result, index)}
          >
            <a href={`/course/${result}`}>{result}</a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function SearchInput({ onSearch, shouldAutoFocus }) {
  const [query, setQuery] = useState("");
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        autoFocus={shouldAutoFocus}
        className="block text font-light text-gray-700 placeholder-gray-400 p-3 bg-white w-full rounded-l-lg"
        type="search"
        onChange={handleChange}
        placeholder="Ex. CSC309, Introduction to Computer Networks"
        value={query}
      />
      <button className="text font-medium uppercase text-white bg-indigo-800 py-3 px-5 rounded-r-lg">
        Search
      </button>
    </form>
  );
}

function CourseSearchBar({ shouldAutoFocus }) {
  const initialResults = [
    "CSC309 - Programming on the Web",
    "CSC301 - Introduction to Software Engineering Software Engineering Software Engineering",
    "CSC300 - Computers and Society"
  ];
  const [results, setResults] = useState(initialResults);
  const addResult = useCallback(result => setResults([result, ...results]), [
    results
  ]);

  return (
    <div className="relative">
      <SearchInput onSearch={addResult} shouldAutoFocus={shouldAutoFocus} />
      <SearchResults results={results} />
    </div>
  );
}

export default CourseSearchBar;
