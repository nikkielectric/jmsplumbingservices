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
    heroSubtext: "Burst pipe. Active flood. No water on a holiday weekend. When it's happening right now, you need someone who actually answers. JMS is available nights, weekends, and holidays throughout the Tri-County area. After hours fees are always disclosed upfront before any work begins.",
    defaultServiceValue: "emergency",
    introHeading: "24/7 Emergency Plumbing Service Across South Florida",
    paragraph1: "Here's what most homeowners find out the hard way: the majority of plumbers who advertise 24/7 emergency service don't actually answer after hours. You call, you get voicemail, you leave a message, and you spend the next several hours watching water damage spread while you wait for a callback that may not come until morning. We've heard this story from customers across Broward, Miami-Dade, and Palm Beach Counties more times than we can count.",
    paragraph2: "At JMS, when you call we answer. A real person picks up and we get someone moving toward your home as quickly as possible. We don't leave you sitting with an active leak, a burst pipe, or no running water while you wait for a callback queue to work through. In South Florida's climate, waiting is not a neutral option. Mold begins developing within 24 to 48 hours of a water intrusion event. What starts as an emergency call can become a mold remediation job if it isn't addressed quickly.",
    paragraph3: "We're transparent about after hours fees because we think you deserve to know what you're paying before anyone shows up at your door. Emergency service outside standard business hours carries an additional fee. We tell you what that is on the phone before we dispatch. No surprises on the invoice when you're already dealing with a stressful situation.",
    signsHeading: "Situations That Qualify as a Plumbing Emergency",
    signs: [
      { text: "Burst or actively leaking pipes causing flooding" },
      { text: "Complete loss of water to the home" },
      { text: "Sewage backup coming up through drains or toilets" },
      { text: "Gas line leak or suspected gas odor" },
      { text: "Water heater failure with active leaking" },
      { text: "Toilet overflow that cannot be stopped" },
    ],
    diyHeading: "What To Do While You Wait for Us",
    diyParagraphs: [
      "If you have an active leak or burst pipe, locate your main water shut off valve and turn it off immediately. In most South Florida slab homes the shut off is near the water meter at the front of the property. Turning off the main stops the water flow and limits the damage while we're on our way.",
      "If you smell gas, do not touch any switches or electronics. Leave the building immediately, leave the door open behind you, and call 911 and your gas company from outside before calling us. Once the gas company has cleared the property, call JMS to assess and repair the line.",
      "For sewage backups, stop using all water in the home immediately. Running water anywhere in the house while a main line is backed up will push more sewage up through the lowest drains. Turn off the water and wait for us to arrive.",
    ],
    expectHeading: "What Happens When You Call JMS for an Emergency",
    steps: [
      { title: "You Call and We Answer", description: "A real person picks up every time. We ask what's happening, tell you the after hours fee upfront, and dispatch immediately." },
      { title: "We Arrive and Assess Fast", description: "We get to your home as quickly as possible. We assess the situation immediately and tell you exactly what needs to happen to stop the damage." },
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
      { question: "How quickly can you get to me in an emergency?", answer: "Response times vary depending on time of day, location, and how many calls we're handling. We will always give you an honest estimated arrival time on the phone rather than a vague window. Our goal is to get to every emergency call as fast as possible. If you're in Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, Lauderhill, or Weston, call us now and we'll tell you exactly when to expect us." },
      { question: "Where is my main water shut off in a South Florida slab home?", answer: "In most South Florida homes built on slab foundations the main water shut off is located at or near the water meter, which is typically at the front of the property near the street in a small ground level box. Some homes also have a shut off inside near the water heater. It's worth locating yours before an emergency happens so you're not searching for it while water is actively flooding your home." },
      { question: "My toilet is overflowing and won't stop. What do I do right now?", answer: "Reach behind the toilet and turn the supply valve clockwise until it stops. This cuts off water flow to the toilet and stops the overflow. If the valve is stuck or broken, go to the main shut off and turn off water to the whole house. Then call us at (954) 910-6883 and we'll get someone out to you." },
      { question: "Is a slow leak a plumbing emergency?", answer: "In South Florida it can be. A slow leak that's been going for even a few days can cause significant water damage and mold growth in our climate. Mold begins developing within 24 to 48 hours of a water intrusion event. If you have an active leak that you cannot stop, even a slow one, it's worth an emergency call rather than waiting until morning or Monday. The cost of the after hours fee is far less than the cost of mold remediation." },
    ],
    relatedServices: [
      { title: "Plumbing Repairs", description: "Once the emergency is handled, we take care of any follow up repairs needed to get your home fully back to normal.", href: "/plumbing-repairs" },
      { title: "Drain Cleaning", description: "Sewage backups and blocked main lines are among the most common plumbing emergencies we respond to. We clear them completely.", href: "/drain-cleaning" },
      { title: "Gas Line Services", description: "Gas emergencies require immediate attention. We handle gas line inspections and repairs once the gas company has cleared your property.", href: "/gas-line-services" },
    ],
    ctaHeading: "Dealing With a Plumbing Emergency Right Now?",
    ctaSubtext: "Don't wait. Call JMS and a real person will pick up. We serve Broward, Miami-Dade, and Palm Beach Counties around the clock. After hours fees are always disclosed before we dispatch.",
  },
  {
    slug: "water-heaters",
    serviceName: "Water Heaters",
    serviceCategory: "WATER HEATER SERVICES",
    pageTitle: "Water Heater Repair & Installation | JMS Plumbing in Sunrise, FL",
    metaDescription: "Water heater repair, replacement & installation in Broward, Miami-Dade & Palm Beach Counties. Tank & tankless. JMS Plumbing — upfront pricing. Call (954) 910-6883.",
    heroH1: "No Hot Water? We'll Get It Back Today.",
    heroSubtext: "Whether your water heater is leaking, producing lukewarm water, or has stopped working entirely — JMS diagnoses the problem, gives you an upfront price, and handles the repair or replacement the same day throughout South Florida's Tri-County area.",
    defaultServiceValue: "water-heater",
    introHeading: "Water Heater Services Built for South Florida's Hard Water",
    paragraph1: "South Florida's water is among the hardest in the country. That high mineral content doesn't just leave spots on your dishes — it eats away at the inside of your water heater year after year. Sediment builds up at the bottom of the tank, forces the heating element to work harder, and quietly shortens the lifespan of the unit. A water heater that should last 12 years in most parts of the country often fails in 8 to 10 here in Broward, Miami-Dade, and Palm Beach Counties.",
    paragraph2: "At JMS, we see the results of South Florida's hard water on water heaters every single week. Corroded anode rods, sediment-packed tanks, failed heating elements, and leaking pressure relief valves are all routine calls for us. We know what to look for, we know what's worth repairing versus replacing, and we'll tell you honestly which option makes more sense for your specific unit and budget.",
    paragraph3: "Whether you need a simple repair, a full tank replacement, or want to upgrade to a tankless system, JMS handles it from start to finish with upfront pricing and no surprises.",
    signsHeading: "Signs Your Water Heater Needs Attention",
    signs: [
      { text: "No hot water or water that's only lukewarm" },
      { text: "Water heater making popping, rumbling, or banging noises" },
      { text: "Rusty or discolored hot water coming from your faucets" },
      { text: "Water pooling around the base of the unit" },
      { text: "Hot water running out much faster than it used to" },
      { text: "Unit is more than 10 years old and hasn't been serviced" },
    ],
    diyHeading: "Repair or Replace — How We Help You Decide",
    diyParagraphs: [
      "Not every water heater problem means you need a new unit. A failed heating element, a tripped thermostat, or a worn-out anode rod are all repairs that cost a fraction of a full replacement. If the tank is in good shape and the unit has reasonable life left, we'll repair it and save you money.",
      "On the other hand, a tank that's leaking from the bottom, a unit that's more than 10 to 12 years old in South Florida, or one that's been repaired multiple times is usually more cost-effective to replace. We'll show you why, walk you through your options — including tankless — and install the new unit the same day whenever possible.",
      "We never push a replacement when a repair makes sense. And we never patch a unit that's going to fail again in six months just to collect a service call. You get a straight recommendation every time.",
    ],
    expectHeading: "What Happens When You Call JMS for Water Heater Service",
    steps: [
      { title: "You Call and Describe the Problem", description: "We ask a few quick questions about what you're experiencing — no hot water, leaking, strange noises — so we show up with the right parts and equipment." },
      { title: "We Diagnose and Price Before Starting", description: "We inspect the unit thoroughly, identify the cause, and give you a clear price for the repair or replacement before we do anything." },
      { title: "Hot Water Restored, Cleaned Up, Done", description: "We complete the repair or installation, test everything, and leave the area clean. You'll have hot water before we leave." },
    ],
    testimonials: [
      { name: "Jennifer", city: "Coral Springs, FL", text: "Our water heater died on a Saturday morning. JMS came out the same day, gave us a fair price, and had a new one installed by the afternoon. Couldn't ask for better service.", rating: 5 },
      { name: "Miguel", city: "Plantation, FL", text: "They replaced our old tank water heater with a tankless unit. Explained all our options clearly without pushing us. Great crew and clean work.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Water Heaters",
    faqs: [
      { question: "How long do water heaters last in South Florida?", answer: "Tank water heaters in South Florida typically last 8 to 10 years due to the region's hard water, which accelerates sediment buildup and corrosion inside the tank. Tankless units can last 15 to 20 years with proper maintenance. If your unit is approaching these ages and starting to show problems, replacement is usually the smarter long-term investment." },
      { question: "Should I switch to a tankless water heater?", answer: "Tankless water heaters offer several advantages — they last longer, take up less space, and heat water on demand so you never run out. However, they have a higher upfront cost and may require electrical or gas line upgrades. Whether tankless makes sense depends on your household size, hot water usage patterns, and budget. We'll give you a straightforward comparison so you can make the right decision for your home." },
      { question: "Why is my water heater making loud popping or rumbling sounds?", answer: "Those sounds are almost always caused by sediment buildup at the bottom of the tank. In South Florida's hard water, minerals settle and harden on the bottom of the tank over time. When the burner heats the water, it has to heat through that layer of sediment first, creating those popping and rumbling noises. A flush can sometimes help, but if the buildup is severe, the tank may be nearing the end of its life." },
      { question: "My water heater is leaking from the bottom. Can it be repaired?", answer: "A leak from the bottom of the tank usually means the inner tank has corroded through — and unfortunately, that's not repairable. The tank needs to be replaced. A leak from the top or from fittings and connections is often a valve or fitting issue that can be repaired. Call us and we'll identify exactly where the leak is coming from and give you a straight answer." },
      { question: "How much does water heater replacement cost in Broward County?", answer: "The cost depends on the type of unit (tank vs. tankless), the size, and whether any additional plumbing or electrical work is needed for the installation. At JMS, we give you a clear upfront price after assessing your situation — no hidden fees and no surprises. Call us at (954) 910-6883 for an honest quote." },
      { question: "Do you offer same-day water heater service?", answer: "Yes. Water heater failures are one of the most urgent non-emergency calls we handle. We offer same-day service throughout Broward County including Sunrise, Fort Lauderdale, Plantation, Coral Springs, Tamarac, and Weston. Call us and we'll do everything we can to restore your hot water the same day." },
    ],
    relatedServices: [
      { title: "Plumbing Repairs", description: "From leaking pipes to faulty valves, we handle all plumbing repairs with upfront pricing.", href: "/plumbing-repairs" },
      { title: "Gas Line Services", description: "Gas water heater? We handle the gas line work too — licensed, insured, and pressure tested.", href: "/gas-line-services" },
      { title: "Emergency Plumbing", description: "Water heater burst overnight? We answer 24/7 with after-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "No Hot Water in South Florida? Call JMS Today.",
    ctaSubtext: "Same-day service, upfront pricing, and honest recommendations. Whether it's a repair or a full replacement, we'll get your hot water back fast.",
  },
  {
    slug: "septic-leach-fields",
    serviceName: "Septic Leach Fields",
    serviceCategory: "SEPTIC SERVICES",
    pageTitle: "Septic Leach Field Services | JMS Plumbing in Sunrise, FL",
    metaDescription: "Septic leach field installation, repair & inspection in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing — upfront pricing. Call (954) 910-6883.",
    heroH1: "Septic Problems Don't Fix Themselves. We Handle the Whole System.",
    heroSubtext: "From soggy yards to sewage odors, septic leach field failures are messy, stressful, and time-sensitive. JMS handles drain field inspections, repairs, and full installations across South Florida's Tri-County area with upfront pricing and no surprises.",
    defaultServiceValue: "septic",
    introHeading: "Septic Leach Field Services Across South Florida",
    paragraph1: "South Florida's high water table and sandy soil create a unique set of challenges for septic systems that most of the country doesn't deal with. During heavy rain seasons, the water table can rise to within inches of the drain field, dramatically reducing the soil's ability to absorb and filter wastewater. This is one of the primary reasons septic systems in Broward, Miami-Dade, and Palm Beach Counties fail earlier than systems in drier climates.",
    paragraph2: "A failing leach field doesn't always announce itself dramatically. Sometimes it's a patch of unusually green grass over the drain field. Sometimes it's a faint sewage odor that comes and goes. Sometimes it's slow drains throughout the house that don't respond to conventional drain cleaning. By the time standing water or sewage surfaces in your yard, the problem has usually been developing for months.",
    paragraph3: "JMS inspects, repairs, and installs septic leach fields throughout the Tri-County area. We understand the local soil conditions, permitting requirements, and engineering standards that South Florida septic work demands. Every job is done to code, properly permitted, and built to handle the region's unique groundwater conditions.",
    signsHeading: "Signs Your Septic Leach Field May Be Failing",
    signs: [
      { text: "Soggy or muddy areas over the drain field even when it hasn't rained" },
      { text: "Sewage odor in the yard, especially near the septic area" },
      { text: "Unusually green or lush grass directly over the drain field" },
      { text: "Slow drains throughout the house that don't improve with cleaning" },
      { text: "Sewage backing up into the lowest drains in the home" },
      { text: "Standing water or sewage surfacing in the yard" },
    ],
    diyHeading: "Why Leach Field Problems Get Worse When You Wait",
    diyParagraphs: [
      "A failing drain field isn't something that stabilizes on its own. Once the soil becomes saturated or the distribution pipes are compromised, the system's ability to process wastewater continues to deteriorate. What starts as slow drainage can progress to sewage surfacing in your yard, contamination of nearby groundwater, and potential health department involvement.",
      "In South Florida's climate, the combination of heavy seasonal rainfall and a high water table means a marginal drain field can go from functional to failed very quickly. Getting an inspection at the first sign of trouble is always less expensive and less disruptive than waiting for a full system failure.",
      "JMS can assess your drain field condition, identify whether a repair or replacement is needed, and give you a clear upfront price before any work begins.",
    ],
    expectHeading: "What Happens When You Call JMS for Leach Field Service",
    steps: [
      { title: "You Call and We Assess the Situation", description: "We ask about what you're experiencing — odors, wet spots, slow drains — so we can determine the urgency and show up prepared." },
      { title: "Full Inspection and Upfront Pricing", description: "We inspect the drain field, assess soil conditions, and give you a clear price and honest recommendation before any work begins." },
      { title: "Work Completed, Permitted, and Verified", description: "Whether it's a repair or full installation, the work is done to code, properly permitted, and verified functional before we leave." },
    ],
    testimonials: [
      { name: "Richard", city: "Davie, FL", text: "Our leach field was failing and we had no idea where to start. JMS walked us through the whole process, handled the permits, and the new system has been working perfectly.", rating: 5 },
      { name: "Karen", city: "Southwest Ranches, FL", text: "Professional from start to finish. They explained what was wrong with our drain field in plain language and gave us a fair price. No pressure, no surprises.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Septic Leach Fields",
    faqs: [
      { question: "How long do septic leach fields last in South Florida?", answer: "A properly installed and maintained drain field in South Florida typically lasts 15 to 25 years. However, South Florida's high water table, sandy soil, and heavy rainfall can shorten that lifespan significantly if the system wasn't designed for local conditions or hasn't been properly maintained. Regular septic tank pumping is the single most important thing you can do to extend your drain field's life." },
      { question: "Can a failing leach field be repaired or does it need full replacement?", answer: "It depends on the cause and extent of the failure. Minor issues like a damaged distribution pipe or a localized clog can sometimes be repaired. If the soil itself has become saturated and can no longer absorb properly, or if the field was undersized or improperly installed, a full replacement is usually necessary. We inspect the entire system before recommending either option." },
      { question: "How much does leach field replacement cost in Broward County?", answer: "Leach field replacement costs vary significantly based on the size of the system, soil conditions, and permitting requirements. It's one of the larger plumbing investments a homeowner can face, which is why getting an honest assessment before committing is so important. Call JMS at (954) 910-6883 for a thorough inspection and upfront pricing." },
      { question: "Do I need a permit for septic work in South Florida?", answer: "Yes. Septic system installation and major repairs require permits in Broward, Miami-Dade, and Palm Beach Counties. The permitting process involves soil testing, system design approval, and inspections during installation. JMS handles all permitting as part of the job so you don't have to navigate the process yourself." },
      { question: "Why does my yard smell like sewage near the septic area?", answer: "A sewage odor near your drain field is a strong indicator that the system isn't processing wastewater properly. This can be caused by a full septic tank, a failing drain field, or damaged distribution pipes. It's not something to ignore — especially in South Florida where contaminated groundwater is an environmental and health concern. Call us for an inspection before the problem worsens." },
      { question: "How do I know if my home is on septic vs. city sewer?", answer: "If your home was built in a more rural or semi-rural area of Broward, Miami-Dade, or Palm Beach County, there's a good chance it's on septic. You can check your property records, look for a septic tank lid in your yard, or call us and we can help you determine what system your home uses." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Slow drains can sometimes indicate a septic issue rather than a simple clog. We diagnose the real cause.", href: "/drain-cleaning" },
      { title: "Plumbing Repairs", description: "From leaking pipes to faulty connections, we handle all plumbing repairs with honest pricing.", href: "/plumbing-repairs" },
      { title: "Emergency Plumbing", description: "Sewage backup or drain field emergency? We answer 24/7 with fees disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Septic Problems in South Florida? Don't Wait.",
    ctaSubtext: "A failing drain field gets worse with every flush. Call JMS for an honest inspection and upfront pricing — we'll tell you exactly what's going on before we touch anything.",
  },
  {
    slug: "toilet-faucet-pipe-repairs",
    serviceName: "Toilet, Faucet & Pipe Repairs",
    serviceCategory: "FIXTURE REPAIRS",
    pageTitle: "Toilet, Faucet & Pipe Repair | JMS Plumbing in Sunrise, FL",
    metaDescription: "Toilet, faucet & pipe repair in Broward, Miami-Dade & Palm Beach Counties. JMS Plumbing fixes running toilets, dripping faucets & leaking pipes. Call (954) 910-6883.",
    heroH1: "Running Toilet? Dripping Faucet? Leaking Pipe? We Fix It Right.",
    heroSubtext: "The small stuff matters. A running toilet wastes 200 gallons a day. A dripping faucet costs you hundreds a year. A slow pipe leak turns into mold in South Florida's humidity. JMS handles fixture and pipe repairs throughout the Tri-County area — fast, fair, and done right the first time.",
    defaultServiceValue: "repairs",
    introHeading: "Fixture and Pipe Repairs Done Right in South Florida",
    paragraph1: "Most homeowners live with small plumbing problems longer than they should. The toilet that runs for a few seconds after every flush. The kitchen faucet that drips just enough to be annoying. The pipe under the bathroom sink that leaves a small puddle every now and then. These feel like minor inconveniences — until you get the water bill, or until the slow leak behind the wall turns into a mold problem that costs thousands to remediate.",
    paragraph2: "South Florida's hard water makes these problems worse and more frequent. The high mineral content in Broward, Miami-Dade, and Palm Beach County water corrodes valve seats, wears out washers and cartridges faster, and builds up inside pipe connections over time. A faucet that would last 15 years up north might need attention in 8 here. Toilet fill valves and flappers deteriorate faster. And pipe fittings that were fine five years ago can develop slow leaks as mineral deposits compromise the seal.",
    paragraph3: "At JMS, we fix these problems quickly, correctly, and at a fair price. We show up on time, diagnose the actual issue, give you a clear price before starting, and leave your home clean when we're done. No upselling, no unnecessary replacements.",
    signsHeading: "Common Fixture and Pipe Problems We Fix",
    signs: [
      { text: "Toilet that runs constantly or cycles on and off by itself" },
      { text: "Faucet that drips even when fully closed" },
      { text: "Leaking pipes under sinks, behind walls, or in the ceiling" },
      { text: "Toilet that rocks, wobbles, or leaks at the base" },
      { text: "Low water pressure at specific fixtures" },
      { text: "Handles that are stiff, loose, or hard to turn" },
    ],
    diyHeading: "Why Small Leaks Are a Big Deal in South Florida",
    diyParagraphs: [
      "In most climates, a small leak is an annoyance. In South Florida, it's a countdown to mold. Our combination of year-round warmth and high humidity creates the perfect environment for mold to develop within 24 to 48 hours of a water intrusion event. A slow leak behind a wall or under a cabinet that goes unnoticed for even a few weeks can result in a mold remediation bill that dwarfs the cost of the original repair.",
      "Running toilets are another quiet money drain. A single running toilet can waste up to 200 gallons of water per day — that's over 6,000 gallons a month showing up on your water bill. The fix is almost always a flapper, fill valve, or flush valve — repairs that cost a fraction of what you'll pay in wasted water over a few months of ignoring it.",
      "Getting these small repairs handled now is always less expensive and less disruptive than dealing with the consequences of waiting.",
    ],
    expectHeading: "What Happens When You Call JMS for a Fixture or Pipe Repair",
    steps: [
      { title: "You Call and Tell Us What's Going On", description: "Dripping faucet, running toilet, leaking pipe — tell us what you're seeing and we'll come prepared with the right parts for your situation." },
      { title: "We Diagnose and Price Before Starting", description: "We identify the actual cause of the problem and give you a clear upfront price. No surprises, no pressure to replace something that can be repaired." },
      { title: "Fixed, Tested, Cleaned Up", description: "We complete the repair, test everything thoroughly, and leave the area cleaner than we found it." },
    ],
    testimonials: [
      { name: "Laura", city: "Sunrise, FL", text: "Had a running toilet and a leaky kitchen faucet. JMS fixed both in one visit, charged a fair price, and was in and out in under an hour. This is how plumbing should work.", rating: 5 },
      { name: "Frank", city: "Tamarac, FL", text: "Found a slow leak under our bathroom sink that had been going for who knows how long. JMS repaired it quickly and checked our other fixtures while they were there. Very thorough.", rating: 5 },
    ],
    faqHeading: "What South Florida Homeowners Ask About Fixture and Pipe Repairs",
    faqs: [
      { question: "How much does it cost to fix a running toilet?", answer: "Most running toilet repairs involve replacing the flapper, fill valve, or flush valve — all of which are straightforward, affordable repairs. The exact cost depends on the parts needed and the specific issue causing the running. At JMS, we diagnose the problem and give you a clear price before starting. Call us at (954) 910-6883 for a straight answer." },
      { question: "Is a dripping faucet worth calling a plumber for?", answer: "Yes. A faucet that drips once per second wastes over 3,000 gallons of water per year. Beyond the water bill impact, the constant moisture can cause mineral staining and, in South Florida's humidity, create conditions for mold around the fixture area. The repair is usually a cartridge, washer, or valve seat — quick and affordable to fix properly." },
      { question: "How do I know if I have a hidden pipe leak?", answer: "Signs of a hidden leak include unexplained increases in your water bill, the sound of running water when nothing is on, warm spots on the floor (for hot water leaks), damp or discolored spots on walls or ceilings, and musty odors. If you notice any of these signs, call us for an inspection before the leak causes water damage or mold growth." },
      { question: "My toilet rocks back and forth. Is that a problem?", answer: "Yes. A rocking toilet usually means the wax ring seal at the base has failed or the mounting bolts have loosened. This can allow water and sewage to seep out around the base with every flush — often going unnoticed under the flooring. In South Florida's humidity, this moisture creates a perfect environment for mold and can damage the subfloor. It's a quick, affordable fix that prevents much bigger problems." },
      { question: "Can you fix a faucet or does the whole thing need replacing?", answer: "Most faucet problems — dripping, stiff handles, low flow — are caused by internal components that can be replaced without swapping the entire fixture. Cartridges, O-rings, valve seats, and aerators are all repairable. If the faucet body itself is corroded or cracked, replacement makes more sense. We'll tell you which option is right for your situation." },
      { question: "Do you handle pipe repairs behind walls or under slabs?", answer: "Yes. We handle pipe repairs regardless of location — under sinks, behind walls, in ceilings, and under slab foundations. Access requirements and repair methods vary by location, which is why we assess the full situation and give you a clear price before starting. Slab leaks in particular are common in South Florida homes and require specialized detection and repair." },
    ],
    relatedServices: [
      { title: "Drain Cleaning", description: "Fixture problems often go hand-in-hand with slow drains. We clear and inspect drain lines properly.", href: "/drain-cleaning" },
      { title: "Water Heaters", description: "No hot water at your fixtures? The problem might be your water heater, not the faucet.", href: "/water-heaters" },
      { title: "Emergency Plumbing", description: "Burst pipe or major leak? We answer 24/7 with after-hours fees always disclosed upfront.", href: "/emergency-plumbing" },
    ],
    ctaHeading: "Small Leak? Running Toilet? Don't Wait for It to Get Worse.",
    ctaSubtext: "In South Florida, small plumbing problems become expensive ones fast. Call JMS for a same-day repair with upfront pricing and honest recommendations.",
  },
];
