"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ProductEditForm({
  id,
  name,
  description,
  price,
  editProductAction,
  returnTo,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  editProductAction: (formData: FormData) => Promise<void>;
  returnTo: string;
}) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);

    try {
      await editProductAction(new FormData(event.currentTarget));
      toast.success("Product updated");
      router.push(returnTo);
    } catch {
      toast.error("Could not update product");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input type="hidden" name="id" value={id} />
      <FieldGroup className="mx-auto w-full max-w-md gap-6">
        <Field>
          <FieldLabel htmlFor="product-name">Name</FieldLabel>
          <Input id="product-name" name="name" defaultValue={name} required />
        </Field>
        <Field>
          <FieldLabel htmlFor="product-description">Description</FieldLabel>
          <Input
            id="product-description"
            name="description"
            defaultValue={description}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="product-price">Price</FieldLabel>
          <Input
            id="product-price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            defaultValue={price}
            required
          />
        </Field>
      </FieldGroup>
      <Field orientation="horizontal" className="mx-auto mb-6 mt-6 w-full max-w-md justify-center">
        <Button type="submit" size="lg" disabled={isSaving}>
          {isSaving ? "Saving…" : "Save changes"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          disabled={isSaving}
          onClick={() => router.push(returnTo)}
        >
          Cancel
        </Button>
      </Field>
    </form>
  );
}
