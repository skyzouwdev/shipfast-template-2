"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { Input } from "@/components/ui/Input";

import { useSchema } from '@/hooks/useSchema';

import { useRequestResetPassword } from '@/services/hooks/useRequestResetPassword';

import config from "@/config";

type RequestResetPasswordProps = Required<z.infer<typeof useSchema.requestResetPassword>>;

export default function RequestResetPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestResetPasswordProps>({
    resolver: zodResolver(useSchema.requestResetPassword),
  });

  const UseRequestResetPassword = useRequestResetPassword({
    options: {
      onSuccess: () => {
        toast.success("Email para realizar restauração da senha enviado!", { position: "top-right" });
        router.push("/sign-in")
      },
      onError: (error) => {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
      }
    }
  });

  const onSubmit: SubmitHandler<RequestResetPasswordProps> = async ({ email }) => {
    try {
      await UseRequestResetPassword.mutateAsync({ email });

    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.error(e);
      }
    }
  };

  return (
    <main className="p-8 md:p-24" data-theme={config.colors.theme}>
      <div className="mb-4 text-center">
        <Link href="/sign-in" className="btn btn-ghost btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Sign-in
        </Link>
      </div>

      <h1 className="mb-12 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
        Solicitar alteração de senha
      </h1>

      <div className="mx-auto max-w-xl space-y-8">
        <form
          className="form-control w-full space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="email"
              autoComplete="email"
              placeholder="Seu e-mail"
              className="input input-bordered w-full placeholder:opacity-60"
              {...register('email')}
              errorName={errors?.email?.message}
            />
          </div>

          <button
            className="btn btn-primary btn-block"
            disabled={UseRequestResetPassword.isLoading}
            type="submit"
          >
            {UseRequestResetPassword.isLoading && (
              <span className="loading loading-spinner loading-xs"></span>
            )}
            Solicitar
          </button>
        </form>
      </div>
    </main>
  );
}
