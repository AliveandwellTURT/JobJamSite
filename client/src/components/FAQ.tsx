import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I don't get a job?",
    answer: "We offer a 100% money-back guarantee. If you complete all the required coaching sessions and follow our guidance but don't land a job within your plan's timeframe, we'll refund your payment in full. Your success is our priority.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes. If you're not satisfied within the first 14 days, we'll provide a full refund, no questions asked. After that, refunds are available if you don't secure a job within your plan's timeframe after completing all requirements.",
  },
  {
    question: "Is coaching online or in-person?",
    answer: "All coaching is conducted online via video call, making it convenient for you no matter where you are in New Zealand. This flexibility means you can fit sessions around your schedule without travel time.",
  },
  {
    question: "Can I pay in instalments?",
    answer: "Yes! Both our 12-Month Support Plan and 6-Month Fast Path offer instalment options. You pay an upfront amount followed by monthly payments, making it easier to invest in your career without the full cost upfront.",
  },
  {
    question: "What results can I expect?",
    answer: "Most clients secure job offers within 2-4 months of starting their coaching program. You'll gain interview confidence, a polished CV, salary negotiation skills, and ongoing support until you land the right role. We've helped 1,500+ people land their first job.",
  },
  {
    question: "Who is this program for?",
    answer: "JobJam is designed specifically for first-time jobseekers aged 16-24 in New Zealand who want professional guidance to land their first role. Whether you're a school leaver, university graduate, or career changer, we'll help you build the skills and confidence you need.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "It depends on your plan. The 2-Hour Intro is a single session. The 12-Month Plan includes weekly check-ins (1-2 hours), and the 6-Month Fast Path has twice-weekly sessions. You'll also spend time on homework like CV revisions and interview prep.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about JobJam coaching
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
