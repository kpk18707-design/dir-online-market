"use client";

import { useState } from "react";

const categories = [
  "تمام اشتہارات",
  "موبائل فون",
  "گاڑیاں",
  "مکانات",
  "زمین",
  "فرنیچر",
  "دیگر اشیاء",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("تمام اشتہارات");

  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#f3f7f3",
      minHeight: "100vh",
      color: "#183b29"
    }}>
      <header style={{
        background: "#075c36",
        color: "white",
        padding: "25px",
        textAlign: "center"
      }}>
        <h1>Dir Online Market</h1>
        <h3>دیر کی اپنی آن لائن مارکیٹ</h3>
        <p>خریدیں بھی، بیچیں بھی، اعتماد کے ساتھ</p>
      </header>

      <section style={{ padding: "25px", textAlign: "center" }}>
        <h2>اپنی پسند کی چیز تلاش کریں</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="یہاں تلاش کریں..."
          style={{
            width: "90%",
            maxWidth: "400px",
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #aaa"
          }}
        />
      </section>

      <section style={{ padding: "20px", textAlign: "center" }}>
        <h2>اشیاء کی اقسام</h2>
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "12px",
              margin: "5px",
              borderRadius: "8px",
              border: "none",
              background: category === item ? "#075c36" : "#ddd",
              color: category === item ? "white" : "#183b29"
            }}
          >
            {item}
          </button>
        ))}
      </section>

      <section style={{
        padding: "25px",
        textAlign: "center",
        background: "white"
      }}>
        <h2>تازہ اشتہارات</h2>
        <p>ابھی کوئی اشتہار موجود نہیں ہے۔</p>
        <p>جلد یہاں خرید و فروخت کے اشتہارات نظر آئیں گے۔</p>
      </section>

      <section style={{
        padding: "30px",
        textAlign: "center",
        background: "#e5f1e7"
      }}>
        <h2>اپنی چیز فروخت کریں</h2>
        <p>اشتہار لگانے کے لیے اکاؤنٹ بنائیں۔</p>
        <button
          onClick={() => alert("اکاؤنٹ بنانے کی سہولت جلد شامل ہوگی۔")}
          style={{
            padding: "14px 25px",
            background: "#d5aa36",
            border: "none",
            borderRadius: "8px"
          }}
        >
          اشتہار لگائیں
        </button>
      </section>

      <footer style={{
        background: "#075c36",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        <h3>Dir Online Market</h3>
        <p>خرید و فروخت میں اعتماد ہماری پہچان</p>
        <p>© 2026 Dir Online Market</p>
      </footer>
    </main>
  );
    }
