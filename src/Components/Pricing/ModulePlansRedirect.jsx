import { Navigate, useParams } from "react-router-dom";
import { modules } from "./pricingData";

// Old module pricing URLs (/module-pricing/:moduleId and .../:planId/details)
// now live as sections of the Plans page. Redirect (replace) to the matching
// section; unknown modules go to the module list.
const ModulePlansRedirect = () => {
  const { moduleId } = useParams();
  const target = modules[moduleId] ? `/Pricing#plans-${moduleId}` : "/Pricing#modules";
  return <Navigate to={target} replace />;
};

export default ModulePlansRedirect;
