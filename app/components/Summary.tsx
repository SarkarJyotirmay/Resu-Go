import React from "react";
import ScoreGauge from "./ScoreGauge";
import ScoreBadge from "./ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
    const textColor = score > 70 ? 'text-green-500' : score > 49 ? 'text-yellow-600' : 'text-red-500'
  return (
    <>
      <div className="resume-summary">
        <div className="category">
            <div className="flex justify-center items-center gap-2">
                <p className="text-md sm:text-2xl font-semibold">{title}</p>
                <ScoreBadge score={score}/>
            </div>
            <p className="text-2xl font-semibold"><span className={textColor}>{score}</span>/100</p>
        </div>
      </div>
    </>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-4">
        <ScoreGauge score={feedback.overallScore} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your resume score</h2>
          <p className="text-sm text-gray-500">
            This test is calculated based on the variables listed bellow
          </p>
        </div>
      </div>

      <Category title="Tone & style" score={feedback.toneAndStyle.score} />
      <Category title="Content score" score={feedback.content.score} />
      <Category title="Structure" score={feedback.structure.score} />
      <Category title="Skills" score={feedback.skills.score} />
    </div>
  );
};

export default Summary;
