/**
 * https://reacttraining.com/react-router/web/example/query-parameters
 */

import { useLocation } from "react-router-dom";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default useQueryParams;
