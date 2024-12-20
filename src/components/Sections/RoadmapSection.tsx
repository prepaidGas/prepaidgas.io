import { ROADMAP_DATA } from "@/constants";
import Roadmap from "../Roadmap/Roadmap";

export default function RoadmapSection() {
  return (
    <section className=" mt-16" id="roadmap">
      <div className="container">
        <h2 className="section_title">Roadmap</h2>
        <div className="flex flex-col justify-center items-center">
          <Roadmap roadmapData={ROADMAP_DATA} />
        </div>
      </div>
    </section>
  );
}
