"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import ProductsForm from "./components/ProductsForm";

const ProductsViewContext = createContext<((isEmpty: boolean) => void) | null>(null);

export function ProductsViewState({
  children,
  isEmpty,
}: {
  children: ReactNode;
  isEmpty: boolean;
}) {
  const onEmptyChange = useContext(ProductsViewContext);

  useEffect(() => {
    onEmptyChange?.(isEmpty);
  }, [isEmpty, onEmptyChange]);

  return children;
}

export default function ProductsPageShell({
  children,
  createProductAction,
  refreshProductsAction,
}: {
  children: ReactNode;
  createProductAction: (formData: FormData) => Promise<void>;
  refreshProductsAction: () => Promise<void>;
}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const onEmptyChange = useCallback((empty: boolean) => {
    setIsEmpty(empty);
    if (empty) setShowCreateForm(true);
  }, []);

  return (
    <div className="productsLayout">
      <header className="productsHeader">
        <div>
          <p className="eyebrow">CATALOGUE</p>
          <h1>Products</h1>
        </div>
        <div className="productsActions" role="group" aria-label="Product actions">
          <form action={refreshProductsAction}>
            <Button type="submit" variant="outline">Get all products</Button>
          </form>
          {!isEmpty && (
            <Button
              type="button"
              variant="outline"
              aria-expanded={showCreateForm}
              onClick={() => setShowCreateForm((show) => !show)}
            >
              {showCreateForm ? "View products" : "Add product"}
            </Button>
          )}
        </div>
      </header>
      <ProductsViewContext.Provider value={onEmptyChange}>
        <section className="productsWorkspace" aria-label="Products workspace">
          {showCreateForm ? (
            <div className="productsFormView">
              <ProductsForm
                createProductAction={createProductAction}
                onCreated={() => setShowCreateForm(false)}
              />
            </div>
          ) : children}
        </section>
      </ProductsViewContext.Provider>
    </div>
  );
}
