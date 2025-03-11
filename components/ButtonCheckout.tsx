"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

import apiClient from "@/libs/api";
import config from "@/config";

import Modal from "./Modal";

// Déclarez l'environnement de production
const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Ce composant crée des sessions de paiement Stripe
const ButtonCheckout = ({
  priceId,
  mode = "payment",
}: {
  priceId: string;
  mode?: "payment" | "subscription";
}) => {
  const supabase = createClientComponentClient();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePayment = async () => {
    setIsLoading(true);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    try {
      if (!session) {
        setIsModalOpen(true);
      } else {
        const { url }: { url: string } = await apiClient.post(
          "/stripe/create-checkout",
          {
            priceId,
            successUrl: window.location.href,
            cancelUrl: window.location.href,
            mode,
          }
        );

        window.location.href = url;
      }
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Vamos nos cadastrar primeiro?"
      >
        <div className="space-y-4">
          <p>
            Antes de iniciarmos, vamos nos cadastrar para assim iniciarmos a
            compra do plano?
          </p>
          <Link href="/sign-up" className="btn btn-primary">
            Iniciar cadastro
          </Link>
        </div>
      </Modal>

      <button
        className="bg-black text-white hover:bg-gray-800 w-full mr-4 rounded-full px-6 py-2"
        onClick={IS_PRODUCTION ? () => null : () => handlePayment()}
        disabled={IS_PRODUCTION ? true : false}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <span>{IS_PRODUCTION ? "WIP 🚧" : "Get TradeFast"}</span>
        )}
      </button>
    </>
  );
};

export default ButtonCheckout;
