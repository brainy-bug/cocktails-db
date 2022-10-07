import React from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) return <Loading />;

  if (cocktails.length < 1)
    return (
      <section className="empty-page">
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      </section>
    );

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          const { id, name, image, info, glass } = item;
          return (
            <article className="cocktail" key={id}>
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
              <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{info}</h4>
                <p>{glass}</p>
                <Link to={`/cocktail/${id}`} className="btn btn-primary">
                  details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
