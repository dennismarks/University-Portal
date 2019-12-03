import React from "react";

import { CircularProgress } from "@material-ui/core";

function PageLoadingIndicator({ message = "Loading" }) {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <CircularProgress />
        <strong className="text-sm uppercase mt-4">{message}</strong>
      </div>
    </div>
  );
}

export default PageLoadingIndicator;
