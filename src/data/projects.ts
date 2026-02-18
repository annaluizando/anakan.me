import { ProjectProps } from "../types/project";

export const projects: ProjectProps[] = [
  {
    id: "blindspot",
    title: `
█▄▄ █   █ █▄ █ █▀▄ █▀ █▀█ █▀█ ▀█▀
█▄█ █▄▄ █ █ ▀█ █▄▀ ▄█ █▀▀ █▄█  █
`,
    description:
      "TUI-based game to study secure coding principles and help students recognize insecure code.",
    githubUrl: "https://github.com/annaluizando/blindspot",
    technologies: ["Golang", "Bubbletea", "Cobra"],
  },
  {
    id: "met-museum",
    title: "Met Museum",
    description:
      "Explore over 470,000 artworks from The Metropolitan Museum of Art collection. Search, discover, and create your own art collections.",
    githubUrl: "https://github.com/annaluizando/met-museum",
      technologies: ["Nextjs", "TypeScript", "React Query", "Zustand", "Jest"],
  },
  {
    id: "aegis",
    title: `
          :::     :::::::::: :::::::: ::::::::::: ::::::::
       :+: :+:   :+:       :+:    :+:    :+:    :+:    :+:
     +:+   +:+  +:+       +:+           +:+    +:+
   +#++:++#++: +#++:++#  :#:           +#+    +#++:++#++
  +#+     +#+ +#+       +#+   +#+#    +#+           +#+
 #+#     #+# #+#       #+#    #+#    #+#    #+#    #+#
###     ### ########## ######## ########### ########
     `,
    description:
      "An AI-powered command line infrastructure scanner to identify best approaches to improve your project's security pipeline.",
    githubUrl: "https://github.com/annaluizando/aegis",
    technologies: ["Typescript", "Jest", "Inquirer"],
  },
  {
    id: "locksmith",
    title: `
█  ▄▄▄  ▗▞▀▘█  ▄  ▄▄▄ ▄▄▄▄  ▄    ■  ▐▌
█ █   █ ▝▚▄▖█▄▀  ▀▄▄  █ █ █ ▄ ▗▄▟▙▄▖▐▌
█ ▀▄▄▄▀     █ ▀▄ ▄▄▄▀ █   █ █   ▐▌  ▐▛▀▚▖
█           █  █            █   ▐▌  ▐▌ ▐▌
                                ▐▌       `,
    description:
      "Hybrid secret rotator for cloud secret managers, actually focused on rotating jwt signin tokens.",
    githubUrl: "https://github.com/annaluizando/locksmith",
    technologies: ["Golang", "Bubbletea"],
  },
];
