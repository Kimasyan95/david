export const languages = {
  en: 'EN',
  ru: 'RU',
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
      name: 'Davo',
      role: 'Video Editor',
      tagline: 'I create engaging videos with dynamic subtitles and sharp editing that capture attention from the first second.',
      cta: 'See My Work',
      contact: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      subtitle: 'A bit about who I am',
      p1: 'I\'m a video editor who works with content creators on YouTube and TikTok. I specialize in dynamic editing with subtitles that keep viewers engaged.',
      p2: 'I build every video from scratch — selecting footage, editing, adding motion subtitles, color grading, and sound design. I work with CapCut and handle content in multiple languages.',
      p3: 'I\'m open to collaboration and always looking for interesting projects. Feel free to reach out via Telegram.',
      tools: 'Tools & Skills',
      skillsList: ['CapCut', 'Video Editing', 'Dynamic Subtitles', 'Color Grading', 'Sound Design', 'YouTube', 'TikTok'],
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
      name: 'Davo',
      role: 'Видеомонтажёр',
      tagline: 'Создаю цепляющие видео с динамичными субтитрами и острым монтажом, которые захватывают внимание с первой секунды.',
      cta: 'Смотреть работы',
      contact: 'Написать мне',
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Немного о том, кто я',
      p1: 'Я видеомонтажёр, работаю с контент-мейкерами на YouTube и TikTok. Специализируюсь на динамичном монтаже с субтитрами, которые удерживают зрителя.',
      p2: 'Каждое видео делаю с нуля — подбираю материал, монтирую, добавляю субтитры в движении, цветокоррекцию и саунд-дизайн. Работаю в CapCut, работаю с контентом на нескольких языках.',
      p3: 'Открыт к сотрудничеству, всегда ищу интересные проекты. Пишите в Telegram.',
      tools: 'Инструменты и навыки',
      skillsList: ['CapCut', 'Видеомонтаж', 'Динамичные субтитры', 'Цветокоррекция', 'Саунд-дизайн', 'YouTube', 'TikTok'],
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
