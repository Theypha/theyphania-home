import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import background from './assets/header.jpg';
import Velden from './assets/velden.png';
import Cardinal from './assets/cardinal.png';
import Team from './assets/team.png';

import Roleplay from './assets/roleplay.png';
import Community from './assets/community.png';
import Fun from './assets/fun.png';
import Avatar1 from './assets/avatars/avatar-1.jpg';
import Avatar2 from './assets/avatars/avatar-2.jpg';
import Avatar3 from './assets/avatars/avatar-3.jpg';
import Avatar4 from './assets/avatars/avatar-4.jpg';
import Avatar5 from './assets/avatars/avatar-5.jpg';
import Avatar6 from './assets/avatars/avatar-6.jpg';
import Avatar7 from './assets/avatars/avatar-7.jpg';
import Avatar8 from './assets/avatars/avatar-8.jpg';

export default {
  title: 'Corporate',
  navbar: {
    links: [
      {
        to: 'angebot',
        label: 'Angebot',
      },
      {
        to: 'velden',
        label: 'Velden',
      },
      {
        to: 'cardinal',
        label: 'Cardinal',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'kontakt',
        label: 'Kontakt',
      },
    ],
    actions: [
      {
        href:
          'https://community.theyphania.de/',
        label: 'Community',
        target: '_blank',
      },
      {
        href:
          'https://hilfe.theyphania.de/',
        label: 'Hilfe',
        target: '_blank',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x`,
      alt: 'Header',
    },
    title: 'Theyphania',
    subtitle: 'Rollenspiel und Multigaming Community',
    description:
      'Theyphania bietet dir eine Rollenspiel-Erfahrung der Extraklasse. Zusammen mit anderen Rollenspiel-Enthusiasten laden wir dich ein auf eine Reise die du so schnell nicht vergessen wirst.',
    actions: [
      {
        as: 'a',
        href:
          'https://community.theyphania.de/register/',
        children: 'Tritt uns bei',
        target: '_blank',
      },
      {
        to: 'angebot',
        children: 'Erfahre mehr',
        variant: 'outline',
      },
    ],
  },
  angebot: {
    subtitle: 'Was wir machen',
    title: 'Unser Angebot',
    services: [
      {
        icon: Roleplay,
        title: 'Rollenspiel',
        text:
          'Das Übernehmen eines fremden Charakters. Aboslute Freiheit bei der Gestaltung der Rolle. Das macht unser Rollenspiel aus.',
      },
      {
        icon: Community,
        title: 'Gemeinschaft',
        text:
          'Nachts um 2 noch Lust auf eine schnelle Runde CS:GO? Bei uns findest du mit Sicherheit jemanden mit ähnlichem Interesse.',
      },
      {
        icon: Fun,
        title: 'Spaß',
        text:
          'Mit unserem Fokus auf Fairness ist der Spielspaß garantiert. Spiele zusammen mit Anderen um das Erlebnis noch spaßiger zu gestalten.',
      },
    ],
  },
  velden: {
    img: {
      src: Velden,
      srcSet: `${Velden} 1x`,
    },
    subtitle: 'Willkommen im Königreich',
    title: 'Velden',
    text:
      '',
    cta: {
      children: 'Zur Karte',
      href:
        'https://theyphania.de/minecraft/karten/velden',
      target: '_blank',
      as: 'a',
    },
  },
  cardinal: {
    img: {
      src: Cardinal,
      srcSet: `${Cardinal} 1x`,
    },
    subtitle: 'Powered by Theyphania',
    title: 'Cardinal',
    text:
      '',
    cta: {
      children: 'Mehr Infos zu Cardinal',
      href:
        'https://go.theypha.de/cardinal-info',
      target: '_blank',
      as: 'a',
    },
  },
  supportCta: {
    subtitle: 'Probleme innerhalb der Community?',
    title: 'Wir eilen zur Hilfe!',
    text:
      'Gehe einfach in unser Hilfe-Center und stelle eine Anfrage über den Ticket-Support.',
    buttons: [
      {
        label: 'Eröffne ein Ticket',
        href: 'https://hilfe.theyphania.de',
      },
    ],
  },
  team: {
    img: {
      src: Team,
      srcSet: `${Team} 1x`,
    },
    subtitle: 'Ohne ein Team läuft nix',
    title: 'Triff unser Team',
    text:
      'Hier bei Theyphania steht neben dem Rollenspiel auch der Spaß ganz weit vorne. Unser Team sorgt dafür, dass unsere Spieler sorgenfrei und sicher den größtmöglichen Spaß im Rollenspiel erfahren können. Dabei ist es egal, ob du weißt wie man in Minecraft baut, Erfahrungen bei der Moderation von Usern hast, oder deine technischen Kenntnise uns weiterhelfen können. Wir freuen uns in jedem Fall auf eine Bewerbung von dir!',
    cta: {
      label: 'Interesse? Guck dir unsere offenen Posten an!',
      href:
        'https://community.theyphania.de',
    },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x`,
        },
        name: 'Dantolan',
        position: 'Senior-Manager',
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x`,
        },
        name: 'Loapu',
        position: 'Senior-Manager',
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x`,
        },
        name: 'Tommy',
        position: 'Senior-Manager',
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x`,
        },
        name: 'Pozor',
        position: 'Manager',
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x`,
        },
        name: 'Zer00na',
        position: 'Junior-Manager',
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x`,
        },
        name: 'Raptus153',
        position: 'Senior-Historiker',
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x`,
        },
        name: 'Truco',
        position: 'Regulator',
      },
      {
        avatar: {
          src: Avatar8,
          srcSet: `${Avatar8} 1x`,
        },
        name: 'Rorschach69',
        position: 'Junior-Historiker',
      },
    ],
  },
  contactCta: {
    subtitle: 'Wir suchen Teammitglieder.',
    title: 'Bewirb dich jetzt!',
    text:
      'Theyphania ist kein kleines Projekt. Wir brauchen tatkräftige Menschen die uns helfen unsere Vision zu verwirklichen.',
    buttons: [
      {
        label: 'Bewerben',
        href:
          'https://community.theyphania.de',
      },
      {
        label: 'Team-Dokumentation',
        href: 'https://go.theyphania.de/confluence',
        variant: 'outline',
      },
    ],
  },
  contact: {
    subtitle: 'Noch Fragen?',
    title: 'Schreib\' uns!',
    addresses: [
      {
        title: 'Benjamin Selig',
        address: textToMultiline`Langgasse 7\n35510 Butzbach\nDeutschland`,
        email: 'kontakt@theyphania.de',
        phone: '+49 160 2457 494',
      },
    ],
  },
  copyright: '© 2022 Theyphania.',
};
