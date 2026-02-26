import { useNavigate } from "react-router";
import { ReusableYesNoPage } from "../../components/ReusableYesNoPage";
import { ThirdQuestionPreamble } from "../../components/ThirdQuestionPreamble";
import { ThirdQuestionSuccessContent } from "../../components/ThirdQuestionSuccessContent";

const ThirdQuestionPage = () => {
  const navigate = useNavigate();

  return (
    <ReusableYesNoPage
      preambleContent={<ThirdQuestionPreamble />}
      question="Should I immediately propose this as the solution?"
      successContent={<ThirdQuestionSuccessContent />}
      showNextButton
      nextButtonText="Continue"
      onYesClick={() => navigate("/fourth-question")}
      yesButtonText="Yes"
      noButtonText="No"
      contentAlign="left"
      flyingButton="yes"
    />
  );
};

export { ThirdQuestionPage };
