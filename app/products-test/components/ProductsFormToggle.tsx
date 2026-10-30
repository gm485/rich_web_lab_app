"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductsForm from "./ProductsForm";

export default function ProductsFormToggle({
  createProductAction,
}: {
  createProductAction: (formData: FormData) => Promise<void>;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <section>
      <Button type="button" variant={"outline"} onClick={() => setShowForm((visible) => !visible)}>
        {showForm ? "Cancel" : "Add product"}
      </Button>

      {showForm && <ProductsForm createProductAction={createProductAction} />}
    </section>
  );
}
