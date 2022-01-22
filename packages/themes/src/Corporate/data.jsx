import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import background2x from './assets/header.jpg';
import background from './assets/header.jpg';
import Goals from './assets/our-goals.png';
import Goals2x from './assets/our-goals.png';
import Mission from './assets/our-mission.png';
import Mission2x from './assets/our-mission.png';
import Team from './assets/team.png';
import Team2x from './assets/team.png';

import Roleplay from './assets/roleplay.png';
import Community from './assets/community.png';
import Fun from './assets/fun.png';
import Avatar1 from './assets/avatars/avatar-1.jpg';
import Avatar12x from './assets/avatars/avatar-1@2x.jpg';
import Avatar2 from './assets/avatars/avatar-2.jpg';
import Avatar22x from './assets/avatars/avatar-2@2x.jpg';
import Avatar3 from './assets/avatars/avatar-3.jpg';
import Avatar32x from './assets/avatars/avatar-3@2x.jpg';
import Avatar4 from './assets/avatars/avatar-4.jpg';
import Avatar42x from './assets/avatars/avatar-4@2x.jpg';
import Avatar5 from './assets/avatars/avatar-5.jpg';
import Avatar52x from './assets/avatars/avatar-5@2x.jpg';
import Avatar6 from './assets/avatars/avatar-6.jpg';
import Avatar62x from './assets/avatars/avatar-6@2x.jpg';
import Avatar7 from './assets/avatars/avatar-7.jpg';
import Avatar72x from './assets/avatars/avatar-7@2x.jpg';
import Avatar8 from './assets/avatars/avatar-8.jpg';
import Avatar82x from './assets/avatars/avatar-8@2x.jpg';

export default {
  title: 'Corporate',
  navbar: {
    links: [
      {
        to: 'offer',
        label: 'Angebot',
      },
      {
        to: 'goals',
        label: 'Ziele',
      },
      {
        to: 'mission',
        label: 'Mission',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'contact',
        label: 'Kontakt',
      },
    ],
    actions: [
      {
        href:
          'https://community.theyphania.de/',
        label: 'Zur Community',
        target: '_blank',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
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
        to: 'offer',
        children: 'Erfahre mehr',
        variant: 'outline',
      },
    ],
  },
  offer: {
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
  goals: {
    img: {
      src: Goals,
      srcSet: `${Goals} 1x, ${Goals2x} 2x`,
    },
    subtitle: 'Was wir fokussieren',
    title: 'Unsere Ziele',
    text:
      'Die Festigung des Charakters, das Bilden einer komplexen und interessanten Persönlichkeit, Rollenspiel mit Spaß und Erfolg im Vordergrund. Diese drei Ziele möchten wir mit unserem Angebot individuell für jeden Spieler erreichbar machen. Dabei spielen Alter, Geschlecht, Sexualität, Herkunft, etc. keine Rolle.',
    cta: {
      children: 'Unsere Ziele im Fokus',
      href:
        'https://community.theyphania.de',
      target: '_blank',
      as: 'a',
    },
  },
  mission: {
    img: {
      src: Mission,
      srcSet: `${Mission} 1x, ${Mission2x} 2x`,
    },
    subtitle: 'Woran wir glauben',
    title: 'Unsere Mission',
    text:
      'Schon immer war Theyphania eine Gemeinschaft aus Rollenspiel-Enthusiasten. Unsere Mission - die Erforschung der eigenen Persönlichkeit durch Praktikum des Rollenspiels - hat sich auch seit unseren Anfängen nicht geändert. Gerade in jungen Jahren ist die Entwicklung und die Erforschung des eigenen Charakters unheimlich wichtig um im späteren Leben ein geordnetes und vorallem mental stabiles Leben zu führen.',
    cta: {
      children: 'Mehr Infos zum Rollenspiel bei Theyphania',
      href:
        'https://community.theyphania.de',
      target: '_blank',
      as: 'a',
    },
  },
  supportCta: {
    subtitle: 'Problem innerhalb der Community?',
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
      srcSet: `${Team} 1x, ${Team2x} 2x`,
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
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: 'Dantolan',
        position: 'Senior-Manager, Vorsitzender des Kreativausschusses',
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: 'Loapu',
        position: 'Senior-Manager, Vorsitzender des System-Council',
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: 'Tommy',
        position: 'Senior-Manager, Vorsitzender des Spielrates',
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: 'Pozor',
        position: 'Manager, Vorsitzender des Baurates',
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
        },
        name: 'Zer00na',
        position: 'Junior-Manager, Vorsitzende des Regulatoriums',
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
        },
        name: 'Raptus153',
        position: 'Senior-Historiker, Vorsitzender des Kuratoriums',
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
        },
        name: 'Truco',
        position: 'Regulator',
      },
      {
        avatar: {
          src: Avatar8,
          srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
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
    title: 'Kontakt',
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
