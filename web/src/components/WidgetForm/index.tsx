import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImg from "../../assets/Bug.svg";
import ideaImg from "../../assets/Idea.svg";
import thoughtImg from "../../assets/Thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        img: {
            source: bugImg,
            alt: "Img Inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        img: {
            source: ideaImg,
            alt: "Img Ideia"
        }
    },
    OTHER: {
        title: "Outro",
        img: {
            source: thoughtImg,
            alt: "Img Pensamento"
        }
    },
};

export type FeedbcakType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbcakType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleResetFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {
                feedbackSent ? (
                    <FeedbackSuccessStep onFeedbackResetRequested={handleResetFeedback} />
                ) : (
                    <>
                        {
                            !feedbackType ? (
                                <FeedbackTypeStep onFeebackTypeChanged={setFeedbackType} />
                            )
                                : (
                                    <FeedbackContentStep
                                        feedbackType={feedbackType}
                                        onFeedbackResetRequested={handleResetFeedback}
                                        onFeedbackSent={() => setFeedbackSent(true)}
                                    />
                                )
                        }
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br/">Rocketseat</a>
            </footer>
        </div >
    );
}