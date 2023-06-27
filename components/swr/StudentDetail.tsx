import * as React from "react";
import useSWR from "swr";
export interface StudentDetailProps {
  studentId: any;
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  // Lấy đường dẫn làm key luôn
  const { data, error, mutate, isValidating, isLoading } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000,
    }
  );
  function handleMutateClick() {
    mutate(
      {
        name: "hai",
      },
      true
      // Dùng true thì fetch lại api r validate vs dữ liệu dc set dùng false thì nó set kh có validate
    );
  }
  return (
    <div>
      {isLoading && <h2>Loading!!</h2>}
      Name {data?.name || "--"}{" "}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
