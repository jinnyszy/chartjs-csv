import { useEffect, useState, useRef } from "react";
import Navigation from "./Components/Navigation";
import Chart from "./Chart";
import "./App.css";

const initialData = {
  labels: [],
  datasets: [
    {
      label: "INDEX",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "brown",
      pointBackgroundColor: "rgba(153, 102, 255, 0.2)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "violet",
      pointHoverBorderColor: "green",
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 1,
      data: []
    }
  ]
};

export default function App() {
  const [isValidFile, setIsValidFile] = useState(null);
  const [file, setFile] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState("none");
  const [active, setActive] = useState(null);
  const defaultData = useRef(initialData);

  useEffect(() => {
    const data = {
      labels: file?.map((el) => el.data[0]),
      datasets: [
        {
          ...defaultData.current.datasets[0],
          data: file?.map((el) => el.data[selectedHeader])
        }
      ]
    };
    setActive(data);
  }, [selectedHeader, file, defaultData.current.datasets]);

  function handleUpload(file) {
    const { data: heads } = file?.shift() || { headers: null };

    setFile(file);
    setHeaders(heads);
  }

  function handleSelectHeader(e) {
    console.log(e.target.value);
    setSelectedHeader(e.target.value);
  }

  return (
    <div className="App">
      <Navigation
        uploadFile={(e) => handleUpload(e)}
        isValid={(e) => setIsValidFile(e)}
      >
        <select
          value={selectedHeader}
          onChange={handleSelectHeader}
          className="form-select btn btn-outline-success w-50"
          aria-label="Default select example"
        >
          <option value="none">select a value</option>
          {headers?.map((val, _i) => {
            return (
              <option
                key={val}
                value={_i}
                style={{
                  display: `${val === "Date" ? "none" : "block"}`
                }}
              >
                {val}
              </option>
            );
          })}
        </select>
      </Navigation>

      <h1 className="m-5">Display Chart</h1>
      {isValidFile === null ? (
        <h2 className="m-5">Please upload a csv file</h2>
      ) : !isValidFile ? (
        <h2 className="m-5">The file must have a csv Extencion</h2>
      ) : (
        <Chart data={active} />
      )}
    </div>
  );
}
