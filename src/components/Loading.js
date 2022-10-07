import React from "react";

import PuffLoader from "react-spinners/PuffLoader";

import { useGlobalContext } from "../context";

const Loading = () => {
  const { loading } = useGlobalContext();

  return (
    <section className="section">
      <PuffLoader
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        className="loader"
      />
    </section>
  );
};

export default Loading;
