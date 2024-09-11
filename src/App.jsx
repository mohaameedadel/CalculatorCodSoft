import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div
        className="min-h-screen text-white bg-gradient-to-r from-slate-600 from-10% via-gray-600 via-30% to-green-400 to-90%   
    "
      >
        <h1 className=" font-bold text-3xl text-center py-6 uppercase">
          Calculator
        </h1>
        <div className=" justify-center items-center flex p-3 ">
          <div className="w-full md:w-2/3 lg:w-1/2 shadow-2xl p-4 rounded-2xl  shadow-gray-950 ">
            <form>
              <div className="text-center">
                <input
                  type="text"
                  value={value}
                  onChange={() => {}}
                  placeholder="0"
                  className=" px-4 py-6 rounded-md  outline-green-600  text-black font-bold text-lg bg-white w-full"
                />
              </div>
              <div className="grid grid-cols-3">
                <input
                  onChange={() => {}}
                  onClick={() => setValue("")}
                  className=" input-button"
                  type="button"
                  value="AC"
                />
                <input
                  onChange={() => {}}
                  onClick={() => setValue(value.slice(0, -1))}
                  className=" input-button"
                  type="button"
                  value="DE"
                />

                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="/"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="-"
                />

                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="*"
                />

                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="+"
                />
                <input
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="7"
                  onChange={() => {}}
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="8"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="9"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="4"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="5"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="6"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="1"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="2"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="3"
                />

                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="0"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="00"
                />
                <input
                  onChange={() => {}}
                  onClick={(e) => setValue(value + e.target.value)}
                  className=" input-button"
                  type="button"
                  value="."
                />
                <input
                  onChange={() => {}}
                  onClick={() => setValue(eval(value))}
                  className=" input-button  col-span-3"
                  type="button"
                  value="="
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



