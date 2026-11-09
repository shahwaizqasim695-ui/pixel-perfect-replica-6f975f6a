import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Search, Send } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  articles,
  authorName,
  categories,
  faqs,
  forumCategories,
  secondaryNavigation,
  themes,
} from "@/data/site-content";
import woodlandImage from "@/assets/innocent-victims-woodland.jpg";
import cityImage from "@/assets/quiet-city.jpg";

const novelSynopsis =
  "Across the shifting boundaries of belonging, inherited values meet the convictions of a new cultural landscape. A radicalized young man believes he is pursuing righteousness—until ethical dilemmas, human relationships, and the ordinary tenderness of life begin to challenge what he holds true.";

function TextLink({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Button asChild variant={light ? "editorialLight" : "editorial"} size="lg" className="editorial-cta">
      <Link to={to}>{children}<ArrowRight aria-hidden="true" /></Link>
    </Button>
  );
}

function PageIntro({
  eyebrow,
  title,
  description,
  number,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  number: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-intro-inner">
        <span className="eyebrow"><span className="eyebrow-rule" />{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <span className="page-index" aria-hidden="true">{number} <span /> 08</span>
      </div>
    </section>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <span className="section-label"><span>{number}</span>{children}</span>;
}

function CoverPlaceholder() {
  return (
    <div className="cover-stage" aria-label="Typographic cover concept; not an official book cover">
      <div className="book-cover">
        <span className="cover-kicker">A PSYCHOLOGICAL THRILLER</span>
        <span className="cover-IV" aria-hidden="true">IV</span>
        <span className="cover-title">INNOCENT<br />VICTIMS</span>
        <span className="cover-rule" />
        <span className="cover-author">AZÉDINE ASSASSI</span>
        <span className="cover-disclaimer">TYPOGRAPHIC CONCEPT · NOT AN OFFICIAL COVER</span>
      </div>
      <div className="cover-caption"><span>01 / THE NOVEL</span><span>A story in questions.</span></div>
    </div>
  );
}

function ThemesList({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`themes-list ${compact ? "themes-list-compact" : ""}`}>
      {themes.map((theme) => (
        <article className="theme-row" key={theme.number}>
          <span className="theme-number">{theme.number}</span>
          <h3>{theme.title}</h3>
          <p>{theme.detail}</p>
        </article>
      ))}
    </div>
  );
}

function JournalCard({ article, index = 0 }: { article: (typeof articles)[number]; index?: number }) {
  return (
    <article className={`journal-card journal-card-${index + 1}`}>
      <Link to="/blog/$slug" params={{ slug: article.slug }} className="journal-image-link" aria-label={`Read ${article.title}`}>
        <img src={article.image} alt={article.imageAlt} loading="lazy" width={1536} height={1024} />
        <span className="journal-image-index">0{index + 1}</span>
      </Link>
      <div className="journal-card-copy">
        <div className="journal-card-meta"><span>{article.category}</span><span>{article.readingTime}</span></div>
        <h3><Link to="/blog/$slug" params={{ slug: article.slug }}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="read-link" to="/blog/$slug" params={{ slug: article.slug }}>Read sample <ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

function ThemeStrip() {
  return (
    <section className="theme-strip">
      <div className="theme-strip-head">
        <SectionLabel number="02">THE QUESTIONS THAT REMAIN</SectionLabel>
        <p>A story does not always settle an argument.<br />Sometimes it gives the question a human face.</p>
      </div>
      <ThemesList compact />
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img className="hero-image" src={woodlandImage} alt="A mist-filled woodland path in the last light of evening" width={1920} height={1280} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-edition"><span className="eyebrow-rule" />A PSYCHOLOGICAL THRILLER</div>
          <p className="hero-pretitle">A novel by {authorName}</p>
          <h1>INNOCENT<br /><span>VICTIMS</span></h1>
          <p className="hero-deck">Where innocence and vengeance collide.</p>
          <p className="hero-summary">A story of fractured identities, inherited loyalties, and the quiet questions that follow a choice made in the name of justice.</p>
          <div className="hero-actions">
            <TextLink to="/novel" light>Explore the novel</TextLink>
            <Link to="/about" className="hero-text-link">Meet the author <ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <span className="hero-serial">01 <span /> AN INQUIRY INTO BELONGING</span>
        </div>
        <a className="scroll-cue" href="#the-story"><span>SCROLL TO ENTER</span><ArrowDown aria-hidden="true" /></a>
        <div className="hero-side-note" aria-hidden="true">A STORY ABOUT WHAT WE INHERIT</div>
      </section>

      <section id="the-story" className="story-section">
        <div className="story-lead">
          <SectionLabel number="01">THE NOVEL</SectionLabel>
          <h2>Every truth<br />has <em>another side.</em></h2>
          <p className="story-intro">A character-driven psychological thriller about identity, conviction, and the moral weight of our choices.</p>
          <TextLink to="/novel">Enter the story</TextLink>
        </div>
        <div className="story-art"><CoverPlaceholder /></div>
        <div className="story-bottom">
          <p>{novelSynopsis}</p>
          <span className="story-caption">INNOCENT VICTIMS <i>—</i> A STUDY IN CONTRADICTION</span>
        </div>
      </section>

      <ThemeStrip />

      <section className="author-preview">
        <div className="author-photo-placeholder">
          <img src={cityImage} alt="Evening light on a quiet street disappearing into mist" loading="lazy" width={1536} height={1024} />
          <span>AUTHOR PORTRAIT TO BE PROVIDED</span>
        </div>
        <div className="author-preview-copy">
          <SectionLabel number="03">BEHIND THE STORY</SectionLabel>
          <h2>A voice drawn<br />to <em>the in-between.</em></h2>
          <p>{authorName} is the author of <i>INNOCENT VICTIMS</i>, a psychological thriller concerned with identity, moral conflict, and human connection.</p>
          <p className="placeholder-note">An official biography and portrait have not yet been supplied.</p>
          <TextLink to="/about">Discover the author</TextLink>
        </div>
      </section>

      <section className="moral-question">
        <div className="moral-ornament" aria-hidden="true">IV</div>
        <SectionLabel number="04">A QUESTION OF MORALITY</SectionLabel>
        <blockquote>Can a cause remain righteous when <em>innocent lives</em> become its price?</blockquote>
        <span className="moral-attribution">A QUESTION AT THE HEART OF THE NOVEL</span>
      </section>

      <section className="journal-section">
        <div className="journal-heading">
          <div><SectionLabel number="05">THE JOURNAL</SectionLabel><h2>Notes from<br /><em>the margins.</em></h2></div>
          <p>Sample reflections on writing, identity, and the questions that shape a story.</p>
          <TextLink to="/blog">Enter the journal</TextLink>
        </div>
        <div className="journal-grid">{articles.slice(0, 3).map((article, index) => <JournalCard key={article.slug} article={article} index={index} />)}</div>
        <p className="sample-note">ALL JOURNAL ENTRIES SHOWN ARE DEMONSTRATION CONTENT.</p>
      </section>

      <section className="community-band">
        <div className="community-mark" aria-hidden="true">“</div>
        <div><SectionLabel number="06">A SPACE FOR READERS</SectionLabel><h2>Stories begin<br /><em>conversations.</em></h2><p>A future community for thoughtful discussion of the novel and the ideas it leaves behind.</p></div>
        <div className="community-action"><span>THE READER FORUM</span><TextLink to="/forum" light>Visit the forum</TextLink><small>Reader accounts and discussions are not yet enabled.</small></div>
      </section>

      <NewsletterNotice />
    </>
  );
}

function NewsletterNotice() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-copy"><SectionLabel number="07">OCCASIONAL NOTES</SectionLabel><h2>Beyond the<br /><em>final page.</em></h2></div>
      <div className="newsletter-form-wrap">
        <p>Reflections, new writing, and occasional notes from {authorName}.</p>
        <form onSubmit={(event) => event.preventDefault()} className="newsletter-form">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <Input id="newsletter-email" type="email" placeholder="Your email address" disabled aria-describedby="newsletter-note" />
          <Button type="submit" variant="editorial" disabled aria-label="Newsletter sign-up unavailable"><ArrowRight aria-hidden="true" /></Button>
        </form>
        <span id="newsletter-note" className="form-note">Newsletter sign-up is not connected yet. Your address will not be collected.</span>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="THE AUTHOR" title={<>{authorName}<br /><em>in the in-between.</em></>} description="An introduction to the writer behind INNOCENT VICTIMS—and the biography still to come." number="02" />
      <section className="about-main editorial-page-width">
        <div className="about-image"><img src={cityImage} alt="A lamplit, rain-darkened street in the evening" width={1536} height={1024} /><span>PORTRAIT TO BE PROVIDED</span></div>
        <div className="about-copy"><SectionLabel number="01">A NOTE ON THE AUTHOR</SectionLabel><h2>Some lives are lived<br /><em>between worlds.</em></h2><p>{authorName} is the author of <i>INNOCENT VICTIMS</i>, a psychological thriller exploring identity, moral conflict, cultural inheritance, and the fragile influence of human connection.</p><p>This introduction is intentionally brief. An official biography, photograph, and additional background have not yet been provided, so no personal history or credentials are assumed.</p><div className="about-placeholder"><span>01 / AUTHOR BIOGRAPHY</span><p>Space reserved for the author’s approved biography and portrait.</p></div><TextLink to="/contact">Write to the author</TextLink></div>
      </section>
      <section className="about-vision"><SectionLabel number="02">LITERARY TERRITORY</SectionLabel><h2>Lives shaped by<br /><em>more than one truth.</em></h2><p>INNOCENT VICTIMS looks closely at identity across cultures, inherited mindsets and adopted values, the claims of justice and loyalty, and the everyday tenderness that complicates conviction.</p></section>
      <section className="about-themes"><SectionLabel number="03">RECURRING QUESTIONS</SectionLabel><ThemesList compact /></section>
      <section className="page-cta-band"><span>A STORY OF HUMAN COMPLEXITY</span><h2>Step inside <em>the novel.</em></h2><TextLink to="/novel">Discover INNOCENT VICTIMS</TextLink></section>
    </>
  );
}

export function NovelPage() {
  return (
    <>
      <section className="novel-hero">
        <img src={woodlandImage} alt="An old forest path disappearing into mist and shadow" width={1920} height={1280} fetchPriority="high" />
        <div className="novel-hero-shade" />
        <div className="novel-hero-copy"><SectionLabel number="01">THE NOVEL</SectionLabel><p className="novel-author">A novel by {authorName}</p><h1>INNOCENT<br /><em>VICTIMS</em></h1><p>A psychological thriller about the convictions we inherit, the identities we carry, and the human bonds that ask us to reconsider.</p><span className="novel-notice">PUBLICATION AND AVAILABILITY DETAILS HAVE NOT BEEN PROVIDED.</span></div>
      </section>
      <section className="novel-overview editorial-page-width"><CoverPlaceholder /><div><SectionLabel number="02">THE STORY</SectionLabel><h2>When certainty<br />meets <em>consequence.</em></h2><p>{novelSynopsis}</p><p>The novel examines the dual-identity struggles of people of Arab heritage living in Western countries, where deeply rooted inherited mindsets meet values shaped by a new cultural environment. Neither culture nor faith is reduced to a single account.</p><p>It is a story of psychological suspense and ethical tension, interested in how compassion, family bonds, and ordinary pleasures might unsettle radicalized thinking.</p><span className="novel-notice">SYNOPSIS BASED ON THE AUTHOR-PROVIDED STORY CONTEXT.</span></div></section>
      <section className="novel-themes"><SectionLabel number="03">THE FAULT LINES</SectionLabel><h2>Every conviction<br />has <em>a human cost.</em></h2><ThemesList /></section>
      <section className="novel-human"><img src={cityImage} alt="Streetlamps glow across a quiet stone street at dusk" loading="lazy" width={1536} height={1024} /><div><SectionLabel number="04">THE QUIET INFLUENCE</SectionLabel><h2>What if the world<br />around you could<br /><em>change the question?</em></h2><p>Beyond argument and ideology, human relationships—and the small, familiar pleasures of everyday life—can shift the way a person sees the world.</p></div></section>
      <section className="novel-reader-cta"><SectionLabel number="05">AFTER THE LAST PAGE</SectionLabel><h2>What questions<br />will <em>remain?</em></h2><p>The reader forum is a planned space for open, respectful reflection. Member discussions are not enabled yet.</p><TextLink to="/forum">Visit the reader forum</TextLink></section>
      <FAQSection compact />
    </>
  );
}

export function BlogPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All reflections");
  const [search, setSearch] = useState("");
  const visibleArticles = useMemo(() => articles.filter((article) => {
    const matchesCategory = category === "All reflections" || article.category === category;
    const matchesSearch = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, search]);
  return (
    <>
      <PageIntro eyebrow="THE JOURNAL" title={<>Words from<br /><em>the margins.</em></>} description="Sample notes on writing, psychology, culture, and the questions that linger after a story ends." number="04" />
      <section className="journal-feature editorial-page-width"><img src={cityImage} alt="A warm streetlamp above an old street shrouded in evening mist" width={1536} height={1024} fetchPriority="high" /><div className="journal-feature-copy"><SectionLabel number="01">FEATURED SAMPLE · PSYCHOLOGICAL FICTION</SectionLabel><h2><Link to="/blog/$slug" params={{ slug: articles[0].slug }}>The Space Between Certainties</Link></h2><p>A sample reflection on psychological fiction, inherited beliefs, and the people who unsettle what we think we know.</p><div className="journal-feature-meta">DEMONSTRATION ARTICLE <span /> 4 MIN READ</div><Link className="read-link" to="/blog/$slug" params={{ slug: articles[0].slug }}>Read sample <ArrowUpRight aria-hidden="true" /></Link></div></section>
      <section className="journal-browser editorial-page-width"><div className="journal-browser-head"><div><SectionLabel number="02">THE ARCHIVE</SectionLabel><h2>Browse <em>reflections.</em></h2></div><label className="journal-search"><Search aria-hidden="true" /><span className="sr-only">Search articles</span><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the journal" /></label></div><div className="filter-list" aria-label="Filter journal categories">{categories.map((item) => <button key={item} type="button" className={`filter-chip ${category === item ? "filter-chip-active" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="journal-grid journal-grid-all">{visibleArticles.length ? visibleArticles.map((article, index) => <JournalCard key={article.slug} article={article} index={index} />) : <p className="empty-search">No sample entries match that search. Try another phrase.</p>}</div><p className="sample-note">ALL ARTICLES ARE DEMONSTRATION CONTENT. NONE ARE REPRESENTED AS PUBLISHED POSTS.</p></section>
    </>
  );
}

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) return <PageIntro eyebrow="THE JOURNAL" title={<>The story<br /><em>isn't here.</em></>} description="That journal entry could not be found." number="04" />;
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  const related = articles.filter((entry) => entry.slug !== article.slug).slice(0, 2);
  return (
    <>
      <section className="article-hero"><img src={article.image} alt={article.imageAlt} width={1536} height={1024} fetchPriority="high" /><div className="article-hero-shade" /><div><Link className="back-link" to="/blog"><ArrowLeft aria-hidden="true" /> Back to the journal</Link><span className="eyebrow"><span className="eyebrow-rule" />{article.category}</span><h1>{article.title}</h1><p>SAMPLE REFLECTION <i>·</i> {article.readingTime}</p></div></section>
      <article className="article-body"><span className="sample-note">DEMONSTRATION CONTENT — NOT A PUBLISHED AUTHOR POST</span><div className="article-prose">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="article-share"><span>Share this reflection</span><Button type="button" variant="outline" onClick={handleShare}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copied ? "Link copied" : "Copy link"}</Button></div></article>
      <section className="related-articles editorial-page-width"><SectionLabel number="02">MORE FROM THE JOURNAL</SectionLabel><div className="journal-grid">{related.map((entry, index) => <JournalCard key={entry.slug} article={entry} index={index} />)}</div></section>
    </>
  );
}

