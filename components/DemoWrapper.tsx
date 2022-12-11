import React, { useState } from "react";
import { useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

function DemoWrapper({ children }: Props) {
  const [isShowDemo, setIsShowDemo] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setIsShowDemo((prev) => !prev)}>
          {isShowDemo ? "hide" : "show"} toggle
        </button>
      </div>
      {isShowDemo && children}
    </div>
  );
}

export default DemoWrapper;
