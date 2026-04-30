import { CartProvider } from "@/components/cart-context";
import CartBar from "@/components/cart-bar";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartBar />
    </CartProvider>
  );
}
