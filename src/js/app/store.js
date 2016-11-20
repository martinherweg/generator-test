const baseUrl = siteUrl;
const store = {
  games: [
    {
      id: 1,
      start_time: '15.11.2016 14:00am',
      name: 'feuerwehr',
      details: {
        description: 'Die interaktive Feuerwehr mit Rüstfahrzeug und drei tiptoi® Spielfiguren bietet actionreiche Einsätze und regt zum kreativen Rollenspiel an. Mit vielen Geräuschen, Sachwissen, Geschichten und Spielen rund um die Feuerwehr.',
        events: [
          {
            id: 1,
            layout: 'left',
            text: 'Weißt du woher der Name Martinshorn kommt? Martin war der Nachname von dem Mann, der zusammen mit der Feuerwehr und der Polizei vor über 80 Jahren dieses laute Spezialsignal erfunden hat.',
            start_time: '15.11.2016 14:00am',
          },
          {
            id: 2,
            layout: 'right',
            text: 'Hier im Brandcontainer üben die Feuerwehrleute wie man große Hitze aushält und große Feuer löscht. Das fühlt sich genau wie bei einem echten Löscheinsatz an, wenn sie in ein brennendes Haus hinein müssen.',
            start_time: '16.11.2016 14:00am',
          },
          {
            id: 3,
            layout: 'left',
            text: 'Heute helfen wir bei allen möglichen Notsituationen. Zum Beispiel: Letzte Woche hatte ich einen Rettungseinsatz, bei dem wir einen Mann und seinen Hund aus dem Fluß retten mussten.',
            start_time: '17.11.2016 14:00am',
          },
          {
            id: 4,
            layout: 'right',
            text: 'Das hier ist aber sehr gefährlich. Man sollte nie etwas über eine Lampe hängen, denn die meisten Lampen werden sehr heiß.',
            start_time: '18.11.2016 14:00am',
          },
        ],
      },
    },


    {
      id: 2,
      start_time: '19.11.2016 14:00',
      name: 'polizei',
      details: {
        description: 'Die interaktive Polizeiwache mit Polizeiauto und drei tiptoi® Spielfiguren bietet actionreiche Einsätze und regt zum kreativen Rollenspiel an. Mit vielen Geräuschen, Sachwissen, Geschichten und Spielen rund um die Polizei.',
        events: [
          {
            id: 1,
            layout: 'left',
            text: 'Das ist der Polizeidiensthund Benno. Damit aus Benno ein Polizeihund wurde, musste er mehrere Monate in die Polizeihundeschule.',
            start_time: '19.11.2016 14:00am',
          },
          {
            id: 2,
            layout: 'right',
            text: 'Das ist ein Gerät zur Geschwindigkeitsüberwachung - viele nennen es auch Blitzer. Ein solches Gerät misst, wie schnell ein Auto fährt.',
            start_time: '20.11.2016 14:00am',
          },
          {
            id: 3,
            layout: 'left',
            text: 'Hah, das wäre doch gelacht. Ich komme hier schon wieder heraus. Bisher konnte mich noch niemand einsperren.',
            start_time: '21.11.2016 14:00am',
          },
          {
            id: 4,
            layout: 'right',
            text: 'Achtung, Achtung, der Einbrecher ist auf der Flucht! Lass uns schnell hören, ob vielleicht jemand gesehen hat, wo der Flüchtige hingelaufen ist. ',
            start_time: '22.11.2016 14:00am',
          },
        ],
      },
    },


    {
      id: 3,
      start_time: '23.11.2016 14:00',
      name: 'autorennen',
      details: {
        description: 'Das interaktive Autorennen mit Rennauto und zwei tiptoi® Spielfiguren bietet einen rasanten Einblick in die Welt des Rennsports und regt zum kreativen Rollenspiel an. Mit vielen Geräuschen, Sachwissen, Geschichten und Spielen rund um die Rennstrecke.',
        events: [
          {
            id: 1,
            layout: 'left',
            text: 'Wenn die gelbe Flagge geschwenkt wird, müssen die Fahrer deutlich langsamer fahren und dürfen nicht überholen. ',
            start_time: '23.11.2016 14:00am',
          },
          {
            id: 2,
            layout: 'right',
            text: 'Du willst wissen, wieso ich Rennmechaniker geworden bin? Das ist eine lange Geschichte – wahrscheinlich hab ich es meinem Opa zu verdanken.',
            start_time: '24.11.2016 14:00am',
          },
          {
            id: 3,
            layout: 'left',
            text: 'Das ist der Heckspoiler oder Heckflügel. Wenn das Auto schnell fährt, strömt die Luft oben und unten um den Flügel herum. So kann das Auto weniger leicht ins Rutschen kommen und aus der Kurve von der Fahrbahn fliegen.',
            start_time: '26.11.2016 14:00am',
          },
        ],
      },
    },
    {
      id: 4,
      start_time: '26.11.2016 14:00',
      name: 'einkaufszentrum',
      details: {
        description: 'Das interaktive Einkaufszentrum mit Cabrio und zwei tiptoi® Spielfiguren entführt in einen stimmungsvollen Tag und regt zum kreativen Rollenspiel an. Mit vielen Geräuschen, Sachwissen, Geschichten und Spielen rund ums Einkaufen.',
        events: [
          {
            id: 1,
            layout: 'left',
            text: 'Jeder, der ein eigenes Bankkonto hat, bekommt so eine EC-Karte. Ein Konto hast du, wenn du dein Geld zu einer Bank gebracht hast, damit sie es sicher für dich aufbewahrt.',
            start_time: '26.11.2016 14:00am',
          },
          {
            id: 2,
            layout: 'right',
            text: 'Die meisten Geschäfte haben Schaufenster. In einem Schaufenster werden einige Dinge, die es in dem Geschäft zu kaufen gibt, besonders schön hingestellt und dekoriert - so sieht man gleich, was es in dem Geschäft zu kaufen gibt. ',
            start_time: '27.11.2016 14:00am',
          },
          {
            id: 3,
            layout: 'left',
            text: 'Mein großer Traum ist es einmal eine richtige große Modenschau vor echtem Publikum zu zeigen - deswegen studiere ich auch Modedesign.',
            start_time: '28.11.2016 14:00am',
          },
        ],
      },
    },
  ],
};

export { store, baseUrl };
