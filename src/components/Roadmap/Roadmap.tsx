import "./styles.css";

export interface RoadmapItem {
  title: string;
  date: string;
  body: string;
}

export default function Roadmap({
  roadmapData,
}: {
  roadmapData: RoadmapItem[];
}) {
  return (
    <ul className="timeline">
      {roadmapData.map((item, index) => (
        <li key={`roadmap-item-${index}`}>
          <div className={`${index % 2 ? "direction-r" : "direction-l"}`}>
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">{item.title}</span>
              <span className="time-wrapper bg-color-emerald">
                <span className="time">{item.date}</span>
              </span>
            </div>
            <div className="desc">{item.body}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
