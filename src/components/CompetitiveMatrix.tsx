"use client";
import React from "react";

type Row = {
  category: string;
  vendoora: string;
  opera: string;
  onq: string;
  cloudbeds: string;
  guestline: string;
  marinas: string;
};

const rows: Row[] = [
  {
    category: "Core Coverage",
    vendoora: "Unified: HavenOS (hotels) + DockOS (marinas)",
    opera: "Hotel PMS only",
    onq: "Hilton proprietary PMS (chain‑exclusive)",
    cloudbeds: "Hotel PMS + channel manager",
    guestline: "Hotel PMS + booking engine",
    marinas: "Slip reservations + payments"
  },
  {
    category: "Innovation",
    vendoora: "AI automation, staff co‑pilot, smart controls, TV & guest apps",
    opera: "Legacy UX, limited AI",
    onq: "Legacy, not extensible outside Hilton",
    cloudbeds: "Modern SaaS, limited AI workflows",
    guestline: "Cloud PMS, limited AI",
    marinas: "Narrow scope; marina ops only"
  },
  {
    category: "Cost Structure",
    vendoora: "Modular pricing, low TCO, startup‑friendly",
    opera: "High enterprise licensing",
    onq: "Internal only",
    cloudbeds: "Affordable; feature ceilings",
    guestline: "Mid‑tier; add‑on costs",
    marinas: "Affordable; narrow value"
  },
  {
    category: "Flexibility",
    vendoora: "Modular suite: staff, guest, admin, POS, loyalty, marketplace",
    opera: "Rigid modules",
    onq: "Closed system",
    cloudbeds: "Moderate flexibility",
    guestline: "Moderate flexibility",
    marinas: "Marina workflows only"
  },
  {
    category: "Compliance & Security",
    vendoora: "GDPR, SOC 2, PCI, ISO 27001; privacy‑first on‑device AI",
    opera: "GDPR, PCI",
    onq: "Enterprise internal controls",
    cloudbeds: "GDPR, PCI",
    guestline: "GDPR",
    marinas: "Limited"
  },
  {
    category: "Sustainability",
    vendoora: "Energy/water/waste dashboards; reporting",
    opera: "Not prioritized",
    onq: "Unknown",
    cloudbeds: "Not prioritized",
    guestline: "Limited",
    marinas: "Not prioritized"
  },
  {
    category: "Offline Resilience",
    vendoora: "Edge nodes + P2P sync (hotel & marina)",
    opera: "Cloud‑dependent",
    onq: "Internal infra; not portable",
    cloudbeds: "Cloud‑only",
    guestline: "Cloud‑only",
    marinas: "Limited offline"
  },
  {
    category: "Global Reach",
    vendoora: "i18n, runtime translation, Apple Intelligence assist",
    opera: "Global enterprise (high cost)",
    onq: "Hilton only",
    cloudbeds: "Global SaaS",
    guestline: "UK/EU focus",
    marinas: "Regional"
  },
  {
    category: "Differentiator",
    vendoora: "First unified Hotel + Marina platform with AI across staff/guest",
    opera: "Brand legacy; heavy footprint",
    onq: "Exclusive; closed ecosystem",
    cloudbeds: "Good SaaS; shallow enterprise depth",
    guestline: "Niche EU adoption",
    marinas: "Marina‑only; no hotel ops"
  }
];

export default function CompetitiveMatrix() {
  return (
    <figure className="matrix">
      <figcaption className="sr-only">
        Competitive comparison table: Vendoora vs. Opera, OnQ, Cloudbeds, Guestline, and marina‑specific SaaS.
      </figcaption>

      <div className="tableWrap" role="region" aria-label="Competitive comparison" tabIndex={0}>
        <table className="cmpTable">
          <thead>
            <tr>
              <th scope="col" className="stickyCol">Category</th>
              <th scope="col">Vendoora</th>
              <th scope="col">Opera (Oracle)</th>
              <th scope="col">Hilton OnQ</th>
              <th scope="col">Cloudbeds</th>
              <th scope="col">Guestline</th>
              <th scope="col">Marina SaaS (Dockwa/Swift)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.category}>
                <th scope="row" className="stickyCol">{r.category}</th>
                <td>{r.vendoora}</td>
                <td>{r.opera}</td>
                <td>{r.onq}</td>
                <td>{r.cloudbeds}</td>
                <td>{r.guestline}</td>
                <td>{r.marinas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        /* Inherit the page background so the table matches the page body color */
        .matrix,
        .cmpTable {
          background: inherit;
          color: var(--cmp-text, #0b0c0e);
        }

        /* High-contrast text (auto-switch if site sets --cmp-text for dark mode) */
        :global(html[data-theme="dark"]) .matrix,
        :global(html[data-theme="dark"]) .cmpTable {
          color: var(--cmp-text, #f6f7fb);
        }

        .tableWrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 14px;
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 8px 24px rgba(0,0,0,0.06);
          /* faint edge to lift from background */
        }

        .cmpTable {
          width: 100%;
          border-collapse: separate; /* allows shadow separators */
          border-spacing: 0;
          font: 15px/1.55 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji";
        }

        thead th {
          position: sticky;
          top: 0;
          z-index: 2;
          text-align: left;
          font-weight: 600;
          padding: 14px 16px;
          backdrop-filter: saturate(160%) blur(6px);
          background: color-mix(in oklab, currentColor 6%, transparent);
          /* subtle divider under header */
          box-shadow: inset 0 -1px rgba(0,0,0,0.08);
        }

        tbody td, tbody th {
          vertical-align: top;
          padding: 14px 16px;
          /* LIGHT SHADOW “BORDERS” INSTEAD OF HARD LINES */
          box-shadow:
            inset 0 -1px rgba(0,0,0,0.06),
            inset -1px 0 rgba(0,0,0,0.04);
        }

        tbody tr:last-child td,
        tbody tr:last-child th {
          box-shadow:
            inset -1px 0 rgba(0,0,0,0.04);
        }

        /* First column sticks on horizontal scroll */
        .stickyCol {
          position: sticky;
          left: 0;
          z-index: 1;
          font-weight: 600;
          min-width: 180px;
          background: color-mix(in oklab, currentColor 6%, transparent);
          box-shadow:
            inset 0 -1px rgba(0,0,0,0.06),
            1px 0 0 rgba(0,0,0,0.05);
        }

        /* Cells: improve readability */
        td {
          max-width: 380px;
        }

        /* Compact on small screens */
        @media (max-width: 720px) {
          thead th, tbody td, tbody th { padding: 12px 14px; }
          td { max-width: 280px; }
          .stickyCol { min-width: 160px; }
        }
      `}</style>
    </figure>
  );
}
