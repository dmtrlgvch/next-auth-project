"use client";

import {newVerification} from "@/actions/new-verification";
import {CardWrapper} from "@/components/auth/card-wrapper";
import {useSearchParams} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        }
        if (data.success) {
          setSuccess(data.success);
        }
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        {!error && !success && <BeatLoader />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};
