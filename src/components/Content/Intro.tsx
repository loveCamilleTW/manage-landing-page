import INTRO_SVG from "@images/illustration-intro.svg";

interface Feature {
  id: string;
  title: string;
  content: string;
}

export function Intro() {
  const MAIN_FEATURES: Feature[] = [
    {
      id: "01",
      title: "Track company-wide progress",
      content:
        "See how your day-to-day tasks fit into the wider vision. Go " +
        "from tracking progress at the milestone level all the way " +
        "done to the smallest of details. Never losesight of the " +
        "bigger picture again.",
    },
    {
      id: "02",
      title: "Advanced built-in reports",
      content:
        "Set internal delivery estimates and track progress toward " +
        "company goals. Our customisable dashboard helps you build " +
        "out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "03",
      title: "Everything you need in one place",
      content:
        "Stop jumping from one service to another to communicate, " +
        "store files, track tasks and share documents. Manage offers " +
        "an all-in-one team productivity solution.",
    },
  ];

  return (
    <section>
      <div>
        <div>
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            wile keeping the larger team goals in view.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src={INTRO_SVG} alt="" />
        </div>
        <h2>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
        <ul role="list">
          {MAIN_FEATURES.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  feature: Feature;
}

function FeatureItem(props: FeatureItemProps) {
  const { feature } = props;

  return (
    <li>
      <h3>{feature.title}</h3>
      <p>{feature.content}</p>
    </li>
  );
}
