import { useEffect } from "react";

export default function SeoMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | Sree Shine Studio` 
      : "Sree Shine Studio | Photography, Design & Digital Experiences";
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
