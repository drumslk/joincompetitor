export type Lang = "en" | "fr";

export const LANGS: Lang[] = ["en", "fr"];

// All user-facing copy for the landing page, per language. English is the
// default (served at "/"); French is served at "/fr". Keep both in sync.
export const dict = {
  en: {
    meta: {
      title: "COMPETITOR — The Fitness League for Everyone",
      description:
        "COMPETITOR is the fitness league for everyone. Complete weekly challenges from anywhere, submit your performance, earn points and climb the global rankings. Season 1 starts January 1, 2027 — free to enter.",
    },
    nav: {
      how: "How It Works",
      challenges: "Challenges",
      rankings: "Rankings",
      season1: "Season 1",
      faq: "FAQ",
    },
    cta: { full: "Join Season 1 for Free", short: "Join Free" },
    countdown: {
      heading: "Season 1 Starts In",
      date: "January 1, 2027",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    hero: {
      eyebrow: "The World Competes Here.",
      titleA: "The Fitness League",
      titleB: "for Everyone.",
      subtitle: "One Challenge. One Score. One Global Ranking.",
      description:
        "Every week, complete a new fitness challenge from your gym, home or outdoors. Submit your score and video, earn points and climb the global rankings.",
      badge: "Season 1 · Starts Jan 2027",
      flags: "Athletes competing worldwide — and growing",
      athletes: "athletes already in",
    },
    how: {
      title: "How It Works",
      subtitle: "From weekly challenge to global ranking.",
      steps: [
        {
          title: "Weekly Challenge",
          text: "A strength, bodyweight, endurance or speed challenge is released every week.",
        },
        {
          title: "Perform It Anywhere",
          text: "Do the challenge from your gym, home or outdoors.",
        },
        {
          title: "Submit Your Performance",
          text: "Enter your score and upload one continuous proof video through the COMPETITOR app.",
        },
        {
          title: "Earn Points & Level Up",
          text: "Once validated, your performance earns points toward the official Season 1 rankings.",
        },
      ],
      bottom: "The highest-ranked competitors qualify for the",
      bottomHighlight: "Playoffs",
    },
    challenges: {
      title: "Challenges",
      cards: [
        { title: "Strength", items: ["Bench Press", "Squat", "Deadlift (Classic or Trapbar)"] },
        { title: "Bodyweight", items: ["Push-Ups", "Pull-Ups", "Burpees"] },
        { title: "Endurance", items: ["Dead Hang", "Plank", "Wall Sit"] },
        { title: "Speed", items: ["Treadmill Sprint"] },
      ],
      bottom: "Different challenges. One complete fitness league.",
    },
    levels: {
      title: "Built for Every Level.",
      intro:
        "You don't need to be an athlete to become a Competitor. Challenge yourself against others in your division, all within a single global fitness league.",
      divisions: [
        "Men & Women",
        "Age Divisions",
        "Weight Divisions",
        "Country Rankings",
        "Overall Open",
        "Gym, Club & Community",
      ],
      freeLead: "Season 1 is",
      freeHighlight: "free",
      freeSub: "No entry fee. No subscription required.",
    },
    leaderboard: {
      title: "Season 1 Leaderboard Preview",
      subtitle: "Demonstration only. Official Season 1 rankings begin January 1, 2027.",
      footer: "Your name could be here in Season 1.",
    },
    road: {
      title: "The Road to the Finals",
      stops: [
        {
          period: "Oct–Dec 2026",
          label: "Pre-Season",
          text: "Discover COMPETITOR through selected test events and early access.",
        },
        {
          period: "Jan–Apr 2027",
          label: "Weekly Season Challenges",
          text: "Complete the weekly challenges, earn points and climb the rankings.",
        },
        {
          period: "May 2027",
          label: "Playoffs",
          text: "The highest-ranked competitors advance to the Playoffs.",
        },
        {
          period: "June 2027",
          label: "Season 1 Online Finals",
          text: "The best competitors compete for the first COMPETITOR titles.",
        },
      ],
      bottom: "Only the best make it through.",
    },
    founding: {
      titleA: "Become a",
      titleB: "Founding Competitor.",
      intro:
        "Join before the official launch of Season 1 and become part of the first generation of COMPETITOR athletes.",
      perks: [
        "Early access to the COMPETITOR app",
        "Founding Competitor status",
        "Season 1 registration",
        "Pre-season news and challenge announcements",
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is COMPETITOR?",
          a: "COMPETITOR is an international fitness league built around weekly challenges, verified performances, points, divisions, rankings, Playoffs and Finals.",
        },
        { q: "Is Season 1 free?", a: "Yes. Registration and participation in Season 1 are free." },
        {
          q: "When does Season 1 start?",
          a: "Season 1 starts on January 1, 2027. Weekly challenges continue through the end of April, followed by the Playoffs in May and the online Finals in June.",
        },
        {
          q: "Do I need to be an athlete?",
          a: "No. COMPETITOR is designed for different fitness levels, with divisions that allow you to compare yourself with relevant competitors.",
        },
        {
          q: "Do I need a gym?",
          a: "Not for every challenge. Some challenges can be completed at home or outdoors, while others require standard gym equipment. The equipment and rules are announced with each weekly challenge.",
        },
        {
          q: "How do I submit my performance?",
          a: "Enter your score and upload one continuous proof video through the COMPETITOR app. Each challenge includes specific rules and a required camera angle.",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    waitlist: {
      title: "Reserve Your Place in Season 1",
      description: "Season 1 starts January 1, 2027. Registration and participation are free.",
      emailLabel: "Email Address",
      emailPlaceholder: "you@example.com",
      consent:
        "I agree to receive COMPETITOR news, Season 1 information and launch updates. I can unsubscribe at any time.",
      submit: "Join Season 1 for Free",
      joining: "Joining…",
      successTitle: "You're in.",
      successBody:
        "Welcome to the first generation of COMPETITOR. Check your inbox for the next steps.",
      errInvalid: "Please enter a valid email address.",
      errConsent: "Please accept receiving COMPETITOR updates to continue.",
      errGeneric: "Something went wrong.",
      toastDone: "You're in! Welcome, Founding Competitor.",
      toastAlready: "You're already on the list — see you in Season 1!",
    },
  },

  fr: {
    meta: {
      title: "COMPETITOR — La ligue de fitness pour tous",
      description:
        "COMPETITOR, c'est la ligue de fitness pour tous. Relève des défis chaque semaine où tu veux, envoie ta performance, gagne des points et grimpe au classement mondial. La Saison 1 débute le 1er janvier 2027 — gratuite.",
    },
    nav: {
      how: "Comment ça marche",
      challenges: "Challenges",
      rankings: "Classement",
      season1: "Saison 1",
      faq: "FAQ",
    },
    cta: { full: "Rejoins la Saison 1 gratuitement", short: "Rejoindre" },
    countdown: {
      heading: "La Saison 1 commence dans",
      date: "1er janvier 2027",
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes",
    },
    hero: {
      eyebrow: "Le monde entier entre en compétition ici.",
      titleA: "La ligue de fitness",
      titleB: "pour tous.",
      subtitle: "Un défi. Un score. Un classement mondial.",
      description:
        "Chaque semaine, relève un nouveau défi fitness depuis ta salle, chez toi ou en extérieur. Envoie ton score et ta vidéo, gagne des points et grimpe au classement mondial.",
      badge: "Saison 1 · Start jan. 2027",
      flags: "Des athlètes du monde entier — et ça grandit",
      athletes: "athlètes déjà inscrits",
    },
    how: {
      title: "Comment ça marche",
      subtitle: "Du défi hebdomadaire au classement mondial.",
      steps: [
        {
          title: "Défi hebdomadaire",
          text: "Un nouveau défi de force, de poids du corps, d'endurance ou de vitesse chaque semaine.",
        },
        {
          title: "Relève-le où tu veux",
          text: "Réalise le défi à la salle, chez toi ou en extérieur, selon le matériel nécessaire.",
        },
        {
          title: "Envoie ta performance",
          text: "Saisis ton score et envoie une vidéo de ta performance, filmée en continu via l'app COMPETITOR.",
        },
        {
          title: "Gagne des points et grimpe au classement",
          text: "Une fois validée, ta performance rapporte des points au classement officiel de la Saison 1.",
        },
      ],
      bottom: "Les mieux classés se qualifient pour les",
      bottomHighlight: "Playoffs",
    },
    challenges: {
      title: "Challenges",
      cards: [
        { title: "Force", items: ["Développé couché", "Squat", "Soulevé de terre (classique ou trap bar)"] },
        { title: "Poids du corps", items: ["Pompes", "Tractions", "Burpees"] },
        { title: "Endurance", items: ["Suspension à la barre", "Gainage", "Chaise contre un mur"] },
        { title: "Vitesse", items: ["Sprint sur tapis"] },
      ],
      bottom: "Des défis variés. Une seule ligue de fitness.",
    },
    levels: {
      title: "Conçu pour tous les niveaux.",
      intro:
        "Pas besoin d'être un athlète pour devenir un Compétiteur. Mesure-toi à des athlètes de ta catégorie, tout en faisant partie d'une même ligue de fitness mondiale.",
      divisions: [
        "Hommes & Femmes",
        "Catégories d'âge",
        "Catégories de poids",
        "Classements par pays",
        "Classement Open",
        "Salle, Club & Communauté",
      ],
      freeLead: "La Saison 1 est",
      freeHighlight: "gratuite",
      freeSub: "Aucun frais d'inscription. Aucun abonnement.",
    },
    leaderboard: {
      title: "Aperçu du classement Saison 1",
      subtitle: "Démonstration uniquement. Le classement officiel de la Saison 1 débute le 1er janvier 2027.",
      footer: "Ton nom pourrait y figurer dès la Saison 1.",
    },
    road: {
      title: "La route vers les Finales",
      stops: [
        {
          period: "Oct.–Déc. 2026",
          label: "Pré-saison",
          text: "Découvre COMPETITOR via des événements test et un accès anticipé.",
        },
        {
          period: "Jan.–Avr. 2027",
          label: "Défis hebdomadaires",
          text: "Relève les défis de la semaine, gagne des points et grimpe au classement.",
        },
        {
          period: "Mai 2027",
          label: "Playoffs",
          text: "Les mieux classés accèdent aux Playoffs.",
        },
        {
          period: "Juin 2027",
          label: "Finales en ligne — Saison 1",
          text: "Les meilleurs s'affrontent pour les tout premiers titres COMPETITOR.",
        },
      ],
      bottom: "Seuls les meilleurs vont au bout.",
    },
    founding: {
      titleA: "Deviens",
      titleB: "un Compétiteur de la première heure.",
      intro:
        "Rejoins-nous avant le lancement officiel de la Saison 1 et fais partie de la première génération d'athlètes COMPETITOR.",
      perks: [
        "Accès anticipé à l'app COMPETITOR",
        "Statut de Compétiteur de la première heure",
        "Inscription à la Saison 1",
        "Actus pré-saison et annonces des défis",
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "C'est quoi COMPETITOR ?",
          a: "COMPETITOR est une ligue de fitness internationale bâtie autour de défis hebdomadaires, de performances vérifiées, de points, de catégories, de classements, de Playoffs et de Finales.",
        },
        { q: "La Saison 1 est-elle gratuite ?", a: "Oui. L'inscription et la participation à la Saison 1 sont gratuites." },
        {
          q: "Quand commence la Saison 1 ?",
          a: "La Saison 1 débute le 1er janvier 2027. Les défis hebdomadaires se poursuivent jusqu'à fin avril, suivis des Playoffs en mai et des Finales en ligne en juin.",
        },
        {
          q: "Faut-il être un athlète ?",
          a: "Non. COMPETITOR est pensé pour tous les niveaux, avec des catégories qui te permettent de te comparer à des compétiteurs pertinents.",
        },
        {
          q: "Faut-il une salle de sport ?",
          a: "Pas pour tous les défis. Certains se réalisent chez toi ou en extérieur, d'autres nécessitent du matériel de salle standard. Le matériel et les règles sont annoncés avec chaque défi hebdomadaire.",
        },
        {
          q: "Comment soumettre ma performance ?",
          a: "Saisis ton score et envoie une vidéo de ta performance, filmée en continu via l'app COMPETITOR. Chaque défi comporte des règles précises et un angle de caméra imposé.",
        },
      ],
    },
    footer: {
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    waitlist: {
      title: "Réserve ta place pour la Saison 1",
      description: "La Saison 1 débute le 1er janvier 2027. L'inscription et la participation sont gratuites.",
      emailLabel: "Adresse email",
      emailPlaceholder: "toi@exemple.com",
      consent:
        "J'accepte de recevoir les actualités COMPETITOR, les informations sur la Saison 1 et les nouveautés du lancement. Je peux me désinscrire à tout moment.",
      submit: "Rejoins la Saison 1 gratuitement",
      joining: "Inscription…",
      successTitle: "Tu es inscrit.",
      successBody:
        "Bienvenue dans la première génération COMPETITOR. Consulte ta boîte mail pour la suite.",
      errInvalid: "Merci d'entrer une adresse email valide.",
      errConsent: "Merci d'accepter de recevoir les nouveautés COMPETITOR pour continuer.",
      errGeneric: "Une erreur est survenue.",
      toastDone: "Tu es inscrit ! Bienvenue, Compétiteur de la première heure.",
      toastAlready: "Tu es déjà inscrit — à bientôt en Saison 1 !",
    },
  },
} as const;

export function getDict(lang: Lang) {
  return dict[lang];
}
