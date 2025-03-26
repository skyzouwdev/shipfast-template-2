const DownloadSection = () => {
  return (
    <section className="bg-base-200 py-16 text-center rounded-xl mx-auto max-w-2xl shadow-lg mb-16">
      <h2 className="text-4xl font-extrabold text-base-content mb-4">
        Join Our Trading Community
      </h2>
      <p className="text-base-content/80 text-lg mb-8">
        Get access to exclusive trading insights, mentorship, and daily market
        outlooks.
      </p>
      <div className="flex justify-center gap-8">
        <a
          href="https://discord.com/invite/ZFseUcDhme"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition duration-300"
        >
          <img
            src="/discord.png"
            alt="Join on Discord"
            className="h-24 drop-shadow-md bg-base-100 p-2 rounded-lg"
          />
        </a>
        <a
          href="https://whop.com/tradefast-education/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition duration-300"
        >
          <img
            src="/whop.png"
            alt="Join on Whop"
            className="h-24 drop-shadow-md bg-base-100 p-2 rounded-lg"
          />
        </a>
      </div>
    </section>
  );
};

export default DownloadSection;
