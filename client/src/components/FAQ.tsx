import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I don't get a job?",
    answer: "You don't pay a thing! If you complete all the required coaching sessions and follow our guidance but don't land a job within your plan's timeframe, we'll refund your payment in full. Your success is our priority.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes. If you're not satisfied within the first 7 days, you dont pay a thing, no questions asked.",
  },
  {
    question: "Is coaching online or in-person?",
    answer: "All coaching is conducted online via video call, making it convenient for you no matter where you are in New Zealand. This flexibility means you can fit sessions around your schedule without travel time.",
  },
  {
    question: "Can I pay in instalments?",
    answer: "Yes! Both our 8 Month Support Plan and 4 Month Fast Path offer instalment options. After securing your job, you pay an upfront amount followed by monthly payments, making it easier to invest in your career.",
  },
  {
    question: "What results can I expect?",
    answer: "Most clients secure job offers within 4-6 months of starting their coaching program. You'll gain interview confidence, a polished CV, salary negotiation skills, and ongoing support until you land the right role. I've helped 1,500+ people land their first job.",
  },
  {
    question: "Who is this program for?",
    answer: "JobJam is for people who want to take control of their job search. It’s designed for first time jobseekers, career changers, and anyone feeling blocked, undervalued, or unsure how to move forward. If you’re looking for a new role, more challenge, or a pay rise, JobJam gives you practical tools and support to make it happen.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "You get out of JobJam what you put in. The program starts with a core block of learning in the first two weeks, around 40 hours total. If you can’t do this full time, you can spread it over a month part time, at roughly 20 hours a week, and complete it at your own pace. After that, there are compulsory checkins. If you’re on the four month plan, these happen weekly. On the eight month plan, they’re fortnightly. You can also book additional sessions. From experience, the people who see the best results are those who commit at least 20 hours a week to their job hunt. That time includes learning, applications, networking, and prep.",
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
