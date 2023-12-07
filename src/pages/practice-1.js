import { useState } from "react";

const data = ["wake up", "brushing", "drinking", "breakfast", "work"];

export default function App() {
  const [checked, setChecked] = useState([]);

  const handleOnchange = (i) => {
    const exists = checked.indexOf(i);
    if (exists < 0) {
      setChecked([...checked, i]);
    } else {
      setChecked(checked.filter((f) => f !== exists));
    }
  };

  const handleCancel = (i) => {
    const filtered = checked.filter((f) => f !== i);
    setChecked(filtered);
  };
  return (
    <div className="">
      <ul>
        {data.map((d, i) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            key={i}
          >
            <input
              onChange={() => handleOnchange(i)}
              type="checkbox"
              name=""
              id=""
            />
            <li
              style={{
                listStyle: "none",
              }}
            >
              {d}
            </li>
            {checked.map((c) => {
              if (c === i) {
                return (
                  <button onClick={() => handleCancel(i)} key={c}>
                    Cancel
                  </button>
                );
              }
            })}
          </div>
        ))}
      </ul>
    </div>
  );
}
