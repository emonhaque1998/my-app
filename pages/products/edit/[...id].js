import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [singleProduct, setSingelProduct] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((res) => {
      setSingelProduct(res.data);
    });
  }, [id]);
  return (
    <Layout>
      <h1>This form is Single Product Information</h1>
    </Layout>
  );
}
