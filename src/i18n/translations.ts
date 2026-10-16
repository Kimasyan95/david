export const languages = {
  en: 'EN',
  ru: 'RU',
  ka: 'KA',
  hy: 'HY',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ru';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'David Babertyan',
      role: 'Video Editor',
      tagline: 'I create engaging videos with dynamic subtitles and sharp editing that capture attention from the first second.',
      cta: 'See My Work',
      contact: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      subtitle: 'David Babertyan — Video Editor',
      p1: 'YouTube editing — long-form videos, reviews, entertainment and educational content that keeps viewers until the end.',
      p2: 'YouTube Shorts & TikTok — dynamic short-form content with effects, subtitles and sound design that drives engagement.',
      p3: 'Thumbnail creation — eye-catching YouTube covers that stand out and make viewers click.',
      p4: 'I\'ve worked with 5–6 channels including US-focused ones. I use CapCut and constantly improve my craft.',
      tools: 'Tools & Skills',
      skillsList: ['CapCut', 'Video Editing', 'YouTube', 'TikTok', 'Shorts & Reels', 'Subtitles', 'Thumbnails', 'Sound Design'],
    },
    work: {
      title: 'My Work',
      subtitle: 'Selected videos',
      viewOnYoutube: 'Watch on YouTube',
      viewOnTiktok: 'Watch on TikTok',
      youtube: 'YouTube',
      tiktok: 'TikTok',
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Have a project in mind? Let\'s talk.',
      telegram: 'Write on Telegram',
      or: 'or',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      work: 'Работы',
      contact: 'Контакт',
    },
    hero: {
      greeting: 'Привет, я',
      name: 'Давид Баберцян',
      role: 'Видеомонтажёр',
      tagline: 'Я видеомонтажёр, который помогает авторам, блогерам и бизнесу создавать качественный видеоконтент для социальных сетей.',
      cta: 'Смотреть работы',
      contact: 'Написать мне',
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Немного о том, кто я',
      p1: 'YouTube — монтаж длинных видео, обзоров, развлекательного и образовательного контента, который удерживает зрителя до конца.',
      p2: 'YouTube Shorts, TikTok и Reels — динамичный монтаж с эффектами, субтитрами и звуковым оформлением.',
      p3: 'Превью — привлекательные обложки для YouTube, которые выделяют видео и мотивируют нажать.',
      p4: 'Работал с 5–6 каналами, в том числе ориентированными на американскую аудиторию. Использую CapCut.',
      tools: 'Инструменты и навыки',
      skillsList: ['CapCut', 'Видеомонтаж', 'YouTube', 'TikTok', 'Shorts & Reels', 'Субтитры', 'Превью', 'Саунд-дизайн'],
    },
    work: {
      title: 'Мои работы',
      subtitle: 'Избранные видео',
      viewOnYoutube: 'Смотреть на YouTube',
      viewOnTiktok: 'Смотреть на TikTok',
      youtube: 'YouTube',
      tiktok: 'TikTok',
    },
    contact: {
      title: 'Давай работать вместе',
      subtitle: 'Есть проект? Давай обсудим.',
      telegram: 'Написать в Telegram',
      or: 'или',
    },
    footer: {
      rights: 'Все права защищены',
    },
  },
  ka: {
    nav: {
      home: 'მთავარი',
      about: 'ჩემს შესახებ',
      work: 'სამუშაოები',
      contact: 'კონტაქტი',
    },
    hero: {
      greeting: 'გამარჯობა, მე ვარ',
      name: 'დავით ბაბერციანი',
      role: 'ვიდეო მონტაჟიორი',
      tagline: 'ვქმნი მიმზიდველ ვიდეოებს დინამიური სუბტიტრებითა და მკვეთრი მონტაჟით, რომლებიც პირველივე წამიდან იპყრობს ყურადღებას.',
      cta: 'ნამუშევრების ნახვა',
      contact: 'დამიკავშირდი',
    },
    about: {
      title: 'ჩემს შესახებ',
      subtitle: 'ცოტა რამ ჩემ შესახებ',
      p1: 'YouTube — გრძელი ვიდეოების, მიმოხილვების და საგანმანათლებლო კონტენტის მონტაჟი, რომელიც მაყურებელს ბოლომდე ინარჩუნებს.',
      p2: 'YouTube Shorts, TikTok და Reels — დინამიური მონტაჟი ეფექტებით, სუბტიტრებით და საუნდ-დიზაინით.',
      p3: 'გარეკანები — YouTube-ის მიმზიდველი გარეკანები, რომლებიც გამოირჩევა და მაყურებელს დაჭერას უბიძგებს.',
      p4: '5–6 არხთან ვიმუშავე, მათ შორის ამერიკულ აუდიტორიაზე ორიენტირებულებთან. ვმუშაობ CapCut-ში.',
      tools: 'ინსტრუმენტები და უნარები',
      skillsList: ['CapCut', 'ვიდეო მონტაჟი', 'YouTube', 'TikTok', 'Shorts & Reels', 'სუბტიტრები', 'გარეკანები', 'საუნდ-დიზაინი'],
    },
    work: {
      title: 'ჩემი სამუშაოები',
      subtitle: 'რჩეული ვიდეოები',
      viewOnYoutube: 'YouTube-ზე ნახვა',
      viewOnTiktok: 'TikTok-ზე ნახვა',
      youtube: 'YouTube',
      tiktok: 'TikTok',
    },
    contact: {
      title: 'ვიმუშაოთ ერთად',
      subtitle: 'გაქვთ პროექტი? ვისაუბროთ.',
      telegram: 'Telegram-ში მიწერა',
      or: 'ან',
    },
    footer: {
      rights: 'ყველა უფლება დაცულია',
    },
  },
  hy: {
    nav: {
      home: 'Գլխավոր',
      about: 'Իմ մասին',
      work: 'Աշխատանքներ',
      contact: 'Կապ',
    },
    hero: {
      greeting: 'Բարև, ես եմ',
      name: 'Դավիթ Բաբերցյան',
      role: 'Վիդեո մոնտաժ',
      tagline: 'Ստեղծում եմ գրավիչ տեսանյութեր դինամիկ ենթագրերով և ճշգրիտ մոնտաժով, որոնք ուշադրություն են գրավում առաջին վայրկյանից։',
      cta: 'Տեսնել աշխատանքները',
      contact: 'Կապ հաստատել',
    },
    about: {
      title: 'Իմ մասին',
      subtitle: 'Մի քիչ իմ մասին',
      p1: 'YouTube — երկար տեսանյութերի, ակնարկների, ժամանցային և կրթական կոնտենտի մոնտաժ, որը պահում է դիտողին մինչև վերջ։',
      p2: 'YouTube Shorts, TikTok և Reels — դինամիկ մոնտաժ էֆեկտներով, ենթագրերով և ձայնային դիզայնով։',
      p3: 'Կափարիչներ — YouTube-ի գրավիչ շապիկներ, որոնք առանձնանում են և մղում են սեղմելու։',
      p4: 'Աշխատել եմ 5–6 ուղիների հետ, այդ թվում ամերիկյան լսարանի վրա կենտրոնացվածների։ Օգտագործում եմ CapCut։',
      tools: 'Գործիքներ և հմտություններ',
      skillsList: ['CapCut', 'Վիդեո մոնտաժ', 'YouTube', 'TikTok', 'Shorts & Reels', 'Ենթագրեր', 'Կափարիչներ', 'Ձայնային դիզայն'],
    },
    work: {
      title: 'Իմ աշխատանքները',
      subtitle: 'Ընտրված տեսանյութեր',
      viewOnYoutube: 'Դիտել YouTube-ում',
      viewOnTiktok: 'Դիտել TikTok-ում',
      youtube: 'YouTube',
      tiktok: 'TikTok',
    },
    contact: {
      title: 'Եկեք աշխատենք միասին',
      subtitle: 'Ունե՞ք նախագիծ։ Եկեք քննարկենք։',
      telegram: 'Գրել Telegram-ում',
      or: 'կամ',
    },
    footer: {
      rights: 'Բոլոր իրավունքները պաշտպանված են',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    if (result === undefined) {
      let fallback: any = translations[defaultLang];
      for (const k of keys) {
        fallback = fallback?.[k];
      }
      return fallback ?? key;
    }
    return result;
  };
}