export function ForumPage() {
  const [selected, setSelected] = useState(forumCategories[0]);
  return (
    <>
      <PageIntro eyebrow="THE READER FORUM" title={<>Stories begin<br /><em>conversations.</em></>} description="A considered space for questions around INNOCENT VICTIMS, its ideas, and the lives that shape what we believe." number="05" />
      <section className="forum-layout editorial-page-width"><aside className="forum-sidebar"><SectionLabel number="01">DISCUSSION AREAS</SectionLabel><nav aria-label="Forum topic categories">{forumCategories.map((item, index) => <button type="button" key={item} aria-pressed={selected === item} className={selected === item ? "forum-category-active" : ""} onClick={() => setSelected(item)}><span>0{index + 1}</span>{item}<ArrowRight aria-hidden="true" /></button>)}</nav></aside><div className="forum-main"><div className="forum-main-top"><div><span className="eyebrow"><span className="eyebrow-rule" />{selected}</span><h2>A place for <em>reflection.</em></h2></div><span className="forum-status"><span /> NOT YET OPEN</span></div><div className="forum-empty"><span className="forum-quote-mark">“</span><h3>No conversations<br />have begun <em>yet.</em></h3><p>The reader forum is a concept for future discussion. No reader posts or member accounts are being shown or collected at this time.</p><span className="forum-empty-line" /></div><div className="forum-guidelines"><SectionLabel number="02">A FEW SHARED PRINCIPLES</SectionLabel><p>Curiosity before certainty. Respect for cultural and religious complexity. A willingness to discuss ideas without reducing the people who hold them.</p><TextLink to="/guide">Read the reader guide</TextLink></div></div></section>
    </>
  );
}

