import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface JobDescriptionProps {
  description: string[];
}

export const JobDescription = (props: JobDescriptionProps) => {
  return (
    <AccordionItem value="job-description">
      <AccordionTrigger>Job Description</AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc ml-5">
          {props.description.map((desc, i) => <li key={i}>{desc}</li>)}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
