"use client";

import RecipeForm from "@/app/recipe/RecipeForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RecipeFormToggle() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-auto my-8 w-full max-w-2xl">
      {showForm ? (
        <Card className="w-full max-w-xl shadow-md">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl font-bold">Add a new recipe</CardTitle>
            <CardDescription>Enter the details for your recipe.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-6 pb-6">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <RecipeForm />
          </CardContent>
        </Card>
      ) : (
        <>
          <Button
            type="button"
            variant="outline"
            className="mb-4 cursor-pointer"
            size="lg"
            onClick={() => setShowForm(true)}
          >
            Create Recipe 
          </Button>

        </>
      )}
    </div>
  );
}
