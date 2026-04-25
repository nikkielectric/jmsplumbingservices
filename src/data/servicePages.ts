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
      "If you suspect a gas leak right now — leave the building immediately, don't use any switches or electronics, leave the door open as you exit, and call 911 and your gas company from outside. Once the immediate situation is handled, call JMS to assess and repair the line before you re-enter.",
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
      { question: "What should I do if I smell gas in my home right now?", answer: "Leave immediately — don't stop to grab belongings, don't flip any light switches, don't use your phone until you're outside. Leave the door open on your way out to help ventilate. Once you're safely outside and away from the building, call 911 and your gas utility provider. Do not re-enter until the gas company has cleared the building. After that, call JMS at (954) 910-6883 to assess and repair the line before the gas is turned back on." },
      { question: "How do I know if I have a gas leak if I can't smell anything?", answer: "Not all gas leaks produce a detectable odor — particularly slow leaks or leaks in less-ventilated areas. Signs that don't involve smell include a persistent hissing sound near gas appliances or the meter, dead patches of grass or vegetation directly above where a gas line runs underground, gas appliances with weak or inconsistent flames, or an unexplained spike in your gas bill. If you notice any of these signs in your Broward County or South Florida home, call us for a gas line inspection before the problem escalates." },
      { question: "Can I install a gas line for a new appliance myself in Florida?", answer: "No. Florida law requires all gas line work — including extensions and new connections — to be performed by a licensed contractor. Beyond the legal requirement, improperly installed gas lines that haven't been pressure tested are genuinely dangerous. They're also a serious insurance liability. If a claim arises from damage caused by unpermitted gas work, your homeowner's insurance is unlikely to cover it. JMS handles new gas line installations throughout the Tri-County area, fully permitted and code-compliant." },
      { question: "How often should gas lines be inspected in South Florida homes?", answer: "Most plumbing and gas industry guidelines recommend a professional gas line inspection every few years — but South Florida homeowners should consider more frequent checks. Coastal salt air accelerates corrosion on fittings and connectors faster than in inland areas. Older homes throughout Broward, Miami-Dade, and Palm Beach Counties with aging gas infrastructure that hasn't been inspected recently are particularly worth having assessed. If you've never had your gas lines inspected or recently purchased an older home, scheduling an inspection now is the safest move." },
      { question: "Do you handle gas line installation for outdoor kitchens and generators in South Florida?", answer: "Yes. Outdoor kitchens, whole-home generators, pool heaters, and gas fire features are increasingly common in South Florida homes — and each requires a properly installed, pressure-tested gas line extension. These are among the most common gas line jobs we handle in the Tri-County area. We'll assess your existing line capacity, determine the correct pipe sizing for your new appliance, install and test the extension, and ensure everything meets Florida code before we leave." },
      { question: "What does a gas line repair cost in Broward County?", answer: "Gas line repair costs vary significantly depending on where the leak or damage is located, how accessible the line is, and whether any section of pipe needs to be replaced versus repaired. A fitting replacement at an accessible connection point is a very different job than repairing a buried line. At JMS, we assess the situation fully and give you an upfront price before any work begins — no inflated emergency pricing, no surprise charges. Call us at (954) 910-6883 for a straight answer." },
    ],
    relatedServices: [
      { title: "Garbage Disposal", description: "Jammed, leaking, or dead? We inspect, repair, and install — usually same day.", href: "/garbage-disposal" },
      { title: "Plumbing Repairs", description: "From corroded fittings to failed valves, we repair what actually needs repairing — no unnecessary replacements, no upsell.", href: "/plumbing-repairs" },
      { title: "Emergency Plumbing", description: "Gas line emergencies don't follow business hours. We answer nights, weekends, and holidays — after-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Smell Gas? Suspect a Leak? Call Us Now.",
    ctaSubtext: "Gas line problems are not a wait-until-Monday situation. JMS is available for gas line inspections, repairs, and installations throughout Broward, Miami-Dade, and Palm Beach Counties. Call now for a straight answer and upfront pricing — we'll tell you exactly what's going on before we touch anything.",
  },
  {
    slug: "plumbing-repairs",
    serviceName: "Plumbing Repairs",
    serviceCategory: "PLUMBING REPAIRS",
    pageTitle: "Plumbing Repairs & Replacements | JMS Plumbing in Sunrise, FL",
    metaDescription: "Expert plumbing repairs in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing fixes leaks, pipes, fixtures & more with upfront pricing. Call (954) 910-6883.",
    heroH1: "Something's Broken. Let's Fix It Right the First Time.",
    heroSubtext: "From dripping faucets to failed water heaters, JMS handles plumbing repairs throughout South Florida's Tri-County area. We diagnose the real problem, give you an upfront price, and fix what actually needs fixing. Nothing more.",
    defaultServiceValue: "repairs",
    introHeading: "Plumbing Repairs in South Florida Done Honestly",
    paragraph1: "South Florida homeowners have heard it before. A plumber comes out, looks at a dripping faucet or a running toilet, and suddenly the whole system needs replacing. At JMS, that's not how we operate. We fix what's broken. If something else genuinely needs attention, we'll tell you why in plain language and let you decide.",
    paragraph2: "South Florida's climate is hard on plumbing. Hard water accelerates mineral buildup inside faucets and valves. Salt air corrodes exposed fixtures faster than anywhere else in the country. Older homes throughout Broward, Miami-Dade, and Palm Beach Counties deal with aging pipe connections, outdated fixtures, and water heaters pushed well past their lifespan by the region's aggressive water chemistry. These aren't just wear and tear issues. They're South Florida specific problems that require someone who knows what they're looking at.",
    paragraph3: "When you call JMS for a plumbing repair, you get a straight assessment, an upfront price, and a plumber who treats your home with respect from arrival to cleanup.",
    signsHeading: "Common Plumbing Repairs We Handle",
    signs: [
      { text: "Leaking or dripping faucets and fixtures" },
      { text: "Running toilets or toilets that won't flush properly" },
      { text: "Water heater failures, leaks, and replacements" },
      { text: "Burst or leaking pipes" },
      { text: "Faulty shut off valves and supply lines" },
      { text: "Low water pressure throughout the home" },
    ],
    diyHeading: "Why a Small Repair Is Worth Doing Now",
    diyParagraphs: [
      "A dripping faucet wastes thousands of gallons of water per year. A slow leak under a sink can go unnoticed for months, quietly causing water damage and mold growth in South Florida's humidity. What seems like a minor annoyance today has a way of becoming an expensive emergency later.",
      "Getting a repair handled quickly and correctly the first time is almost always less disruptive and less expensive than waiting. JMS offers same day service throughout the Tri-County area so small problems get solved before they become big ones.",
    ],
    expectHeading: "What Happens When You Call JMS for a Plumbing Repair",
    steps: [
      { title: "You Call and We Listen", description: "Tell us what's happening. We ask the right questions so we show up ready to solve the problem, not just look at it." },
      { title: "We Diagnose and Price Before We Start", description: "We find the actual cause, not just the symptom. You get a clear price before we do anything. No pressure, no surprises." },
      { title: "Repaired, Cleaned Up, Done", description: "We fix the problem correctly, clean up completely, and make sure everything is working before we leave." },
    ],
    testimonials: [
      { name: "David", city: "Tamarac, FL", text: "Had a leak behind our bathroom wall. JMS diagnosed it quickly, gave us a fair price, and fixed it the same day. No drama, no upselling. Just great work.", rating: 5 },
      { name: "Stephanie", city: "Coral Springs, FL", text: "James and his team replaced some old corroded pipes under our house. Very clean work, explained everything clearly, and left the area spotless.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Plumbing Repairs",
    faqs: [
      { question: "How do I know if I need a repair or a full replacement?", answer: "The honest answer depends on the age, condition, and extent of the damage. A leaking faucet with a worn washer needs a repair. A water heater that's 15 years old and leaking at the tank likely needs replacement. At JMS, we assess the situation and give you an honest recommendation either way. We're not in the business of replacing things that can be fixed." },
      { question: "My water pressure has dropped suddenly throughout the house. What does that mean?", answer: "Sudden pressure drops across the whole house usually point to a supply line issue, a failing pressure regulator, or a leak somewhere in the system. In South Florida, mineral buildup from hard water can also gradually restrict flow through older pipes and fixtures. This is worth getting looked at quickly since pressure drops can signal an active leak that may be causing unseen water damage." },
      { question: "How much does a plumbing repair cost in Broward County?", answer: "It depends entirely on what needs fixing. A simple faucet repair costs considerably less than a water heater replacement or a burst pipe. At JMS, we give you a clear upfront price after assessing the situation so you know exactly what you're paying before any work begins. Call us at (954) 910-6883 and we'll give you a straight answer." },
      { question: "Can a running toilet really waste that much water?", answer: "Yes. A constantly running toilet can waste up to 200 gallons of water per day, which adds up quickly on your water bill. In most cases it's a worn flapper or a faulty fill valve, both of which are straightforward repairs. If your toilet has been running and you've been ignoring it, it's worth a call." },
      { question: "Do you offer same day plumbing repairs in Sunrise and Fort Lauderdale?", answer: "Yes. We offer same day service throughout Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, Lauderhill, and Weston. Call us at (954) 910-6883 and we'll do everything we can to get to you the same day." },
      { question: "What plumbing repairs are most common in older South Florida homes?", answer: "Homes built before 1985 throughout Broward, Miami-Dade, and Palm Beach Counties commonly need water heater replacements due to hard water shortening appliance lifespan, faucet and valve repairs from mineral buildup, and pipe joint repairs where older connections have corroded or loosened over time. If you've recently purchased an older home in the Tri-County area, a plumbing assessment is a smart first step before small issues become costly ones." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Slow drains and recurring backups often point to something deeper than a surface clog. We find the cause and clear it properly.", href: "/drain-cleaning" },
      { title: "Emergency Plumbing", description: "Some repairs can't wait until Monday. We answer nights, weekends, and holidays with after-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
      { title: "Plumbing Remodels", description: "Upgrading your bathroom or kitchen? We handle all the plumbing from blueprint to final install.", href: "/plumbing-remodels" },
    ],
    ctaHeading: "Need a Plumbing Repair in South Florida? Call Us Today.",
    ctaSubtext: "Upfront pricing, no unnecessary replacements, and a plumber who cleans up when the job is done. Call now or request a free quote online.",
  },
  {
    slug: "plumbing-remodels",
    serviceName: "Plumbing Remodels",
    serviceCategory: "PLUMBING REMODELS",
    pageTitle: "Plumbing Remodel Services | JMS Plumbing in Broward, Miami-Dade & Palm Beach Counties",
    metaDescription: "Full bathroom & kitchen plumbing remodels in Broward, Miami-Dade & Palm Beach Counties. Shower pans, valves, towers & fixture installs. Call (954) 910-6883.",
    heroH1: "Remodeling Your Bathroom or Kitchen? The Plumbing Behind the Walls Matters Most.",
    heroSubtext: "A beautiful remodel built on bad plumbing is a future emergency waiting to happen. JMS handles the full plumbing scope of your renovation — shower pans, shower valves, shower towers, fixture installations, pipe relocation, and everything in between — from blueprint through final installation.",
    defaultServiceValue: "remodel",
    introHeading: "Plumbing Remodel Services Across South Florida's Tri-County Area",
    paragraph1: "Most homeowners focus on what they can see during a remodel — the tile, the fixtures, the finishes. But what's inside the walls and under the floor determines how long that remodel actually holds up. Improperly set shower pans, incorrectly installed shower valves, and undersized supply lines are the kinds of mistakes that don't show up on inspection day. They show up two years later as a leak behind the wall, water damage under the floor, or a shower valve that fails mid-renovation and requires the tile to come back off.",
    paragraph2: "South Florida adds another layer of complexity. Homes throughout Broward, Miami-Dade, and Palm Beach Counties were built on slab foundations with no basement access. Any plumbing that runs under the slab requires careful planning before a remodel begins. Older homes in the Tri-County area also commonly have cast iron drain pipes and galvanized supply lines that should be evaluated and often replaced during a renovation rather than tiled over and forgotten for another decade.",
    paragraph3: "JMS works with homeowners and contractors from the planning stage through final installation. We read blueprints, flag problems before they become expensive, and handle both the rough in and finish plumbing on your timeline. When we're done everything is installed to code, tested, and ready for your contractor to close the walls.",
    signsHeading: "Plumbing Remodel Services We Handle",
    signs: [
      { text: "Shower pan installations and replacements — set correctly to prevent leaks under tile" },
      { text: "Shower valve installations including pressure balancing and thermostatic valves" },
      { text: "Shower tower and multi function shower system installations" },
      { text: "Full bathroom plumbing remodels including tubs, vanities, and toilets" },
      { text: "Kitchen plumbing reconfigurations and fixture upgrades" },
      { text: "Rough in plumbing for new bathrooms and home additions" },
      { text: "Pipe relocation and supply line upgrades during renovations" },
    ],
    diyHeading: "Shower Pans, Valves, and Towers — Why Installation Matters",
    diyParagraphs: [
      "A shower pan that isn't properly set and sloped is one of the most common causes of water damage behind bathroom walls in South Florida. Water finds its way under improperly installed pans and sits against the slab in a humid climate where mold develops fast. By the time a homeowner notices a problem the damage is often already significant. Proper shower pan installation is one of those things that takes more care and expertise than it looks like from the outside — and one of the things we take seriously on every bathroom remodel we do.",
      "Shower valves and shower towers are another area where cutting corners creates problems. A shower valve that isn't properly pressure balanced can create scalding hazards. A shower tower with multiple body sprays and a rain head requires supply lines sized correctly for the flow demand — undersized lines mean poor pressure across every function. We assess your existing supply line capacity before recommending or installing any multi function shower system so what you end up with actually performs the way it's supposed to.",
    ],
    expectHeading: "What Happens When You Call JMS for a Plumbing Remodel",
    steps: [
      { title: "We Review Your Plans First", description: "Before any work begins we look at what you're planning and identify anything that needs to be addressed in the design phase. No surprises once the walls are open." },
      { title: "Rough In Completed On Your Timeline", description: "We coordinate with your contractor to complete the rough in plumbing on schedule so the project keeps moving without delays." },
      { title: "Finish Plumbing Installed, Tested, Done Right", description: "Fixtures installed, shower pans set, valves tested, everything verified. Work area cleaned up and ready for your contractor to close the walls." },
    ],
    testimonials: [
      { name: "Maria", city: "Sunrise, FL", text: "We hired JMS for a full bathroom remodel and couldn't be happier. They walked us through the whole process, stayed on schedule, and the finished result exceeded our expectations.", rating: 5 },
      { name: "James", city: "Lauderhill, FL", text: "Great experience with our kitchen remodel plumbing. They coordinated with our contractor perfectly and the work was top-notch. Fair pricing too.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Plumbing Remodels",
    faqs: [
      { question: "What is a shower pan and why does installation matter so much?", answer: "A shower pan is the waterproof base layer that sits beneath your shower tile and directs water toward the drain. If it isn't properly set, sloped, and sealed, water migrates under the tile and sits against the slab or subfloor. In South Florida's humidity mold can begin developing within 24 to 48 hours of water intrusion. A shower pan installed incorrectly during a remodel can cause serious hidden water damage that doesn't become visible until it's already expensive to fix." },
      { question: "Can you install a shower tower or multi function shower system in my existing bathroom?", answer: "Yes, but the existing supply lines need to be assessed first. Shower towers with rain heads, body sprays, and handheld wands require significantly more water flow than a standard single showerhead. If your existing supply lines are undersized the system won't perform properly regardless of how well it's installed. We assess your current supply line capacity before recommending any multi function system and will tell you honestly what upgrades if any are needed to support it." },
      { question: "Do I need a permit for plumbing work during a bathroom remodel in Florida?", answer: "In most cases yes. Florida requires permits for plumbing work that involves moving, adding, or replacing supply or drain lines. Unpermitted plumbing work can create problems when you sell the home and may not be covered by homeowner's insurance. JMS handles all required permitting as part of the job." },
      { question: "Our home was built in the 1960s. Should we replace the pipes during the remodel?", answer: "In most cases we recommend having them evaluated before the walls close. Homes built in the 1960s throughout Broward, Miami-Dade, and Palm Beach Counties commonly have cast iron drain pipes and galvanized steel supply lines that are at or past their expected lifespan in South Florida's climate. Once the walls are open during a remodel is the most cost effective time to address aging pipes because the access is already there." },
      { question: "Can you work directly with my contractor or designer?", answer: "Absolutely. We coordinate with general contractors, designers, and tile installers regularly. We work within your project timeline and make sure our portion of the work is completed and inspected before the walls close." },
      { question: "Do you handle kitchen plumbing remodels in South Florida as well?", answer: "Yes. Kitchen remodels commonly involve relocating the sink, adding a dishwasher connection, upgrading supply lines, or reconfiguring drain lines when the layout changes. If you're planning a kitchen renovation anywhere in Broward, Miami-Dade, or Palm Beach County, get us involved in the planning stage before the cabinets are ordered." },
    ],
    relatedServices: [
      { title: "Fixture Repairs", description: "Upgrading individual fixtures without a full remodel? We handle toilet, faucet, hose bib, and shut off valve repairs and replacements throughout South Florida.", href: "/toilet-faucet-pipe-repairs" },
      { title: "Plumbing Repairs", description: "Noticed something during the renovation that needs fixing? Honest assessments and upfront pricing on repairs of all sizes.", href: "/plumbing-repairs" },
      { title: "Drain Cleaning", description: "New fixtures deserve clean lines. We clear and inspect drain lines as part of any remodel to make sure everything flows properly from day one.", href: "/drain-cleaning" },
    ],
    ctaHeading: "Planning a Remodel in South Florida? Let's Talk Before the Demo Starts.",
    ctaSubtext: "The best time to involve your plumber is before anything is torn out. Call JMS for a straight conversation about your project and an upfront quote with no obligation.",
  },
  {
    slug: "garbage-disposal",
    serviceName: "Garbage Disposal",
    serviceCategory: "GARBAGE DISPOSAL SERVICES",
    pageTitle: "Garbage Disposal Repair & Installation | JMS Plumbing in Sunrise, FL",
    metaDescription: "Garbage disposal repair & installation in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing — same-day service, upfront pricing. Call (954) 910-6883.",
    heroH1: "Garbage Disposal Not Working? We'll Fix It Today.",
    heroSubtext: "Jammed, leaking, or completely dead — garbage disposal problems shut down your kitchen fast. JMS handles inspections, repairs, and full replacements throughout South Florida's Tri-County area. Usually same day.",
    defaultServiceValue: "garbage-disposal",
    introHeading: "Garbage Disposal Repair and Installation in South Florida",
    paragraph1: "A garbage disposal that stops working is one of those problems that seems minor until you're standing at a sink full of backed up water with nowhere for it to go. Most disposal problems — jams, leaks, strange noises, and units that hum but won't spin — are repairable without a full replacement. At JMS we assess the unit first and tell you honestly whether a repair makes sense or whether a replacement is the better investment.",
    paragraph2: "South Florida's hard water is particularly hard on garbage disposals. The high mineral content in Broward, Miami-Dade, and Palm Beach County water accelerates corrosion inside the unit and on the connections underneath. A disposal that's only a few years old can show significant wear if it hasn't been maintained. We see it regularly throughout the Tri-County area and know exactly what to look for.",
    paragraph3: "Whether you need a quick repair or a full replacement, JMS shows up on time, gives you a clear price before starting, and leaves your kitchen clean and fully functional when the job is done.",
    signsHeading: "Signs Your Garbage Disposal Needs Attention",
    signs: [
      { text: "Disposal hums when turned on but the blades won't spin" },
      { text: "Unit is completely unresponsive even after pressing the reset button" },
      { text: "Water leaking from the bottom or sides of the unit" },
      { text: "Loud grinding, rattling, or metal on metal sounds during operation" },
      { text: "Persistent foul odor that doesn't go away with cleaning" },
      { text: "Frequent jamming that requires constant manual resets" },
    ],
    diyHeading: "Repair or Replace — Here's How We Think About It",
    diyParagraphs: [
      "Not every disposal problem requires a new unit. A jam caused by a foreign object, a tripped reset button, or a worn seal causing a minor leak are all repairs that cost far less than a replacement. If the fix is simple and the unit has reasonable life left in it, we'll tell you that and repair it.",
      "On the other hand, a disposal that's more than eight to ten years old in a South Florida home, one that's leaking from the motor housing, or one that's been repaired multiple times is usually more cost effective to replace than continue fixing. When replacement makes more sense we'll explain why, show you the options, and install the new unit the same day.",
    ],
    expectHeading: "What Happens When You Call JMS for Garbage Disposal Service",
    steps: [
      { title: "You Call and Describe What's Happening", description: "We ask a few quick questions to understand the problem and come prepared with the right parts and equipment for your situation." },
      { title: "We Assess and Give You an Upfront Price", description: "We inspect the unit and the connections underneath, tell you what's wrong, and give you a clear price for the repair or replacement before we start." },
      { title: "Fixed, Tested, and Kitchen Back to Normal", description: "We complete the repair or installation, test everything thoroughly, and clean up completely before we leave." },
    ],
    testimonials: [
      { name: "Stephanie", city: "Sunrise, FL", text: "James replaced our old garbage disposal and installed a new one the same day. Very clean work, explained everything clearly, and left the area spotless.", rating: 5 },
      { name: "Tony", city: "Plantation, FL", text: "Quick, professional, and affordable. My disposal was leaking and they had a new one installed in under an hour. Highly recommend JMS.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Garbage Disposals",
    faqs: [
      { question: "My disposal just hums but won't spin. Is it broken?", answer: "Not necessarily. A humming disposal that won't spin is almost always a jam — something is lodged between the impeller blades and the grinding ring. Most jams can be cleared without replacing the unit. Before you call, try pressing the reset button on the bottom of the unit and wait five minutes. If it still hums without spinning after that, call us and we'll take care of it. Do not keep running a jammed disposal as it will burn out the motor." },
      { question: "Water is leaking from under my garbage disposal. What's causing it?", answer: "Leaks from underneath the unit can come from a few different places. A leak from the bottom of the housing usually means the internal seals have failed, which typically means the unit needs replacement. A leak from the side connections or the drain flange on top is usually a seal or mounting issue that can be repaired. We'll identify the source and tell you honestly what the right fix is." },
      { question: "How long do garbage disposals last in South Florida?", answer: "In most parts of the country a quality garbage disposal lasts ten to fifteen years. In South Florida, hard water and humidity tend to shorten that lifespan to eight to twelve years. If your disposal is approaching that range and starting to have problems, replacement is usually the smarter investment over repeated repairs." },
      { question: "Can I install a garbage disposal myself?", answer: "The installation itself is manageable for a handy homeowner, but the drain and electrical connections underneath are where most DIY installations go wrong. An improperly connected drain line can cause leaks inside the cabinet that go unnoticed for months, leading to water damage and mold in South Florida's humidity. If you're not completely comfortable with both the plumbing and the electrical side of the installation, it's worth having it done correctly the first time." },
      { question: "Do you offer same day garbage disposal service in Broward County?", answer: "Yes. Garbage disposal repairs and replacements are among the fastest jobs we handle. We offer same day service throughout Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, Lauderhill, and Weston. Call us at (954) 910-6883 and we'll get someone out to you the same day in most cases." },
      { question: "What size or brand of garbage disposal should I replace mine with?", answer: "The right disposal depends on your household size and how heavily you use it. We carry and install quality units across a range of sizes and price points. When we assess your current unit we'll recommend what makes sense for your kitchen and your budget without steering you toward something more expensive than you need." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "A failing disposal often goes hand in hand with slow kitchen drains. We clear and inspect drain lines to make sure everything flows properly.", href: "/drain-cleaning" },
      { title: "Plumbing Repairs", description: "From leaking supply lines to faulty shut off valves, we handle repairs throughout your kitchen and home with upfront pricing.", href: "/plumbing-repairs" },
      { title: "Plumbing Remodels", description: "Upgrading your kitchen? We handle all the plumbing from fixture installation to drain and supply line reconfigurations.", href: "/plumbing-remodels" },
    ],
    ctaHeading: "Disposal Down in South Florida? We Can Usually Get There Today.",
    ctaSubtext: "Call JMS for a straight assessment and upfront price. We'll tell you whether a repair or replacement makes more sense and get your kitchen back to normal fast.",
  },
  {
    slug: "emergency-plumbing",
    serviceName: "Emergency Plumbing",
    serviceCategory: "EMERGENCY PLUMBING",
    pageTitle: "24/7 Emergency Plumbing | JMS Plumbing in Sunrise, FL",
    metaDescription: "24/7 emergency plumbing in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing responds fast with upfront pricing. Call (954) 910-6883 now.",
    heroH1: "Plumbing Emergency in South Florida? We Pick Up the Phone.",
    heroSubtext: "Burst pipe. Active flood. Severe blockage. No water on a holiday weekend. When it's happening right now you need someone who actually answers. JMS is available nights, weekends, and holidays throughout the Tri-County area. After hours fees are always disclosed upfront before any work begins.",
    defaultServiceValue: "emergency",
    introHeading: "24/7 Emergency Plumbing Service Across South Florida",
    paragraph1: "Here's what most homeowners find out the hard way: the majority of plumbers who advertise 24/7 emergency service don't actually answer after hours. You call, you get voicemail, you leave a message, and you spend the next several hours watching water damage spread while you wait for a callback that may not come until morning. We've heard this story from customers across Broward, Miami-Dade, and Palm Beach Counties more times than we can count.",
    paragraph2: "At JMS when you call we answer. A real person picks up and we get someone moving toward your home as quickly as possible. We don't leave you sitting with an active leak, a burst pipe, or no running water while you wait for a callback queue to work through. In South Florida's climate waiting is not a neutral option. Mold begins developing within 24 to 48 hours of a water intrusion event. What starts as an emergency call can become a mold remediation job if it isn't addressed quickly.",
    paragraph3: "We are transparent about after hours fees because you deserve to know what you're paying before anyone shows up at your door. Emergency service outside standard business hours carries an additional fee. We tell you what that is on the phone before we dispatch. No surprises on the invoice when you're already dealing with a stressful situation.",
    signsHeading: "Situations That Qualify as a Plumbing Emergency",
    signs: [
      { text: "Burst or actively leaking pipes causing flooding" },
      { text: "Complete loss of water to the home" },
      { text: "Sewage backup coming up through drains or toilets" },
      { text: "Gas line leak or suspected gas odor" },
      { text: "Water heater failure with active leaking" },
      { text: "Severe drain blockages that cannot be cleared" },
      { text: "Toilet overflow that cannot be stopped" },
    ],
    diyHeading: "Hydro Flush — When a Standard Snake Won't Cut It",
    diyParagraphs: [
      "Some blockages are too severe, too deep, or too embedded in the pipe walls for a standard drain snake to fully resolve. Hydro flushing uses high pressure water to blast through blockages completely and scour the interior walls of the pipe clean — removing grease buildup, mineral scale, biomat, and debris that a mechanical snake can only partially clear. The result isn't just a cleared path through the blockage. It's a pipe that flows the way it's supposed to.",
      "In South Florida, hydro flushing is particularly effective on the hard water mineral scale and grease buildup that accumulates inside older pipes throughout Broward, Miami-Dade, and Palm Beach Counties. Cast iron drain pipes common in pre-1975 homes develop rough corroded interior surfaces that catch and hold debris far faster than modern PVC. A hydro flush clears that buildup completely and restores flow to the full diameter of the pipe rather than just punching a temporary hole through a partial clog.",
      "Hydro flushing is also one of the most effective tools for clearing root intrusion in sewer lines — a common problem throughout South Florida where aggressive tropical root growth finds its way into aging pipe joints. While it won't repair a pipe that roots have physically damaged, a hydro flush can fully clear an active root blockage and restore flow while a longer term repair plan is put in place. When hydro flushing makes sense: recurring drain blockages that keep coming back after standard cleaning, severely backed up main sewer lines, heavy grease buildup in kitchen drain lines, mineral scale accumulation inside older pipes, root intrusion causing partial or complete sewer line blockage, or pre-inspection cleaning before a camera inspection of drain lines.",
      "Hydro flushing is powerful and effective — but it is not the right tool for every pipe. Pipes that are already severely corroded, cracked, or structurally compromised may not be suitable candidates for high pressure water jetting. At JMS we assess the condition of your pipes before recommending hydro flushing so you get the right solution for your specific situation, not just the most aggressive one available.",
      "What To Do While You Wait for Us — If you have an active leak or burst pipe, locate your main water shut off valve and turn it off immediately. In most South Florida slab homes the shut off is near the water meter at the front of the property. Turning off the main stops the water flow and limits the damage while we're on our way. If you smell gas do not touch any switches or electronics. Leave the building immediately, leave the door open behind you, and call 911 and your gas company from outside before calling us. For sewage backups stop using all water in the home immediately — running water anywhere in the house while a main line is backed up will push more sewage up through the lowest drains.",
    ],
    expectHeading: "What Happens When You Call JMS for an Emergency",
    steps: [
      { title: "You Call and We Answer", description: "A real person picks up every time. We ask what's happening, tell you the after hours fee upfront, and dispatch immediately." },
      { title: "We Arrive and Assess Fast", description: "We get to your home as quickly as possible, assess the situation immediately, and tell you exactly what needs to happen to stop the damage." },
      { title: "Problem Stopped, Home Stabilized", description: "We resolve the emergency, make sure your home is stable, and walk you through what comes next if any follow up work is needed." },
    ],
    testimonials: [
      { name: "Carlos", city: "Fort Lauderdale, FL", text: "Called them for an emergency leak at 10pm and they were at my door within the hour. Fixed the issue quickly and didn't overcharge. This is what real customer service looks like.", rating: 5 },
      { name: "Patricia", city: "Sunrise, FL", text: "Sewer backup on a Sunday morning. JMS answered immediately and had someone out within 45 minutes. Saved us from what could have been a disaster. Can't recommend enough.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Emergency Plumbing",
    faqs: [
      { question: "Do you actually answer after hours or does it go to voicemail?", answer: "We actually answer. When you call (954) 910-6883 outside of standard business hours a real person picks up. We know how frustrating it is to call five plumbers at midnight and reach voicemail every time. That's exactly why we made answering the phone a non-negotiable part of how we operate." },
      { question: "How much does emergency plumbing cost in Broward County?", answer: "Emergency service outside standard business hours carries an additional fee on top of the cost of the repair. We tell you what the after hours fee is on the phone before we dispatch anyone. The cost of the repair itself depends on what we find when we arrive. You will always know the full price before any work begins. No one will show up at your door and surprise you with a number after the fact." },
      { question: "What is hydro flushing and when do I need it?", answer: "Hydro flushing uses high pressure water to completely clear blockages and scour the interior walls of drain and sewer pipes clean. It goes significantly further than a standard drain snake which only punches through the blockage rather than removing the buildup coating the pipe walls. In South Florida hydro flushing is particularly effective on hard water mineral scale, heavy grease buildup, and root intrusion in older cast iron sewer lines. If your drain keeps backing up repeatedly after standard cleaning, hydro flushing is likely the right next step." },
      { question: "How quickly can you get to me in an emergency?", answer: "Response times depend on time of day, location, and how many calls we are handling. We will always give you an honest estimated arrival time on the phone rather than a vague window. Our goal is to get to every emergency call as fast as possible. If you are in Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, Lauderhill, or Weston call us now and we will tell you exactly when to expect us." },
      { question: "My toilet is overflowing and won't stop. What do I do right now?", answer: "Reach behind the toilet and turn the supply valve clockwise until it stops. This cuts off water flow to the toilet and stops the overflow. If the valve is stuck or broken go to the main shut off and turn off water to the whole house. Then call us at (954) 910-6883 and we will get someone out to you." },
      { question: "Is a slow leak a plumbing emergency?", answer: "In South Florida it can be. A slow leak that has been going for even a few days can cause significant water damage and mold growth in our climate. Mold begins developing within 24 to 48 hours of a water intrusion event. If you have an active leak that you cannot stop, even a slow one, it is worth an emergency call rather than waiting until morning. The cost of the after hours fee is far less than the cost of mold remediation." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Not every drain backup is a full emergency. For standard blockages we offer same day drain cleaning throughout the Tri-County area with upfront pricing.", href: "/drain-cleaning" },
      { title: "Plumbing Repairs", description: "Once the emergency is handled we take care of any follow up repairs needed to get your home fully back to normal.", href: "/plumbing-repairs" },
      { title: "Septic Services", description: "Sewage backups are sometimes a septic system issue rather than a drain line problem. We are licensed for full septic services throughout South Florida.", href: "/septic-leach-fields" },
    ],
    ctaHeading: "Dealing With a Plumbing Emergency Right Now?",
    ctaSubtext: "Don't wait. Call JMS and a real person will pick up. We serve Broward, Miami-Dade, and Palm Beach Counties around the clock. After hours fees are always disclosed before we dispatch.",
  },
  {
    slug: "water-heaters",
    serviceName: "Water Heaters",
    serviceCategory: "WATER HEATER SERVICES",
    pageTitle: "Water Heater Services | JMS Plumbing in Broward, Miami-Dade & Palm Beach Counties",
    metaDescription: "Water heater repair, replacement & installation in Broward, Miami-Dade & Palm Beach Counties. Tankless, gas, electric & hybrid. JMS Plumbing — upfront pricing. Call (954) 910-6883.",
    heroH1: "No Hot Water in South Florida? We Diagnose, Repair, and Install — All Four Types.",
    heroSubtext: "Tankless, gas, electric, or hybrid — JMS services every type of water heater throughout the Tri-County area. Whether you need a repair, a replacement, or a new installation, we give you an honest assessment and upfront pricing before any work begins.",
    defaultServiceValue: "water-heater",
    introHeading: "Water Heater Repair and Installation in South Florida",
    paragraph1: "South Florida is one of the hardest places in the country on water heaters. The region's hard water — loaded with calcium and mineral deposits — accelerates sediment buildup inside tank units and shortens the lifespan of heating elements significantly faster than in lower mineral content areas. A water heater that might last twelve to fifteen years in another state often shows serious wear in eight to ten years in a Broward, Miami-Dade, or Palm Beach County home. If your water heater is struggling, running out of hot water faster than it used to, making rumbling or popping sounds, or showing signs of leaking, South Florida's water chemistry is likely a contributing factor.",
    paragraph2: "Water heater failures also have a time pressure to them that other plumbing problems don't. In South Florida's humidity, a leaking water heater can cause significant water damage and mold growth within 24 to 48 hours. A unit that's showing warning signs is worth addressing before it fails completely — not because we want to rush you into a decision, but because the cost of waiting is almost always higher than the cost of acting.",
    paragraph3: "At JMS we assess your current unit honestly. If a repair will genuinely extend its useful life we'll tell you that. If the unit is at a point where repair doesn't make economic sense we'll explain exactly why and walk you through your replacement options without pressure. We service and install all four types of water heaters — tankless, gas, electric, and hybrid — so our recommendation is based on what's right for your home, not on what we happen to have in the truck.",
    signsHeading: "Signs Your Water Heater Needs Attention",
    signs: [
      { text: "No hot water or water that runs cold faster than it used to" },
      { text: "Rumbling, popping, or banging sounds coming from the tank" },
      { text: "Visible rust or discoloration in your hot water" },
      { text: "Water pooling around the base of the unit" },
      { text: "The unit is more than eight years old and showing any of the above signs" },
      { text: "Significantly higher energy bills without a change in usage" },
    ],
    diyHeading: "The Four Types of Water Heaters — What You Should Know",
    diyParagraphs: [
      "Tank Gas Water Heaters — The most common type in South Florida homes. Heats and stores water using a gas burner. Reliable and cost effective to operate, but hard water sediment buildup is a real issue in the Tri-County area. Regular flushing extends the life of gas tank units significantly. When they fail in South Florida they often do so suddenly, which is why knowing the age and condition of yours matters.",
      "Tank Electric Water Heaters — Electric tank units are common in South Florida condos and homes without gas service. They operate on the same storage principle as gas units but use electric heating elements that are particularly vulnerable to mineral buildup from hard water. Element replacement is a common and straightforward repair that can restore full performance to an otherwise sound unit.",
      "Tankless Water Heaters — Tankless units heat water on demand rather than storing it, which eliminates standby heat loss and significantly reduces energy costs over time. They have a longer lifespan than tank units but require descaling maintenance in South Florida due to hard water mineral buildup in the heat exchanger. A tankless unit that hasn't been maintained in a hard water area will lose efficiency and eventually fail prematurely. JMS installs and services both gas and electric tankless units throughout the Tri-County area.",
      "Hybrid Heat Pump Water Heaters — Hybrid units use heat pump technology to pull warmth from the surrounding air rather than generating heat directly, making them the most energy efficient option available. They work particularly well in South Florida's warm climate where ambient air temperatures support efficient heat pump operation year round. If energy savings is a priority and you have adequate space for the unit, hybrid is worth a serious look. We'll assess your home and tell you honestly whether it makes sense for your situation.",
    ],
    expectHeading: "What Happens When You Call JMS for Water Heater Service",
    steps: [
      { title: "You Call and Describe What's Happening", description: "No hot water, a leak, strange sounds — we ask the right questions and show up prepared to diagnose and address the problem the same day in most cases." },
      { title: "We Assess and Give You an Honest Recommendation", description: "We inspect the unit thoroughly and tell you whether repair or replacement makes more sense for your specific situation. Clear upfront price before any work begins." },
      { title: "Repaired or Installed, Tested, Done Right", description: "Whether it's a repair or a full installation, we complete the work correctly, test the unit thoroughly, and clean up completely before we leave." },
    ],
    testimonials: [
      { name: "Jennifer", city: "Coral Springs, FL", text: "Our water heater died on a Saturday morning. JMS came out the same day, gave us a fair price, and had a new one installed by the afternoon. Couldn't ask for better service.", rating: 5 },
      { name: "Miguel", city: "Plantation, FL", text: "They replaced our old tank water heater with a tankless unit. Explained all our options clearly without pushing us. Great crew and clean work.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Water Heaters",
    faqs: [
      { question: "How long should a water heater last in South Florida?", answer: "In most parts of the country a quality tank water heater lasts twelve to fifteen years. In South Florida hard water accelerates sediment buildup and mineral scale inside the tank and on the heating elements, which shortens that lifespan to eight to twelve years in many cases. Tankless units last longer — often twenty years or more — but require regular descaling maintenance to achieve that lifespan in a hard water environment. If your unit is approaching ten years old and starting to show symptoms, it's worth getting it assessed before it fails completely." },
      { question: "My water heater is making a rumbling or popping sound. What does that mean?", answer: "That sound is almost always sediment buildup on the bottom of the tank. In South Florida's hard water, calcium and mineral deposits accumulate on the tank floor and around the heating elements over time. When water heats up and bubbles through that sediment layer it creates the rumbling or popping sound you're hearing. In early stages a professional flush can remove the buildup and restore efficiency. In more advanced cases the sediment has hardened and the unit is nearing the end of its useful life. Call us and we'll tell you honestly which situation you're dealing with." },
      { question: "Should I repair my water heater or replace it?", answer: "It depends on the age of the unit, what's wrong with it, and the cost of the repair relative to the cost of replacement. A failed heating element on a four year old electric unit is worth repairing. A leaking tank on a ten year old unit in South Florida's hard water environment is almost always better replaced than repaired. At JMS we give you a straight recommendation based on your specific unit — not on what generates more revenue for us." },
      { question: "Is a tankless water heater worth it in South Florida?", answer: "For the right home yes. Tankless units are significantly more energy efficient than tank units, have a longer lifespan, and never run out of hot water. The considerations in South Florida are the hard water maintenance requirement — tankless heat exchangers need to be descaled regularly in high mineral content water — and the upfront installation cost which is higher than a tank replacement. Over the long term most homeowners recoup the difference in energy savings. We can walk you through the comparison for your specific home and usage pattern." },
      { question: "How quickly can you replace a water heater in Broward County?", answer: "In most cases same day or next day. Water heater replacement is one of the most common jobs we handle throughout Broward County and the surrounding Tri-County area. If you're without hot water call us at (954) 910-6883 and we'll do everything we can to get to you the same day." },
      { question: "What is a hybrid water heater and is it a good fit for South Florida homes?", answer: "A hybrid heat pump water heater uses the ambient air temperature to heat water rather than generating heat directly, making it the most energy efficient water heater available. South Florida's warm climate is actually ideal for hybrid units because the heat pump operates more efficiently in warm ambient air year round. The tradeoffs are a higher upfront cost and the need for adequate space around the unit for air circulation. For homeowners focused on long term energy savings in the Tri-County area, hybrid is one of the strongest options available. Call us and we'll assess whether your home is a good candidate." },
    ],
    relatedServices: [
      { title: "Gas Line Services", description: "Gas water heater installation and repair requires proper gas line assessment and connection. We handle the full scope including gas line work.", href: "/gas-line-services" },
      { title: "Plumbing Repairs", description: "Beyond the water heater, we handle the full range of plumbing repairs throughout your home with honest assessments and upfront pricing.", href: "/plumbing-repairs" },
      { title: "Emergency Plumbing", description: "Water heater failures don't follow business hours. We answer nights, weekends, and holidays with after hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Water Heater Issues in South Florida? Let's Figure Out What You Actually Need.",
    ctaSubtext: "Call JMS for an honest assessment and upfront pricing. We'll tell you whether repair or replacement makes more sense — and if you need a new unit we'll walk you through every option without pressure.",
  },
  {
    slug: "septic-leach-fields",
    serviceName: "Septic Services",
    serviceCategory: "SEPTIC SERVICES",
    pageTitle: "Septic Services | JMS Plumbing in Broward, Miami-Dade & Palm Beach Counties",
    metaDescription: "Licensed septic services in Broward, Miami-Dade & Palm Beach Counties. Leach field repairs, septic inspections, and pump outs. JMS Plumbing — call (954) 910-6883.",
    heroH1: "Septic Problems in South Florida Don't Wait. Neither Do We.",
    heroSubtext: "Licensed septic services throughout the Tri-County area — leach field repairs, septic inspections, and septic and storm drain pump outs handled correctly, to code, and with upfront pricing before any work begins.",
    defaultServiceValue: "septic",
    introHeading: "Septic Services Across South Florida's Tri-County Area",
    paragraph1: "South Florida's high water table, subtropical climate, and sandy soil create septic conditions unlike anywhere else in the country. Systems that perform well in other regions struggle here — and when a septic system starts to fail in Broward, Miami-Dade, or Palm Beach County, it fails fast. Soggy ground, sewage odors, slow drains throughout the house, and sewage backing up into your lowest fixtures are not problems to monitor. They are problems to address immediately by a licensed septic contractor who understands South Florida's specific conditions.",
    paragraph2: "JMS holds the proper licensing for septic work in Florida. We handle leach field repairs and restorations, full septic inspections, and septic and storm drain pump outs throughout the Tri-County area. Every job is assessed thoroughly, priced honestly upfront, and completed to Florida Department of Health standards. We tell you exactly what's happening with your system and what your options are before any decisions are made.",
    paragraph3: "Whether you're dealing with an active septic emergency, planning a home purchase that requires inspection, or scheduling routine pump out maintenance, JMS handles septic work across Broward, Miami-Dade, and Palm Beach Counties with the licensing, equipment, and South Florida experience the job requires.",
    signsHeading: "Signs Your Septic System Needs Attention",
    signs: [
      { text: "Soggy or unusually wet ground above the leach field area" },
      { text: "Sewage or rotten egg odor in your yard near the drain field" },
      { text: "Slow drains throughout the entire house at the same time" },
      { text: "Sewage backing up into the lowest fixtures in your home" },
      { text: "Unusually lush green grass growing directly over the leach field" },
      { text: "Gurgling sounds from drains when no water is running" },
    ],
    diyHeading: "Septic Leach Fields, Inspections, and Pump Outs",
    diyParagraphs: [
      "Septic Leach Field Repairs and Restoration — A septic leach field, also called a drain field, is the underground system that receives and filters wastewater after it leaves your septic tank. South Florida's high water table means leach fields have less vertical separation from groundwater than systems in drier climates, which limits the soil's ability to filter effluent and makes the system more vulnerable to saturation during heavy rainfall.",
      "The two most common causes of leach field failure in South Florida are biomat buildup and root intrusion. Biomat develops faster in the region's warm moist climate and can restrict the soil's ability to absorb effluent entirely if left unaddressed. Root intrusion from aggressive tropical plant growth compounds the problem — roots seek out the moisture and nutrients in leach field pipes and once inside grow quickly enough to cause complete field failure. Some problems can be addressed with targeted repairs; more advanced failure typically requires replacement. We assess the full system before recommending anything.",
      "Septic System Inspections — A septic inspection is one of the most important steps a homeowner can take before purchasing a property in South Florida. A system that looks functional on the surface can have a leach field in early stage failure, a tank approaching capacity, or root intrusion that hasn't yet caused a visible backup. Inspections are equally valuable for existing homeowners who haven't had their system assessed in several years. A JMS septic inspection includes a full visual inspection of the tank, lid, and access points; tank level and condition assessment; leach field evaluation for saturation, odor, and surface signs of failure; inlet and outlet baffle inspection; root intrusion assessment; and written findings with an honest recommendation on next steps.",
      "Septic and Storm Drain Pump Outs — Regular pump outs are the single most important maintenance step for extending the life of a septic system. Most South Florida households should have their septic tank pumped every three to five years depending on size and usage. A tank that goes too long without pumping allows solids to overflow into the leach field, which is one of the leading causes of premature leach field failure. Storm drain pump outs are equally important in South Florida where heavy seasonal rainfall can overwhelm drainage systems quickly. JMS handles both septic and storm drain pump outs throughout Broward, Miami-Dade, and Palm Beach Counties.",
    ],
    expectHeading: "What Happens When You Call JMS for Septic Services",
    steps: [
      { title: "You Call and Describe What You're Seeing", description: "Wet yard, slow drains, sewage odors, or a routine pump out — we ask the right questions and get you scheduled promptly." },
      { title: "Full Assessment, Honest Recommendation, Upfront Price", description: "We evaluate the full system, identify what's causing the problem, and give you a clear price before any work begins. No inflated estimates, no pressure." },
      { title: "Work Completed to Florida Code", description: "Every septic job is completed to Florida Department of Health standards by a licensed septic contractor. Properly done and fully documented." },
    ],
    testimonials: [
      { name: "Richard", city: "Davie, FL", text: "Our leach field was failing and we had no idea where to start. JMS walked us through the whole process, handled the permits, and the new system has been working perfectly.", rating: 5 },
      { name: "Karen", city: "Southwest Ranches, FL", text: "Professional from start to finish. They explained what was wrong with our drain field in plain language and gave us a fair price. No pressure, no surprises.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Septic Services",
    faqs: [
      { question: "How do I know if my problem is the septic tank or the leach field?", answer: "Both can produce similar symptoms — slow drains, backups, and odors. Generally a full or failing septic tank causes problems that improve temporarily after pumping. A failing leach field causes persistent problems that don't fully resolve even after the tank is pumped. The only reliable way to determine which part of your system is the issue is a proper assessment by a licensed septic contractor. Call us at (954) 910-6883 and we will figure out exactly what is going on." },
      { question: "How often should I have my septic tank pumped in South Florida?", answer: "Most households should pump every three to five years. South Florida homes with higher occupancy, heavy water usage, or systems that are older or smaller than the household demands may need more frequent pump outs. Going too long between pump outs allows solids to build up and overflow into the leach field — which is one of the most expensive septic repair scenarios there is. Regular pump outs are far cheaper than leach field repairs." },
      { question: "Do I need a septic inspection when buying a home in South Florida?", answer: "Yes — and we would strongly recommend not skipping it even if the seller says the system is in good condition. A visual inspection of the yard and a functional flush test does not tell you the condition of the tank, the baffles, or the leach field. A proper septic inspection by a licensed contractor gives you the full picture before you close on the property. Finding a failing system before closing gives you negotiating leverage. Finding it after closing gives you a repair bill." },
      { question: "Can a leach field be repaired or does it need full replacement?", answer: "It depends on the cause and extent of the failure. Early stage biomat buildup, minor root intrusion, or a single damaged distribution pipe can often be addressed with targeted repairs. More advanced failure or a field that has reached the end of its design life typically requires replacement. At JMS we assess the full system before recommending anything and we will always tell you honestly if a repair will genuinely solve the problem versus replace it prematurely." },
      { question: "Does Florida require a license for septic work?", answer: "Yes. Septic system work in Florida is regulated by the Florida Department of Health and requires a licensed septic contractor separate from a standard plumbing license. JMS holds the proper licensing for septic services throughout the Tri-County area. Florida Septic Contractor License: (insert license number before launch). Always verify licensing before hiring anyone for septic work — unpermitted septic repairs can result in significant fines and create serious complications when selling the property." },
      { question: "Can heavy rainfall affect my septic system in South Florida?", answer: "Yes and this is a South Florida specific concern. During the rainy season the water table rises significantly throughout Broward, Miami-Dade, and Palm Beach Counties. When the water table rises close to the leach field the soil loses its capacity to absorb effluent which can cause temporary system backup even in a well maintained system. If you experience septic problems specifically during or after heavy rainfall your system may need to be assessed for proper depth and drainage relative to your local water table conditions." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Slow drains throughout the house can be a septic symptom or a drain line issue. We identify the real cause and address it properly.", href: "/drain-cleaning" },
      { title: "Plumbing Repairs", description: "Once your septic system is addressed, we handle any related plumbing repairs inside the home with honest assessments and upfront pricing.", href: "/plumbing-repairs" },
      { title: "Emergency Plumbing", description: "Sewage backing up into your home is a plumbing emergency. We answer nights, weekends, and holidays with after hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Septic Issues in South Florida? Don't Wait on This One.",
    ctaSubtext: "Septic problems get significantly more expensive the longer they go unaddressed. Call JMS for a licensed assessment and honest recommendation. We will tell you exactly what is happening and what it will take to fix it before any work begins.",
  },
  {
    slug: "toilet-faucet-pipe-repairs",
    serviceName: "Fixture Repairs",
    serviceCategory: "FIXTURE REPAIRS",
    pageTitle: "Fixture Repairs | JMS Plumbing in Broward, Miami-Dade & Palm Beach Counties",
    metaDescription: "Fixture repairs in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing fixes leaking faucets, running toilets, garbage disposals, hose bibs & house mains. Call (954) 910-6883.",
    heroH1: "Leaking Faucet. Running Toilet. Broken Disposal. We Fix It Today.",
    heroSubtext: "Fixture problems are some of the most common plumbing calls we get in South Florida — and most of them are faster and less expensive to fix than homeowners expect. JMS handles toilet repairs, faucet repairs, garbage disposals, hose bibs, and house main repairs throughout the Tri-County area with upfront pricing and same day service.",
    defaultServiceValue: "repairs",
    introHeading: "Fixture Repair Services Across South Florida",
    paragraph1: "South Florida is one of the hardest environments in the country on plumbing fixtures. Hard water loaded with calcium and mineral deposits clogs aerators, corrodes valve seats, and shortens the lifespan of faucet cartridges significantly faster than in other states. Salt air accelerates corrosion on exposed outdoor fixtures like hose bibs. And older homes throughout Broward, Miami-Dade, and Palm Beach Counties have fixtures and shut off valves that haven't been touched in decades — which means when something finally fails, it can fail completely.",
    paragraph2: "Most fixture problems are not the catastrophic job homeowners fear when they first notice them. A dripping faucet is usually a worn cartridge or washer. A running toilet is usually a failed flapper or fill valve. A hose bib that won't fully shut off is usually a worn packing nut or stem. A garbage disposal that hums but won't spin is usually a jam, not a dead motor. These are straightforward repairs when caught early. The problem comes from waiting — because in South Florida's humidity, even a slow drip under a sink can cause water damage and mold growth in a matter of days.",
    paragraph3: "At JMS we assess the fixture first and tell you honestly whether a repair makes sense or whether the fixture has reached the end of its useful life. We bring the parts most commonly needed for South Florida fixture repairs — including garbage disposal components — so most jobs are handled in a single visit.",
    signsHeading: "Fixture Repairs We Handle",
    signs: [
      { text: "Dripping or leaking faucets in kitchens, bathrooms, and utility areas" },
      { text: "Running toilets, weak flushes, and toilets that won't stop filling" },
      { text: "Hose bibs that leak, won't shut off, or have corroded beyond use" },
      { text: "House main shut off valves that are stuck, leaking, or failed" },
      { text: "Supply line and angle stop valve replacements under sinks and toilets" },
      { text: "Showerhead and tub spout repairs and replacements" },
      { text: "Garbage disposal repairs, installations, and replacements" },
      { text: "Disposals that hum but won't spin, leak underneath, or jam constantly" },
    ],
    diyHeading: "Garbage Disposals & Why Small Problems Become Expensive Ones",
    diyParagraphs: [
      "A garbage disposal that stops working shuts down your kitchen fast. Most disposal problems — jams, leaks, strange noises, and units that hum but won't spin — are repairable without a full replacement. South Florida's hard water is particularly hard on disposals: the high mineral content in Broward, Miami-Dade, and Palm Beach County water accelerates corrosion inside the unit and on the connections underneath, so a disposal that's only a few years old can show significant wear if it hasn't been maintained.",
      "Not every disposal problem requires a new unit. A jam caused by a foreign object, a tripped reset button, or a worn seal causing a minor leak are all repairs that cost far less than a replacement. When replacement makes more sense we'll explain exactly why, walk you through the options, and install the new unit the same day.",
      "A faucet that drips once per second wastes more than 3,000 gallons of water per year. A running toilet can waste up to 200 gallons per day. In South Florida where water bills are already high, that adds up fast. More importantly, fixtures that drip or leak slowly almost never get better on their own — what starts as a minor fix becomes a full replacement if left too long.",
      "Outdoor hose bibs and house main valves deserve particular attention in South Florida. These are the fixtures most exposed to salt air corrosion and the ones most homeowners never think about until they fail completely. A house main that won't shut off during a plumbing emergency is a serious problem. Getting these inspected and serviced before they fail is one of the simplest and most overlooked things a South Florida homeowner can do.",
    ],
    expectHeading: "What Happens When You Call JMS for Fixture Repairs",
    steps: [
      { title: "You Call and Describe the Problem", description: "We ask a few quick questions and show up prepared with the parts and tools most likely needed for your specific fixture issue." },
      { title: "We Assess and Price Before We Start", description: "We inspect the fixture, tell you what's wrong, and give you a clear upfront price before touching anything." },
      { title: "Fixed, Tested, Area Cleaned", description: "We complete the repair, test the fixture thoroughly, and clean up completely before we leave." },
    ],
    testimonials: [
      { name: "Laura", city: "Sunrise, FL", text: "Had a running toilet and a leaky kitchen faucet. JMS fixed both in one visit, charged a fair price, and was in and out in under an hour. This is how plumbing should work.", rating: 5 },
      { name: "Frank", city: "Tamarac, FL", text: "Found a slow leak under our bathroom sink that had been going for who knows how long. JMS repaired it quickly and checked our other fixtures while they were there. Very thorough.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Fixture Repairs",
    faqs: [
      { question: "How do I know if my faucet needs a repair or a full replacement?", answer: "In most cases a dripping or leaking faucet can be repaired by replacing the internal cartridge, washer, or O-ring. If the faucet body itself is cracked, severely corroded, or the repair cost approaches the cost of a new fixture, replacement makes more sense. At JMS we assess the fixture and give you an honest recommendation either way." },
      { question: "My garbage disposal hums but won't spin. Is it broken?", answer: "Not necessarily. A humming disposal that won't spin is almost always a jam — something is lodged between the impeller blades and the grinding ring. Before you call, try pressing the reset button on the bottom of the unit and wait five minutes. If it still hums without spinning after that, call us at (954) 910-6883. Do not keep running a jammed disposal as it will burn out the motor." },
      { question: "My toilet keeps running after I flush. Is that a big repair?", answer: "Usually not. A constantly running toilet is almost always a worn flapper, a faulty fill valve, or a float that needs adjustment. These are among the most straightforward repairs we handle and can typically be completed in under an hour. Left unaddressed a running toilet can waste up to 200 gallons of water per day on your bill." },
      { question: "How long do garbage disposals last in South Florida?", answer: "In most parts of the country a quality garbage disposal lasts ten to fifteen years. In South Florida, hard water and humidity tend to shorten that lifespan to eight to twelve years. If your disposal is approaching that range and starting to have problems, replacement is usually the smarter investment over repeated repairs." },
      { question: "What is a hose bib and how do I know if mine needs replacing?", answer: "A hose bib is the outdoor spigot on the exterior of your home where you connect a garden hose. Signs that yours needs attention include water dripping from the spout when fully turned off, leaking around the handle when the water is on, or visible corrosion on the body of the fixture. In South Florida salt air accelerates corrosion on outdoor fixtures significantly. A failing hose bib is worth replacing before it causes water damage to your exterior wall." },
      { question: "My house main shut off valve is stuck and won't turn. Is that a problem?", answer: "Yes and it is worth addressing before an emergency happens. A stuck house main is one of the most dangerous situations a homeowner can face during a plumbing emergency because it means you cannot stop water flow to your home if a pipe bursts. In South Florida many older homes have gate valves that corrode and seize over time. Replacing a stuck gate valve with a modern ball valve is a straightforward job that could save thousands in water damage down the road." },
      { question: "Do you offer same day fixture repair service in Broward County?", answer: "Yes. Fixture repairs and garbage disposal jobs are among the fastest we handle. We offer same day service throughout Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, Lauderhill, and Weston. Call us at (954) 910-6883 and we will do everything we can to get to you the same day." },
    ],
    relatedServices: [
      { title: "Plumbing Repairs", description: "Beyond fixtures, we handle the full range of plumbing repairs throughout your home with honest assessments and upfront pricing.", href: "/plumbing-repairs" },
      { title: "Drain Cleaning", description: "Fixture problems and slow drains often go hand in hand. We clear drain lines completely and identify the real cause of recurring backups.", href: "/drain-cleaning" },
      { title: "Plumbing Remodels", description: "Upgrading your bathroom or kitchen fixtures as part of a larger renovation? We handle all the plumbing from rough in through final installation.", href: "/plumbing-remodels" },
    ],
    ctaHeading: "Fixture Problem in South Florida? We Can Usually Get There Today.",
    ctaSubtext: "Call JMS for a straight assessment and upfront price. Most fixture repairs are faster and less expensive than you expect. Don't let a small problem turn into a big one.",
  },
];
