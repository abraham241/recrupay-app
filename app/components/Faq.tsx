import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <>
      <div className="md:px-20 py-10 px-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Questions fréquentes
        </h1>
        <div className="py-7 ">
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels sont les avantages de recruPay ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>recruPay est - il sécurisé ?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qui peut utiliser recruPay</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels sont les avantages de recruPay ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
