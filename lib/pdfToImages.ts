"use client";

import type { PageImage } from "./types";

async function fileToPageImagesViaPdf(file: File): Promise<PageImage[]> {
  if (typeof window === "undefined") return [];
  const pdfjsLib = await import("pdfjs-dist");
  // @ts-ignore - webpack url import works via next.js bundler
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages: PageImage[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d")!;
    await page.render({ canvasContext: ctx, viewport }).promise;
    pages.push({
      page: pageNum,
      dataUrl: canvas.toDataURL("image/jpeg", 0.9),
      width: viewport.width,
      height: viewport.height
    });
  }
  return pages;
}

function fileToPageImageViaBitmap(file: File): Promise<PageImage[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
        resolve([
          {
            page: 1,
            dataUrl: canvas.toDataURL("image/jpeg", 0.92),
            width: img.naturalWidth,
            height: img.naturalHeight
          }
        ]);
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function filesToPageImages(files: File[]): Promise<PageImage[]> {
  const allPages: PageImage[][] = [];
  for (const file of files) {
    if (file.type === "application/pdf") {
      allPages.push(await fileToPageImagesViaPdf(file));
    } else {
      allPages.push(await fileToPageImageViaBitmap(file));
    }
  }
  // Flatten and renumber pages sequentially across all uploaded files
  const flat = allPages.flat();
  return flat.map((p, i) => ({ ...p, page: i + 1 }));
}
