import { Reveal } from "@/components/reveal";
import { SkillBadges } from "@/components/skill-badges";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  certificate,
  education,
  experience,
  interests,
  languages,
  outcomes,
  contacts,
  profile,
  skillGroups,
} from "@/lib/profile";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 lg:grid-cols-[17.5rem_minmax(0,1fr)]">
      <Reveal
        as="aside"
        shift={false}
        className="border-b border-border px-6 py-8 lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:border-r lg:border-b-0 lg:px-8 lg:py-12"
      >
        <a href="#top" className="group block">
          <span className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
            {profile.locationShort}
          </span>
          <span className="mt-3 block font-heading text-4xl leading-none tracking-tight text-foreground">
            {profile.name}
          </span>
        </a>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{profile.role}</p>

        <nav aria-label="Page" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Contact"
          className="mt-8 flex flex-wrap gap-x-5 gap-y-2 lg:mt-auto lg:flex-col lg:gap-3"
        >
          {contacts
            .filter((item) => item.href || item.value)
            .map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ) : (
                <a key={item.label} href="#contact" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  {item.label}
                </a>
              ),
            )}
        </nav>
      </Reveal>

      <main id="top" className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-12">
        <section className="max-w-2xl" aria-labelledby="intro-heading">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              {profile.years} years · full stack
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="intro-heading"
              className="mt-4 font-heading text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
            >
              Interfaces, and the systems that keep them honest.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-7 text-foreground/85">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{profile.focus}</p>
          </Reveal>
        </section>

        <section aria-label="Selected outcomes" className="mt-12 grid gap-3 sm:grid-cols-2">
          {outcomes.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08} lift className="h-full">
              <Card size="sm" className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl tracking-tight text-primary">
                    {item.figure}
                  </CardTitle>
                  <CardDescription className="text-foreground">{item.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </section>

        <section id="work" className="mt-20 scroll-mt-8" aria-labelledby="work-heading">
          <div className="flex items-end justify-between gap-4">
            <h2 id="work-heading" className="font-heading text-3xl tracking-tight">
              Work
            </h2>
            <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              2019 — 2026
            </p>
          </div>
          <Separator className="mt-4" />
          <ol className="mt-8 flex flex-col gap-10">
            {experience.map((job) => (
              <Reveal as="li" key={job.company}>
                <article>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium tracking-tight">
                      {job.role}
                      <span className="text-muted-foreground"> · {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-primary">{job.period}</p>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {job.summary}
                  </p>
                  <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-foreground/90">
                        <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </section>

        <section id="skills" className="mt-20 scroll-mt-8" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="font-heading text-3xl tracking-tight">
            Skills
          </h2>
          <Separator className="mt-4" />
          <div className="mt-8 flex flex-col gap-8">
            {skillGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 0.06}>
                <h3 className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {group.label}
                </h3>
                <SkillBadges items={group.items} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="background" className="mt-20 scroll-mt-8" aria-labelledby="background-heading">
          <h2 id="background-heading" className="font-heading text-3xl tracking-tight">
            Background
          </h2>
          <Separator className="mt-4" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Reveal lift className="h-full">
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Education</CardDescription>
                <CardTitle>{education.degree}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                <p>{education.school}</p>
              </CardContent>
            </Card>
            </Reveal>
            <Reveal lift delay={0.08} className="h-full">
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Certificate</CardDescription>
                <CardTitle>{certificate.name}</CardTitle>
              </CardHeader>
              <CardContent className="font-mono text-xs tracking-wide text-muted-foreground">
                ID {certificate.id}
              </CardContent>
            </Card>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Languages
              </dt>
              <dd className="mt-2 text-sm leading-6">
                {languages.map((language) => (
                  <span key={language.name}>
                    {language.name}
                    <span className="text-muted-foreground"> — {language.level}</span>
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Interests
              </dt>
              <dd className="mt-2 text-sm leading-6 text-foreground/90">{interests.join(" · ")}</dd>
            </div>
          </dl>
          </Reveal>
        </section>

        <section id="contact" className="mt-20 scroll-mt-8" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-heading text-3xl tracking-tight">
            Contact
          </h2>
          <Separator className="mt-4" />
          <Reveal>
          <p className="mt-6 max-w-xl text-base leading-7 text-foreground/85">
            Based in {profile.location}. Open to senior front-end and full-stack roles, and to
            product work where the interface and the system both have to hold up.
          </p>
          </Reveal>
          <Reveal delay={0.08}>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {contacts.map((item) => (
              <li key={item.label} className="flex items-baseline justify-between gap-6 py-3">
                <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-primary"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                ) : item.value ? (
                  <span className="text-sm text-foreground">{item.value}</span>
                ) : (
                  <span className="text-sm text-muted-foreground">—</span>
                )}
              </li>
            ))}
          </ul>
          </Reveal>
        </section>

        <Reveal>
        <footer className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            {profile.name} · {profile.role} · {profile.locationShort}
          </p>
        </footer>
        </Reveal>
      </main>
    </div>
  );
}
