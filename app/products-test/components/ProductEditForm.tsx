"use client";

import { useState, type FormEvent } from "react";
import { Pen } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductEditForm({
  id,
  name,
  description,
  price,
  editProductAction,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  editProductAction: (formData: FormData) => Promise<void>;
}) {
  const [showForm, setShowForm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);

    try {
      await editProductAction(new FormData(event.currentTarget));
      toast.success("Product updated");
      setShowForm(false);
    } catch {
      toast.error("Could not update product");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="mt-2">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={`Edit ${name}`}
        aria-expanded={showForm}
        onClick={() => setShowForm((visible) => !visible)}
      >
        <Pen aria-hidden="true" />
      </Button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-3 grid gap-2">
          <input type="hidden" name="id" value={id} />
          <Input name="name" aria-label="Product name" defaultValue={name} required />
          <Input
            name="description"
            aria-label="Product description"
            defaultValue={description}
            required
          />
          <Input
            name="price"
            aria-label="Product price"
            type="number"
            min="0"
            step="0.01"
            defaultValue={price}
            required
          />
          <div className="flex gap-2">
            <Button type="submit" size="sm" disabled={isSaving}>
              {isSaving ? "Saving…" : "Save changes"}
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={isSaving}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
