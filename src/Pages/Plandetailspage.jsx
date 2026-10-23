import { useParams } from "react-router-dom";
import BreadCumb2 from "../Components/Common/BreadCumb2";
import PlanDetails from "../Components/Pricing/PlanDetails";
// import Cta2 from "../Components/Cta/Cta2";
import { modulePricing } from "../Components/Pricing/modulePricingData";
import { TIERS, TIER_LABELS } from "../Components/Pricing/planFeatureMatrix";

const PlanDetailsPage = () => {
    const { moduleId, planId } = useParams();

    // Dynamic breadcrumb title, e.g. "HRM – Basic"
    const moduleName = modulePricing[moduleId]?.requirementName || "Plan Details";
    const tierIdx = TIERS.indexOf(planId);
    const title = tierIdx >= 0 ? `${moduleName} – ${TIER_LABELS[tierIdx]}` : moduleName;

    return (
        <div>
            <BreadCumb2 Title={title}></BreadCumb2>
            <PlanDetails></PlanDetails>
            {/* <Cta2></Cta2> */}
        </div>
    );
};

export default PlanDetailsPage;