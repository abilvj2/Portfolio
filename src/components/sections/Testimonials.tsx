import { SectionHeading } from "./SectionHeading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { profile } from "@/data/profile";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="References"
          title="What people I've worked"
          highlight="with say"
        />
      </div>

      <div className="mt-14 flex w-full justify-center">
        <InfiniteMovingCards
          items={profile.testimonials.map((t) => ({ ...t }))}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
