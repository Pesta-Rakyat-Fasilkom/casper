import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface BenefitsProps {
  benefits: string[];
}

export const Benefits = (props: BenefitsProps) => {
  return (
    <AccordionItem value="benefits">
      <AccordionTrigger>Benefits</AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc ml-5">
          {props.benefits.map((ben, i) => <li key={i}>{ben}</li>)}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
