"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripsReservationForm {
  text: string;
  startDate: Date | null;
  budget: string;
}

function TripSearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripsReservationForm>();

  const router = useRouter();

  const onSubmit = (data: TripsReservationForm) => {
    router.push(
      `/trips/search?text=${data.text}&startDate=${data.startDate}&budget=${data.budget}`
    );
  };

  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:py-28">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center lg:text-[2.5rem]">
        Encontre sua proxima <span className="text-primary">viagem !</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg-12 lg:bg-primary lg:bg-opacity-20 lg:rounded-lg">
        <Input
          error={!!errors?.text}
          errorMessage={errors?.text?.message}
          placeholder="Onde você quer ir ?"
          {...register("text", {
            required: {
              value: true,
              message: "Texto é obrigatório.",
            },
          })}
        />

        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="w-1/2 lg:h-fit"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default TripSearch;
