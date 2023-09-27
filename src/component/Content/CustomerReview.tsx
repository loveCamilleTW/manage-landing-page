interface Review {
  customerName: string;
  review: string;
}

export default function CustomerReview() {
  const CUSTOMER_REVIEWS: Review[] = [
    {
      customerName: "Anisha Li",
      review:
        "“Manage has supercharged our team’s workflow. The ability to " +
        "maintain visibility on larger milestones at all times keeps " +
        "everyone motivated.”",
    },
    {
      customerName: "Ali Bravo",
      review:
        "“We have been able to cancel so many other subscriptions " +
        "since using Manage. There is no more cross-channel confusion " +
        "and everyone is much more focused.”",
    },
    {
      customerName: "Richard Watts",
      review:
        "“Manage allows us to provide structure and process. It keeps " +
        "us organized and focused. I can’t stop recommending them to " +
        "everyone I talk to!”",
    },

    {
      customerName: "Shanai Gough",
      review:
        "“Their software allows us to track, manage and collaborate on " +
        "our projects from anywhere. It keeps the whole team in-sync " +
        "without being intrusive.”",
    },
  ];

  return (
    <section className="carousel-section">
      <h2>What they’ve said</h2>
      <CustomerReviewCarousel />
    </section>
  );
}

function CustomerReviewCarousel() {
  return null;
}
