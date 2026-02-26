import { useNavigate } from "react-router";
import { ReusableYesNoPage } from "../../components/ReusableYesNoPage";
import ifno from "../../assets/bubu/ifnogif.gif";
import rose from "../../assets/bubu/roseflower.gif";
import happymeandyou from "../../assets/bubu/bubushowinglove.gif";

const ProposalPage = () => {
  const navigate = useNavigate();

  return (
    <ReusableYesNoPage
      question="Take this Rose and accept my Love??"
      successTitle="Yayyyy!"
      successText={[
        "Thank you for accepting my love! This means the world to me.",
        "I promise to cherish every moment we share together.",
      ]}
      successImage={happymeandyou}
      defaultImage={rose}
      noHoverImage={ifno}
      onYesClick={() => navigate("/finalPage")}
      yesButtonText="Yes Obviously"
      noButtonText="No Not at all"
    />
  );
};

export { ProposalPage };
