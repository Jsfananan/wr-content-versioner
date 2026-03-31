import type { OfficeConfig } from '@/types';

export const offices: OfficeConfig[] = [
  {
    id: 'chicago',
    name: 'World Relief Chicago',
    director: {
      name: 'Marcus Thompson',
      title: 'Office Director',
      email: 'mthompson@worldrelief.org',
      phone: '(630) 462-7566',
    },
    localFocus: [
      'refugee resettlement',
      'employment services',
      'ESL education',
      'cultural orientation',
    ],
    preferredBibleVerses: [
      'Leviticus 19:34 — "The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt."',
      'Matthew 25:35 — "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in."',
      'Isaiah 58:7 — "Is it not to share your food with the hungry and to provide the poor wanderer with shelter — when you see the naked, to clothe them?"',
    ],
    toneNotes:
      'Marcus leads with warmth and pastoral care. He speaks like a shepherd to his congregation — unhurried, personal, and deeply relational. Communications feel like a letter from a trusted friend, not a nonprofit press release. He acknowledges the difficulty of the journey before celebrating the progress. References to the Chicagoland community and its diversity land well with his audience.',
    signatureBlock: `In His service,

Marcus Thompson
Office Director, World Relief Chicago
mthompson@worldrelief.org | (630) 462-7566
worldrelief.org/chicago`,
    localContext:
      'The Chicago office serves the broader Chicagoland area including DuPage and Cook Counties, one of the most culturally diverse metros in the country. The office resettles refugees from over 40 countries and operates one of the largest employment readiness programs in the Midwest.',
    audienceNotes:
      'Primary audience is church partners, individual donors, and volunteers in evangelical and mainline Protestant congregations across Chicagoland. Many attendees are suburban families with a strong sense of Christian mission. They respond to personal stories of transformation and clear calls to action. They are familiar with World Relief but need consistent reminders of local impact.',
    active: true,
  },
  {
    id: 'baltimore',
    name: 'World Relief Baltimore',
    director: {
      name: 'Priya Okafor',
      title: 'Office Director',
      email: 'pokafor@worldrelief.org',
      phone: '(410) 323-3400',
    },
    localFocus: [
      'immigration legal services',
      'DACA renewals',
      'community integration',
      'citizenship preparation',
    ],
    preferredBibleVerses: [
      'Micah 6:8 — "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."',
      'Proverbs 31:8-9 — "Speak up for those who cannot speak for themselves, for the rights of all who are destitute. Speak up and judge fairly; defend the rights of the poor and needy."',
    ],
    toneNotes:
      'Priya is direct, action-oriented, and justice-focused. She does not traffic in sentimentality — she leads with facts, urgency, and clear asks. Her voice carries the authority of someone who has sat across the table from families navigating the immigration system. She respects her audience enough to be specific about what is needed and why. She balances the gravity of legal work with genuine hope.',
    signatureBlock: `For justice and welcome,

Priya Okafor
Office Director, World Relief Baltimore
pokafor@worldrelief.org | (410) 323-3400
worldrelief.org/baltimore`,
    localContext:
      'The Baltimore office serves Maryland and the surrounding region, operating one of the few nonprofit immigration legal services programs in the state. The office handles hundreds of immigration cases annually and is a trusted community anchor for Central American, African and Caribbean immigrant communities in Baltimore City and County.',
    audienceNotes:
      'Audience includes church partners, legal volunteers, individual donors and community advocates who care deeply about immigration justice. Many are professional adults with moderate-to-high civic engagement. They appreciate transparency, data, and concrete program outcomes. They are motivated by justice language alongside faith language. They expect clear, actionable next steps in every communication.',
    active: true,
  },
  {
    id: 'triad',
    name: 'World Relief Triad',
    director: {
      name: 'Pastor James Whitfield',
      title: 'Office Director',
      email: 'jwhitfield@worldrelief.org',
      phone: '(336) 273-2220',
    },
    localFocus: [
      'church partnerships',
      'community health',
      'refugee welcome',
      'volunteer mobilization',
    ],
    preferredBibleVerses: [
      'Romans 15:7 — "Accept one another, then, just as Christ accepted you, in order to bring praise to God."',
      'Galatians 3:28 — "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus."',
      'Psalm 146:9 — "The Lord watches over the foreigner and sustains the fatherless and the widow."',
    ],
    toneNotes:
      'Pastor James is deeply rooted in scripture and the local church. His voice carries the cadence of a preacher — he builds toward a point, grounds everything in the Word, and closes with a call. He uses "we" broadly to mean the whole body of Christ, not just World Relief staff. Church language is natural for him, and he is comfortable weaving biblical narrative into practical program descriptions. He writes as if standing at a pulpit, not behind a desk.',
    signatureBlock: `Blessings in Christ,

Pastor James Whitfield
Office Director, World Relief Triad
jwhitfield@worldrelief.org | (336) 273-2220
worldrelief.org/triad`,
    localContext:
      'The Triad office serves the Greensboro, Winston-Salem and High Point metro area of North Carolina — a region with deep evangelical church roots and a rapidly growing immigrant population. The office works closely with over 60 local congregations and is known for its volunteer mobilization model, where church teams are trained to walk alongside newly arrived neighbors.',
    audienceNotes:
      'Audience is heavily church-based — pastors, church leaders, congregants, and faith-motivated volunteers in evangelical and historically Black churches across the Triad. They respond strongly to scripture, personal testimony and the language of discipleship. The call to welcome the stranger is most powerful when framed as obedience to Christ and participation in His mission. Leadership is respected; communications from Pastor James carry real authority.',
    active: true,
  },
  {
    id: 'seattle',
    name: 'World Relief Seattle',
    director: {
      name: 'Dr. Angela Reyes',
      title: 'Office Director',
      email: 'areyes@worldrelief.org',
      phone: '(253) 277-1121',
    },
    localFocus: [
      'disaster response',
      'mental health services',
      'trauma-informed care',
      'holistic family support',
    ],
    preferredBibleVerses: [
      '2 Corinthians 1:3-4 — "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God."',
      'Psalm 34:18 — "The Lord is close to the brokenhearted and saves those who are crushed in spirit."',
    ],
    toneNotes:
      'Dr. Angela leads with deep compassion and a clinician\'s understanding of trauma. Her voice is tender but not fragile — she holds space for grief without losing sight of hope. She never minimizes hardship or reaches for easy answers. She writes as someone who has sat with people in their darkest moments and has seen what healing looks like. Her communications feel like a hand extended in the dark. Holistic language — body, mind, spirit — is natural for her.',
    signatureBlock: `With compassion and hope,

Dr. Angela Reyes
Office Director, World Relief Seattle
areyes@worldrelief.org | (253) 277-1121
worldrelief.org/seattle`,
    localContext:
      'The Seattle office serves the greater Puget Sound region, including a significant number of families who have survived natural disasters, armed conflict and other acute crises. The office operates one of the few refugee-specific mental health programs in the Pacific Northwest and partners with local hospitals, clinics and faith communities to provide wraparound care.',
    audienceNotes:
      'Audience includes church partners, healthcare professionals, individual donors and volunteers drawn to holistic, person-centered ministry. Many are in helping professions themselves — counselors, nurses, social workers, teachers — and appreciate language that honors complexity. They are motivated by dignity and wholeness, not just emergency response. They respond well to nuanced storytelling and are skeptical of oversimplification.',
    active: true,
  },
];

export function getOfficeById(id: string): OfficeConfig | undefined {
  return offices.find((office) => office.id === id);
}
