"use client";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 w-full mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="text-primary text-sm font-semibold">Pricing</p>{" "}
          {/* Texte "Pricing" en couleur primary */}
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Save your life by becoming profitable
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8 w-full">
          {/* Premier plan : Formation */}
          <div className="relative w-full lg:w-1/3">
            {" "}
            {/* Utilisation de w-full pour maximiser la largeur */}
            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-12 rounded-2xl">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold">Formation</p>
                  <p className="text-base-content/80 mt-2">
                    Perfect for people that want to start trading
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <p className="text-lg text-base-content/60 line-through">
                  $200
                </p>
                <p className="text-5xl tracking-tight font-extrabold">$100</p>
                <p className="text-sm text-base-content/80 self-end">USD</p>
              </div>
              <div className="space-y-2.5 leading-relaxed text-base flex-1">
                <ul className="flex flex-col space-y-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>20 Hours of Educations Vidéos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>You Can Ask Me Question</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>My Trading Plan</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <ButtonCheckout />
                <div className="text-center text-sm opacity-90">
                  Pay once. Access forever.
                </div>
              </div>
            </div>
          </div>

          {/* Deuxième plan : Mentorship */}
          <div className="relative w-full lg:w-1/3 border-4 border-primary">
            {" "}
            {/* Utilisation de w-full pour maximiser la largeur */}
            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-12 rounded-2xl">
              {/* Badge Most Popular */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary opacity-80">
                  Most Popular
                </span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold">Mentorship</p>
                  <p className="text-base-content/80 mt-2">
                    Perfect for people that want a structured education
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <p className="text-lg text-base-content/60 line-through">
                  $200
                </p>
                <p className="text-5xl tracking-tight font-extrabold">$100</p>
                <p className="text-sm text-base-content/80 self-end">/month</p>
              </div>
              <div className="space-y-2.5 leading-relaxed text-base flex-1">
                <ul className="flex flex-col space-y-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Signals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Daily live stream</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Access to the community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Market outlooks on forex/indices/crypto</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <ButtonCheckout />
                <div className="text-center text-sm opacity-90">
                  Pay monthly. Access forever.
                </div>
              </div>
            </div>
          </div>

          {/* Troisième plan : 1on1 calls */}
          <div className="relative w-full lg:w-1/3">
            {" "}
            {/* Utilisation de w-full pour maximiser la largeur */}
            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-12 rounded-2xl">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold">1on1 Calls</p>
                  <p className="text-base-content/80 mt-2">
                    Perfect for people that want precision about their trading
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <p className="text-lg text-base-content/60 line-through">
                  $100
                </p>
                <p className="text-5xl tracking-tight font-extrabold">$50</p>
                <p className="text-sm text-base-content/80 self-end">/hour</p>
              </div>
              <div className="space-y-2.5 leading-relaxed text-base flex-1">
                <ul className="flex flex-col space-y-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1 hour call with me</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Review your setups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Adjust your trading plan</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <ButtonCheckout />
                <div className="text-center text-sm opacity-90">
                  Pay per hour. Access forever.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
