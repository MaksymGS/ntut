'use client';
import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Somthing globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
