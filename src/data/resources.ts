// 资源下载列表：新增附件只需
// 1. 把文件放进 public/files/
// 2. 在下面数组里加一条记录

export interface Resource {
  /** public/files/ 目录下的文件名（含子目录，如 "resume.pdf"） */
  file: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  /** 更新日期，格式 YYYY-MM-DD，可选 */
  date?: string;
}

export const resources: Resource[] = [
  {
    file: "README.txt",
    name: { zh: "使用说明", en: "Read Me" },
    description: {
      zh: "如何向这个页面添加新的附件：把文件放入 public/files/ 目录，然后在 src/data/resources.ts 中添加一条记录。",
      en: "How to add new attachments to this page: drop the file into public/files/ and add an entry in src/data/resources.ts.",
    },
    date: "2026-10-11",
  },
];
