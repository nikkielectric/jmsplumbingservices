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
    pageTitle: "Plumbing Remodel Services | JMS Plumbing in Sunrise, FL",
    metaDescription: "Full bathroom & kitchen plumbing remodels in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing — blueprint to install. Call (954) 910-6883.",
    heroH1: "Remodeling Your Bathroom or Kitchen? The Plumbing Behind the Walls Matters Most.",
    heroSubtext: "A beautiful remodel built on bad plumbing is a future emergency waiting to happen. JMS handles the plumbing side of your renovation from blueprint to final installation — precisely, cleanly, and built to last in South Florida's demanding climate.",
    defaultServiceValue: "remodel",
    introHeading: "Plumbing Remodel Services Across South Florida's Tri-County Area",
    paragraph1: "Most homeowners focus on what they can see during a remodel — the tile, the fixtures, the finishes. But what's inside the walls and under the floor determines how long that remodel actually holds up. Improperly run supply lines, incorrectly vented drain pipes, and undersized water lines are the kind of mistakes that don't show up on inspection day. They show up two years later as a leak behind the wall or a drain that backs up every time you shower.",
    paragraph2: "South Florida adds another layer of complexity. Homes throughout Broward, Miami-Dade, and Palm Beach Counties were built on slab foundations with no basement access. Any plumbing that runs under the slab requires careful planning before a remodel begins. Older homes in the Tri-County area also commonly have cast iron drain pipes and galvanized supply lines that should be evaluated and often replaced during a renovation rather than tiled over and forgotten.",
    paragraph3: "JMS works with homeowners and contractors from the planning stage through final installation. We read blueprints, flag problems before they become expensive, and do the rough in and finish plumbing on your timeline. When we're done, everything is installed to code, tested, and ready for your contractor to close the walls.",
    signsHeading: "Plumbing Remodel Services We Handle",
    signs: [
      { text: "Full bathroom plumbing remodels including showers, tubs, and vanities" },
      { text: "Kitchen plumbing reconfigurations and fixture upgrades" },
      { text: "Rough in plumbing for new bathrooms and additions" },
      { text: "Pipe relocation and rerouting during renovations" },
      { text: "Fixture installation including faucets, sinks, and toilets" },
      { text: "Water line and drain upgrades during remodel projects" },
    ],
    diyHeading: "Why Your Plumber Should Be Involved From the Start",
    diyParagraphs: [
      "One of the most common and costly mistakes in home renovation is bringing the plumber in after the design decisions have already been made. Moving a toilet or relocating a shower drain sounds straightforward until you're dealing with a slab foundation, a venting conflict, or a drain line that can't go where the designer drew it. Catching these issues on paper costs nothing. Catching them after the demo costs thousands.",
      "JMS can review your plans before work begins and identify any plumbing conflicts or code requirements that need to be addressed in the design phase. It's a step that saves homeowners significant time, money, and frustration before a single tile is purchased.",
    ],
    expectHeading: "What Happens When You Call JMS for a Plumbing Remodel",
    steps: [
      { title: "We Review Your Plans First", description: "Before any work begins we look at what you're planning and identify anything that needs to be addressed in the design phase. No surprises once the walls are open." },
      { title: "Rough In Completed On Your Timeline", description: "We coordinate with your contractor to complete the rough in plumbing on schedule so the project keeps moving without delays waiting on the plumber." },
      { title: "Finish Plumbing Installed, Tested, Done Right", description: "Fixtures installed, everything tested, work area cleaned up. Ready for your contractor to close the walls and finish the project." },
    ],
    testimonials: [
      { name: "Maria", city: "Sunrise, FL", text: "We hired JMS for a full bathroom remodel and couldn't be happier. They walked us through the whole process, stayed on schedule, and the finished result exceeded our expectations.", rating: 5 },
      { name: "James", city: "Lauderhill, FL", text: "Great experience with our kitchen remodel plumbing. They coordinated with our contractor perfectly and the work was top-notch. Fair pricing too.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Plumbing Remodels",
    faqs: [
      { question: "Do I need a permit for plumbing work during a bathroom remodel in Florida?", answer: "In most cases yes. Florida requires permits for plumbing work that involves moving, adding, or replacing supply or drain lines. Permits exist to protect you as the homeowner and ensure the work is inspected and meets current code. Unpermitted plumbing work can create problems when you sell the home and may not be covered by homeowner's insurance. JMS handles all required permitting as part of the job." },
      { question: "Can you work directly with my contractor or designer?", answer: "Absolutely. We coordinate with general contractors, designers, and tile installers regularly. Clear communication between trades is what keeps a remodel on schedule. We'll work within your project timeline and make sure our portion of the work is completed and inspected before the walls close." },
      { question: "Our home was built in the 1960s. Should we replace the pipes during the remodel?", answer: "In most cases we'd recommend at least having them evaluated before the walls close. Homes built in the 1960s throughout Broward, Miami-Dade, and Palm Beach Counties commonly have cast iron drain pipes and galvanized steel supply lines that are at or well past their expected lifespan in South Florida's climate. Once the walls are open during a remodel is the most cost effective time to address aging pipes because the access is already there." },
      { question: "How long does the plumbing portion of a bathroom remodel take?", answer: "The rough in phase typically takes one to two days depending on the scope of work and whether any pipe relocation is required. Finish plumbing, which is installing the fixtures after tile and walls are complete, is usually a half to full day. We'll give you a clear timeline estimate before the project begins so your contractor can plan accordingly." },
      { question: "We want to add a bathroom to our home. Is that a big plumbing job?", answer: "Adding a bathroom requires running new supply lines, drain lines, and venting from your existing plumbing system to the new location. The complexity depends on where the new bathroom is relative to your existing plumbing stack and whether your home is on a slab. It's a significant job but very manageable with proper planning. Call us before the design is finalized so we can assess the best routing options for your specific home." },
      { question: "Do you handle kitchen plumbing remodels in South Florida as well?", answer: "Yes. Kitchen remodels commonly involve relocating the sink, adding a dishwasher connection, upgrading supply lines, or reconfiguring drain lines when the layout changes. We handle all of it. If you're planning a kitchen renovation anywhere in Broward, Miami-Dade, or Palm Beach County, get us involved in the planning stage before the cabinets are ordered." },
    ],
    relatedServices: [
      { title: "Plumbing Repairs", description: "Noticed something during the renovation that needs fixing? We handle repairs of all sizes with honest assessments and upfront pricing.", href: "/plumbing-repairs" },
      { title: "Drain Cleaning", description: "New fixtures deserve clean lines. We clear and inspect drain lines as part of any remodel to make sure everything flows properly from day one.", href: "/drain-cleaning" },
      { title: "Emergency Plumbing", description: "Remodel uncovered something unexpected? We're available nights and weekends with after-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Planning a Remodel in South Florida? Let's Talk Before the Demo Starts.",
    ctaSubtext: "The best time to involve your plumber is before anything is torn out. Call JMS for a straight conversation about your project and an upfront quote with no obligation.",
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
