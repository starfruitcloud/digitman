/*
 * :file description:
 * :name: /digitman/app/template.tsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-28 19:46:59
 * :last editor: 张德志
 * :date last edited: 2024-09-28 19:49:22
 */
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="template">
      <h2>我是template</h2>
      {children}
    </div>
  );
}
