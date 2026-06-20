// Multi-language content for Lori's portfolio.
// Architecture: every UI string and content array is keyed by language code.
// To add a new language (e.g. zh-TW, vi, th), add a new entry to `languages`
// and a matching entry to `translations`. Nothing else in the app needs to change.

export type LanguageCode = "en" | "zh" | "ja" | "es";

export const languages: { code: LanguageCode; label: string; short: string; flag: string }[] = [
  { code: "en", label: "English", short: "EN", flag: "🇺🇸" },
  { code: "zh", label: "中文", short: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", short: "日本語", flag: "🇯🇵" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
];

export const defaultLanguage: LanguageCode = "en";

export type Service = { key: string; title: string; desc: string };
export type CaseStudy = {
  key: string;
  name: string;
  tag: string;
  problem: string;
  did: string;
  deliverables: string;
  result: string;
};
export type Package = { key: string; name: string; price: string; desc: string };

export type Dict = {
  htmlLang: string;
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    whyMe: string;
    packages: string;
    beyondWork: string;
    contact: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    locationTag: string;
    headline: string;
    subheadline: string;
    ctaServices: string;
    ctaWork: string;
    tags: string[];
  };
  about: {
    label: string;
    heading: string;
    headingItalic: string;
    paragraphs: string[];
    facts: { k: string; v: string }[];
  };
  services: {
    label: string;
    heading: string;
    items: Service[];
  };
  portfolio: {
    label: string;
    heading: string;
    caseLabel: string;
    rowProblem: string;
    rowDid: string;
    rowDeliverables: string;
    rowResult: string;
    items: CaseStudy[];
  };
  whyMe: {
    label: string;
    heading: string;
    items: string[];
  };
  packages: {
    label: string;
    heading: string;
    subheading: string;
    fromLabel: string;
    items: Package[];
  };
  contact: {
    label: string;
    heading: string;
    headingItalic: string;
    intro: string;
    cta: string;
    links: { label: string; value: string }[];
  };
  beyondWork: {
    label: string;
    heading: string;
    headingItalic: string;
    body: string[];
    xhsLabel: string;
    xhsCta: string;
    xhsUrl: string;
  };
  footer: string;
};

