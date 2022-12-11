import React from "react";
import { client } from "../libs/client";
import { useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";

type Props = {
  options: UseQueryOptions<{ name: string }>;
};

function Demo({ options }: Props) {
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching } = useQuery<{ name: string }>({
    ...options,
    queryKey: ["hello"],
    queryFn: () => client("/api/hello"),
  });

  return (
    <div>
      <div style={{ border: "1px solid #f00" }}>
        <p>
          cacheTime : {options.cacheTime}　/　staleTime : {options.staleTime}
        </p>
      </div>
      <div style={{ border: "1px solid #0f0" }}>
        <p>
          isLoading :　
          <span style={{ color: "red" }}>{isLoading ? "isLoading" : ""}</span>
        </p>
        <p>
          isFetching :　
          <span style={{ color: "green" }}>{isFetching ? "isFetching" : ""}</span>
        </p>
        <p>出力結果 : {data?.name}</p>
      </div>
      <div style={{ border: "1px solid pink" }}>
        <p>
          <button onClick={() => queryClient.invalidateQueries({ queryKey: ["hello"] })}>
            invalidateQueries
          </button>
        </p>
        <p>
          <button onClick={() => queryClient.resetQueries({ queryKey: ["hello"] })}>
            resetQueries
          </button>
        </p>
      </div>
    </div>
  );
}

export default Demo;
