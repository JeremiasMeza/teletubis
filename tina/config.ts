import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "timeline",
        label: "Recuerdos",
        path: "src/content/timeline",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Fecha del recuerdo",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Fotografía",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Historia",
            isBody: true,
          },
        ],
      },
    ],
  },
});