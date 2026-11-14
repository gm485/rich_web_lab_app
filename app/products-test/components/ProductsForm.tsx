"use client"

import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import Image from "next/image"
import { toast } from "sonner"
import { productSchema, type ProductFormValues } from "@/lib/validations/product"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export default function ProductsForm({
  createProductAction,
  onCreated,
}: {
  createProductAction: (formData: FormData) => Promise<void>;
  onCreated?: () => void;
}) {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      image: null as File | null,
    },
  })
  const selectedImage = useWatch({ control: form.control, name: "image" })
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
    multiple: false,
    onDrop: ([file]) => form.setValue("image", file ?? null, { shouldDirty: true }),
  })

  useEffect(() => {
    if (!selectedImage) {
      setImagePreviewUrl(null)
      return
    }

    const previewUrl = URL.createObjectURL(selectedImage)
    setImagePreviewUrl(previewUrl)

    return () => URL.revokeObjectURL(previewUrl)
  }, [selectedImage])

  async function onSubmit(values: ProductFormValues) {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("description", values.description);
    formData.set("price", values.price);
    if (values.image) formData.set("image", values.image);

    try {
      await createProductAction(formData);
      toast.success("Product created");
      form.reset();
      onCreated?.();
    } catch {
      toast.error("Could not create product");
    }
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardDescription>
          Show your new recipe to the world.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Product Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="macbook"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="describe the laptop"
                      rows={6}
                      maxLength={100}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>Up to 100 characters.</FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-price">
                    Price
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-price"
                    aria-invalid={fieldState.invalid}
                    placeholder="€199"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-image">
                    Product image
                  </FieldLabel>
                  <div
                    {...getRootProps({
                      className: `cursor-pointer rounded-lg border border-dashed p-6 text-center transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        isDragActive ? "border-primary bg-accent" : "border-input hover:border-primary/60"
                      }`,
                      "aria-invalid": fieldState.invalid,
                    })}
                  >
                    <input
                      {...getInputProps({
                        id: "form-rhf-demo-image",
                        name: field.name,
                        onBlur: field.onBlur,
                      })}
                    />
                    <p className="text-sm">
                      {isDragActive
                        ? "Drop the image here..."
                        : "Drag 'n' drop an image here, or click to select files"}
                    </p>
                  </div>
                  <FieldDescription>
                    Files
                  </FieldDescription>
                  {field.value && (
                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                      <li>{field.value.name} - {field.value.size} bytes</li>
                    </ul>
                  )}
                  {imagePreviewUrl && (
                    <Image
                      src={imagePreviewUrl}
                      alt="Preview of the selected product image"
                      width={320}
                      height={220}
                      unoptimized
                      className="mt-2 h-44 w-full rounded-md border object-contain"
                    />
                  )}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" size="lg" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" size="lg" form="form-rhf-demo">
            Create product
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
