export interface ServiceSign {
  text: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface RelatedService {
  title: string;
  description: string;
  href: string;
}

export interface ServiceTestimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
}

export interface ServicePageData {
  slug: string;
  serviceName: string;
  serviceCategory: string;
  pageTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubtext: string;
  defaultServiceValue: string;
  // Section 2 content
  introHeading: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  // Signs
  signsHeading: string;
  signs: ServiceSign[];
  // Why not DIY
  diyHeading: string;
  diyParagraphs: string[];
  // What to expect
  expectHeading: string;
  steps: ServiceStep[];
  // Sidebar testimonials
  testimonials: ServiceTestimonial[];
  // FAQ
  faqHeading: string;
  faqs: ServiceFAQ[];
  // Related services
  relatedServices: RelatedService[];
  // Final CTA
  ctaHeading: string;
  ctaSubtext: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "drain-cleaning",
    serviceName: "Drain Cleaning",
    serviceCategory: "DRAIN SERVICES",
    pageTitle: "Drain Cleaning Services | JMS Plumbing in Sunrise, FL",
    metaDescription: "Professional drain cleaning in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing clears clogged drains fast with upfront pricing. Call (954) 910-6883.",
    heroH1: "Your Drain Is Telling You Something. We'll Figure Out What.",
    heroSubtext: "Most drain clogs in South Florida aren't just hair and soap scum. Hard water, aging cast iron pipes, and tree roots make drain problems here different — and harder to permanently fix without knowing what's actually going on. JMS diagnoses the real cause and clears it right the first time.",
    defaultServiceValue: "drain",
    introHeading: "Drain Cleaning in South Florida Isn't One-Size-Fits-All",
    paragraph1: "Here's something most plumbing websites won't tell you: a bottle of Drano and a professional drain cleaning are solving two completely different problems. The bottle might buy you a few days. But if your drain keeps backing up — weekly, monthly, or every few months no matter what you pour down it — something else is going on inside that pipe. And until you find out what it is, the clog is coming back.",
    paragraph2: "South Florida drains deal with things most of the country doesn't. The water here carries an unusually high mineral content — hard water that leaves scale buildup inside your pipes year after year, slowly choking off flow. Homes built before 1975 throughout Broward, Miami-Dade, and Palm Beach Counties were plumbed with cast iron drain pipes that are now well past their lifespan. These pipes corrode from the inside out, creating rough surfaces that catch debris, grease, and buildup far faster than modern PVC. And South Florida's warm climate and sandy soil make it one of the most aggressive environments in the country for tree root intrusion into sewer lines — often without a single warning sign until the backup hits.",
    paragraph3: "When you call JMS, we don't just run a snake down the drain and call it done. We find out why it's happening. We tell you what we found in plain language — not to scare you into a bigger job, but because you deserve to know what's going on in your own home. Then we give you a clear price, clear the line properly, and leave the area cleaner than we found it. That's the whole job.",
    signsHeading: "Six Signs Your Drain Needs Professional Attention",
    signs: [
      { text: "Water draining noticeably slower than it used to — in any fixture" },
      { text: "The same drain clogging repeatedly even after you've cleared it" },
      { text: "Brown or discolored water pooling in your tub or shower floor" },
      { text: "A sewage or rotten egg smell coming up from floor drains or sinks" },
      { text: "Gurgling sounds coming from drains after running water elsewhere in the house" },
      { text: "Water backing up in your tub when you run the washing machine or flush the toilet" },
    ],
    diyHeading: "Why Store-Bought Fixes Keep Failing You",
    diyParagraphs: [
      "Chemical drain cleaners work by dissolving whatever is sitting right at the surface of the blockage. If your clog is caused by something deeper — mineral scale lining the inside of your pipe, a tree root that's worked its way through a joint, or a section of cast iron that's collapsed inward — the chemical never reaches it. You get a few days of decent drainage, then the backup returns. This cycle can go on for months or years before a homeowner realizes the product isn't solving the actual problem.",
      "There's also a real risk to your pipes. Liquid drain cleaners are caustic — they generate heat as they work, which can soften PVC joints and accelerate corrosion in already-weakened cast iron. If your home has older plumbing, repeated chemical treatments may be quietly making a manageable pipe problem into an expensive one.",
      "A professional drain cleaning gets to the actual source of the blockage — not just the surface symptoms. More importantly, it tells you whether what you're dealing with is a simple clog or the beginning of a bigger pipe problem. That difference is worth knowing before it turns into an emergency.",
    ],
    expectHeading: "What Happens When You Call JMS for Drain Cleaning",
    steps: [
      { title: "You Call — A Real Person Picks Up", description: "No voicemail, no call center. We ask a few quick questions about what you're experiencing so we can show up with the right equipment for your specific situation." },
      { title: "We Diagnose First & Price Before We Start", description: "We assess what's causing the problem — not just where it is. You get a clear, upfront price before we do anything. No pressure, no surprise charges." },
      { title: "Line Cleared, Area Clean, Problem Explained", description: "We clear the blockage properly, clean up the work area completely, and walk you through exactly what we found — and what to watch for going forward." },
    ],
    testimonials: [
      { name: "Marcus", city: "Sunrise, FL", text: "JMS came out same day and fixed our kitchen drain that had been backing up for weeks. Super professional and the pricing was very fair.", rating: 5 },
      { name: "Linda", city: "Plantation, FL", text: "Called them for a clogged shower drain. They were on time, explained everything, and didn't try to upsell me. Exactly the kind of plumber I've been looking for.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask Us About Drain Cleaning",
    faqs: [
      { question: "Why does my drain keep clogging even after I've cleared it?", answer: "Recurring clogs almost always mean the blockage isn't fully cleared — or that something structural is causing it. In South Florida, the most common culprits are mineral scale buildup narrowing the inside of older pipes, tree roots that have partially entered a sewer line joint, or a section of deteriorating cast iron that's catching debris. A professional drain cleaning with the right equipment will clear the full blockage and identify whether the pipe itself needs attention before it becomes a bigger problem." },
      { question: "How much does drain cleaning cost in Broward County?", answer: "The honest answer is that it depends on what's causing the clog, which drain is affected, and how deep the blockage sits. A straightforward shower or kitchen sink drain cleaning costs considerably less than a main sewer line backup caused by root intrusion. At JMS, we assess the situation first and give you a clear price before starting any work — so there are no surprises on the invoice. Call us at (954) 910-6883 for a same-day assessment." },
      { question: "Can tree roots really get into drain pipes in South Florida?", answer: "More often than most homeowners expect. South Florida's combination of warm temperatures, high moisture, and sandy soil creates near-perfect conditions for aggressive root growth. Roots are drawn to the moisture and nutrients inside sewer lines and can enter through the smallest cracks or joints in older pipes — particularly cast iron, which becomes brittle and develops gaps over time. Once inside, roots grow quickly and can cause partial or complete blockages. If your drain backs up regularly and you have mature trees near your home, root intrusion is worth ruling out." },
      { question: "Is it safe to use chemical drain cleaners in South Florida homes with older pipes?", answer: "We'd caution against it — especially in homes with cast iron drain pipes, which are common throughout Broward, Miami-Dade, and Palm Beach Counties in homes built before 1975. Chemical cleaners generate heat as they work and can accelerate corrosion in pipes that are already weakened. They're also hard on PVC joints. If your home has older plumbing, repeated chemical treatments may be creating a more serious pipe problem over time. A professional cleaning is safer for your pipes and more effective at addressing the actual cause of the clog." },
      { question: "Do you offer same-day drain cleaning in Sunrise, Fort Lauderdale, and surrounding areas?", answer: "Yes. We offer same-day drain cleaning service throughout Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, Lauderhill, and Weston. Call us at (954) 910-6883 and we'll get someone out to you as fast as possible — often the same morning or afternoon you call." },
      { question: "What's the difference between a drain snake and hydro jetting — and which one do I need?", answer: "A drain snake physically breaks through or pulls out a blockage. Hydro jetting uses high-pressure water to scour the inside walls of the pipe clean — it's more thorough and works better for heavy grease buildup or mineral scale. However, hydro jetting isn't right for every situation. Older or weakened cast iron pipes may not handle high pressure well. At JMS, we assess your pipe condition before recommending a method — because the right tool for your specific pipe and blockage matters more than just using the most powerful option available." },
    ],
    relatedServices: [
      { title: "Plumbing Repairs", description: "We fix what actually needs fixing. No unnecessary replacements, no upsells.", href: "/plumbing-repairs" },
      { title: "Emergency Plumbing", description: "Nights, weekends, holidays — we pick up. After-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
      { title: "Garbage Disposal", description: "Jammed, leaking, or dead? We inspect, repair, and install — usually same day.", href: "/garbage-disposal" },
    ],
    ctaHeading: "Drain Backing Up in South Florida? Don't Wait.",
    ctaSubtext: "In South Florida's climate, a slow drain today can become water damage and mold within 48 hours. Call JMS now or request a quote online — we'll give you a straight answer and a fair price before we touch anything.",
  },
  {
    slug: "gas-line-services",
    serviceName: "Gas Line Services",
    serviceCategory: "GAS LINE SERVICES",
    pageTitle: "Gas Line Services | JMS Plumbing in Sunrise, FL",
    metaDescription: "Licensed gas line installation, repair & leak detection in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing — upfront pricing. Call (954) 910-6883.",
    heroH1: "Gas Line Problems Don't Wait. Neither Do We.",
    heroSubtext: "Gas line work is not a DIY job and it's not a \"wait and see\" situation. If you smell gas, hear hissing near a line, or suspect a leak anywhere on your property — you need a licensed plumber on site today. JMS handles gas line installation, repair, and leak inspection throughout South Florida's Tri-County area.",
    defaultServiceValue: "gas",
    introHeading: "Gas Line Services in South Florida — Done Right, Done Safely",
    paragraph1: "Natural gas powers some of the most important systems in your home — your water heater, stove, dryer, and in many South Florida homes, your generator. When those lines are installed correctly and maintained properly, they work quietly in the background for years. When something goes wrong, the consequences can be serious — fast. A gas leak doesn't give you much warning, and in a warm, humid climate like South Florida's, the risks compound quickly.",
    paragraph2: "South Florida homes present specific gas line challenges that require local knowledge. Salt air from the coast accelerates corrosion on exposed gas fittings and connectors faster than in inland states. Many older homes throughout Broward, Miami-Dade, and Palm Beach Counties have aging gas line infrastructure that hasn't been inspected in years — sometimes decades. And as homeowners add appliances, outdoor kitchens, whole-home generators, and pool heaters, improper gas line extensions are one of the most common and most dangerous DIY mistakes we see.",
    paragraph3: "At JMS, every gas line job — installation, repair, or inspection — is handled with the level of precision this kind of work demands. We're licensed and insured in the state of Florida. We follow code on every job, every time. And we don't cut corners because gas line shortcuts don't come with a second chance.",
    signsHeading: "Six Signs You May Have a Gas Line Problem",
    signs: [
      { text: "Smell of rotten eggs or sulfur near gas appliances" },
      { text: "A hissing or whistling sound near gas lines, meters, or appliances" },
      { text: "Dead or yellowing vegetation in a line running across your yard" },
      { text: "Unusually high gas bills without a change in usage" },
      { text: "Gas appliances with consistently weak flames or frequent pilot outages" },
      { text: "Visible corrosion, rust, or damage on exposed gas fittings or connectors" },
    ],
    diyHeading: "Why Gas Line Work Is Never a DIY Job",
    diyParagraphs: [
      "We understand the impulse to handle home repairs yourself — it saves money and gives you control. But gas line work sits in a different category entirely. A mistake with a drain line gets your floor wet. A mistake with a gas line can level a house. That's not an exaggeration — it's why Florida law requires gas line work to be performed by a licensed contractor. It's also why we take this work more seriously than anything else we do.",
      "Even seemingly simple jobs — extending a line to a new appliance, replacing a fitting, reconnecting after a renovation — require proper pressure testing after the work is done to confirm there are no leaks. Without that test, you have no way of knowing whether the connection is truly safe. A licensed plumber performs that test as a standard part of every gas line job. A handyman or unlicensed contractor typically doesn't — and your homeowner's insurance won't cover damage caused by unpermitted gas work.",
    ],
    expectHeading: "What Happens When You Call JMS for Gas Line Service",
    steps: [
      { title: "You Call — We Take It Seriously From the First Word", description: "Gas line calls get treated with urgency. We ask the right questions immediately to determine whether you need emergency response or a scheduled inspection and assessment." },
      { title: "We Inspect, Diagnose, and Price Upfront", description: "We assess the full situation — not just the visible problem. You get a clear price before any work begins. No pressure, no inflated emergency markups beyond what's disclosed upfront." },
      { title: "Work Completed, Tested, and Verified Safe", description: "Every gas line job ends with a pressure test to confirm there are no leaks anywhere in the line. We don't consider the job done until that test passes. You'll know it's safe before we leave." },
    ],
    testimonials: [
      { name: "Robert", city: "Fort Lauderdale, FL", text: "Had a gas line issue and they handled everything from inspection to repair. Really knowledgeable team — you can tell they take pride in their craft.", rating: 5 },
      { name: "Ana", city: "Weston, FL", text: "JMS installed a new gas line for our outdoor grill. Professional, on time, and the price was exactly what they quoted. No surprises.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask Us About Gas Line Services",
    faqs: [
      { question: "How much does gas line installation cost in Broward County?", answer: "Costs depend on the length of the run, pipe material, and appliance being connected. JMS provides a clear upfront quote before any work begins." },
      { question: "How do I know if I have a gas leak in my home?", answer: "The most common sign is a sulfur or rotten egg smell. You may also hear hissing, notice dead plants near gas lines, or see unexplained spikes in your gas bill." },
      { question: "Is gas line work required to be permitted in South Florida?", answer: "Yes. Gas line installations and major repairs require permits and inspections in Broward, Miami-Dade, and Palm Beach Counties. JMS handles the permitting process for you." },
      { question: "Can you install a gas line for a pool heater in Sunrise, FL?", answer: "Absolutely. We regularly install gas lines for pool heaters, outdoor kitchens, generators, and other appliances throughout Sunrise and the Tri-County area." },
      { question: "How long does a gas line installation take?", answer: "Most residential gas line installations are completed in a single day. We'll give you a clear timeline during your estimate." },
      { question: "Do you offer gas leak detection in Broward County?", answer: "Yes. We use professional-grade detection equipment to locate gas leaks accurately and provide immediate repair solutions." },
    ],
    relatedServices: [
      { title: "Emergency Plumbing", description: "Nights, weekends, holidays — we pick up. After-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
      { title: "Plumbing Repairs", description: "We fix what actually needs fixing. No unnecessary replacements, no upsells.", href: "/plumbing-repairs" },
      { title: "Plumbing Remodels", description: "From blueprint to final install — precise, clean plumbing work that's built to last.", href: "/plumbing-remodels" },
    ],
    ctaHeading: "Smell Gas? Suspect a Leak? Call Us Now.",
    ctaSubtext: "Gas line problems are not a wait-until-Monday situation. JMS is available for gas line inspections, repairs, and installations throughout Broward, Miami-Dade, and Palm Beach Counties. Call now for a straight answer and upfront pricing — we'll tell you exactly what's going on before we touch anything.",
  },
  {
    slug: "plumbing-repairs",
    serviceName: "Plumbing Repairs",
    serviceCategory: "REPAIR SERVICES",
    pageTitle: "Plumbing Repairs & Replacements | JMS Plumbing in Sunrise, FL",
    metaDescription: "Expert plumbing repairs in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing fixes leaks, pipes, fixtures & more with upfront pricing. Call (954) 910-6883.",
    heroH1: "Plumbing Repairs in South Florida — Honest Work, Upfront Pricing",
    heroSubtext: "Licensed and insured plumbing service based in Sunrise, FL. We serve homeowners and businesses across the Tri-County area — and we show up when we say we will.",
    defaultServiceValue: "repairs",
    introHeading: "Plumbing Repair Services in South Florida",
    paragraph1: "From leaky faucets and running toilets to burst pipes and slab leaks, plumbing problems come in all shapes and sizes. JMS Plumbing Services handles repairs of every kind — and we fix what actually needs fixing, without upselling you on work you don't need.",
    paragraph2: "South Florida's hard water, high humidity, and aging infrastructure mean plumbing issues here are different from the rest of the country. Corroded pipes, mineral buildup, and shifting foundations cause problems that require local expertise to diagnose and repair correctly.",
    paragraph3: "At JMS, every repair starts with a thorough inspection. We explain the issue clearly, give you a firm price, and only start work once you approve. No pressure, no sales tactics — just honest plumbing.",
    signsHeading: "Signs You May Need Plumbing Repairs",
    signs: [
      { text: "Dripping faucets or running toilets that won't stop" },
      { text: "Visible water stains on walls or ceilings" },
      { text: "Unexplained increase in your water bill" },
      { text: "Low water pressure throughout the home" },
      { text: "Discolored or rusty water from your taps" },
      { text: "Wet spots or soft areas on floors near plumbing" },
    ],
    diyHeading: "Why Not DIY? Here's What's at Stake.",
    diyParagraphs: [
      "A quick YouTube fix might seem easy, but plumbing repairs often involve more than what's visible. A dripping pipe behind a wall could indicate corrosion, a faulty valve, or water damage that's already spread. Without proper diagnosis, a DIY fix can mask a bigger problem.",
      "Licensed plumbers have the tools, training, and code knowledge to repair issues properly. In South Florida, incorrect repairs can lead to mold growth within 48 hours due to our humidity — turning a small fix into a major remediation project.",
    ],
    expectHeading: "What Happens When You Call JMS for Plumbing Repairs",
    steps: [
      { title: "You call or request a quote — we respond fast", description: "Reach us by phone or form. A real person answers." },
      { title: "We arrive on time and assess the issue — upfront price before we start", description: "We inspect thoroughly and give you a clear price before touching anything." },
      { title: "Work completed, area cleaned, follow-up to make sure you're satisfied", description: "Repair done right, area left spotless, and a follow-up to confirm everything holds." },
    ],
    testimonials: [
      { name: "David", city: "Tamarac, FL", text: "Had a leak behind our bathroom wall. JMS diagnosed it quickly, gave us a fair price, and fixed it the same day. No drama, no upselling. Just great work.", rating: 5 },
      { name: "Stephanie", city: "Coral Springs, FL", text: "James and his team replaced some old corroded pipes under our house. Very clean work, explained everything clearly, and left the area spotless.", rating: 5 },
    ],
    faqHeading: "Frequently Asked Questions About Plumbing Repairs in South Florida",
    faqs: [
      { question: "How much do plumbing repairs cost in Broward County?", answer: "Repair costs vary widely depending on the issue. JMS always provides upfront pricing before starting any work — no hidden fees or surprise charges." },
      { question: "Do you handle both residential and commercial plumbing repairs?", answer: "Yes. JMS serves homeowners and business owners throughout Broward, Miami-Dade, and Palm Beach Counties." },
      { question: "Can you repair old cast iron pipes in South Florida homes?", answer: "Absolutely. We regularly repair and replace cast iron plumbing in older South Florida homes. We'll assess the condition and recommend the most cost-effective solution." },
      { question: "How quickly can you get to my home for a repair in Sunrise, FL?", answer: "We offer same-day service for most repair calls in Sunrise and surrounding areas. Emergency repairs are prioritized 24/7." },
      { question: "What if the repair turns out to be bigger than expected?", answer: "We'll never start additional work without your approval. If we find something unexpected, we explain it clearly and provide an updated quote before proceeding." },
      { question: "Do you offer warranties on plumbing repairs?", answer: "Yes. We stand behind our work. Ask about our warranty policy when we provide your quote." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Slow or fully blocked — we clear main lines, sinks, tubs, and showers fast.", href: "/drain-cleaning" },
      { title: "Plumbing Remodels", description: "From blueprint to final install — precise, clean plumbing work that's built to last.", href: "/plumbing-remodels" },
      { title: "Emergency Plumbing", description: "Nights, weekends, holidays — we pick up. After-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Need Plumbing Repairs in South Florida? We're Ready.",
    ctaSubtext: "Call now or request a free quote online. Upfront pricing, no hidden fees, and a plumber who actually shows up.",
  },
  {
    slug: "plumbing-remodels",
    serviceName: "Plumbing Remodels",
    serviceCategory: "REMODEL SERVICES",
    pageTitle: "Plumbing Remodel Services | JMS Plumbing in Sunrise, FL",
    metaDescription: "Full bathroom & kitchen plumbing remodels in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing — blueprint to install. Call (954) 910-6883.",
    heroH1: "Plumbing Remodels in South Florida — Honest Work, Upfront Pricing",
    heroSubtext: "Licensed and insured plumbing service based in Sunrise, FL. We serve homeowners and businesses across the Tri-County area — and we show up when we say we will.",
    defaultServiceValue: "remodel",
    introHeading: "Plumbing Remodel Services in South Florida",
    paragraph1: "Remodeling your kitchen or bathroom is exciting — but the plumbing behind the walls is what makes or breaks the project. JMS Plumbing Services handles complete plumbing remodels, from relocating supply lines and drains to installing new fixtures, tubs, and appliances.",
    paragraph2: "South Florida's slab-on-grade construction means remodel plumbing here is more complex than in most parts of the country. Moving a drain or adding a fixture often requires cutting into the slab, rerouting lines through the attic, or working around existing infrastructure. Our team has the local experience to plan and execute these projects efficiently.",
    paragraph3: "We work directly with your general contractor or manage the plumbing scope independently. Either way, you get clear communication, a detailed scope of work, and a firm price before we start — so your remodel stays on budget.",
    signsHeading: "Signs You May Need a Plumbing Remodel",
    signs: [
      { text: "Planning a kitchen or bathroom renovation" },
      { text: "Outdated galvanized or polybutylene pipes throughout the home" },
      { text: "Frequent plumbing issues in a specific area of the house" },
      { text: "Adding a new bathroom, laundry room, or wet bar" },
      { text: "Converting a garage or bonus room to livable space" },
      { text: "Upgrading to modern water-efficient fixtures" },
    ],
    diyHeading: "Why Not DIY? Here's What's at Stake.",
    diyParagraphs: [
      "Remodel plumbing isn't just connecting pipes — it requires understanding local codes, proper pipe sizing, venting requirements, and the structural limitations of your home. In South Florida, incorrect plumbing during a remodel can lead to failed inspections, costly rework, and water damage.",
      "A licensed plumber ensures your remodel plumbing passes inspection the first time, functions properly for decades, and doesn't create hidden problems behind your new walls and floors.",
    ],
    expectHeading: "What Happens When You Call JMS for a Plumbing Remodel",
    steps: [
      { title: "You call or request a quote — we respond fast", description: "We'll schedule a walkthrough to discuss your project scope." },
      { title: "We arrive on time and assess the issue — upfront price before we start", description: "Detailed scope of work and firm pricing before any demo begins." },
      { title: "Work completed, area cleaned, follow-up to make sure you're satisfied", description: "Professional installation, clean work area, and inspection-ready results." },
    ],
    testimonials: [
      { name: "Maria", city: "Sunrise, FL", text: "We hired JMS for a full bathroom remodel and couldn't be happier. They walked us through the whole process, stayed on schedule, and the finished result exceeded our expectations.", rating: 5 },
      { name: "James", city: "Lauderhill, FL", text: "Great experience with our kitchen remodel plumbing. They coordinated with our contractor perfectly and the work was top-notch. Fair pricing too.", rating: 5 },
    ],
    faqHeading: "Frequently Asked Questions About Plumbing Remodels in South Florida",
    faqs: [
      { question: "How much does a plumbing remodel cost in Broward County?", answer: "Costs depend on the scope — relocating drains in a slab costs more than swapping fixtures. JMS provides detailed quotes before any work begins." },
      { question: "Do you work with general contractors on remodel projects?", answer: "Yes. We regularly coordinate with GCs throughout Broward, Miami-Dade, and Palm Beach Counties to ensure plumbing is done right and on schedule." },
      { question: "Can you move plumbing in a slab foundation home in South Florida?", answer: "Yes. We have extensive experience with slab work common in South Florida homes. We'll explain the process, timeline, and cost upfront." },
      { question: "Do I need permits for a plumbing remodel in Sunrise, FL?", answer: "Most plumbing remodels require permits. JMS handles the permitting process for you to ensure everything is done to code." },
      { question: "How long does a bathroom plumbing remodel take?", answer: "Typical bathroom plumbing rough-in takes 2-3 days. Final fixture installation is usually 1 day. We'll provide a detailed timeline with your quote." },
      { question: "Can you upgrade my home's plumbing during a remodel?", answer: "Absolutely. A remodel is the perfect time to upgrade old pipes, improve water pressure, or add water-efficient fixtures. We'll assess and recommend during your consultation." },
    ],
    relatedServices: [
      { title: "Plumbing Repairs", description: "We fix what actually needs fixing. No unnecessary replacements, no upsells.", href: "/plumbing-repairs" },
      { title: "Garbage Disposal", description: "Jammed, leaking, or dead? We inspect, repair, and install — usually same day.", href: "/garbage-disposal" },
      { title: "Gas Line Services", description: "Installations, repairs, and leak inspections. Licensed, insured, and done right.", href: "/gas-line-services" },
    ],
    ctaHeading: "Need a Plumbing Remodel in South Florida? We're Ready.",
    ctaSubtext: "Call now or request a free quote online. Upfront pricing, no hidden fees, and a plumber who actually shows up.",
  },
  {
    slug: "garbage-disposal",
    serviceName: "Garbage Disposal",
    serviceCategory: "KITCHEN SERVICES",
    pageTitle: "Garbage Disposal Repair & Installation | JMS Plumbing in Sunrise, FL",
    metaDescription: "Garbage disposal repair & installation in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing — same-day service, upfront pricing. Call (954) 910-6883.",
    heroH1: "Garbage Disposal Services in South Florida — Honest Work, Upfront Pricing",
    heroSubtext: "Licensed and insured plumbing service based in Sunrise, FL. We serve homeowners and businesses across the Tri-County area — and we show up when we say we will.",
    defaultServiceValue: "garbage-disposal",
    introHeading: "Garbage Disposal Services in South Florida",
    paragraph1: "A working garbage disposal is one of those things you don't think about — until it stops working. Whether yours is jammed, leaking, making strange noises, or completely dead, JMS Plumbing Services can diagnose and fix the problem quickly, or install a brand-new unit if that's the better option.",
    paragraph2: "In South Florida's humid environment, a malfunctioning garbage disposal can quickly become a source of bad odors, bacterial growth, and even drain backups. Getting it repaired or replaced promptly isn't just about convenience — it's about keeping your kitchen sanitary.",
    paragraph3: "We carry a range of disposal units and can often complete repairs or installations the same day. As always, you get a clear price before we start, and we clean up when we're done.",
    signsHeading: "Signs You May Need Garbage Disposal Service",
    signs: [
      { text: "Disposal hums but doesn't grind" },
      { text: "Unit doesn't turn on at all" },
      { text: "Water leaking from the bottom of the disposal" },
      { text: "Persistent bad odor even after cleaning" },
      { text: "Frequent jams or slow grinding" },
      { text: "Unusual or loud grinding noises during operation" },
    ],
    diyHeading: "Why Not DIY? Here's What's at Stake.",
    diyParagraphs: [
      "Garbage disposals involve electrical wiring, plumbing connections, and sharp internal components. Incorrect installation can cause leaks, electrical hazards, or damage to your sink and drain lines. Even a simple jam can cause injury if not handled with the right technique.",
      "A licensed plumber can quickly determine whether your disposal needs a repair or replacement, ensure proper electrical and plumbing connections, and recommend the right unit size and power for your household's needs.",
    ],
    expectHeading: "What Happens When You Call JMS for Garbage Disposal Service",
    steps: [
      { title: "You call or request a quote — we respond fast", description: "Reach us by phone or form. We often schedule same-day." },
      { title: "We arrive on time and assess the issue — upfront price before we start", description: "We inspect the unit, diagnose the issue, and quote repair vs. replacement." },
      { title: "Work completed, area cleaned, follow-up to make sure you're satisfied", description: "Installed, tested, and your kitchen left clean." },
    ],
    testimonials: [
      { name: "Stephanie", city: "Sunrise, FL", text: "James replaced our old garbage disposal and installed a new one the same day. Very clean work, explained everything clearly, and left the area spotless.", rating: 5 },
      { name: "Tony", city: "Plantation, FL", text: "Quick, professional, and affordable. My disposal was leaking and they had a new one installed in under an hour. Highly recommend JMS.", rating: 5 },
    ],
    faqHeading: "Frequently Asked Questions About Garbage Disposal Service in South Florida",
    faqs: [
      { question: "How much does garbage disposal installation cost in Broward County?", answer: "Installation costs depend on the unit type and whether existing wiring and plumbing need modification. JMS provides upfront pricing before any work begins." },
      { question: "Should I repair or replace my garbage disposal?", answer: "If your disposal is over 8-10 years old or has recurring issues, replacement is usually more cost-effective. We'll give you an honest recommendation." },
      { question: "Can you install a garbage disposal if I don't have one currently?", answer: "Yes. We can install a new disposal even if your kitchen sink wasn't previously equipped with one. We'll handle the plumbing and electrical connections." },
      { question: "How long does garbage disposal installation take?", answer: "Most installations take 30-60 minutes. If additional plumbing modifications are needed, it may take slightly longer." },
      { question: "What garbage disposal brands do you install in Sunrise, FL?", answer: "We install and recommend reliable brands like InSinkErator and Waste King. We'll help you choose the right model for your kitchen." },
      { question: "Do you offer same-day garbage disposal service in South Florida?", answer: "Yes. We offer same-day service for most garbage disposal calls throughout Broward, Miami-Dade, and Palm Beach Counties." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Slow or fully blocked — we clear main lines, sinks, tubs, and showers fast.", href: "/drain-cleaning" },
      { title: "Plumbing Repairs", description: "We fix what actually needs fixing. No unnecessary replacements, no upsells.", href: "/plumbing-repairs" },
      { title: "Plumbing Remodels", description: "From blueprint to final install — precise, clean plumbing work that's built to last.", href: "/plumbing-remodels" },
    ],
    ctaHeading: "Need Garbage Disposal Service in South Florida? We're Ready.",
    ctaSubtext: "Call now or request a free quote online. Upfront pricing, no hidden fees, and a plumber who actually shows up.",
  },
  {
    slug: "emergency-plumbing",
    serviceName: "Emergency Plumbing",
    serviceCategory: "EMERGENCY SERVICES",
    pageTitle: "24/7 Emergency Plumbing | JMS Plumbing in Sunrise, FL",
    metaDescription: "24/7 emergency plumbing in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing responds fast with upfront pricing. Call (954) 910-6883 now.",
    heroH1: "Emergency Plumbing in South Florida — We Answer When It Matters",
    heroSubtext: "Licensed and insured plumbing service based in Sunrise, FL. Nights, weekends, holidays — we pick up the phone and we show up fast.",
    defaultServiceValue: "emergency",
    introHeading: "24/7 Emergency Plumbing Services in South Florida",
    paragraph1: "Plumbing emergencies don't wait for business hours — and neither do we. Whether it's a burst pipe flooding your home at 2 AM, a sewer backup on a holiday weekend, or a gas leak that needs immediate attention, JMS Plumbing Services is available 24/7 to respond fast and fix the problem.",
    paragraph2: "South Florida's heavy rain seasons, aging infrastructure, and high water tables make emergency plumbing situations especially common — and especially urgent. Water damage can escalate within minutes in our humid climate, leading to mold, structural damage, and costly repairs if not addressed quickly.",
    paragraph3: "When you call JMS for an emergency, a real person answers. We dispatch quickly, arrive prepared, and give you an upfront price before we start — even at 3 AM. After-hours fees are always disclosed before we begin work. No surprises, no games.",
    signsHeading: "Signs You Need Emergency Plumbing",
    signs: [
      { text: "Burst or broken pipe actively flooding your home" },
      { text: "Sewer backup coming through floor drains or toilets" },
      { text: "No water throughout the entire house" },
      { text: "Gas leak smell (rotten eggs / sulfur)" },
      { text: "Water heater leaking or making popping sounds" },
      { text: "Overflowing toilet that won't stop" },
    ],
    diyHeading: "Why Not DIY? Here's What's at Stake.",
    diyParagraphs: [
      "In an emergency, the instinct is to fix it yourself — but plumbing emergencies often involve high-pressure water, sewage, or gas. Incorrect repairs can make the situation significantly worse, cause water damage to spread, or create safety hazards.",
      "The best thing you can do before a plumber arrives is shut off the water supply (or gas) and move valuables away from the affected area. Leave the repair to a licensed professional who can fix it safely and correctly the first time.",
    ],
    expectHeading: "What Happens When You Call JMS for an Emergency",
    steps: [
      { title: "You call — a real person answers, 24/7", description: "No voicemail, no call center. We pick up and dispatch fast." },
      { title: "We arrive fast and assess the issue — upfront price even at 3 AM", description: "We diagnose the emergency and give you a clear price before we start." },
      { title: "Problem fixed, damage minimized, follow-up to confirm", description: "We stop the damage, complete the repair, and check back with you." },
    ],
    testimonials: [
      { name: "Carlos", city: "Fort Lauderdale, FL", text: "Called them for an emergency leak at 10pm and they were at my door within the hour. Fixed the issue quickly and didn't overcharge. This is what real customer service looks like.", rating: 5 },
      { name: "Patricia", city: "Sunrise, FL", text: "Sewer backup on a Sunday morning. JMS answered immediately and had someone out within 45 minutes. Saved us from what could have been a disaster. Can't recommend enough.", rating: 5 },
    ],
    faqHeading: "Frequently Asked Questions About Emergency Plumbing in South Florida",
    faqs: [
      { question: "Do you charge extra for after-hours emergency plumbing in Broward County?", answer: "We do have after-hours rates, but we always disclose them upfront before any work begins. No surprise fees — ever." },
      { question: "How fast can you respond to a plumbing emergency in Sunrise, FL?", answer: "We typically arrive within 30-60 minutes for emergency calls in Sunrise, Plantation, Fort Lauderdale, and surrounding areas." },
      { question: "What should I do while waiting for the emergency plumber?", answer: "Shut off the main water supply to prevent further damage. If it's a gas leak, evacuate the home and call from outside. Move valuables away from the affected area." },
      { question: "Do you handle sewer backups as emergency calls?", answer: "Yes. Sewer backups are unsanitary and can cause significant damage. We treat them as priority emergencies." },
      { question: "Are you available on holidays for emergency plumbing in South Florida?", answer: "Yes. JMS provides true 24/7 emergency service — including all holidays, weekends, and overnight hours throughout the Tri-County area." },
      { question: "Do I need an emergency plumber or can it wait until morning?", answer: "If water is actively flowing, sewage is backing up, or you smell gas — call immediately. If it's a slow drip you can contain with a bucket, it can likely wait. When in doubt, call us and we'll help you decide." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Slow or fully blocked — we clear main lines, sinks, tubs, and showers fast.", href: "/drain-cleaning" },
      { title: "Plumbing Repairs", description: "We fix what actually needs fixing. No unnecessary replacements, no upsells.", href: "/plumbing-repairs" },
      { title: "Gas Line Services", description: "Installations, repairs, and leak inspections. Licensed, insured, and done right.", href: "/gas-line-services" },
    ],
    ctaHeading: "Need Emergency Plumbing in South Florida? Call Now.",
    ctaSubtext: "We answer 24/7. Upfront pricing, no hidden fees, and a plumber who shows up fast when you need one most.",
  },
];
