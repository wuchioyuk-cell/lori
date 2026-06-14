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
      packages: "Packages",
      beyondWork: "Beyond",
      contact: "Contact",
      cta: "Let's talk",
      languageLabel: "Language",
    },
    hero: {
      locationTag: "Based in Sapporo, Japan · Remote-friendly",
      headline: "Remote Growth & Content Marketing Support for Small Businesses",
      subheadline:
        "I help small businesses, SaaS teams, and inbound-to-China travelers — with clearer copy, sharper listings, and steady, hands-on execution.",
      ctaServices: "View Services",
      ctaWork: "See Work Examples",
      tags: [
        "Listings & Sales Pages",
        "Landing Pages & Bilingual Copy",
        "SaaS Growth & Ops",
        "Inbound to China",
        "Business Translation EN/ES",
      ],
    },
    about: {
      label: "About",
      heading: "Practical marketing help for",
      headingItalic: "small businesses.",
      paragraphs: [
        "I'm Lori, based in Sapporo, Japan. I work with small businesses and SaaS teams that need clearer marketing — not a big agency, just steady, hands-on support from one person who actually gets things done.",
        "My day-to-day is content, copywriting, simple websites, and platform-style listing structure. I also help inbound travelers experience China through my team on the ground, and offer on-site business translation in English and Spanish for partner visits, trade shows, and cross-border meetings.",
        "Native-level Chinese, with conversational Japanese and English. I keep things honest, organized, and on time.",
      ],
      facts: [
        { k: "Location", v: "Sapporo, JP" },
        { k: "Languages", v: "中 · EN · 日" },
        { k: "Focus", v: "Small business" },
        { k: "Mode", v: "Remote" },
      ],
    },
    services: {
      label: "Services",
      heading: "Four focused ways I can support your business.",
      items: [
        {
          key: "listing",
          title: "Listing & Sales Pages",
          desc: "Sharper titles, clearer selling points, better descriptions, FAQs and CTAs for your products, listings or service pages — plus a short, practical action checklist.",
        },
        {
          key: "web",
          title: "Landing Pages & Bilingual Copy",
          desc: "One-page structure, English or bilingual copy, mobile-first content layout, and CTA / inquiry-flow suggestions — so a stranger understands your offer in 30 seconds.",
        },
        {
          key: "saas",
          title: "SaaS Growth & Operations",
          desc: "Hands-on growth and operations support for SaaS teams: user-acquisition campaigns, content & nurture systems, growth experiments, onboarding copy, monthly performance reporting.",
        },
        {
          key: "concierge",
          title: "Inbound to China & Business Translation",
          desc: "Concierge-style inbound travel to China with my team on the ground — itineraries, partners, and on-the-ground coordination. Plus on-site business translation in English and Spanish for trade shows, partner visits, and cross-border meetings.",
        },
      ],
    },
    portfolio: {
      label: "Featured Work",
      heading: "A few examples of how I help small businesses show up online.",
      caseLabel: "Case",
      rowProblem: "Problem",
      rowDid: "What I Did",
      rowDeliverables: "Deliverables",
      rowResult: "Result",
      items: [
        {
          key: "ski",
          name: "Inbound Ski Camp — Bilingual Landing Page",
          tag: "Inbound Tourism",
          problem:
            "A small Hokkaido ski camp had a basic page but parents abroad couldn't tell what was included, who it was for, or how to book.",
          did: "Restructured the page around parent questions, rewrote the headline and FAQs, and added a clear inquiry flow.",
          deliverables: "One-page bilingual structure, copy, FAQ block, CTA suggestions.",
          result:
            "Parents could share the page inside private groups without needing extra explanation.",
        },
        {
          key: "tour",
          name: "Local Hokkaido Tour — Listing Refresh",
          tag: "Listings",
          problem:
            "A local guide's tour listing had honest content but a vague title and no clear selling points, so it didn't stand out.",
          did: "Rewrote the title, top-three selling points, and description; added a short FAQ and a single, focused CTA.",
          deliverables: "New title, selling-point list, listing description, FAQ, action checklist.",
          result:
            "Listing reads as a real, specific experience instead of a generic activity post.",
        },
        {
          key: "shop",
          name: "Service Business — Monthly Content Plan",
          tag: "Content & Social",
          problem:
            "A small service business posted irregularly and wasn't sure what to talk about week to week.",
          did: "Built a monthly content plan around three simple themes, drafted captions, and gave platform-specific direction.",
          deliverables: "Monthly plan, caption drafts, post ideas, light performance review.",
          result:
            "Posting felt calm and consistent instead of last-minute, with a clearer story for new followers.",
        },
        {
          key: "site",
          name: "Bilingual One-Page Website",
          tag: "Website",
          problem:
            "A small operator had services in their head but nothing online clients could read before reaching out.",
          did: "Mapped the offer into a one-page structure, wrote bilingual copy, and shaped a simple inquiry flow.",
          deliverables: "Page structure, English + Chinese copy, CTA and contact section.",
          result:
            "Inquiries arrived with more context, because the page answered the basics first.",
        },
      ],
    },
    whyMe: {
      label: "Why Work With Me",
      heading: "Small-team friendly, hands-on, honest.",
      items: [
        "One person, one point of contact — no agency layers, no handoffs.",
        "Based in Japan, close to inbound tourism, local services, and Hokkaido.",
        "Native Chinese, conversational Japanese and English — useful for bilingual rollouts.",
        "Practical and execution-first — I'd rather ship a clear v1 than over-plan.",
        "I ask the real questions before writing — so the content actually fits your business.",
        "Calm, organized, on time. I respect small-business budgets and timelines.",
      ],
    },
    packages: {
      label: "Service Packages",
      heading: "Simple packages to start with.",
      subheading: "Based on a $30/hour rate. Custom scopes welcome — these are just a clear starting point.",
      fromLabel: "From",
      items: [
        {
          key: "audit",
          name: "Listing Audit",
          price: "$99",
          desc: "Review one listing or service page; improve title, selling points, description, FAQ, and CTA; provide a short, practical action checklist. (~3-4 hours)",
        },
        {
          key: "sprint",
          name: "Landing Page & Copy Sprint",
          price: "$249",
          desc: "One-page structure; English or bilingual copy; mobile-first content layout; CTA and inquiry flow suggestions. (~8-10 hours)",
        },
        {
          key: "monthly",
          name: "Monthly Content Support",
          price: "$299/month",
          desc: "Monthly content plan (12-15 pieces); captions and post ideas; Instagram / Xiaohongshu direction; basic performance review. (~10-12 hours/month)",
        },
        {
          key: "translate",
          name: "Business Translation (Half-Day)",
          price: "On request",
          desc: "On-site business translation in English or Spanish for half a day (4h) — partner visits, trade shows, cross-border meetings. Available in Japan, China, or online.",
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
    footer: "Small-business marketing support from Sapporo, Japan.",
  },

  zh: {
    htmlLang: "zh-CN",
    nav: {
      home: "首页",
      about: "关于",
      services: "服务",
      portfolio: "案例",
      whyMe: "为什么是我",
      packages: "套餐",
      beyondWork: "工作之外",
      contact: "联系",
      cta: "聊一聊",
      languageLabel: "语言",
    },
    hero: {
      locationTag: "现居日本札幌 · 支持远程",
      headline: "面向小企业的远程增长与内容营销支持",
      subheadline:
        "我帮小企业、SaaS 团队,以及想来中国旅行的入境客户 —— 用更清楚的文案、更利落的商品页,以及稳定、能交付的实操。",
      ctaServices: "查看服务",
      ctaWork: "看案例示例",
      tags: ["商品页与销售页", "落地页与双语文案", "SaaS 增长与操盘", "入境中国", "英 / 西语商业陪同翻译"],
    },
    about: {
      label: "关于",
      heading: "为小企业提供",
      headingItalic: "可落地的营销支持。",
      paragraphs: [
        "我是 Lori,常驻日本札幌。我服务的是需要把营销讲清楚的小企业、SaaS 团队,以及想来中国旅行的入境客户 —— 不是大代理公司,只是一个真的能把事情做完的人,稳定、动手、靠得住。",
        "我日常做的是内容、文案、轻量网站,以及平台风格的商品/服务页结构。也会帮想来中国旅行的入境客户对接我的国内团队,提供从行程到落地的全程接待;另外提供英语 / 西班牙语商业陪同翻译,涵盖合作伙伴拜访、展会和跨境会议。",
        "中文母语,日语和英语可日常沟通。我做事直接、有条理、不拖。",
      ],
      facts: [
        { k: "所在地", v: "日本札幌" },
        { k: "语言", v: "中 · EN · 日" },
        { k: "聚焦", v: "小企业" },
        { k: "模式", v: "远程" },
      ],
    },
    services: {
      label: "服务",
      heading: "四件事,我都做得到位。",
      items: [
        {
          key: "listing",
          title: "商品页与销售页",
          desc: "更准的标题、更利落的卖点、更可读的描述、FAQ 与 CTA —— 配一份简短可执行的优化清单。",
        },
        {
          key: "web",
          title: "落地页与双语文案",
          desc: "单页结构、英文或中英双语文案、移动端优先的内容布局、CTA 与询盘流程建议 —— 陌生人 30 秒看懂你做什么。",
        },
        {
          key: "saas",
          title: "SaaS 增长与操盘",
          desc: "为 SaaS 团队提供增长与代运营式落地支持:用户增长投放、内容与孵化系统、增长实验、注册流程文案、月度数据复盘。",
        },
        {
          key: "concierge",
          title: "入境中国 & 商业陪同翻译",
          desc: "面向想来中国旅行的客户,我的团队在国内提供全程接待与行程落地。同时提供英语 / 西班牙语商业陪同翻译 —— 展会、合作伙伴拜访、跨境会议。",
        },
      ],
    },
    portfolio: {
      label: "案例示例",
      heading: "几个我帮小企业把自己讲清楚的例子。",
      caseLabel: "案例",
      rowProblem: "问题",
      rowDid: "我做了什么",
      rowDeliverables: "交付物",
      rowResult: "结果",
      items: [
        {
          key: "ski",
          name: "入境滑雪营 · 双语落地页",
          tag: "入境旅游",
          problem:
            "一家北海道小型滑雪营有基础页面,但海外家长看不出包含什么、适合谁、怎么报名。",
          did: "围绕家长会问的问题重做了页面结构,重写了主标题和 FAQ,加上了清晰的询盘流程。",
          deliverables: "单页双语结构、文案、FAQ 区块、CTA 建议。",
          result: "家长可以直接把页面发到私群里,不需要额外解释。",
        },
        {
          key: "tour",
          name: "北海道在地游 · 商品页焕新",
          tag: "商品页",
          problem: "本地向导的游玩商品内容真诚,但标题模糊、卖点不清,信息淹没在列表里。",
          did: "重写标题、Top 3 卖点和描述,补上简短的 FAQ,并收敛到一个明确的 CTA。",
          deliverables: "新标题、卖点列表、商品描述、FAQ、行动清单。",
          result: "页面读起来像一次具体的真实体验,而不是一条通用活动帖。",
        },
        {
          key: "shop",
          name: "小型服务业 · 月度内容计划",
          tag: "内容与社媒",
          problem: "一家小型服务业发文不规律,也不确定每周该说什么。",
          did: "围绕三个简单主题搭建月度内容计划,起草文案,并按平台给出具体方向。",
          deliverables: "月度计划、文案初稿、发文 idea、轻量数据回顾。",
          result: "发文从临时抱佛脚变成稳定节奏,新粉丝也能更快理解这是做什么的。",
        },
        {
          key: "site",
          name: "双语单页网站",
          tag: "网站",
          problem: "一位小经营者业务在脑子里,但线上没有任何东西可以给客户先看。",
          did: "把服务梳理成单页结构,写好双语文案,设计一个简单的询盘流程。",
          deliverables: "页面结构、中英文案、CTA 与联系区块。",
          result: "询盘进来时已经带着基本信息,因为页面已经先解释清楚了。",
        },
      ],
    },
    whyMe: {
      label: "为什么是我",
      heading: "适合小团队、动手做、说话算话。",
      items: [
        "一个人对接,没有代理层级,没有信息接力。",
        "人在日本,贴近入境旅游、本地服务和北海道。",
        "中文母语,日语英语日常可用 —— 适合做双语推广。",
        "执行优先,愿意先发一个清晰的 v1,而不是无限规划。",
        "动笔前先问真正该问的问题,内容才贴合业务。",
        "稳、有条理、按时交付,尊重小企业的预算和节奏。",
      ],
    },
    packages: {
      label: "服务套餐",
      heading: "简单的起点套餐。",
      subheading: "按 $30 / 小时计费。可按需定制 —— 下面只是一个清晰的起点。",
      fromLabel: "起价",
      items: [
        {
          key: "audit",
          name: "商品页 / 服务页诊断",
          price: "$99",
          desc: "针对一个商品页或服务页:优化标题、卖点、描述、FAQ 与 CTA,并给出一份简短的行动清单。(约 3-4 小时)",
        },
        {
          key: "sprint",
          name: "落地页与文案冲刺",
          price: "$249",
          desc: "单页结构、英文或双语文案、移动端优先布局、CTA 与询盘流程建议。(约 8-10 小时)",
        },
        {
          key: "monthly",
          name: "月度内容支持",
          price: "$299 / 月",
          desc: "月度内容计划(12-15 条)、文案与发文 idea、Instagram / 小红书方向、基础数据回顾。(约 10-12 小时 / 月)",
        },
        {
          key: "translate",
          name: "商业陪同翻译(半天)",
          price: "面议",
          desc: "英语或西班牙语商业陪同翻译,半天(4 小时)—— 合作伙伴拜访、展会、跨境会议。可在日本、中国现场,也可线上。",
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
    footer: "来自日本札幌的小企业营销支持。",
  },

  ja: {
    htmlLang: "ja",
    nav: {
      home: "ホーム",
      about: "プロフィール",
      services: "サービス",
      portfolio: "実績",
      whyMe: "選ばれる理由",
      packages: "パッケージ",
      beyondWork: "オフタイム",
      contact: "お問い合わせ",
      cta: "話してみる",
      languageLabel: "言語",
    },
    hero: {
      locationTag: "札幌在住・リモート対応",
      headline: "スモールビジネス向け リモートのグロース&コンテンツ支援",
      subheadline:
        "サービスを、お客様がすぐに理解して行動に移せる Web サイト・SNS・商品/サービスページへ。小さなビジネスのために、わかりやすい言葉でお手伝いします。",
      ctaServices: "サービスを見る",
      ctaWork: "実績を見る",
      tags: ["商品ページ & セールス", "LP & バイリンガル", "SaaS グロース & オペ", "中国向けインバウンド", "ビジネス通訳 EN/ES"],
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
      heading: "この 4 つであれば、深く入り込めます。",
      items: [
        {
          key: "listing",
          title: "商品ページ & セールスコピー",
          desc: "タイトル、訴求、説明文、FAQ、CTA を整理し、すぐ動ける短い改善チェックリスト付きでお渡しします。",
        },
        {
          key: "web",
          title: "LP & バイリンガルコピー",
          desc: "ワンページの構成、英語または日中英のコピー、モバイルファーストのレイアウト、CTA / 導線提案。",
        },
        {
          key: "saas",
          title: "SaaS グロース & オペレーション",
          desc: "SaaS チーム向けのグロースと運用支援:ユーザー獲得、コンテンツ / ナーチャリング、グロース実験、オンボーディングコピー、月次レポート。",
        },
        {
          key: "concierge",
          title: "中国向けインバウンド & ビジネス通訳",
          desc: "中国へのインバウンド旅行を、私のチームが現地面接客としてサポート。日程・パートナー・現地調整までお任せください。英語・スペイン語でのビジネス通訳(展示会・パートナー訪問・越境ミーティング)も対応します。",
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
      label: "サービスパッケージ",
      heading: "始めやすいシンプルなパッケージ。",
      subheading: "時給 $30 ベース。カスタムも歓迎 —— あくまで分かりやすい出発点です。",
      fromLabel: "From",
      items: [
        {
          key: "audit",
          name: "リスティング診断",
          price: "$99",
          desc: "1 ページのレビュー:タイトル・訴求・説明文・FAQ・CTA を改善し、短い改善チェックリストを納品。(約 3-4 時間)",
        },
        {
          key: "sprint",
          name: "LP & コピー スプリント",
          price: "$249",
          desc: "ワンページ構成、英語またはバイリンガルのコピー、モバイルファーストのレイアウト、CTA / 導線提案。(約 8-10 時間)",
        },
        {
          key: "monthly",
          name: "月次コンテンツ支援",
          price: "$299 / 月",
          desc: "月次プラン(12-15 本)、キャプション、投稿アイデア、Instagram / 小紅書 の方向性、簡易レビュー。(約 10-12 時間 / 月)",
        },
        {
          key: "translate",
          name: "ビジネス通訳(ハーフデー)",
          price: "応相談",
          desc: "英語またはスペイン語でのビジネス通訳、4 時間。パートナー訪問、展示会、越境ミーティングに対応。日本・中国・オンラインいずれも可。",
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
      packages: "Paquetes",
      beyondWork: "Fuera del trabajo",
      contact: "Contacto",
      cta: "Hablemos",
      languageLabel: "Idioma",
    },
    hero: {
      locationTag: "Basada en Sapporo, Japón · Trabajo remoto",
      headline: "Soporte remoto de crecimiento y marketing de contenido para pequeñas empresas",
      subheadline:
        "Ayudo a pequeñas empresas a convertir sus servicios en sitios web claros, contenido social y páginas de listado que los clientes entienden y sobre los que actúan.",
      ctaServices: "Ver servicios",
      ctaWork: "Ver ejemplos",
      tags: ["Fichas y ventas", "Landing & copy bilingüe", "SaaS growth & ops", "Inbound a China", "Traducción EN/ES"],
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
      heading: "Cuatro áreas en las que puedo dar resultados reales.",
      items: [
        {
          key: "listing",
          title: "Fichas y páginas de venta",
          desc: "Títulos más claros, propuestas de valor afinadas, descripciones, FAQs y CTAs — con una checklist práctica para que actúes de inmediato.",
        },
        {
          key: "web",
          title: "Landing pages y copy bilingüe",
          desc: "Estructura de una página, copy en inglés o bilingüe, layout mobile-first y sugerencias de CTA y flujo de contacto — para que un陌生人 entienda tu oferta en 30 segundos.",
        },
        {
          key: "saas",
          title: "Crecimiento y operaciones SaaS",
          desc: "Soporte práctico de growth y operaciones para equipos SaaS: campañas de adquisición, sistemas de contenido y nurturing, experimentos, copy de onboarding y reporte mensual.",
        },
        {
          key: "concierge",
          title: "Inbound a China y traducción de negocios",
          desc: "Viaje de inbound a China con mi equipo en tierra: itinerarios, socios y coordinación local. Además, traducción presencial de negocios en inglés y español para ferias, visitas a socios y reuniones cross-border.",
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
      label: "Paquetes de servicio",
      heading: "Paquetes simples para empezar.",
      subheading: "Tarifa base $30/hora. Alcance personalizado bienvenido — esto es solo un punto de partida claro.",
      fromLabel: "Desde",
      items: [
        {
          key: "audit",
          name: "Auditoría de ficha o página",
          price: "$99",
          desc: "Revisión de una ficha o página de servicio: mejorar título, propuestas de valor, descripción, FAQ y CTA, con una checklist práctica. (~3-4 horas)",
        },
        {
          key: "sprint",
          name: "Sprint de Landing & Copy",
          price: "$249",
          desc: "Estructura de una página; copy en inglés o bilingüe; layout mobile-first; sugerencias de CTA y flujo de contacto. (~8-10 horas)",
        },
        {
          key: "monthly",
          name: "Soporte mensual de contenido",
          price: "$299 / mes",
          desc: "Plan mensual (12-15 piezas); copy e ideas de publicación; dirección para Instagram / Xiaohongshu; revisión básica. (~10-12 horas/mes)",
        },
        {
          key: "translate",
          name: "Traducción de negocios (medio día)",
          price: "A convenir",
          desc: "Traducción presencial de negocios en inglés o español por medio día (4h): visitas a socios, ferias, reuniones cross-border. Disponible en Japón, China u online.",
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
