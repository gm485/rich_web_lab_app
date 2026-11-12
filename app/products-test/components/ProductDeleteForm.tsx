"use client";

import { useTransition, type FormEvent } from "react";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ProductDeleteForm({
  id,
  name,
  deleteProductAction,
}: {
  id: string;
  name: string;
  deleteProductAction: (formData: FormData) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        await deleteProductAction(formData);
        toast.success(`${name} deleted`);
      } catch {
        toast.error(`Could not delete ${name}`);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <Button
        type="submit"
        size="icon"
        variant="destructive"
        aria-label={`Delete ${name}`}
        disabled={isPending}
        aria-busy={isPending}
      >
        <Trash aria-hidden="true" />
      </Button>
    </form>
  );
}
