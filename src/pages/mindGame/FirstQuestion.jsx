import { useNavigate } from "react-router";
import { ReusableYesNoPage } from "../../components/ReusableYesNoPage";
import { FirstQuestionPreamble } from "../../components/FirstQuestionPreamble";
import { FirstQuestionSuccessContent } from "../../components/FirstQuestionSuccessContent";

const FirstQuestionPage = () => {
  const navigate = useNavigate();

  return (
    <ReusableYesNoPage
      preambleContent={<FirstQuestionPreamble />}
      question="Should I just move this case to Work in Progress and immediately start investigating?"
      successContent={<FirstQuestionSuccessContent />}
      showNextButton
      nextButtonText="Continue"
      onYesClick={() => navigate("/second-question")}
      yesButtonText="Yes"
      noButtonText="No"
      contentAlign="left"
      flyingButton="yes"
    />
  );
};

export { FirstQuestionPage };
