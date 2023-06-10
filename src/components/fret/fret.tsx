import React from "react";
import { calcFretWidth, range } from "../../core";

export const Fret = ({
  numberOfFrets = 12,
  frets,
}: {
  numberOfFrets?: number
  frets?: [number, number][],
}) => {

  return (
    <div style={{
      width: "fit-content"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        gap: "30px",
        top: "10px",
        height: "0px",
      }}>
        {range(6).map((n) => (
          <div
            key={`${n}-string`}
            style={{
              height: "0px",
              width: "100%",
              border: "1px solid black",
            }}
          />
        ))}
      </div>

      <div style={{
        display: "flex",
        position: "relative",
        marginLeft: "8px",
        height: "0px",
      }}>
        <div style={{
          height: "180px",
          width: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid transparent",
          borderBottom: "1px solid transparent",
        }}>
          {range(6).map((n) => (
            <div
              key={`${n}-open`}
              style={{
                width: "20px",
                height: "20px",
                background: frets?.some(([f, d]) => n + 1 === f && d === 0) ? "black" : undefined,
                borderRadius: "20px",
              }}
            />
          ))}
        </div>
        {range(numberOfFrets).map((n) => (
          <div
            key={`${n}-fingers`}
            style={{
              display: "flex",
              height: "180px",
              width: `${calcFretWidth(50 * 12 * 2, n + 1)}px`,
              border: "1px solid transparent",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "space-between",
              borderLeft: n === 0 ? "5px solid transparent" : undefined,
            }}
          >
            {range(6).map((m) => (
              <div
                key={`${n}-${m}-finger`}
                style={{
                  width: "20px",
                  height: "20px",
                  background: frets?.some(([f, d]) => m + 1 === f && n + 1 === d) ? "black" : undefined,
                  borderRadius: "20px",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{
          height: "182px",
          width: "3px",
          background: "black",
          marginRight: "5px",
        }} />

        {range(numberOfFrets).map((n) => (
          <div
            key={`${n}-fret`}
            style={{
              height: "180px",
              width: `${calcFretWidth(50 * 12 * 2, n + 1)}px`,
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "45px",
              borderLeft: n === 0 ? "5px solid black" : undefined,
            }}
          >
            {[4, 6, 8, 11, 14, 16].includes(n) &&
              <div style={{
                width: "20px",
                height: "20px",
                background: "lightGrey",
                borderRadius: "20px",
              }} />
            }

            {n === 11 &&
              <div style={{
                width: "20px",
                height: "20px",
                background: "lightGrey",
                borderRadius: "20px",
              }} />
            }
          </div>
        ))}
      </div>
    </div>
  );
};
