import { useNavigate } from "react-router";
import { ReusableYesNoPage } from "../../components/ReusableYesNoPage";
import { FourthQuestionPreamble } from "../../components/FourthQuestionPreamble";
import { FourthQuestionSuccessContent } from "../../components/FourthQuestionSuccessContent";

const FourthQuestionPage = () => {
  const navigate = useNavigate();

  return (
    <ReusableYesNoPage
      preambleContent={<FourthQuestionPreamble />}
      question="Should I directly move the case to Solution Proposed and document it?"
      successContent={<FourthQuestionSuccessContent />}
      showNextButton
      nextButtonText="Continue"
      onYesClick={() => navigate("/final")}
      yesButtonText="Yes"
      noButtonText="No"
      contentAlign="left"
      flyingButton="yes"
    />
  );
};

export { FourthQuestionPage };
