// Multi-language content for Caiyu Wu's portfolio.
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
export type Project = {
  key: string;
  name: string;
  role: string;
  did: string;
  result: string;
  tag: string;
};
export type Testimonial = { quote: string; who: string };

export type Dict = {
  htmlLang: string;
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    workingStyle: string;
    testimonials: string;
    contact: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    locationTag: string;
    title1: string;
    name: string;
    title2: string;
    subtitle: string;
    ctaWork: string;
    ctaContact: string;
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
    caseLabel: string; // e.g. "Case"
    rowRole: string;
    rowDid: string;
    rowResult: string;
    items: Project[];
  };
  workingStyle: {
    label: string;
    heading: string;
    items: string[];
  };
  testimonials: {
    label: string;
    heading: string;
    items: Testimonial[];
  };
  contact: {
    label: string;
    heading: string;
    headingItalic: string;
    intro: string;
    cta: string;
    links: { label: string; value: string }[];
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
      portfolio: "Portfolio",
      workingStyle: "Working Style",
      testimonials: "Testimonials",
      contact: "Contact",
      cta: "Let's talk",
      languageLabel: "Language",
    },
    hero: {
      locationTag: "Based in Sapporo, Japan · Open to remote work",
      title1: "Hi, I'm",
      name: "Caiyu Wu",
      title2: "— a cross-cultural product & content operator based in Japan.",
      subtitle:
        "I help brands, travel businesses, and digital projects turn ideas into clear products, persuasive content, and launch-ready online experiences.",
      ctaWork: "View My Work",
      ctaContact: "Work With Me",
      tags: [
        "Product Operations",
        "Travel Product Design",
        "Content Strategy",
        "E-commerce Listing",
        "AI-assisted Workflow",
        "Multilingual Communication",
      ],
    },
    about: {
      label: "About Me",
      heading: "A warm operator who turns messy ideas into",
      headingItalic: "structured execution.",
      paragraphs: [
        "I'm based in Sapporo, Japan, working as a travel product manager and operator in a Japanese and international environment. Chinese is my native language, and I work comfortably across Mandarin, English, and Japanese.",
        "My experience spans travel product planning, OTA listings, social media content, e-commerce visuals, website planning, and AI-assisted productivity. My strength is not only writing content — it's understanding the business goal behind the content, and shaping the delivery so that goal actually lands.",
        "People who work with me tend to describe me as warm, responsible, and proactive — good at seeing other people's strengths, and good at turning scattered ideas into structured, executable outputs.",
      ],
      facts: [
        { k: "Location", v: "Sapporo, JP" },
        { k: "Languages", v: "中 · EN · 日 · ES" },
        { k: "Role", v: "PM / Operator" },
        { k: "Mode", v: "Remote-ready" },
      ],
    },
    services: {
      label: "What I Can Help With",
      heading: "Five focused ways I plug into your team.",
      items: [
        {
          key: "travel",
          title: "Travel Product & OTA Listing",
          desc: "Route planning, product descriptions, platform listing optimization, and customer-facing copy that actually converts curious browsers into bookings.",
        },
        {
          key: "content",
          title: "Content & Social Media",
          desc: "Xiaohongshu, Instagram and Threads style content, campaign ideas, and bilingual adaptation that keeps tone and intent intact across markets.",
        },
        {
          key: "ecom",
          title: "E-commerce Listing Support",
          desc: "Selling-point structures, image concept planning, and marketplace-ready listing materials for platforms like Ozon and TikTok Shop.",
        },
        {
          key: "web",
          title: "Website & Brand Structure",
          desc: "Landing page architecture, service page planning, website copy, and multilingual content layout for global-facing brands.",
        },
        {
          key: "ai",
          title: "AI Workflow Support",
          desc: "Repeatable prompt systems and AI tooling to speed up content production, research, planning, and daily operations without losing taste.",
        },
      ],
    },
    portfolio: {
      label: "Selected Work",
      heading: "Recent projects across travel, content & commerce.",
      caseLabel: "Case",
      rowRole: "My Role",
      rowDid: "What I Did",
      rowResult: "Result / Value",
      items: [
        {
          key: "hokkaido",
          name: "Hokkaido Travel Product Planning",
          role: "Product Operator & Planner",
          did: "Designed private car tours, ski camp products, and seasonal travel routes for international travelers, building the full product brief from selling points to itinerary.",
          result:
            "Travel products went from rough internal ideas to ready-to-publish offers across Chinese and English channels.",
          tag: "Travel",
        },
        {
          key: "ski",
          name: "Japan Youth Ski Camp Campaign",
          role: "Content & Product Lead",
          did: "Crafted parent-friendly product messaging for a winter ski camp targeting Chinese-speaking families in Japan, from headline to FAQ.",
          result:
            "Created a consistent, trust-building narrative parents could share inside private group chats without further explanation.",
          tag: "Campaign",
        },
        {
          key: "ecom",
          name: "E-commerce Visual Planning",
          role: "Listing & Visual Planner",
          did: "Planned marketplace listing images and selling-point structures for products on Ozon and TikTok Shop, briefing visuals end-to-end.",
          result:
            "Listings looked native to each marketplace and gave operations teams a reusable visual template.",
          tag: "E-commerce",
        },
        {
          key: "multi",
          name: "Multilingual Website Planning",
          role: "Information Architect",
          did: "Structured a tourism company website across Simplified Chinese, English, Japanese, Traditional Chinese, Vietnamese, Thai, and Spanish.",
          result:
            "One coherent site spine that respected each language while keeping the brand voice consistent.",
          tag: "Web",
        },
        {
          key: "ai",
          name: "AI-assisted Content System",
          role: "Workflow Designer",
          did: "Built repeatable prompt workflows covering content, listing copy, and visual direction for daily operations.",
          result:
            "Cut routine content drafting time meaningfully while keeping outputs on-brand and review-ready.",
          tag: "AI",
        },
      ],
    },
    workingStyle: {
      label: "My Working Style",
      heading: "How I show up when we work together.",
      items: [
        "I ask the right questions before creating.",
        "I care about both business goals and user emotions.",
        "I am fast, organized, and willing to iterate.",
        "I can work across cultures and platforms.",
        "I turn unclear ideas into structured outputs.",
      ],
    },
    testimonials: {
      label: "Kind Words",
      heading: "What collaborators say.",
      items: [
        {
          quote:
            "Caiyu is proactive, thoughtful, and very good at turning scattered ideas into practical execution.",
          who: "Project collaborator",
        },
        {
          quote:
            "Working with her feels easy because she understands both content and business needs.",
          who: "Travel industry partner",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's build something",
      headingItalic: "clear & warm",
      intro:
        "Whether it's a travel product, a listing rebuild, a website refresh, or an AI workflow — I'd love to hear what you're working on.",
      cta: "Let's Work Together",
      links: [
        { label: "Email", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "View profile" },
        { label: "LinkedIn", value: "Connect with me" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    footer: "Crafted with care in Sapporo, Japan.",
  },

  zh: {
    htmlLang: "zh-CN",
    nav: {
      home: "首页",
      about: "关于我",
      services: "服务",
      portfolio: "作品",
      workingStyle: "工作方式",
      testimonials: "客户评价",
      contact: "联系我",
      cta: "聊一聊",
      languageLabel: "语言",
    },
    hero: {
      locationTag: "现居日本札幌 · 可远程合作",
      title1: "你好，我是",
      name: "吴采宥 Caiyu Wu",
      title2: "—— 一名常驻日本的跨文化产品与内容运营。",
      subtitle:
        "我帮品牌、旅游业务和数字项目，把模糊的想法变成清晰的产品、有说服力的内容，以及可以上线的线上体验。",
      ctaWork: "查看作品",
      ctaContact: "与我合作",
      tags: [
        "产品运营",
        "旅游产品设计",
        "内容策略",
        "电商商品页",
        "AI 辅助工作流",
        "多语种沟通",
      ],
    },
    about: {
      label: "关于我",
      heading: "一个温暖的操盘人，把零散的想法整理成",
      headingItalic: "可执行的结构。",
      paragraphs: [
        "我常驻日本札幌，在日本与国际化的工作环境中担任旅游产品经理与运营。中文是我的母语，我能在中文、英文和日文之间自如切换。",
        "我的经验覆盖旅游产品规划、OTA 商品上架、社媒内容、电商视觉、官网内容架构，以及 AI 辅助生产力。我的优势不仅是写内容，更是理解内容背后的商业目标，并把交付方式设计到目标真的能落地。",
        "和我合作过的人通常会说我温暖、靠谱、主动 —— 善于发现别人的长处，也善于把零散的想法整理成结构化、可执行的产出。",
      ],
      facts: [
        { k: "所在地", v: "日本札幌" },
        { k: "语言", v: "中 · EN · 日 · ES" },
        { k: "身份", v: "PM / 运营" },
        { k: "模式", v: "远程优先" },
      ],
    },
    services: {
      label: "我能怎么帮你",
      heading: "五个我可以深度参与的方向。",
      items: [
        {
          key: "travel",
          title: "旅游产品与 OTA 上架",
          desc: "路线规划、产品描述、平台上架优化，以及真正能把好奇浏览者转化为预订的对外文案。",
        },
        {
          key: "content",
          title: "内容与社媒",
          desc: "小红书、Instagram、Threads 风格内容、活动 idea，以及跨市场仍能保持语气与意图的双语改写。",
        },
        {
          key: "ecom",
          title: "电商商品页支持",
          desc: "卖点结构、主图与配图概念、面向 Ozon、TikTok Shop 等平台可直接使用的上架素材规划。",
        },
        {
          key: "web",
          title: "官网与品牌结构",
          desc: "落地页结构、服务页规划、官网文案，以及面向国际客户的多语种内容布局。",
        },
        {
          key: "ai",
          title: "AI 工作流支持",
          desc: "可复用的 Prompt 体系与 AI 工具组合，让内容生产、调研、规划与日常运营更快，又不失审美。",
        },
      ],
    },
    portfolio: {
      label: "精选项目",
      heading: "近期在旅游、内容与电商的项目。",
      caseLabel: "案例",
      rowRole: "我的角色",
      rowDid: "我做了什么",
      rowResult: "结果 / 价值",
      items: [
        {
          key: "hokkaido",
          name: "北海道旅游产品规划",
          role: "产品运营 & 规划",
          did: "为国际旅客设计包车线路、滑雪营产品与季节性旅行路线，从卖点到行程构建完整的产品 brief。",
          result: "旅游产品从内部粗糙想法，变成了在中英渠道都可以直接发布的成熟方案。",
          tag: "旅游",
        },
        {
          key: "ski",
          name: "日本青少年滑雪营 campaign",
          role: "内容与产品负责",
          did: "为面向在日华语家庭的冬季滑雪营撰写从主标题到 FAQ 的家长向产品叙述。",
          result: "形成了一套家长可以在私域群里直接转发、不需要额外解释的可信叙述。",
          tag: "Campaign",
        },
        {
          key: "ecom",
          name: "电商视觉规划",
          role: "上架与视觉规划",
          did: "为 Ozon 和 TikTok Shop 上的商品规划商品图与卖点结构，并完成端到端的视觉 brief。",
          result: "商品页在各平台都看起来像原生内容，运营团队也获得了可复用的视觉模板。",
          tag: "电商",
        },
        {
          key: "multi",
          name: "多语种官网规划",
          role: "信息架构",
          did: "为一家旅游公司搭建简体中文、英语、日语、繁体中文、越南语、泰语和西班牙语的官网结构。",
          result: "形成了一套尊重各语言习惯、又保持统一品牌语气的网站骨架。",
          tag: "官网",
        },
        {
          key: "ai",
          name: "AI 辅助内容体系",
          role: "工作流设计",
          did: "构建覆盖内容、商品文案与视觉方向的可复用 Prompt 工作流。",
          result: "显著缩短日常内容初稿时间，同时保持调性一致且可直接送审。",
          tag: "AI",
        },
      ],
    },
    workingStyle: {
      label: "我的工作方式",
      heading: "合作时，你会看到我这样出现。",
      items: [
        "动手前会先问对的问题。",
        "既看重业务目标，也在意用户的感受。",
        "节奏快、有条理、愿意持续迭代。",
        "能在不同文化与平台间穿梭。",
        "把模糊的想法整理成结构化的产出。",
      ],
    },
    testimonials: {
      label: "他们这样说",
      heading: "合作过的人怎么评价。",
      items: [
        {
          quote: "采宥主动、细致，特别擅长把零散的想法变成真正可以执行的方案。",
          who: "项目合作者",
        },
        {
          quote: "和她合作很省心，因为她同时理解内容和业务的需求。",
          who: "旅游行业合作伙伴",
        },
      ],
    },
    contact: {
      label: "联系",
      heading: "一起做一些",
      headingItalic: "清晰又温暖",
      intro:
        "不论是旅游产品、商品页重构、官网焕新还是 AI 工作流 —— 我都很想听听你正在做什么。",
      cta: "一起合作",
      links: [
        { label: "邮箱", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "查看主页" },
        { label: "LinkedIn", value: "加我联系" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    footer: "在日本札幌，用心打磨。",
  },

  ja: {
    htmlLang: "ja",
    nav: {
      home: "ホーム",
      about: "プロフィール",
      services: "サービス",
      portfolio: "実績",
      workingStyle: "仕事の進め方",
      testimonials: "お客様の声",
      contact: "お問い合わせ",
      cta: "話してみる",
      languageLabel: "言語",
    },
    hero: {
      locationTag: "札幌在住・リモートワーク対応",
      title1: "はじめまして、",
      name: "Caiyu Wu（呉 采宥）",
      title2: "—— 日本を拠点とするクロスカルチャー プロダクト&コンテンツ運用担当です。",
      subtitle:
        "ブランド、旅行業、デジタルプロジェクトのアイデアを、わかりやすいプロダクト、伝わるコンテンツ、公開できるオンライン体験に変えるお手伝いをしています。",
      ctaWork: "実績を見る",
      ctaContact: "一緒に働く",
      tags: [
        "プロダクト運営",
        "旅行商品設計",
        "コンテンツ戦略",
        "EC 商品ページ",
        "AI ワークフロー",
        "多言語コミュニケーション",
      ],
    },
    about: {
      label: "プロフィール",
      heading: "ばらばらなアイデアを",
      headingItalic: "実行できる形に整える運用担当。",
      paragraphs: [
        "札幌を拠点に、日本と国際的な環境で旅行プロダクトマネージャー兼運用担当として働いています。母語は中国語で、中国語・英語・日本語を行き来しながら仕事をしています。",
        "経験領域は、旅行商品の企画、OTA 出品、SNS コンテンツ、EC のビジュアル、Web サイト設計、AI を活用した生産性向上など。強みは文章を書くことだけではなく、その背景にあるビジネスゴールを理解し、そのゴールが実際に着地するように届け方を設計できることです。",
        "一緒に仕事をした人からは、温かく、責任感があり、主体的だと言われます。相手の強みを見つけるのが得意で、散らばったアイデアを構造化された実行可能なアウトプットに変えるのが得意です。",
      ],
      facts: [
        { k: "拠点", v: "札幌, 日本" },
        { k: "言語", v: "中 · EN · 日 · ES" },
        { k: "ロール", v: "PM / 運用" },
        { k: "形態", v: "リモート可" },
      ],
    },
    services: {
      label: "できること",
      heading: "深く入り込めるのは、この 5 つの領域。",
      items: [
        {
          key: "travel",
          title: "旅行商品 & OTA 出品",
          desc: "ルート設計、商品説明、プラットフォーム出品の最適化。閲覧者を実際の予約に変える顧客向けコピーをつくります。",
        },
        {
          key: "content",
          title: "コンテンツ & SNS",
          desc: "小紅書、Instagram、Threads 向けの企画、キャンペーンアイデア、市場をまたいでもトーンと意図を保つ多言語リライト。",
        },
        {
          key: "ecom",
          title: "EC 商品ページ支援",
          desc: "売りどころの構造、画像コンセプト、Ozon や TikTok Shop ですぐ使える出品素材の設計。",
        },
        {
          key: "web",
          title: "Web サイト & ブランド構造",
          desc: "ランディングページの骨格、サービスページの設計、Web コピー、グローバル向けの多言語コンテンツ配置。",
        },
        {
          key: "ai",
          title: "AI ワークフロー支援",
          desc: "再利用できるプロンプト体系と AI ツールの組み合わせで、コンテンツ制作・調査・運用を高速化。それでも品位は損ないません。",
        },
      ],
    },
    portfolio: {
      label: "主な実績",
      heading: "旅行・コンテンツ・コマースの最近のプロジェクト。",
      caseLabel: "Case",
      rowRole: "ロール",
      rowDid: "やったこと",
      rowResult: "成果 / 価値",
      items: [
        {
          key: "hokkaido",
          name: "北海道 旅行商品の企画",
          role: "プロダクト運用・企画",
          did: "国際旅客向けに、貸切ツアー、スキーキャンプ、シーズン別ルートを設計し、売りどころから行程まで商品ブリーフを構築。",
          result: "社内の粗いアイデアから、中国語・英語チャネルで即公開できる商品へと整いました。",
          tag: "Travel",
        },
        {
          key: "ski",
          name: "日本ジュニア スキーキャンプ キャンペーン",
          role: "コンテンツ & プロダクト リード",
          did: "在日中国語ファミリー向けの冬季スキーキャンプについて、見出しから FAQ まで保護者目線の商品メッセージを設計。",
          result: "保護者がプライベートグループ内でそのままシェアできる、信頼できる物語が出来上がりました。",
          tag: "Campaign",
        },
        {
          key: "ecom",
          name: "EC ビジュアル企画",
          role: "出品 & ビジュアル設計",
          did: "Ozon と TikTok Shop の商品について、画像と売りどころの構造を設計し、ビジュアルをエンドツーエンドでブリーフ。",
          result: "各マーケットでネイティブに見える商品ページと、運営チームが使い回せるテンプレートが残りました。",
          tag: "E-commerce",
        },
        {
          key: "multi",
          name: "多言語 Web サイト設計",
          role: "情報設計",
          did: "観光会社の Web サイトを簡体字中国語、英語、日本語、繁体字中国語、ベトナム語、タイ語、スペイン語で構造化。",
          result: "各言語の習慣を尊重しつつ、ブランドの語り口を統一できる骨格を作りました。",
          tag: "Web",
        },
        {
          key: "ai",
          name: "AI 活用 コンテンツ体制",
          role: "ワークフロー設計",
          did: "コンテンツ、出品コピー、ビジュアル方針をカバーする再利用可能なプロンプト ワークフローを構築。",
          result: "日常のコンテンツ初稿の時間を大きく短縮しつつ、トーンとレビュー品質を維持できました。",
          tag: "AI",
        },
      ],
    },
    workingStyle: {
      label: "仕事の進め方",
      heading: "一緒に働くとき、私はこう現れます。",
      items: [
        "作る前に、まず正しい問いを立てます。",
        "ビジネスゴールも、ユーザーの感情も大切にします。",
        "速く、整理されていて、繰り返し改善できます。",
        "文化やプラットフォームをまたいで動けます。",
        "曖昧なアイデアを、構造化されたアウトプットに変えます。",
      ],
    },
    testimonials: {
      label: "いただいた言葉",
      heading: "コラボレーターからのコメント。",
      items: [
        {
          quote: "采宥さんは主体的で丁寧、散らばったアイデアを実行に変えるのがとても上手です。",
          who: "プロジェクト共同担当者",
        },
        {
          quote: "コンテンツとビジネス、両方を理解してくれるので、一緒に仕事をして本当に楽です。",
          who: "旅行業界のパートナー",
        },
      ],
    },
    contact: {
      label: "お問い合わせ",
      heading: "一緒に、",
      headingItalic: "わかりやすく、あたたかい",
      intro:
        "旅行商品、出品ページの作り直し、Web サイトのリニューアル、AI ワークフロー —— あなたが今取り組んでいることをぜひ聞かせてください。",
      cta: "一緒に働く",
      links: [
        { label: "メール", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "プロフィールを見る" },
        { label: "LinkedIn", value: "つながる" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    footer: "札幌から、ていねいに。",
  },

  es: {
    htmlLang: "es",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      portfolio: "Portafolio",
      workingStyle: "Forma de trabajar",
      testimonials: "Testimonios",
      contact: "Contacto",
      cta: "Hablemos",
      languageLabel: "Idioma",
    },
    hero: {
      locationTag: "Basada en Sapporo, Japón · Disponible para trabajo remoto",
      title1: "Hola, soy",
      name: "Caiyu Wu",
      title2: "— operadora intercultural de producto y contenido, con base en Japón.",
      subtitle:
        "Ayudo a marcas, empresas de viajes y proyectos digitales a convertir ideas en productos claros, contenido persuasivo y experiencias online listas para lanzar.",
      ctaWork: "Ver mi trabajo",
      ctaContact: "Trabajemos juntos",
      tags: [
        "Operaciones de producto",
        "Diseño de producto turístico",
        "Estrategia de contenido",
        "Fichas de e-commerce",
        "Flujos con IA",
        "Comunicación multilingüe",
      ],
    },
    about: {
      label: "Sobre mí",
      heading: "Una operadora cercana que convierte ideas dispersas en",
      headingItalic: "ejecución estructurada.",
      paragraphs: [
        "Vivo en Sapporo, Japón, y trabajo como product manager y operadora de productos turísticos en un entorno japonés e internacional. Mi lengua materna es el chino y me muevo con soltura entre mandarín, inglés y japonés.",
        "Mi experiencia abarca planificación de productos de viaje, fichas en OTAs, contenido para redes sociales, visuales de e-commerce, estructura de sitios web y productividad asistida por IA. Mi fortaleza no es solo escribir contenido: es entender el objetivo de negocio detrás del contenido y diseñar la entrega para que ese objetivo realmente aterrice.",
        "Quienes han trabajado conmigo suelen describirme como cercana, responsable y proactiva — buena para ver las fortalezas de las demás personas y para convertir ideas dispersas en entregables estructurados y ejecutables.",
      ],
      facts: [
        { k: "Ubicación", v: "Sapporo, JP" },
        { k: "Idiomas", v: "中 · EN · 日 · ES" },
        { k: "Rol", v: "PM / Operadora" },
        { k: "Modalidad", v: "Remoto" },
      ],
    },
    services: {
      label: "En qué puedo ayudarte",
      heading: "Cinco formas concretas en las que me integro a tu equipo.",
      items: [
        {
          key: "travel",
          title: "Producto turístico y fichas en OTAs",
          desc: "Planificación de rutas, descripciones de producto, optimización de fichas y copy orientado al cliente que realmente convierte curiosos en reservas.",
        },
        {
          key: "content",
          title: "Contenido y redes sociales",
          desc: "Contenido tipo Xiaohongshu, Instagram y Threads, ideas de campañas y adaptación bilingüe que mantiene tono e intención al cruzar mercados.",
        },
        {
          key: "ecom",
          title: "Fichas de e-commerce",
          desc: "Estructura de propuestas de valor, conceptos visuales y materiales listos para marketplaces como Ozon y TikTok Shop.",
        },
        {
          key: "web",
          title: "Sitio web y arquitectura de marca",
          desc: "Estructura de landings, páginas de servicio, copy del sitio y contenido multilingüe para marcas con vocación internacional.",
        },
        {
          key: "ai",
          title: "Flujos de trabajo con IA",
          desc: "Sistemas de prompts reutilizables y herramientas de IA para acelerar contenido, investigación, planificación y operaciones sin perder buen gusto.",
        },
      ],
    },
    portfolio: {
      label: "Trabajos seleccionados",
      heading: "Proyectos recientes en viajes, contenido y e-commerce.",
      caseLabel: "Caso",
      rowRole: "Mi rol",
      rowDid: "Qué hice",
      rowResult: "Resultado / Valor",
      items: [
        {
          key: "hokkaido",
          name: "Productos turísticos en Hokkaido",
          role: "Product Operator & Planner",
          did: "Diseñé tours privados, campamentos de esquí y rutas estacionales para viajeros internacionales, construyendo el brief completo del producto, desde propuestas de valor hasta itinerarios.",
          result:
            "Los productos pasaron de ideas internas rudimentarias a ofertas listas para publicarse en canales en chino e inglés.",
          tag: "Viajes",
        },
        {
          key: "ski",
          name: "Campaña de campamentos de esquí para jóvenes en Japón",
          role: "Contenido y producto",
          did: "Creé mensajes pensados para familias hispanas y chinas en Japón sobre un campamento de esquí de invierno, desde el titular hasta las FAQ.",
          result:
            "Una narrativa consistente y confiable que las familias podían compartir en grupos privados sin más explicación.",
          tag: "Campaña",
        },
        {
          key: "ecom",
          name: "Planificación visual para e-commerce",
          role: "Listing & Visual Planner",
          did: "Planifiqué imágenes y estructuras de propuesta de valor para fichas en Ozon y TikTok Shop, con briefs visuales completos.",
          result:
            "Fichas que se veían nativas de cada marketplace y dejaron una plantilla visual reutilizable para el equipo de operaciones.",
          tag: "E-commerce",
        },
        {
          key: "multi",
          name: "Planificación de sitio web multilingüe",
          role: "Arquitecta de información",
          did: "Estructuré el sitio de una empresa turística en chino simplificado, inglés, japonés, chino tradicional, vietnamita, tailandés y español.",
          result:
            "Una columna vertebral coherente que respetaba cada idioma y mantenía la voz de marca consistente.",
          tag: "Web",
        },
        {
          key: "ai",
          name: "Sistema de contenido asistido por IA",
          role: "Diseñadora de flujos",
          did: "Construí flujos de prompts reutilizables para contenido, copy de fichas y dirección visual del día a día.",
          result:
            "Reduje significativamente el tiempo de borradores diarios manteniendo tono y calidad listos para revisión.",
          tag: "IA",
        },
      ],
    },
    workingStyle: {
      label: "Mi forma de trabajar",
      heading: "Así aparezco cuando trabajamos juntas.",
      items: [
        "Antes de crear, hago las preguntas correctas.",
        "Cuido tanto los objetivos de negocio como las emociones del usuario.",
        "Soy rápida, organizada y dispuesta a iterar.",
        "Sé trabajar entre culturas y plataformas distintas.",
        "Convierto ideas confusas en entregables estructurados.",
      ],
    },
    testimonials: {
      label: "Palabras amables",
      heading: "Lo que dicen quienes han colaborado conmigo.",
      items: [
        {
          quote:
            "Caiyu es proactiva, atenta y muy buena convirtiendo ideas dispersas en ejecución concreta.",
          who: "Colaborador de proyecto",
        },
        {
          quote: "Trabajar con ella es sencillo porque entiende tanto el contenido como el negocio.",
          who: "Socio de la industria turística",
        },
      ],
    },
    contact: {
      label: "Contacto",
      heading: "Construyamos algo",
      headingItalic: "claro y cálido",
      intro:
        "Ya sea un producto de viaje, una ficha, un sitio web o un flujo de IA — me encantaría escuchar en qué estás trabajando.",
      cta: "Trabajemos juntas",
      links: [
        { label: "Email", value: "wuchioyuk@gmail.com" },
        { label: "Upwork", value: "Ver perfil" },
        { label: "LinkedIn", value: "Conectar" },
        { label: "Instagram", value: "@portfolio" },
      ],
    },
    footer: "Hecho con cariño en Sapporo, Japón.",
  },
};
