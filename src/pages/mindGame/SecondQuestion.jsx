import { useNavigate } from "react-router";
import { ReusableYesNoPage } from "../../components/ReusableYesNoPage";
import { SecondQuestionPreamble } from "../../components/SecondQuestionPreamble";
import { SecondQuestionSuccessContent } from "../../components/SecondQuestionSuccessContent";

const SecondQuestionPage = () => {
  const navigate = useNavigate();

  return (
    <ReusableYesNoPage
      preambleContent={<SecondQuestionPreamble />}
      question="Should I continue investigating quietly until I find the root cause?"
      successContent={<SecondQuestionSuccessContent />}
      showNextButton
      nextButtonText="Continue"
      onYesClick={() => navigate("/third-question")}
      yesButtonText="Yes"
      noButtonText="No"
      contentAlign="left"
      flyingButton="yes"
    />
  );
};

export { SecondQuestionPage };
