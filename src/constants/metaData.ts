import type { Metadata } from "next";

interface MyMetadata extends Metadata {
  charset: string;
  //   viewport: ViewportLayout |number;
  googleSiteVerification: string;
  canonical: string;
}
