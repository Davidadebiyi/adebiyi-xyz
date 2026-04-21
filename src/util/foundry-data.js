import labs from "../content/artifacts/labs.json"
import studio from "../content/artifacts/studio.json"
import workshop from "../content/artifacts/workshop.json"

export const modePages = {
  labs,
  studio,
  workshop,
}

export const modeLinks = ["labs", "studio", "workshop"]

export const essayMeta = {
  "/MMXXIII": {
    id: "Essay. 04",
    title: "MMXXIII",
    summary: "A reflection on the year: systems built, ideas tested, ground cleared.",
    tags: ["Year review", "Notes"],
  },
  "/The-tyranny": {
    id: "Essay. 03",
    title: "The Tyranny of Binary Choices",
    summary:
      "Why reducing complex systems to either/or decisions is an epistemic failure, not a feature.",
    tags: ["Essay", "Systems"],
  },
  "/the-fanatic": {
    id: "Essay. 02",
    title: "The Fanatic: Science in the Age of Unreason",
    summary:
      "On the misuse of scientific authority and the new dogmatism wearing the mask of rationalism.",
    tags: ["Essay", "Epistemology"],
  },
  "/new-year": {
    id: "Essay. 01",
    title: "MMXXII",
    summary: "Entering the year with open hands: what I am building, what I am unlearning.",
    tags: ["Year review", "Notes"],
  },
}

const stripTrailingPeriod = title => title.replace(/\.$/, "")

export const getEssayMeta = frontmatter => {
  const meta = essayMeta[frontmatter.slug] || {}

  return {
    id: frontmatter.artifactId || meta.id || "Essay",
    title: meta.title || stripTrailingPeriod(frontmatter.title),
    summary: frontmatter.summary || meta.summary || frontmatter.description || "",
    tags: frontmatter.tags || meta.tags || ["Essay"],
  }
}

export const formatPostDate = date =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date))

export const sortPostsByDate = posts =>
  [...posts].sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )

export const getArchiveArtifacts = posts => {
  const modeArtifacts = Object.entries(modePages).flatMap(([modeKey, mode]) =>
    mode.items.map(item => ({
      ...item,
      mode: mode.title,
      modeKey,
      href: `/${modeKey}`,
    }))
  )

  const essayArtifacts = posts.map(post => {
    const frontmatter = post.node?.frontmatter || post.frontmatter
    const meta = getEssayMeta(frontmatter)

    return {
      id: meta.id,
      type: "Essay",
      title: meta.title,
      summary: meta.summary,
      tags: meta.tags,
      date:
        typeof frontmatter.date === "string" && frontmatter.date.includes(",")
          ? frontmatter.date
          : formatPostDate(frontmatter.date),
      mode: "Essays",
      modeKey: "essays",
      href: frontmatter.slug,
    }
  })

  return [...modeArtifacts, ...essayArtifacts]
}