export const translations: Record<LanguageCode, Dict> = {
  en: {
    htmlLang: "en",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Work",
      whyMe: "Why Me",
      packages: "Collaboration",
      beyondWork: "Beyond",
      contact: "Contact",
      cta: "Let's talk",
      languageLabel: "Language",
    },
    hero: {
      locationTag: "Based in Sapporo, Japan · Remote-friendly",
      headline: "Remote Marketing Operations, Content & AI Workflow Support",
      subheadline:
        "I help small businesses, online teams, and growing companies turn scattered content, service information, customer-facing pages, and repetitive marketing tasks into clear, organized, and execution-ready systems.",
      ctaServices: "View Services",
      ctaWork: "See Work Examples",
      tags: [
        "Marketing Operations",
        "Customer-Facing Content",
        "Website & Landing Pages",
        "AI-Assisted Workflows",
        "Japan-Based Experience",
      ],
    },
    about: {
      label: "About",
      heading: "Practical support across",
      headingItalic: "content, operations, and AI workflows.",
      paragraphs: [
        "I support marketing operations, content execution, and AI-assisted workflows for small businesses, online teams, and service-based companies.",
        "My work sits between content, operations, customer communication, and execution. I help teams organize service information, improve customer-facing pages, prepare content for websites and social platforms, structure offers clearly, and build simple repeatable workflows that make daily work easier to manage.",
        "I currently work in a real business environment supporting a Japan-based travel company, where clear service information, customer-facing content, platform listings, inquiry flow, and consistent execution directly affect customer trust and bookings.",
        "I am based in Japan, with a native Chinese background and working communication ability in English and Japanese. This allows me to support cross-cultural projects, bilingual or multilingual content, local service businesses, inbound travel-related products, SaaS teams, and remote companies working across markets.",
      ],
      facts: [
        { k: "Location", v: "Sapporo, JP" },
        { k: "Languages", v: "中 · EN · 日" },
        { k: "Focus", v: "Marketing ops" },
        { k: "Mode", v: "Remote" },
      ],
    },
    services: {
      label: "Services",
      heading: "Four practical ways I can support your team.",
      items: [
        {
          key: "content",
          title: "Content & Social Media Support",
          desc: "I help teams plan, organize, and produce content for social media and marketing channels, including content calendars, captions, hooks, visual direction, Xiaohongshu-style content, and ongoing content operations.",
        },
        {
          key: "web",
          title: "Website & Landing Page Copy",
          desc: "I help businesses improve website pages and landing pages so visitors can quickly understand what the company offers, why it matters, and what to do next.",
        },
        {
          key: "offer",
          title: "Offer & Customer-Facing Content",
          desc: "I turn services, products, FAQs, customer questions, and platform requirements into clear content that explains the offer, builds trust, and guides the customer toward the next step.",
        },
        {
          key: "ai",
          title: "AI Workflow & Automation Support",
          desc: "I help teams use AI in practical ways across marketing and daily operations: reusable prompts, content workflow templates, AI-assisted research, draft processes, FAQ organization, and simple automation ideas.",
        },
      ],
    },
    portfolio: {
      label: "Featured Work",
      heading: "Experience areas that show how I connect content, operations, and execution.",
      caseLabel: "Case",
      rowProblem: "Problem",
      rowDid: "What I Did",
      rowDeliverables: "Deliverables",
      rowResult: "Result",
      items: [
        {
          key: "travel-ops",
          name: "Japan Travel Business — Platform Itinerary & Customer Acquisition Support",
          tag: "Current Experience",
          problem:
            "A travel business needed a clearer way to turn itinerary ideas and service details into platform-ready products that could attract real customer inquiries.",
          did: "Built and improved itinerary pages on travel platforms, organized service information, clarified selling points, and shaped customer-facing content to support inquiry generation.",
          deliverables: "Platform itinerary pages, service descriptions, customer-facing copy, selling points, FAQ-style content, and operational notes.",
          result:
            "Platform-based itinerary content helped bring in real customer leads, connecting content clarity, service packaging, inquiry flow, and day-to-day execution.",
        },
        {
          key: "saas",
          name: "SaaS & Online Business Support",
          tag: "Digital Teams",
          problem:
            "Online teams often need clearer website structure, landing page copy, content operations, and more organized marketing workflows.",
          did: "Supported SaaS-related projects with website content, marketing execution, workflow setup, and clearer customer-facing messaging.",
          deliverables: "Website structure support, landing page copy, content operations, and marketing workflow organization.",
          result:
            "SaaS experience adds credibility without turning SaaS into a separate service menu.",
        },
        {
          key: "ai-workflow",
          name: "AI-Assisted Content & Workflow Systems",
          tag: "AI Operations",
          problem:
            "Small teams have repeated content, research, FAQ, listing, and marketing tasks but no clear system for using AI efficiently.",
          did: "Created practical AI-assisted workflows for research, copy drafting, reusable prompts, FAQ organization, and repeatable content production.",
          deliverables: "Prompt systems, workflow templates, content structures, research support, and operating notes.",
          result:
            "Teams can move faster, reduce repeated manual work, and maintain more consistent output across customer-facing channels.",
        },
        {
          key: "customer-content",
          name: "Offer & Customer-Facing Content Systems",
          tag: "Content Systems",
          problem:
            "Many small businesses have good offers, but the information is scattered, too internal, or difficult for customers to understand.",
          did: "Turned service details, FAQs, customer questions, and platform requirements into structured pages and reusable materials.",
          deliverables: "Service descriptions, FAQ sections, listing-style copy, trust-building content, and CTA guidance.",
          result:
            "Customer-facing information becomes clearer, easier to reuse, and more useful for both customers and the team.",
        },
      ],
    },
    whyMe: {
      label: "Why Work With Me",
      heading: "Practical, organized, and grounded in real operations.",
      items: [
        "I work inside real operations where content, service information, and execution quality directly affect inquiries, bookings, and customer trust.",
        "I can take scattered notes, service details, FAQs, customer questions, or draft ideas and turn them into structured pages, workflows, and usable materials.",
        "I do not only write copy. I also think about where the content is used, what question it answers, and how the team can maintain it.",
        "I use AI as a practical operations tool for reusable prompts, research support, content workflows, FAQ organization, and repetitive marketing tasks.",
        "Based in Japan, with native Chinese ability and English/Japanese communication skills, I can support cross-cultural and multilingual projects.",
        "I am calm, organized, and execution-focused. My goal is to make work clearer, more consistent, and easier to move forward.",
      ],
    },
    packages: {
      label: "Collaboration Options",
      heading: "Flexible ways to work together.",
      subheading: "I do not list low-price packages. Scope depends on the project, timeline, and level of support needed.",
      fromLabel: "Mode",
      items: [
        {
          key: "remote",
          name: "Part-Time Remote Support",
          price: "Ongoing",
          desc: "For teams that need steady help with content, website updates, marketing operations, customer-facing materials, and practical execution.",
        },
        {
          key: "project",
          name: "Project-Based Marketing Execution",
          price: "Project",
          desc: "For a specific website, landing page, offer, content workflow, or customer-facing material that needs clearer structure and execution.",
        },
        {
          key: "workflow",
          name: "AI-Assisted Workflow Setup",
          price: "Workflow",
          desc: "For teams that want reusable prompts, content systems, research workflows, FAQ organization, and simple automation ideas for repeated marketing tasks.",
        },
        {
          key: "sprint",
          name: "Website & Content Improvement Sprint",
          price: "Sprint",
          desc: "For teams that need a focused review and improvement of pages, offers, service descriptions, CTA flow, or multilingual content.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's make your offer",
      headingItalic: "easy to understand.",
      intro:
        "Tell me a little about your business and what you'd like to improve. I usually reply within a day.",
      cta: "Let's Work Together",
      links: [
        { label: "Email", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "View profile" },
        { label: "LinkedIn", value: "Connect with me" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    beyondWork: {
      label: "Beyond Work",
      heading: "Off the clock,",
      headingItalic: "I'm usually moving.",
      body: [
        "I'm a fitness enthusiast and share workouts on Xiaohongshu — 11.1K likes & saves so far, and still going.",
        "I play tennis, ski Hokkaido winters, and take photos wherever I go. Living in Sapporo means I'm always trying local small businesses — and mentally rewriting their copy.",
      ],
      xhsLabel: "Xiaohongshu",
      xhsCta: "Visit my profile",
      xhsUrl: "https://xhslink.com/m/3g0bjokEbea",
    },
    footer: "Marketing operations, content systems, and AI workflow support from Japan.",
  },

  zh: {
    htmlLang: "zh-CN",
    nav: {
      home: "首页",
      about: "关于",
      services: "服务",
      portfolio: "案例",
      whyMe: "为什么是我",
      packages: "合作方式",
      beyondWork: "工作之外",
      contact: "联系",
      cta: "聊一聊",
      languageLabel: "语言",
    },
    hero: {
      locationTag: "现居日本札幌 · 支持远程",
      headline: "远程营销运营、内容与 AI 工作流支持",
      subheadline:
        "我帮助小企业、线上团队和成长型公司,把零散的内容、服务信息、客户页面和重复营销任务,整理成清楚、有结构、能真正执行的系统。",
      ctaServices: "查看服务",
      ctaWork: "看案例示例",
      tags: ["营销运营", "客户页面内容", "网站与落地页", "AI 辅助工作流", "日本业务经验"],
    },
    about: {
      label: "关于",
      heading: "我提供的是",
      headingItalic: "内容、运营与 AI 工作流的实操支持。",
      paragraphs: [
        "我是 Lori,常驻日本札幌。我为小企业、线上团队和服务型公司提供营销运营、内容执行和 AI 辅助工作流支持。",
        "我的工作介于内容、运营、客户沟通和实际执行之间。我会帮团队整理服务信息、优化客户看得到的页面、准备网站和社媒内容、把服务包装讲清楚,并建立一些简单可复用的流程,让日常工作更容易推进。",
        "我目前正在真实业务环境里支持一家日本旅行社的营销与运营。对这类业务来说,清楚的服务信息、客户页面、平台内容、询盘流程和稳定执行,都会直接影响客户信任和预订转化。",
        "我常驻日本,中文母语,英语和日语可工作沟通。这让我适合支持跨文化项目、中英/中日/多语言内容、本地服务、入境旅游相关产品、SaaS 团队,以及跨市场协作的远程公司。",
      ],
      facts: [
        { k: "所在地", v: "日本札幌" },
        { k: "语言", v: "中 · EN · 日" },
        { k: "聚焦", v: "营销运营" },
        { k: "模式", v: "远程" },
      ],
    },
    services: {
      label: "服务",
      heading: "四种我可以真正帮上忙的方向。",
      items: [
        {
          key: "content",
          title: "内容与社媒支持",
          desc: "我帮助团队规划、整理和产出社媒与营销内容,包括内容日历、标题钩子、文案、视觉方向、小红书风格内容,以及持续内容运营支持。",
        },
        {
          key: "web",
          title: "网站与落地页文案",
          desc: "我帮助企业优化网站页面和落地页,让访问者能快速理解你提供什么、为什么重要,以及下一步应该怎么联系或行动。",
        },
        {
          key: "offer",
          title: "服务包装与客户页面内容",
          desc: "我把服务、产品、FAQ、客户常问问题和平台要求,整理成清楚的客户可读内容,帮助你解释服务、建立信任,并引导客户进入下一步。",
        },
        {
          key: "ai",
          title: "AI 工作流与自动化支持",
          desc: "我帮助团队把 AI 用在真实工作里:可复用提示词、内容流程模板、AI 辅助调研、初稿流程、FAQ 整理,以及适合小团队的轻量自动化思路。",
        },
      ],
    },
    portfolio: {
      label: "经验方向",
      heading: "这些经验展示了我如何把内容、运营和执行连接起来。",
      caseLabel: "案例",
      rowProblem: "问题",
      rowDid: "我做了什么",
      rowDeliverables: "交付物",
      rowResult: "结果",
      items: [
        {
          key: "travel-ops",
          name: "日本旅行社 · 平台行程获客与运营支持",
          tag: "当前经验",
          problem:
            "旅行类业务需要把行程想法和服务细节整理成平台上能被客户理解、愿意咨询的产品页面。",
          did: "在旅游平台建立并优化行程页面,整理服务信息,提炼卖点,把客户看得到的内容做得更清楚,用于支持询盘和获客。",
          deliverables: "平台行程页、服务说明、客户页面文案、卖点整理、FAQ 式内容、运营记录。",
          result: "通过平台建立的行程获得了真实客户线索,把内容清晰度、服务包装、询盘流程和日常执行连接成了实际获客闭环。",
        },
        {
          key: "saas",
          name: "SaaS 与线上业务支持",
          tag: "线上团队",
          problem: "线上团队常常需要更清楚的网站结构、落地页文案、内容运营和更有组织的营销流程。",
          did: "支持 SaaS 相关项目的网站内容、营销执行、流程搭建和更清楚的客户沟通表达。",
          deliverables: "网站结构支持、落地页文案、内容运营、营销流程整理。",
          result: "SaaS 经验作为我的可信度背书,但不会把网站变成单一 SaaS 服务菜单。",
        },
        {
          key: "ai-workflow",
          name: "AI 辅助内容与工作流系统",
          tag: "AI 运营",
          problem: "小团队有大量重复的内容、调研、FAQ、平台页面和营销任务,但没有清楚的 AI 使用系统。",
          did: "为调研、文案初稿、可复用提示词、FAQ 整理和重复内容生产搭建实用的 AI 辅助流程。",
          deliverables: "提示词系统、工作流模板、内容结构、调研支持、操作说明。",
          result: "团队可以减少重复手工工作,提高产出速度,并让客户看得到的内容更稳定。",
        },
        {
          key: "customer-content",
          name: "服务包装与客户页面内容系统",
          tag: "内容系统",
          problem: "很多小企业服务本身不错,但信息零散、太内部视角,客户看起来很难马上理解。",
          did: "把服务细节、FAQ、客户问题和平台要求整理成结构化页面和可复用素材。",
          deliverables: "服务说明、FAQ 区块、平台式文案、建立信任的内容、CTA 建议。",
          result: "客户页面变得更清楚,也更容易被团队反复使用。",
        },
      ],
    },
    whyMe: {
      label: "为什么是我",
      heading: "实用、有条理,并且来自真实运营场景。",
      items: [
        "我在真实运营环境里工作,知道内容、服务信息和执行质量会直接影响询盘、预订和客户信任。",
        "我擅长把零散笔记、服务细节、FAQ、客户问题或初稿想法,整理成页面、流程和可用素材。",
        "我不只是写文案,也会考虑内容用在哪里、回答什么问题、团队后续如何维护。",
        "我把 AI 当作实际运营工具,用于可复用提示词、调研支持、内容流程、FAQ 整理和重复营销任务。",
        "常驻日本,中文母语,英语/日语可沟通,适合支持跨文化和多语言项目。",
        "我做事冷静、有条理、重执行。目标是让事情更清楚、更稳定、更容易往前推进。",
      ],
    },
    packages: {
      label: "合作方式",
      heading: "更灵活的合作方式。",
      subheading: "我不在首页列低价套餐。具体范围会根据项目目标、时间线和支持深度来定。",
      fromLabel: "模式",
      items: [
        {
          key: "remote",
          name: "兼职远程支持",
          price: "长期",
          desc: "适合需要稳定支持的团队:内容、网站更新、营销运营、客户页面素材和日常执行。",
        },
        {
          key: "project",
          name: "项目制营销执行",
          price: "项目",
          desc: "适合一个明确项目:网站、落地页、服务包装、内容工作流或客户页面素材,需要更清楚的结构和执行。",
        },
        {
          key: "workflow",
          name: "AI 辅助工作流搭建",
          price: "流程",
          desc: "适合想建立可复用提示词、内容系统、调研流程、FAQ 整理和轻量自动化思路的团队。",
        },
        {
          key: "sprint",
          name: "网站与内容优化冲刺",
          price: "冲刺",
          desc: "适合集中优化页面、服务说明、CTA 流程、多语言内容或客户看得到的信息结构。",
        },
      ],
    },
    contact: {
      label: "联系",
      heading: "把你的服务,",
      headingItalic: "讲得让人一眼看懂。",
      intro: "告诉我一点你的业务和想改善的方向,我通常会在一天内回复。",
      cta: "一起合作",
      links: [
        { label: "邮箱", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "查看主页" },
        { label: "LinkedIn", value: "加我联系" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    beyondWork: {
      label: "工作之外",
      heading: "工作之外,",
      headingItalic: "我基本都在动。",
      body: [
        "我是健身爱好者,也是小红书健身博主 —— 目前已积累 11.1K 赞与收藏,还在持续更新。",
        "平时打网球、冬天在北海道滑雪、随手街拍与旅行摄影。住在札幌,喜欢探各种本地小店 —— 然后在心里默默帮它们重写文案。",
      ],
      xhsLabel: "小红书",
      xhsCta: "看看我的主页",
      xhsUrl: "https://xhslink.com/m/3g0bjokEbea",
    },
    footer: "来自日本的营销运营、内容系统与 AI 工作流支持。",
  },

  ja: {
    htmlLang: "ja",
    nav: {
      home: "ホーム",
      about: "プロフィール",
      services: "サービス",
      portfolio: "実績",
      whyMe: "選ばれる理由",
      packages: "協業",
      beyondWork: "オフタイム",
      contact: "お問い合わせ",
      cta: "話してみる",
      languageLabel: "言語",
    },
    hero: {
      locationTag: "札幌在住・リモート対応",
      headline: "リモートのマーケティング運用・コンテンツ・AI ワークフロー支援",
      subheadline:
        "散らばったコンテンツ、サービス情報、顧客向けページ、繰り返しのマーケティング業務を、分かりやすく整理された実行可能な仕組みに変えるお手伝いをします。",
      ctaServices: "サービスを見る",
      ctaWork: "実績を見る",
      tags: ["マーケティング運用", "顧客向けコンテンツ", "Web & LP", "AI ワークフロー", "日本での実務経験"],
    },
    about: {
      label: "プロフィール",
      heading: "スモールビジネスのための",
      headingItalic: "実務的なマーケ支援。",
      paragraphs: [
        "Lori と申します。札幌を拠点に、もっとわかりやすく伝えたいスモールビジネスをお手伝いしています。大きな代理店ではなく、確実に進める一人の担当者として動きます。",
        "得意領域は、コンテンツ、コピー、シンプルな Web サイト、そして商品/サービスページの構造づくり。特にインバウンド観光・ローカル体験・北海道・スキー関連に近い距離感があります。同じ考え方は、オンラインで自分をきちんと伝えたい小規模サービス全般に応用できます。",
        "母語は中国語、日本語と英語は日常会話レベル。誠実に、整理して、納期どおりに進めます。",
      ],
      facts: [
        { k: "拠点", v: "札幌, 日本" },
        { k: "言語", v: "中 · EN · 日" },
        { k: "対象", v: "スモールビジネス" },
        { k: "形態", v: "リモート" },
      ],
    },
    services: {
      label: "サービス",
      heading: "実務でサポートできる 4 つの領域。",
      items: [
        {
          key: "content",
          title: "コンテンツ & SNS サポート",
          desc: "SNS やマーケティングチャネル向けに、コンテンツ計画、キャプション、フック、ビジュアル方向性、小紅書スタイルのコンテンツ、継続的な運用を支援します。",
        },
        {
          key: "web",
          title: "Web サイト & LP コピー",
          desc: "訪問者が何を提供しているのか、なぜ重要なのか、次に何をすべきかをすぐ理解できるよう、Web ページや LP の構成と言葉を整えます。",
        },
        {
          key: "offer",
          title: "サービス整理 & 顧客向けコンテンツ",
          desc: "サービス、商品、FAQ、顧客からの質問、プラットフォーム要件を整理し、信頼につながる分かりやすい顧客向けコンテンツに変えます。",
        },
        {
          key: "ai",
          title: "AI ワークフロー & 自動化サポート",
          desc: "再利用できるプロンプト、コンテンツワークフローテンプレート、AI リサーチ、下書きプロセス、FAQ 整理、軽い自動化アイデアなど、実務で使える AI 活用を支援します。",
        },
      ],
    },
    portfolio: {
      label: "実績の例",
      heading: "スモールビジネスの伝え方を整えた事例。",
      caseLabel: "Case",
      rowProblem: "課題",
      rowDid: "やったこと",
      rowDeliverables: "成果物",
      rowResult: "結果",
      items: [
        {
          key: "ski",
          name: "インバウンド スキーキャンプ・バイリンガル LP",
          tag: "インバウンド",
          problem:
            "北海道の小規模スキーキャンプ。ページはあるものの、海外の保護者が中身・対象・申込方法を把握できなかった。",
          did: "保護者の疑問順にページ構成を組み直し、見出しと FAQ を書き直し、明確な問い合わせ導線を追加。",
          deliverables: "ワンページの構成、コピー、FAQ、CTA 提案。",
          result: "保護者がプライベートグループでそのまま共有できる形になりました。",
        },
        {
          key: "tour",
          name: "北海道ローカルツアー・商品ページ刷新",
          tag: "商品ページ",
          problem:
            "現地ガイドのツアーは内容は誠実だが、タイトルが曖昧で訴求が立っておらず、一覧に埋もれていた。",
          did: "タイトル・Top3 の訴求・説明文を書き直し、短い FAQ と明確な CTA を整備。",
          deliverables: "新タイトル、訴求リスト、説明文、FAQ、アクションリスト。",
          result: "一般的なアクティビティ投稿ではなく、具体的な体験として読めるようになりました。",
        },
        {
          key: "shop",
          name: "小規模サービス業・月次コンテンツ計画",
          tag: "コンテンツ & SNS",
          problem: "投稿が不定期で、毎週何を話せばよいか定まっていなかった。",
          did: "3 つのテーマで月次プランを構築。キャプション草案とプラットフォーム別の方向性を提供。",
          deliverables: "月次プラン、キャプション、投稿アイデア、簡易レビュー。",
          result: "投稿が落ち着いた頻度になり、新規フォロワーにも伝わるようになりました。",
        },
        {
          key: "site",
          name: "バイリンガル ワンページ Web サイト",
          tag: "Web サイト",
          problem: "サービスは頭の中にあるが、見込み客に先に読んでもらえるページがなかった。",
          did: "ワンページに整理し、バイリンガルのコピーと問い合わせ導線を設計。",
          deliverables: "ページ構成、日中英コピー、CTA と問い合わせセクション。",
          result: "問い合わせの段階で基礎情報が共有されている状態になりました。",
        },
      ],
    },
    whyMe: {
      label: "選ばれる理由",
      heading: "小さなチームに寄り添い、手を動かし、正直に。",
      items: [
        "窓口は一人。代理店的な階層も引き継ぎもありません。",
        "日本拠点。インバウンド、ローカルサービス、北海道に近い距離感。",
        "中国語ネイティブ、日本語と英語は日常会話レベル。バイリンガル展開に強み。",
        "実行優先。完璧な計画より、まず分かりやすい v1。",
        "書く前に、本当に必要な問いから始めます。",
        "落ち着いて、整理して、期日どおりに。小さな予算と進行を尊重します。",
      ],
    },
    packages: {
      label: "協業スタイル",
      heading: "柔軟な働き方でサポートします。",
      subheading: "低価格パッケージは掲載していません。目的、期間、必要なサポート範囲に合わせて調整します。",
      fromLabel: "Mode",
      items: [
        {
          key: "remote",
          name: "パートタイム リモート支援",
          price: "継続",
          desc: "コンテンツ、Web 更新、マーケティング運用、顧客向け資料、実務実行を継続的に支援します。",
        },
        {
          key: "project",
          name: "プロジェクト型マーケ実行",
          price: "プロジェクト",
          desc: "Web サイト、LP、サービス整理、コンテンツワークフロー、顧客向け資料など、明確な目的のあるプロジェクトを支援します。",
        },
        {
          key: "workflow",
          name: "AI ワークフロー設計",
          price: "ワークフロー",
          desc: "再利用できるプロンプト、コンテンツシステム、リサーチフロー、FAQ 整理、軽い自動化アイデアを整えます。",
        },
        {
          key: "sprint",
          name: "Web & コンテンツ改善スプリント",
          price: "スプリント",
          desc: "ページ、サービス説明、CTA 導線、多言語コンテンツ、顧客向け情報構造を短期間で改善します。",
        },
      ],
    },
    contact: {
      label: "お問い合わせ",
      heading: "あなたのサービスを、",
      headingItalic: "伝わる形に整えましょう。",
      intro: "事業内容と改善したいポイントを少し教えてください。通常 1 日以内にお返事します。",
      cta: "一緒に働く",
      links: [
        { label: "メール", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "プロフィールを見る" },
        { label: "LinkedIn", value: "つながる" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    beyondWork: {
      label: "オフタイム",
      heading: "仕事以外の時間は、",
      headingItalic: "だいたい動いています。",
      body: [
        "フィットネス好きで、小紅書(中国版 Instagram)でフィットネス発信もしています。いいね・保存 11.1K 達成。",
        "テニス、北海道の冬はスキー、ストリート&旅のスナップ写真を撮るのも好きです。札幌在住なので、気づけばローカル小店を巡って、心の中でその場でコピーを書き直しています。",
      ],
      xhsLabel: "小紅書",
      xhsCta: "プロフィールを見る",
      xhsUrl: "https://xhslink.com/m/3g0bjokEbea",
    },
    footer: "札幌から、スモールビジネスのマーケ支援を。",
  },

  es: {
    htmlLang: "es",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      portfolio: "Trabajos",
      whyMe: "Por qué yo",
      packages: "Colaboración",
      beyondWork: "Fuera del trabajo",
      contact: "Contacto",
      cta: "Hablemos",
      languageLabel: "Idioma",
    },
    hero: {
      locationTag: "Basada en Sapporo, Japón · Trabajo remoto",
      headline: "Soporte remoto de operaciones de marketing, contenido y flujos AI",
      subheadline:
        "Ayudo a pequeñas empresas, equipos online y compañías en crecimiento a convertir contenido disperso, información de servicio, páginas para clientes y tareas repetitivas de marketing en sistemas claros, organizados y listos para ejecutar.",
      ctaServices: "Ver servicios",
      ctaWork: "Ver ejemplos",
      tags: ["Operaciones de marketing", "Contenido para clientes", "Web & landing pages", "Flujos AI", "Experiencia en Japón"],
    },
    about: {
      label: "Sobre mí",
      heading: "Marketing práctico para",
      headingItalic: "pequeñas empresas.",
      paragraphs: [
        "Soy Lori, vivo en Sapporo, Japón. Trabajo con pequeñas empresas que necesitan comunicar mejor — no soy una agencia grande, solo una persona constante y manos a la obra que termina lo que empieza.",
        "Mi día a día es contenido, copy, sitios web simples y estructura de páginas de listado. Estoy especialmente cerca del turismo inbound, las experiencias locales, Hokkaido y los negocios de esquí — pero el mismo enfoque sirve para cualquier pequeño negocio de servicios que necesite presentarse bien online.",
        "Chino nativo, con japonés e inglés conversacional. Honesta, ordenada y puntual.",
      ],
      facts: [
        { k: "Ubicación", v: "Sapporo, JP" },
        { k: "Idiomas", v: "中 · EN · 日" },
        { k: "Enfoque", v: "Pequeña empresa" },
        { k: "Modalidad", v: "Remoto" },
      ],
    },
    services: {
      label: "Servicios",
      heading: "Cuatro formas prácticas en las que puedo apoyar a tu equipo.",
      items: [
        {
          key: "content",
          title: "Contenido y redes sociales",
          desc: "Ayudo a planificar, organizar y producir contenido para redes sociales y canales de marketing: calendarios, captions, hooks, dirección visual, contenido estilo Xiaohongshu y operaciones continuas de contenido.",
        },
        {
          key: "web",
          title: "Copy para web y landing pages",
          desc: "Ayudo a mejorar páginas web y landing pages para que los visitantes entiendan rápidamente qué ofrece la empresa, por qué importa y qué deben hacer después.",
        },
        {
          key: "offer",
          title: "Oferta y contenido para clientes",
          desc: "Convierto servicios, productos, FAQs, preguntas de clientes y requisitos de plataformas en contenido claro que explica la oferta, genera confianza y guía al siguiente paso.",
        },
        {
          key: "ai",
          title: "Flujos AI y soporte de automatización",
          desc: "Ayudo a equipos a usar AI de forma práctica en marketing y operaciones diarias: prompts reutilizables, plantillas de workflow, investigación asistida, borradores, organización de FAQ e ideas simples de automatización.",
        },
      ],
    },
    portfolio: {
      label: "Trabajos destacados",
      heading: "Algunos ejemplos de cómo ayudo a pequeñas empresas a presentarse online.",
      caseLabel: "Caso",
      rowProblem: "Problema",
      rowDid: "Qué hice",
      rowDeliverables: "Entregables",
      rowResult: "Resultado",
      items: [
        {
          key: "ski",
          name: "Campamento de esquí inbound — Landing bilingüe",
          tag: "Turismo inbound",
          problem:
            "Un pequeño campamento de esquí en Hokkaido tenía una página básica, pero las familias en el extranjero no podían saber qué incluía, para quién era ni cómo reservar.",
          did: "Reestructuré la página según las dudas de las familias, reescribí el titular y el FAQ, y añadí un flujo de contacto claro.",
          deliverables: "Estructura bilingüe de una página, copy, FAQ, sugerencias de CTA.",
          result: "Las familias podían compartir la página en grupos privados sin más explicación.",
        },
        {
          key: "tour",
          name: "Tour local en Hokkaido — Refresh de listado",
          tag: "Listados",
          problem:
            "Un guía local tenía contenido honesto, pero un título vago y poca claridad en sus propuestas de valor.",
          did: "Reescribí el título, las 3 propuestas principales y la descripción; añadí un FAQ breve y un único CTA enfocado.",
          deliverables: "Nuevo título, propuestas de valor, descripción, FAQ, checklist.",
          result: "El listado se lee como una experiencia concreta y real, no como un post genérico.",
        },
        {
          key: "shop",
          name: "Pequeño negocio — Plan mensual de contenido",
          tag: "Contenido y redes",
          problem: "Una pequeña empresa publicaba de forma irregular y no sabía qué decir cada semana.",
          did: "Armé un plan mensual sobre tres temas simples, redacté borradores de copy y di dirección por plataforma.",
          deliverables: "Plan mensual, borradores de copy, ideas de publicación, revisión ligera.",
          result: "Las publicaciones se volvieron constantes y con una historia clara para nuevos seguidores.",
        },
        {
          key: "site",
          name: "Sitio web bilingüe de una página",
          tag: "Sitio web",
          problem: "Un pequeño operador tenía sus servicios claros, pero nada online que los clientes pudieran leer antes de contactarle.",
          did: "Mapeé la oferta en una sola página, escribí copy bilingüe y diseñé un flujo simple de contacto.",
          deliverables: "Estructura, copy en inglés y chino, sección de CTA y contacto.",
          result: "Las consultas llegaban con más contexto, porque la página ya respondía lo básico.",
        },
      ],
    },
    whyMe: {
      label: "Por qué trabajar conmigo",
      heading: "Cercana a equipos pequeños, manos a la obra y honesta.",
      items: [
        "Una sola persona, un solo punto de contacto — sin capas de agencia.",
        "Basada en Japón, cerca del turismo inbound, los servicios locales y Hokkaido.",
        "Chino nativo, japonés e inglés conversacional — útil para lanzamientos bilingües.",
        "Práctica y ejecución primero — prefiero un v1 claro antes que planear de más.",
        "Pregunto lo que importa antes de escribir, para que el contenido encaje con tu negocio.",
        "Calmada, ordenada y puntual. Respeto los presupuestos y tiempos pequeños.",
      ],
    },
    packages: {
      label: "Opciones de colaboración",
      heading: "Formas flexibles de trabajar juntas.",
      subheading: "No muestro paquetes de bajo precio. El alcance depende del proyecto, el plazo y el nivel de apoyo necesario.",
      fromLabel: "Modo",
      items: [
        {
          key: "remote",
          name: "Soporte remoto part-time",
          price: "Continuo",
          desc: "Para equipos que necesitan ayuda constante con contenido, actualizaciones web, operaciones de marketing, materiales para clientes y ejecución práctica.",
        },
        {
          key: "project",
          name: "Ejecución de marketing por proyecto",
          price: "Proyecto",
          desc: "Para un sitio web, landing page, oferta, flujo de contenido o material para clientes que necesita mejor estructura y ejecución.",
        },
        {
          key: "workflow",
          name: "Setup de flujo AI",
          price: "Flujo",
          desc: "Para equipos que quieren prompts reutilizables, sistemas de contenido, flujos de investigación, organización de FAQ e ideas simples de automatización.",
        },
        {
          key: "sprint",
          name: "Sprint de mejora web y contenido",
          price: "Sprint",
          desc: "Para mejorar páginas, ofertas, descripciones de servicio, flujo de CTA o contenido multilingüe en un periodo enfocado.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      heading: "Hagamos que tu oferta sea",
      headingItalic: "fácil de entender.",
      intro:
        "Cuéntame un poco sobre tu negocio y qué te gustaría mejorar. Suelo responder en menos de un día.",
      cta: "Trabajemos juntas",
      links: [
        { label: "Email", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "Ver perfil" },
        { label: "LinkedIn", value: "Conectar" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    beyondWork: {
      label: "Fuera del trabajo",
      heading: "Fuera del trabajo,",
      headingItalic: "suelo estar en movimiento.",
      body: [
        "Soy entusiasta del fitness y comparto entrenamientos en Xiaohongshu — 11.1K likes & saves y contando.",
        "Juego tenis, esquío los inviernos de Hokkaido y tomo fotos donde sea. Vivir en Sapporo significa que siempre estoy probando pequeños negocios locales — y reescribiendo su copy en mi cabeza.",
      ],
      xhsLabel: "Xiaohongshu",
      xhsCta: "Ver mi perfil",
      xhsUrl: "https://xhslink.com/m/3g0bjokEbea",
    },
    footer: "Soporte de marketing para pequeñas empresas, desde Sapporo, Japón.",
  },
};
