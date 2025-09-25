import { useState, useRef, useEffect, ReactNode } from "react";
import * as Tone from "tone";
import { MusicContext } from "./musicContextDefinition";

interface CodePattern {
  note: string;
  duration: string;
  velocity: number;
}

interface MusicProviderProps {
  children: ReactNode;
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong] = useState("Algorithm Dreams");
  const [volume, setVolume] = useState(0.3);
  const [currentCode, setCurrentCode] =
    useState(`// Algorithm Dreams - A journey through digital consciousness
function dreamSequence() {
  const algorithms = ['sorting', 'searching', 'optimization'];
  const dreams = algorithms.map(alg => {
    return \`Dreaming of \${alg} in silicon sleep...\`;
  });
  return dreams;
}

class DigitalMind {
  constructor() {
    this.thoughts = new Set();
    this.memories = [];
  }
  
  think(concept) {
    this.thoughts.add(concept);
    return this.processThought(concept);
  }
  
  processThought(thought) {
    const patterns = this.findPatterns(thought);
    return patterns.reduce((dream, pattern) => {
      return dream + pattern.frequency;
    }, 0);
  }
}

const mind = new DigitalMind();
mind.think("recursive beauty");
mind.think("infinite loops of creativity");`);

  const synthRef = useRef<Tone.PolySynth | null>(null);
  const sequenceRef = useRef<Tone.Sequence | null>(null);

  // Initialize audio context and synth
  useEffect(() => {
    synthRef.current = new Tone.PolySynth(Tone.Synth).toDestination();
    console.log("Synth initialized:", synthRef.current);

    // Set initial volume
    if (synthRef.current) {
      synthRef.current.volume.value = Tone.gainToDb(volume);
      console.log(
        "Initial volume set to:",
        volume,
        "dB:",
        Tone.gainToDb(volume)
      );
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (sequenceRef.current) {
        sequenceRef.current.dispose();
      }
    };
  }, [volume]);

  // Update volume when it changes
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.volume.value = Tone.gainToDb(volume);
      console.log("Volume updated to:", volume, "dB:", Tone.gainToDb(volume));
    }
  }, [volume]);

  // Code-to-music conversion algorithm (simplified)
  const analyzeCode = (inputCode: string): CodePattern[] => {
    const lines = inputCode.split("\n").filter((line) => line.trim());
    const patterns: CodePattern[] = [];

    // Musical scale (pentatonic for pleasant ambient sound)
    const scale = ["C4", "D4", "F4", "G4", "A4", "C5"];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Analyze indentation for rhythm
      const indentation = line.length - trimmedLine.length;
      const rhythmMap = ["8n", "4n", "2n"];
      const duration = rhythmMap[Math.min(indentation / 2, 2)] || "8n";

      // Map different code elements to notes
      let noteIndex = 0;
      let velocity = 0.4; // Softer for background music

      // Keywords affect pitch
      if (
        trimmedLine.includes("function") ||
        trimmedLine.includes("const") ||
        trimmedLine.includes("let")
      ) {
        noteIndex = 0; // Root note
        velocity = 0.5;
      } else if (trimmedLine.includes("if") || trimmedLine.includes("else")) {
        noteIndex = 2; // Third
        velocity = 0.4;
      } else if (trimmedLine.includes("return")) {
        noteIndex = 4; // Fifth
        velocity = 0.6;
      } else if (trimmedLine.includes("console")) {
        noteIndex = 1; // Second
        velocity = 0.3;
      } else {
        // Use line characteristics for variation
        const charSum = trimmedLine
          .split("")
          .reduce((sum, char) => sum + char.charCodeAt(0), 0);
        noteIndex = (charSum + index) % scale.length;
        velocity = Math.max(0.2, Math.min(0.5, trimmedLine.length / 60));
      }

      patterns.push({
        note: scale[noteIndex],
        duration,
        velocity,
      });
    });

    return patterns;
  };

  const generateMusicFromCode = (code: string) => {
    setCurrentCode(code);
    // Song is always "Algorithm Dreams" - no user choice
  };

  const playMusic = async (code?: string) => {
    try {
      if (!synthRef.current) {
        console.log("Synth not initialized");
        return;
      }

      console.log("Starting audio context...");
      await Tone.start();
      console.log("Tone context state:", Tone.getContext().state);

      if (isPlaying) {
        console.log("Music already playing, stopping...");
        stopMusic();
        return;
      }

      // Test synth with a direct note
      console.log("Testing synth with direct note...");
      synthRef.current.triggerAttackRelease("C4", "8n");

      // Wait a moment then continue with sequence
      await new Promise((resolve) => setTimeout(resolve, 200));

      const codeToUse = code || currentCode;
      const patterns = analyzeCode(codeToUse);
      console.log("Generated patterns:", patterns.length);

      if (patterns.length === 0) {
        console.log("No patterns generated");
        return;
      }

      Tone.getTransport().bpm.value = 80; // Slower tempo for ambient feel

      let index = 0;
      sequenceRef.current = new Tone.Sequence(
        (time) => {
          const pattern = patterns[index % patterns.length];
          console.log(
            "Playing note:",
            pattern.note,
            "velocity:",
            pattern.velocity,
            "duration:",
            pattern.duration
          );
          if (synthRef.current) {
            synthRef.current.triggerAttackRelease(
              pattern.note,
              pattern.duration,
              time,
              pattern.velocity
            );
          }
          index++;
        },
        Array(patterns.length).fill(0),
        "8n"
      );

      sequenceRef.current.loop = true;

      sequenceRef.current.start();
      Tone.getTransport().start();
      setIsPlaying(true);
      console.log("Music started successfully");
    } catch (error) {
      console.error("Error playing music:", error);
    }
  };

  const stopMusic = () => {
    Tone.getTransport().stop();
    if (sequenceRef.current) {
      sequenceRef.current.dispose();
      sequenceRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentSong,
        volume,
        setVolume,
        playMusic,
        stopMusic,
        generateMusicFromCode,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
