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
      "Project infrastructure scanner to identify best approaches to improve security pipeline.",
    githubUrl: "https://github.com/annaluizando/aegis",
    technologies: ["Typescript", "Jest", "Inquirer"],
  },
  {
    id: "phonebook-ts",
    title: "Phonebook",
    description:
      "Fullstack application built with React and TypeScript. CRUD operations for a phonebook.",
    githubUrl: "https://github.com/annaluizando/phonebook-ts",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Jest"],
  },
];
