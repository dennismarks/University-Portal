import { escapeRegExp } from "lodash";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { uid } from "react-uid";
import { useHistory } from "react-router-dom";

import useDebounce from "../utils/useDebounce";

function SearchResults({ query, results }) {
  if (!results.length) {
    return null;
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05
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
    hidden: { opacity: 0, x: 50 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="w-full absolute mt-3 py-2 flex flex-col shadow-xl rounded-lg bg-white"
    >
      <ul>
        {results.slice(0, 3).map((result, index) => {
          const parts = result.title.split(
            new RegExp(`(${escapeRegExp(query)})`, "gi")
          );
          return (
            <motion.li
              variants={item}
              className="text-base text-gray-400 font-bold px-3 py-2"
              key={uid(result, index)}
            >
              <a href={result.url}>
                {parts.map((part, i) => (
                  <span
                    key={i}
                    className={
                      part.toLowerCase() === query.toLowerCase() &&
                      "text-gray-600"
                    }
                  >
                    {part}
                  </span>
                ))}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function SearchInput({ onChange, query, shouldAutoFocus }) {
  const history = useHistory();
  const handleChange = e => {
    onChange(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      history.push(`/search?q=${query}`);
    }
  };

  return (
    <form className="flex shadow rounded-lg" onSubmit={handleSubmit}>
      <input
        autoFocus={shouldAutoFocus}
        className="block text font-light text-gray-700 placeholder-gray-400 p-3 bg-white w-full rounded-l-lg"
        type="search"
        onChange={handleChange}
        placeholder="Ex. CSC309, Introduction to Computer Networks"
        value={query}
      />
      <button className="text font-medium uppercase text-white bg-blue-500 py-3 px-5 rounded-r-lg">
        Search
      </button>
    </form>
  );
}

function CourseSearchBar({ initialValue, shouldAutoFocus }) {
  const [query, setQuery] = useState(initialValue);
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedQuery) {
      // Replace with real network request
      setTimeout(() => {
        const staticResults = [
          { url: "/course/csc309", title: "CSC309 - Programming on the Web" },
          {
            url: "/course/csc301",
            title: "CSC301 - Introduction to Software Engineering"
          },
          { url: "/course/csc300", title: "CSC300 - Computers and Society" }
        ];
        setResults(staticResults);
      }, 750);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <SearchInput
        onChange={setQuery}
        query={query}
        shouldAutoFocus={shouldAutoFocus}
      />
      <SearchResults query={query} results={results} />
    </div>
  );
}

export default CourseSearchBar;
