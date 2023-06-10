import React, { useState } from "react";
import { Fret } from "./components";
import { notesList, noteToFrets, range, scaleToFrets } from "./core";

type ScaleType = "major" | "minor" | "acoustic";
type StateType = "notes" | "scale";

function App() {
  const [note, setNote] = useState<null | number>(1);
  const [state, setState] = useState<StateType>("notes");
  const [scaleType, setScaleType] = useState<ScaleType>("major");

  const scales = {
    "major": [0, 2, 4, 5, 7, 9, 11],
    "minor": [0, 2, 3, 5, 7,  8, 10],
    "acoustic": [0,2,4,6,7,9,10],
    "aeolian": [0,2,3,4,7,8,10],
    "augmented": [0,3,4,7,8,11],
    "blues": [0,3,5,6,7,10],
    "dorian": [0,2,3,5,7,9,10],
    "double harmonic": [0,1,4,5,7,8,11],
    "enigmatic": [0,1,4,6,8,10,11],
    "flamenco": [0,1,4,5,7,8,11],
    "harmonic major": [0,2,4,5,7,8,11],
    "harmonic minor": [0,2,3,5,7,8,11],
    "ionian": [0,2,4,5,7,9,11],
    "locrian": [0,1,3,5,6,8,10],
    "lydian": [0,2,4,6,7,9,11],
    "major pentatonic": [0,2,4,7,9],
    "minor pentatonic": [0,3,5,7,10],
    "myxolidian": [0,2,4,5,7,9,10],
    "phrygian": [0,1,3,5,7,8,10],
    "tritone": [0,1,4,6,7,10],
  };

  return (
    <div style={{
      width: "100%",
      height: "95vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Fret numberOfFrets={12} frets={(() => {
        if (!note) return [];

        if (state === "notes")
          return noteToFrets(note);
        return scaleToFrets(note, scales[scaleType].map(v => v + 1));
      })()} />

      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "30px",
      }}>
        {range(12).map((n) => (
          <button onClick={() => note === n + 1 ? setNote(null) : setNote(n + 1)}
            style={{
              width: "40px",
              height: "30px",
              background: note === n + 1 ? "#ddd" : "white",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <b style={{
              width: "fit-content"
            }}>
              {notesList[n]}
            </b>
          </button>
        ))}
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "30px",
      }}>
        {["notes", "scale"].map((t) => (
          <button onClick={() => setState(t as StateType)}
            style={{
              width: "70px",
              height: "30px",
              background: state === t ? "#ddd" : "white",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <b style={{
              width: "fit-content",
              textTransform: "uppercase",
            }}>
              {t}
            </b>
          </button>
        ))}
      </div>

      {state === "scale" &&
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "30px",
          flexWrap: "wrap",
          width: "600px",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {Object.keys(scales).map((scale) => (
            <button onClick={() => setScaleType(scale as ScaleType)}
              style={{
                width: "100px",
                height: "40px",
                background: scaleType === scale ? "#ddd" : "white",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <b style={{
                width: "fit-content",
                textTransform: "uppercase",
              }}>
                {scale}
              </b>
            </button>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
