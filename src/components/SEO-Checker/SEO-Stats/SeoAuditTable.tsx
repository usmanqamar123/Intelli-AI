import React from "react";

type Priority = "success" | "warning" | "error";

interface TableRow {
  heading: string;
  frequency: string;
}

interface AuditItem {
  element: string;
  priority: Priority;
  problem: string;
  badge: string | null;
  hasTable?: boolean;
  tableData?: TableRow[];
}

export default function SeoAuditTable() {
  const auditItems: AuditItem[] = [
    {
      element: "URL",
      priority: "success",
      problem: "The length of your URL is good (16 characters).",
      badge: "intelliwriter.io",
    },
    {
      element: "Title",
      priority: "success",
      problem:
        "Your title is a bit long (61 characters). Aim for 50-60 characters.",
      badge: "IntelliWriter – AI Content Writer for SEO and Blog Automation",
    },
    {
      element: "Meta Description",
      priority: "success",
      problem:
        "Your meta description is too long (175 characters). Consider shortening it to 100-130 characters.",
      badge:
        "IntelliWriter is an AI Content Writer for SEO and blogs. Create high-quality, SEO-Friendly.......",
    },
    {
      element: "H1",
      priority: "warning",
      problem:
        "Your H1 is missing! Add a main H1 heading to the page to improve search visibility and guide your visitors. Aim for 10-70 characters.",
      badge: null,
    },
    {
      element: "H2-H6 Structure",
      priority: "success",
      problem:
        "Your page structure is problematic. Key heading levels are missing, skipped, or over-used. Consider rebuilding your page structure with H2s, H3s, and H4s used to introduce sections and subsections. Avoid hierarchy gaps (e.g., H4s directly following H2s) and excess headings.",
      badge: null,
      hasTable: true,
      tableData: [
        { heading: "H1", frequency: "0" },
        { heading: "H2", frequency: "0" },
        { heading: "H5", frequency: "0" },
      ],
    },
    {
      element: "Image Alt",
      priority: "success",
      problem: "Your images all have alt text.",
      badge: null,
    },
    {
      element: "Content",
      priority: "success",
      problem:
        "Your title is a bit long (61 characters). Aim for 50-60 characters.",
      badge: "IntelliWriter – AI Content Writer for SEO and Blog Automation",
    },
    {
      element: "",
      priority: "error",
      problem:
        "Your content is too thin (126 words). Add more content to better inform users what your page is about. Aim for at least 500 words.",
      badge: null,
    },
    {
      element: "Keyword Density",
      priority: "success",
      problem: "N/A",
      badge: null,
    },
  ];

  const getPriorityIcon = (priority: Priority) => {
    const cfg =
      priority === "success"
        ? {
            border: "rgba(23,159,100,1)",
            stroke: "rgba(23,159,100,1)",
            label: "Success",
            text: "text-emerald-300",
          }
        : priority === "warning"
        ? {
            border: "rgba(216,136,44,1)",
            stroke: "rgba(216,136,44,1)",
            label: "Warning",
            text: "text-amber-300",
          }
        : {
            border: "rgba(239,68,68,1)",
            stroke: "rgba(239,68,68,1)",
            label: "Error",
            text: "text-rose-300",
          };

    return (
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ border: `3px solid ${cfg.border}` }}
        >
          {priority === "error" ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke={cfg.stroke}
              strokeWidth="4"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke={cfg.stroke}
              strokeWidth="4"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className={`text-sm font-medium ${cfg.text}`}>{cfg.label}</span>
      </div>
    );
  };

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#0E032D] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl md:text-4xl leading-tight">On-Page SEO</h2>
          <p className="mt-3 text-gray-300 text-[17px] max-w-3xl mx-auto leading-relaxed">
            This section identifies your site's most critical SEO issues and delivers
            clear recommendations to resolve them and strengthen search performance.
          </p>
        </div>

        {/* Card with gradient frame */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] shadow-[0_0_28px_-8px_rgba(246,76,255,0.35)]">
          <div className="rounded-2xl bg-[#120934] border border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#1A0D3E] border-b border-white/10">
              <div className="col-span-4 md:col-span-3">
                <h3 className="text-white font-semibold text-[15px] md:text-base tracking-wide">
                  Element
                </h3>
              </div>
              <div className="col-span-4 md:col-span-2">
                <h3 className="text-white font-semibold text-[15px] md:text-base tracking-wide">
                  Priority
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3 className="text-white font-semibold text-[15px] md:text-base tracking-wide">
                  Problems & Recommendations
                </h3>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/8">
              {auditItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-white/3 transition-colors"
                >
                  {/* Element */}
                  <div className="col-span-4 md:col-span-3">
                    <span className="text-white/90 text-sm md:text-[15px] font-medium">
                      {item.element || "Content"}
                    </span>
                  </div>

                  {/* Priority */}
                  <div className="col-span-4 md:col-span-2">{getPriorityIcon(item.priority)}</div>

                  {/* Problem + badge / table */}
                  <div className="col-span-12 md:col-span-7 space-y-3">
                    <p className="text-white/85 text-sm md:text-[15px] leading-relaxed">
                      {item.problem}
                    </p>

                    {item.badge && (
                      <span className="inline-flex items-center rounded-full text-sm md:text-[15px]">
                        <span className="relative inline-flex rounded-full p-[1.5px] bg-gradient-to-r from-[#6B41FF88] via-[#F64CFF88] to-[#FFC55388]">
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
                            {item.badge}
                          </span>
                        </span>
                      </span>
                    )}

                    {item.hasTable && item.tableData && (
                      <div className="mt-3 relative rounded-xl p-[1.5px] bg-gradient-to-r from-[#6B41FF66] via-[#F64CFF66] to-[#FFC55366]">
                        <div className="rounded-xl overflow-hidden bg-[#181042] border border-white/10">
                          {/* Top bar accent */}
                          <div className="h-2 w-full bg-gradient-to-r from-pink-500 to-purple-500" />

                          <div className="p-4">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-white/10">
                                  <th className="text-left text-white/90 text-sm md:text-[15px] font-semibold pb-2">
                                    Heading
                                  </th>
                                  <th className="text-left text-white/90 text-sm md:text-[15px] font-semibold pb-2">
                                    Frequency
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.tableData.map((row, rowIndex) => (
                                  <tr
                                    key={rowIndex}
                                    className="border-b border-white/8 last:border-0"
                                  >
                                    <td className="text-white/85 text-sm md:text-[15px] py-2">
                                      {row.heading}
                                    </td>
                                    <td className="text-white/85 text-sm md:text-[15px] py-2">
                                      {row.frequency}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional footnote / helper text */}
        {/* <p className="mt-5 text-center text-white/60 text-sm">
          Tip: Fix high-priority items first to see the biggest gains.
        </p> */}
      </div>
    </section>
  );
}
