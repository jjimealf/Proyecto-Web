import { useEffect } from "react";

const SITE_NAME = "Crónicas del Dragón";

export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.append(meta);
    }
    meta.content = description;
  }, [description, title]);
}
