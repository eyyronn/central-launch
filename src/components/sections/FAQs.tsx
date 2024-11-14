import FAQ from "../FAQ";

type FaqsProps = {
  question: string;
  answer: string;
}[];

const faqs: FaqsProps = [
  {
    question: "What is Netflix?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel aliquam odit sunt illo, quibusdam adipisci quod ad in. Sequi, omnis expedita laborum harum dolorum obcaecati nulla error aliquid! Unde.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel aliquam odit sunt illo, quibusdam adipisci quod ad in. Sequi, omnis expedita laborum harum dolorum obcaecati nulla error aliquid! Unde.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel aliquam odit sunt illo, quibusdam adipisci quod ad in. Sequi, omnis expedita laborum harum dolorum obcaecati nulla error aliquid! Unde.",
  },
];

export default function FAQs() {
  return (
    <div
      id="faqs"
      className="flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-36 w-full gap-5"
    >
      <h1>FAQs</h1>
      <div className="flex flex-col gap-4 items-center justify-center w-full max-w-screen-sm">
        {faqs.map(({ question, answer }, idx) => (
          <FAQ question={question} answer={answer} key={idx} />
        ))}
      </div>
    </div>
  );
}
