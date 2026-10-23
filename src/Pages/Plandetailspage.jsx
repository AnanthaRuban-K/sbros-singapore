import { useParams } from "react-router-dom";
import BreadCumb2 from "../Components/Common/BreadCumb2";
import PlanDetails from "../Components/Pricing/PlanDetails";
// import Cta2 from "../Components/Cta/Cta2";
import { TIERS, modules } from "../Components/Pricing/pricingData";

const PlanDetailsPage = () => {
    const { moduleId, planId } = useParams();

    // Dynamic breadcrumb title, e.g. "HRM – Basic"
    const moduleName = modules[moduleId]?.name || "Plan Details";
    const tier = TIERS.find((t) => t.id === planId);
    const title = tier ? `${moduleName} – ${tier.name}` : moduleName;

    return (
        <div>
            <BreadCumb2 Title={title}></BreadCumb2>
            <PlanDetails></PlanDetails>
            {/* <Cta2></Cta2> */}
        </div>
    );
};

export default PlanDetailsPage;