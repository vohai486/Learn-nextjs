import { StudentDetail } from "@/components/swr";
import React, { useState } from "react";
export default function SWRPage() {
  const [detailList, setDetailList] = useState([1, 2, 3]);
  function addDetailList() {
    setDetailList((prev) => [...prev, 1]);
  }
  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={addDetailList}>Add Detail</button>
      <ul>
        {detailList.map((item, i) => (
          <li key={i}>
            <StudentDetail studentId="lea11ziflg8xoizb" />
          </li>
        ))}
      </ul>
    </div>
  );
}
