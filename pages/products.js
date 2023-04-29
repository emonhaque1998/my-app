import Layout from "@/components/Layout";
import ProductsForm from "@/components/ProductsForm";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
  return (
    <Layout>
      <ProductsForm />
    </Layout>
  );
}
