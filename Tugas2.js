import { useEffect } from "react";
import "./App.css";

function App() {
  function checkingClass(data) {
    return data.class === 12;
  }

  function printOutput(data, totalValue, isClass) {
    document.write(data.name + " kelas " + data.class + (isClass ? " mau lulus " : "") + " nilai akhir " + totalValue + "<br/>");
  }

  useEffect(() => {
    const person = [
      { name: "Joni", class: 12, value: 100, reduceValue: 10 },
      { name: "Poni", class: 10, value: 100, reduceValue: 23 },
      { name: "Asep", class: 11, value: 100, reduceValue: 20 },
    ];

    for (const index in person) {
      var hasil = person[index].value - person[index].reduceValue;
      var isClass12 = checkingClass(person[index]);
      if (isClass12) {
        printOutput(person[index], hasil, isClass12);
      } else {
        printOutput(person[index], hasil);
      }
    }
  }, []);
  return () => {};
}

export default App;
