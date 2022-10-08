import React from "react";
import { useState, useEffect, useMemo } from "react";

const EffectDependency = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    User: "",
    selected: false,
  });

  const person = useMemo(
    () => ({
      User: data.User,
      selected: data.selected,
    }),
    [data.User, data.selected]
  );

  useEffect(() => {
    console.count("The state has changed, useEffect runs!");
  }, [person]);

  const handleAdd = () => {
    setData((prev) => ({ ...prev, User: name }));
  };

  const handleSelect = () => {
    setData((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`{
        Name:${data.User},
        Selected:${data.selected.toString()}
      }`}
    </div>
  );
};

export default EffectDependency;
