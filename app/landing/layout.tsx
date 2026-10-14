import { Metadata } from "next";
// import "./landing.css";

export const metadata: Metadata = {
  title: "Go Solar at Zero Investment! | Nigaran Solar - Coimbatore & Tamil Nadu",
  description:
    "Pay your EB bill as solar EMI and start saving money easily with zero upfront cost. 25-year warranty, subsidy support up to ₹78,000, and free lifetime maintenance.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing-root">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Enforce site-wide brand font Outfit across all landing templates */
            :root, .landing-root, .ssq {
              --font-dm-sans: var(--font-outfit), sans-serif !important;
              --font-poppins: var(--font-outfit), sans-serif !important;
              --bs-font-sans-serif: var(--font-outfit), sans-serif !important;
              --bs-body-font-family: var(--font-outfit), sans-serif !important;
            }

            .landing-root,
            .landing-root *,
            .ssq,
            .ssq * {
              font-family: var(--font-outfit), sans-serif !important;
            }

            /* Preserve icon fonts */
            .ssq [class*="slick-"]:before {
              font-family: slick !important;
            }

            /* Ensure smooth scroll is handled by Lenis without CSS scroll-behavior clash */
            html, body, .ssq, .landing-root {
              scroll-behavior: auto !important;
            }

            /* Reference markup keeps <img> at its attribute size. */
            .ssq img,
            .ssq svg {
              display: inline-block;
              height: auto;
              max-width: 100%;
            }
          `,
        }}
      />
      {children}
    </div>
  );
}