export function GuidePage() {
  const steps = [
    ["Explore the novel", "Begin with the Novel page for the synopsis, themes, and the questions that inform INNOCENT VICTIMS. No publication or retailer information has been confirmed."],
    ["Read the journal", "Browse demonstration articles by category or search the sample entries. These examples are not published posts."],
    ["Visit the reader forum", "Review the forum's intended discussion areas and principles. Accounts and reader conversations are not yet available."],
    ["Contact the author", "Email Azédine Assassi directly using the contact details on the Contact page. The on-page form cannot yet send a message."],
    ["Receive occasional notes", "Newsletter sign-up is not yet connected, so no email address is collected on this site."],
  ];
  return (
    <>
      <PageIntro eyebrow="THE READER'S GUIDE" title={<>A guide to<br /><em>this reading room.</em></>} description="A brief orientation to the pages, conversations, and contact information available here." number="06" />
      <section className="guide-layout editorial-page-width"><div className="guide-aside"><SectionLabel number="01">A NOTE BEFORE YOU BEGIN</SectionLabel><h2>Follow the<br /><em>questions.</em></h2><p>This site introduces a novel and its author. Some areas preview future features; the page notes explain what is not yet connected.</p></div><div className="guide-content"><Accordion type="single" collapsible className="editorial-accordion">{steps.map(([title, answer], index) => <AccordionItem value={`step-${index}`} key={title}><AccordionTrigger><span className="accordion-number">0{index + 1}</span>{title}</AccordionTrigger><AccordionContent>{answer}<div className="accordion-related">{index === 0 && <Link to="/novel">Explore the novel <ArrowUpRight aria-hidden="true" /></Link>}{index === 1 && <Link to="/blog">Visit the journal <ArrowUpRight aria-hidden="true" /></Link>}{index === 2 && <Link to="/forum">Visit the forum <ArrowUpRight aria-hidden="true" /></Link>}{index === 3 && <Link to="/contact">Contact information <ArrowUpRight aria-hidden="true" /></Link>}{index === 4 && <Link to="/faq">Read the FAQ <ArrowUpRight aria-hidden="true" /></Link>}</div></AccordionContent></AccordionItem>)}</Accordion></div></section>
      <section className="guide-principles"><SectionLabel number="02">COMMUNITY GUIDELINES</SectionLabel><h2>Conversation with<br /><em>care and curiosity.</em></h2><p>Approach difficult ideas with empathy. Make room for different experiences. Question assumptions without reducing a culture, a faith, or a person to a single story. The forum is not open yet; these principles describe its intended character.</p></section>
    </>
  );
}

