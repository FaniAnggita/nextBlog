"use client";
import React, { useState } from "react";
import Link from "next/link";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log("Post berhasil ditambahkan!");
        // Lakukan apa yang Anda inginkan setelah pengiriman berhasil
        // Misalnya, bersihkan formulir
        setTitle("");
        setContent("");
      } else {
        console.error("Gagal menambahkan post.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div>
      <Link href="/">Go feed</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Judul:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Isi:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default BlogForm;
