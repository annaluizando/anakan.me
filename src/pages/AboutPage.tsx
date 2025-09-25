import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import mailIcon from "../assets/mail-icon.png";

export function AboutPage() {
  return (
    <div className="grid gap-4 w-full px-4">
      <h2 className="font-bold text-3xl">About Me</h2>
      <br />
      <div className="space-y-4">
        <p>Hi there! My nickname is anakan, but you can call me anna. :)</p>
        <p>
          I'm a Software Engineer with 3+ years of experience in coding and this
          is my personal blog to share knowledge and help people.
        </p>

        <p>
          Despite the fact that my journey started doing Front-End, programming
          with Node-related technologies as Typescript, React, Next.js, I had
          the opportunity to work with other technologies as Node.js/Express,
          MongoDB focusing more in Back-End, Golang for auxiliary programs and a
          bit more, which made me explore other fields and possibilities.
          <br />
          What I truly love about technology is simple: learning.
          <br />
          After doubting my potential to learn ANYTHING related to tech for so
          long and still having overcome that made me notice how wonderful is to
          learn and teach new things, specially in tech.
          <br />
          That way, I can say I really hate when people limit IT knowledge to
          one field or another.
        </p>

        <p>
          - 🦎 I'm currently working as Software Engineer.
          <br />
          - 🪼 I'm currently improving my skills with Golang, CyberSecurity and
          Cloud (AWS/GCP).
          <br />- 🪻 I like gaming and watching movies when I'm not programming!
        </p>

        <div className="grid gap-4 mt-8">
          <h2 className="font-bold text-3xl">Contact</h2>
          <div className="flex gap-2 items-center">
            <img width={32} height={32} src={githubIcon} alt="github icon" />
            <a href="https://www.github.com/annaluizando">
              github.com/annaluizando
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img
              width={32}
              height={32}
              src={linkedinIcon}
              alt="linkedin icon"
            />
            <a href="https://www.linkedin.com/in/annaluizando">
              linkedin.com/in/annaluizando
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img src={mailIcon} alt="mail icon" />
            <a href="https://www.linkedin.com/in/annaluizando">
              contact@anakan.me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
