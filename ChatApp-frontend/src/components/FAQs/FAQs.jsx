import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const FAQs = () => {
  return (
    <div
      id="faqs"
      className="faq-containner rounded-lg my-2 lg:p-28 md:p-16 sm:p-8  bg-slate-100 dark:bg-neutral-900 dark:text-teal-50"
    >
      <h2 className="text-5xl font-bold lg:text-center p-4 dark:text-teal-50 text-gray-900">
        Frequently <span className="text-violet-600"> Asked </span> Questions
      </h2>

      <Accordion activeIndex={0} className="border border-gray-300 rounded-lg ">
        <AccordionTab
          header=" What is ChatNova"
          className="p-4 font-bold border-b border-gray-300"
        >
          <p className="m-0  dark:text-white text-gray-800 rounded-lg">
            <span className="text-violet-600"> ChatNova </span> is a messaging
            application that allows users to communicate in real-time through
            text messages.
          </p>
        </AccordionTab>
        <AccordionTab
          header="How do I find friends on ChatNova"
          className="p-4 font-bold border-b border-gray-300"
        >
          <p className="m-0 p-4 rounded-lg">
            You can search for friends by their username by clicking on search
            button.
          </p>
        </AccordionTab>
        <AccordionTab
          header="How do I sign up?"
          className="p-4 font-bold border-b border-gray-300"
        >
          <p className="m-0 p-4 rounded-lg ">
            click on "Get Started" button abovet, and follow the instructions to
            create an account.
          </p>
        </AccordionTab>
        <AccordionTab
          header="Is ChatNova App available in App Store or Google Play?"
          className="p-4 font-bold"
        >
          <p className="m-0 p-4 rounded-lg">
            This feature is not available yet, but we are working on it!
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default FAQs;
