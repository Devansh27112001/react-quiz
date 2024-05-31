import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Finish from "./components/Finish";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./context/QuizContext";

export default function App() {
  const { questions, status } = useQuiz();

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        {status === "active" && (
          <>
            <Progress numQuestions={numQuestions} maxPoints={maxPoints} />
            <Question />
            <Footer>
              <Timer />

              <NextButton numQuestions={numQuestions} />
            </Footer>
          </>
        )}

        {status === "finish" && <Finish maxPossiblePoints={maxPoints} />}
      </Main>
    </div>
  );
}
