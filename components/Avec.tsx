const Avec = () => {
  return (
    <section className="bg-base-200 text-base-content py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Struggling with{" "}
        <span className="text-red-500">inconsistent trading</span>? Gain an edge
        with <span className="text-primary">our mentorship</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Without Mentorship */}
        <div className="border border-red-500 rounded-lg p-6 bg-red-900/20">
          <h3 className="text-lg font-bold text-red-400 mb-4">
            Without a Structured Plan
          </h3>
          <ul className="space-y-3 text-red-300">
            <li>✗ No clear trading strategy</li>
            <li>✗ Emotional and impulsive decisions</li>
            <li>✗ Lack of consistency and discipline</li>
            <li>✗ No guidance or feedback</li>
            <li>✗ Repeated losses and frustration</li>
          </ul>
        </div>

        {/* With Mentorship */}
        <div className="border border-primary rounded-lg p-6 bg-primary/20">
          <h3 className="text-lg font-bold text-primary mb-4">
            With Our Trading Mentorship
          </h3>
          <ul className="space-y-3 text-primary">
            <li>✓ Proven trading strategies</li>
            <li>✓ Daily live mentorship sessions</li>
            <li>✓ Structured risk management</li>
            <li>✓ Trade breakdowns and feedback</li>
            <li>✓ Long-term profitability and confidence</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Avec;
