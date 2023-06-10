export const range = (n: number) => {
  return new Array(n).fill(0).map((_, i) => i);
};

export const mod = (n: number, m: number) => {
  return ((n % m) + m) % m;
}

export const calcFretDistance = (w: number, n: number) => w - w * Math.pow(2, -n/12);

export const calcFretWidth = (w: number, n: number) => {
  return calcFretDistance(w, n+1) - calcFretDistance(w, n);
}

export const mapNotes = {
  "A": 1,
  "A#": 2,
  "B": 3,
  "C": 4,
  "C#": 5,
  "D": 6,
  "D#": 7,
  "E": 8,
  "F": 9,
  "F#": 10,
  "G": 11,
  "G#": 12,
};

export const notesList = [ "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#" ];
export const stringsList = ["E", "B", "G", "D", "A", "E"];

export const noteToFrets = (note: number) => {
  return [
    [1, mod(note - mapNotes["E"], 12)],
    [2, mod(note - mapNotes["B"], 12)],
    [3, mod(note - mapNotes["G"], 12)],
    [4, mod(note - mapNotes["D"], 12)],
    [5, mod(note - mapNotes["A"], 12)],
    [6, mod(note - mapNotes["E"], 12)],
    [1, mod(note - mapNotes["E"], 12) + 12],
    [2, mod(note - mapNotes["B"], 12) + 12],
    [3, mod(note - mapNotes["G"], 12) + 12],
    [4, mod(note - mapNotes["D"], 12) + 12],
    [5, mod(note - mapNotes["A"], 12) + 12],
    [6, mod(note - mapNotes["E"], 12) + 12],
  ] as [number, number][];
}

export const scaleToFrets = (base: number, scale: number[]) => {
  return scale.flatMap((t) => noteToFrets(base + t - 1));
}
