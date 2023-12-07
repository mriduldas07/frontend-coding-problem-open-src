import { useState } from "react";

const data = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Bangladesh",
    value: "BN",
    cities: ["Dhaka", "Pabna"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
];

export default function App() {
  const [selected, setSelected] = useState("IN");
  const filtered = data.filter((d) => d.value === selected);
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <select onChange={(e) => setSelected(e.target.value)}>
          {data.map((d) => (
            <option key={d.value} value={d.value}>
              {d.name}
            </option>
          ))}
        </select>
        <select>
          {filtered &&
            filtered[0]?.cities?.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
