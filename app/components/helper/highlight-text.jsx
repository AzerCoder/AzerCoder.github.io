// @flow strict
import * as React from "react";

const TERMS = ["Swift", "SwiftUI", "UIKit", "Flutter", "Dart"];

// Tarjima matnidagi texnologiya nomlarini qalin ko'rsatadi (UI bir xil qoladi)
function HighlightText({ text }) {
  const pattern = new RegExp(`(${TERMS.join("|")})`, "g");
  return (
    <>
      {text.split(pattern).map((part, i) =>
        TERMS.includes(part) ? (
          <strong key={i} className="font-medium text-white">
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default HighlightText;
