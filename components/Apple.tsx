const DownloadSection = () => {
  return (
    <section className="bg-base-200 py-12 text-center lg:w-1/2 lg:mx-auto lg:rounded-xl">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">
        Available everywhere
      </h2>
      <div className="flex justify-center gap-4">
        <a
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/ios.png"
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
        <a
          href="https://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/android.png"
            alt="Get it on Google Play"
            className="h-12"
          />
        </a>
      </div>
    </section>
  );
};

export default DownloadSection;
