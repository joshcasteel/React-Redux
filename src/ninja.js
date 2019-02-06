import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja, i) => {
    return (
      <div className="ninja" key={i}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <div>Id: {i}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.name);
          }}
        >
          Delete ninja
        </button>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
