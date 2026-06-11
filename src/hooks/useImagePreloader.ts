"use client";

import { useState, useEffect } from "react";

export interface PreloaderResult {
  images: HTMLImageElement[];
  isLoading: boolean;
  progress: number;
}

export function useImagePreloader(
  startIdx: number = 0,
  endIdx: number = 1051,
  step: number = 6
): PreloaderResult {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Generate urls
    const urls: string[] = [];
    for (let i = startIdx; i <= endIdx; i += step) {
      const padded = i.toString().padStart(4, "0");
      urls.push(`https://pub-8a00f88da0be4174a0956246c371fa3b.r2.dev/01${padded}.jpg`);
    }

    // Ensure the very last image is included for a complete scroll ending
    const lastPadded = endIdx.toString().padStart(4, "0");
    const lastUrl = `https://pub-8a00f88da0be4174a0956246c371fa3b.r2.dev/01${lastPadded}.jpg`;
    if (urls[urls.length - 1] !== lastUrl) {
      urls.push(lastUrl);
    }

    const total = urls.length;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(total);

    const handleImageLoad = (index: number, img: HTMLImageElement) => {
      loadedImages[index] = img;
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));

      if (loadedCount === total) {
        setImages(loadedImages.filter(Boolean));
        setIsLoading(false);
      }
    };

    const handleImageError = () => {
      // Degrade gracefully if some frames fail to load, increment progress to prevent hanging
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));

      if (loadedCount === total) {
        setImages(loadedImages.filter(Boolean));
        setIsLoading(false);
      }
    };

    urls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => handleImageLoad(index, img);
      img.onerror = handleImageError;
    });
  }, [startIdx, endIdx, step]);

  return { images, isLoading, progress };
}
