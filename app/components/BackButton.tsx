"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button className="backButton" type="button" onClick={goBack} aria-label="Go back">
      <span aria-hidden="true">←</span>
      Back
    </button>
  );
}
