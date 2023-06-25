import { useRouter } from "next/router";
import * as React from "react";

export interface ParamsProps {}

export default function Params(props: ParamsProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Params page</h1>
    </div>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    props: {},
  };
}
