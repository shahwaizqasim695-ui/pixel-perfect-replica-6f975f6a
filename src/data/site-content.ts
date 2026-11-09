import woodlandImage from "@/assets/innocent-victims-woodland.jpg";
import cityImage from "@/assets/quiet-city.jpg";

export const authorName = "Azédine Assassi";

export const mainNavigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "The Novel", to: "/novel" },
  { label: "Journal", to: "/blog" },
  { label: "Forum", to: "/forum" },
  { label: "Contact", to: "/contact" },
] as const;

export const secondaryNavigation = [
  { label: "Reader’s guide", to: "/guide" },
  { label: "Frequently asked questions", to: "/faq" },
  { label: "Support independent storytelling", to: "/donation" },
] as const;

export const themes = [
  {
    number: "01",
    title: "Innocence / Vengeance",
    detail: "When the desire to make things right begins to resemble the harm it opposes.",
  },
  {
    number: "02",
    title: "Justice / Loyalty",
    detail: "The difficult distance between what we owe a cause and what we owe one another.",
  },
  {
    number: "03",
    title: "Faith / Reason",
    detail: "Conviction and doubt meet in the choices that make us human.",
  },
  {
    number: "04",
    title: "Identity / Inheritance",
    detail: "A life shaped by the cultures, histories, and values it carries between worlds.",
  },
  {
    number: "05",
    title: "Love / Conviction",
    detail: "The quiet ways ordinary human bonds can unsettle certainty.",
  },
  {
    number: "06",
    title: "Morality / Extremism",
    detail: "The line a righteous mission crosses when other lives become its price.",
  },
];

export const categories = [
  "All reflections",
  "Writing & Creativity",
  "Psychological Fiction",
  "Identity & Culture",
  "Behind the Novel",
] as const;

export const articles = [
  {
    slug: "the-space-between-certainties",
    title: "The Space Between Certainties",
    category: "Psychological Fiction",
    excerpt:
      "A sample reflection on how psychological fiction can hold two incompatible truths in the same hand.",
    image: woodlandImage,
    imageAlt: "A mist-filled woodland, caught between shadow and light",
    readingTime: "4 min read",
    dateLabel: "Demonstration article",
    body: [
      "This demonstration article explores a question at the heart of psychological fiction: what happens when certainty begins to fracture? The most interesting inner conflicts rarely arrive as a simple contest between good and evil.",
      "They grow in the space between inherited beliefs and lived experience, between the story we tell ourselves and the people whose lives our choices touch. Fiction can make room for that uncertainty without resolving it too quickly.",
      "Sample content only. This entry is included to show the shape of the journal; it is not a published article by the author.",
    ],
  },
  {
    slug: "what-stories-inherit",
    title: "What Stories Inherit",
    category: "Identity & Culture",
    excerpt:
      "A sample note on memory, belonging, and the stories that travel across generations.",
    image: cityImage,
    imageAlt: "A quiet, rain-darkened street disappearing into the evening mist",
    readingTime: "3 min read",
    dateLabel: "Demonstration article",
    body: [
      "Stories carry more than their plots. They carry the questions their characters inherit: what does belonging ask of us, and what can be remade when one life moves between cultures?",
      "This demonstration entry considers those questions as literary territory, with no single answer offered in advance.",
      "Sample content only. This entry is included to show the shape of the journal; it is not a published article by the author.",
    ],
  },
  {
    slug: "a-novel-of-questions",
    title: "A Novel of Questions",
    category: "Behind the Novel",
    excerpt:
      "A sample introduction to the moral questions at the center of INNOCENT VICTIMS.",
    image: woodlandImage,
    imageAlt: "Branching trees and a narrow path through the forest",
    readingTime: "5 min read",
    dateLabel: "Demonstration article",
    body: [
      "INNOCENT VICTIMS turns toward questions of identity, justice, and moral responsibility. Its premise puts inherited values and the beliefs of a new environment into conversation, without reducing either to a simple answer.",
      "At its center is a radicalized young man whose conviction is tested by ethical dilemmas, human relationships, and the possibility that ordinary compassion can interrupt a hardened idea.",
      "Sample content only. This entry is included to show the shape of the journal; it is not a published article by the author.",
    ],
  },
  {
    slug: "the-work-of-listening",
    title: "The Work of Listening",
    category: "Writing & Creativity",
    excerpt:
      "A sample reflection on attention, silence, and the stories we are slow to hear.",
    image: cityImage,
    imageAlt: "Lamplight falling across an empty cobbled street at dusk",
    readingTime: "3 min read",
    dateLabel: "Demonstration article",
    body: [
      "In fiction, listening is a form of attention. It asks a writer to stay with a character's contradictions rather than smoothing them away for the comfort of a clean conclusion.",
      "This sample note imagines the journal as a place for those pauses: the moments when a familiar explanation no longer fits, and another voice can be heard.",
      "Sample content only. This entry is included to show the shape of the journal; it is not a published article by the author.",
    ],
  },
];

export const faqs = [
  {
    question: "What is INNOCENT VICTIMS about?",
    answer:
      "It is a morally charged psychological thriller about identity, inherited values, and a radicalized young man facing difficult ethical dilemmas. The story considers justice, vengeance, faith, reason, and the influence of human connection.",
  },
  {
    question: "What genres and themes does the novel explore?",
    answer:
      "Psychological suspense meets questions of cultural identity, moral complexity, loyalty, and humanity. The novel approaches religious and cultural questions with nuance rather than simple answers.",
  },
  {
    question: "Where can I learn more about the author?",
    answer:
      "Visit the About page for the information currently available. An official biography and author photograph have not yet been provided.",
  },
  {
    question: "Can I join a reader discussion?",
    answer:
      "The Forum page outlines the planned reader community. Discussions and member accounts are not yet available on this site.",
  },
  {
    question: "How do I contact the author?",
    answer:
      "Use the email address or phone number listed on the Contact page. The contact form is a preview only and does not deliver messages yet.",
  },
  {
    question: "How can I stay updated on future writing?",
    answer:
      "A newsletter service has not been connected yet. The sign-up area explains this rather than recording an address without consent or delivery.",
  },
  {
    question: "Is the novel currently available?",
    answer:
      "Availability and publication details have not been confirmed. No retailer or publisher links have been provided.",
  },
];

export const forumCategories = [
  "INNOCENT VICTIMS",
  "Characters & Themes",
  "Literature & Identity",
  "Reader Reflections",
  "General Community",
];