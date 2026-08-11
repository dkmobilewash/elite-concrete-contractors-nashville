import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0e2748",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, fontStyle: "italic", letterSpacing: 2 }}>ELITE</div>
        <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#c7cad0", letterSpacing: 4 }}>CONCRETE CONTRACTORS OF NASHVILLE</div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 48, maxWidth: 900, lineHeight: 1.3 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 22, marginTop: 40, color: "#c7cad0" }}>{siteConfig.phone} · {siteConfig.address.full}</div>
      </div>
    ),
    { ...size }
  );
}
