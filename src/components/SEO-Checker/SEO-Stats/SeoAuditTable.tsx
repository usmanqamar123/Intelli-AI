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

interface SeoAuditTableProps {
  analysisData: {
    meta_data: {
      title: string;
      title_length: number;
      description: string;
      description_length: number;
      url_slug: string;
      url_length: number;
    };
    headings: {
      h1_count: number;
      h2_count: number;
      h3_count: number;
      h4_count: number;
      h5_count: number;
      h6_count: number;
      total_headings: number;
      h1_texts: string[];
    };
    images: {
      images_with_alt: number;
      images_without_alt: number;
    };
    readability: {
      readability_level: string;
    };
  };
}

export default function SeoAuditTable({ analysisData }: SeoAuditTableProps) {
  const { meta_data, headings, images, readability } = analysisData;
  
  const auditItems: AuditItem[] = [
    {
      element: "URL",
      priority:
        meta_data.url_length >= 20 && meta_data.url_length <= 75
          ? "success"
          : meta_data.url_length > 75
          ? "warning"
          : "error",
      problem:
        meta_data.url_length >= 20 && meta_data.url_length <= 75
          ? `Your URL length (${meta_data.url_length} chars) is optimal.`
          : meta_data.url_length > 75
          ? `Your URL is too long (${meta_data.url_length} chars). Shorten it for better SEO.`
          : `Your URL is too short (${meta_data.url_length} chars). Make it more descriptive.`,
      badge: meta_data.url_slug,
    },
    {
      element: "Title",
      priority:
        meta_data.title_length >= 50 && meta_data.title_length <= 60
          ? "success"
          : meta_data.title_length > 60
          ? "warning"
          : "error",
      problem:
        meta_data.title_length >= 50 && meta_data.title_length <= 60
          ? `Title length (${meta_data.title_length} chars) is perfect.`
          : meta_data.title_length > 60
          ? `Title is too long (${meta_data.title_length} chars).`
          : `Title is too short (${meta_data.title_length} chars).`,
      badge: meta_data.title,
    },
    {
      element: "Meta Description",
      priority:
        meta_data.description_length >= 140 && meta_data.description_length <= 160
          ? "success"
          : meta_data.description_length > 160
          ? "warning"
          : "error",
      problem:
        meta_data.description_length >= 140 && meta_data.description_length <= 160
          ? `Meta description length (${meta_data.description_length} chars) is ideal.`
          : meta_data.description_length > 160
          ? `Meta description too long (${meta_data.description_length} chars).`
          : `Meta description too short (${meta_data.description_length} chars).`,
      badge: meta_data.description,
    },
    {
      element: "H1",
      priority: headings.h1_count === 1 ? "success" : headings.h1_count > 1 ? "warning" : "error",
      problem:
        headings.h1_count === 1
          ? `You have one main H1 heading (“${headings.h1_texts[0]}”).`
          : headings.h1_count > 1
          ? `You have multiple H1s (${headings.h1_count}). Keep only one main H1.`
          : "H1 is missing. Add one main H1 to improve structure.",
      badge: null,
    },
    {
      element: "Headings Structure (H2–H6)",
      priority: headings.total_headings > 5 ? "success" : "warning",
      problem:
        headings.total_headings > 5
          ? "Heading hierarchy looks balanced."
          : "Your page could use more subheadings for better readability.",
      hasTable: true,
      tableData: [
        { heading: "H1", frequency: headings.h1_count.toString() },
        { heading: "H2", frequency: headings.h2_count.toString() },
        { heading: "H3", frequency: headings.h3_count.toString() },
        { heading: "H4", frequency: headings.h4_count.toString() },
        { heading: "H5", frequency: headings.h5_count.toString() },
        { heading: "H6", frequency: headings.h6_count.toString() },
      ],
      badge: null,
    },
    {
      element: "Images",
      priority: images.images_without_alt === 0 ? "success" : "warning",
      problem:
        images.images_without_alt === 0
          ? "All images have alt text."
          : `${images.images_without_alt} images are missing alt text.`,
      badge: `With Alt: ${images.images_with_alt}, Without Alt: ${images.images_without_alt}`,
    },
    {
      element: "Readability",
      priority:
        readability.readability_level.toLowerCase().includes("easy") ||
        readability.readability_level.toLowerCase().includes("fairly easy")
          ? "success"
          : readability.readability_level.toLowerCase().includes("fairly difficult")
          ? "warning"
          : "error",
      problem: `Readability level: ${readability.readability_level}`,
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
    <section className="w-full py-12 px-4 sm:px-8 lg:px-12 bg-[#0E032D] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-5">
          <h2 className="font-bold text-3xl md:text-4xl leading-tight">On-Page SEO Insights</h2>
            {/* <p className="mt-3 text-gray-300 text-[17px] max-w-3xl mx-auto leading-relaxed">
            A detailed breakdown of your article’s metadata, headings, and content structure.
          </p> */}
        </div>

        {/* Card with gradient frame */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] shadow-[0_0_28px_-8px_rgba(246,76,255,0.35)]">
          <div className="rounded-2xl bg-[#120934] border border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#1A0D3E] border-b border-white/10">
              <div className="col-span-3 font-semibold">Element</div>
              <div className="col-span-2 font-semibold">Priority</div>
              <div className="col-span-7 font-semibold">Problem / Recommendations</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/8">
              {auditItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-white/3 items-center transition-colors"
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
      </div>
    </section>
  );
}