function FAQSection({ compact = false }: { compact?: boolean }) {
  const list = compact ? faqs.slice(0, 4) : faqs;
  return (
    <section className={`faq-section ${compact ? "faq-section-compact" : ""}`}><div className="faq-heading"><SectionLabel number={compact ? "06" : "01"}>QUESTIONS & ANSWERS</SectionLabel><h2>Questions worth<br /><em>asking.</em></h2>{compact && <TextLink to="/faq">View all answers</TextLink>}</div><Accordion type="single" collapsible className="editorial-accordion">{list.map((item, index) => <AccordionItem value={`faq-${index}`} key={item.question}><AccordionTrigger><span className="accordion-number">0{index + 1}</span>{item.question}</AccordionTrigger><AccordionContent>{item.answer}</AccordionContent></AccordionItem>)}</Accordion></section>
  );
}

export function FAQPage() {
  return <><PageIntro eyebrow="THE FAQ" title={<>A few questions,<br /><em>considered.</em></>} description="About the novel, its themes, and what you can do here." number="07" /><FAQSection /></>;
}

export function DonationPage() {
  return (
    <>
      <section className="support-hero"><img src={woodlandImage} alt="A quiet forest path held in shadow and evening light" width={1920} height={1280} fetchPriority="high" /><div className="support-shade" /><div><SectionLabel number="01">A NOTE ON SUPPORT</SectionLabel><h1>Support independent<br /><em>storytelling.</em></h1><p>Stories take patience, attention, and care. For now, the most meaningful support is to read, reflect, and share the questions.</p></div></section>
      <section className="donation-note editorial-page-width"><div><span className="support-mark" aria-hidden="true">IV</span><SectionLabel number="02">NO PAYMENT DETAILS PROVIDED</SectionLabel><h2>There is no payment<br /><em>option here—yet.</em></h2></div><div><p>No donation link, payment account, or payment service has been supplied, so this page does not accept or request contributions.</p><p>If you would like to support the author, sharing the work when publication details are available is always a generous start.</p><TextLink to="/contact">Send a note instead</TextLink></div></section>
      <section className="support-links"><SectionLabel number="03">EXPLORE THE WORK</SectionLabel><h2>Stay with <em>the story.</em></h2><div>{secondaryNavigation.slice(0, 2).map((item) => <Link key={item.to} to={item.to}>{item.label}<ArrowUpRight aria-hidden="true" /></Link>)}</div></section>
    </>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setError("This form is not connected to an email service, so your message was not sent. Please use the email address provided.");
  };
  return (
    <>
      <PageIntro eyebrow="CONTACT" title={<>A note is always<br /><em>worth sending.</em></>} description="For questions or correspondence, choose the direct contact option below." number="08" />
      <section className="contact-layout editorial-page-width"><div className="contact-info"><SectionLabel number="01">DIRECT CONTACT</SectionLabel><h2>Reach out<br /><em>to the author.</em></h2><p>For correspondence, use the email or phone number listed here. The contact form is a preview and cannot currently deliver messages.</p><div className="contact-detail"><span>EMAIL</span><a href="mailto:aassaassi@gmail.com">aassaassi@gmail.com <ArrowUpRight aria-hidden="true" /></a></div><div className="contact-detail"><span>PHONE</span><a href="tel:5132406471">5132406471 <ArrowUpRight aria-hidden="true" /></a></div><span className="contact-private-note">The phone number is shown exactly as provided; no country code has been assumed.</span></div><form className="contact-form" onSubmit={handleSubmit} noValidate><SectionLabel number="02">SEND A MESSAGE</SectionLabel><div className="form-field"><label htmlFor="contact-name">Full name</label><Input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" onChange={() => setError("")} /></div><div className="form-field"><label htmlFor="contact-email">Email address</label><Input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" onChange={() => setError("")} /></div><div className="form-field"><label htmlFor="contact-subject">Subject</label><Input id="contact-subject" name="subject" required placeholder="What would you like to discuss?" onChange={() => setError("")} /></div><div className="form-field"><label htmlFor="contact-message">Message</label><Textarea id="contact-message" name="message" required rows={5} placeholder="Write your message…" onChange={() => setError("")} /></div>{error && <p className="form-error" role="alert">{error}</p>}{submitted && <p className="form-note" role="status">Message sent.</p>}<Button type="submit" variant="editorial" size="lg" className="editorial-cta">Send a message <Send aria-hidden="true" /></Button><span className="form-note">This preview does not store or transmit form details.</span></form></section>
    </>
  );
}