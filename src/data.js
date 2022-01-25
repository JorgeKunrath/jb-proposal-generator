export const commonFields = {
  author: {
    name: "author",
    label: "Author",
    desc: "Author's name.",
    type: "text"
  },
  summary: {
    name: "summary",
    label: "Summary",
    desc: "Provide a comprehensive 1-2 sentence summary of your proposal.",
    type: "textarea"
  },
  risks: {
    name: "risks",
    label: "Risks",
    desc: "List any potential risks for Juicebox DAO and its members.",
    type: "textarea"
  }
};

// key: enum name, used only in this file's context
// name: input's name attribute. used to match fields across proposals
// label: input's title
// type: key to a enum that render different types of inputs
// desc?: description bellow label
const fields = {
  "what-is-the-goal-of-this-proposal": {
    name: "what-is-the-goal-of-this-proposal",
    label: "What is the goal of this proposal?",
    type: "textarea"
  },
  "what-changes-should-be-made-to-the-funding-target": {
    name: "what-changes-should-be-made-to-the-funding-target",
    label: "What changes should be made to the funding target?",
    type: "textarea"
  },
  "what-changes-should-be-made-to-the-reserved-rate": {
    name: "what-changes-should-be-made-to-the-reserved-rate",
    label: "What changes should be made to the reserved rate?",
    type: "textarea"
  },
  "what-changes-should-be-made-to-the-redemption-rate-bonding-curve": {
    name: "what-changes-should-be-made-to-the-redemption-rate-bonding-curve",
    label: "What changes should be made to the redemption rate bonding curve?",
    type: "textarea"
  },
  "what-changes-should-be-made-to-the-discount-rate": {
    name: "what-changes-should-be-made-to-the-discount-rate",
    label: "What changes should be made to the discount rate?",
    type: "textarea"
  },
  "what-changes-should-be-made-to-the-reconfiguration-ballot": {
    name: "what-changes-should-be-made-to-the-reconfiguration-ballot",
    label: "What changes should be made to the reconfiguration ballot?",
    type: "textarea"
  },
  "what-is-the-expected-impact-of-these-changes": {
    name: "what-is-the-expected-impact-of-these-changes",
    label: "What is the expected impact of these changes?",
    desc: "Describe both the short and long-term impact.",
    type: "textarea"
  },
  "what-help-might-be-needed-from-juicebox-dao-and-its-members": {
    name: "",
    label: "What help might be needed from Juicebox DAO and its members?",
    type: "textarea"
  },
  sponsors: {
    name: "sponsors",
    label: "Sponsors",
    desc:
      "Community members who agree to act as spokespeople for this proposal can add themselves here.",
    type: "textarea"
  },
  "payout-recipient": {
    name: "payout-recipient",
    label: "Payout recipient",
    desc: "Payout recipient's name and address.",
    type: "textarea"
  },
  "payout-amount": {
    name: "payout-amount",
    label: "Payout amount",
    desc:
      "Must be in USD. For multi-cycle payouts, include payout information for each cycle.",
    type: "textarea"
  },
  "how-have-you-already-contributed-to-the-dao": {
    name: "how-have-you-already-contributed-to-the-dao",
    label: "How have you already contributed to the DAO?",
    desc: "Be specific — include projects and tasks.",
    type: "textarea"
  },
  "how-do-you-want-to-contribute-to-the-dao-going-forward": {
    name: "how-do-you-want-to-contribute-to-the-dao-going-forward",
    label: "How do you want to contribute to the DAO going forward?",
    desc: "Be specific—include potential projects and tasks.",
    type: "textarea"
  },
  "what-does-success-look-like-for-someone-taking-on-your-role": {
    name: "what-does-success-look-like-for-someone-taking-on-your-role",
    label: "What does success look like for someone taking on your role?",
    type: "textarea"
  },
  "under-what-criteria-should-the-community-reassess-this-payout": {
    name: "under-what-criteria-should-the-community-reassess-this-payout",
    label: "Under what criteria should the community reassess this payout?",
    type: "textarea"
  },
  "what-is-this-payout-for": {
    name: "what-is-this-payout-for",
    label: "What is this payout for?",
    type: "textarea"
  },
  "what-justifies-this-payout-reduction": {
    name: "what-justifies-this-payout-reduction",
    label: "What justifies this payout reduction?",
    type: "textarea"
  },
  "proposed-reserved-jbx-allocation": {
    name: "proposed-reserved-jbx-allocation",
    label: "Proposed reserved JBX allocation",
    type: "textarea"
  },
  "what-do-you-need-from-the-community-to-accomplish-these-goals": {
    name: "what-do-you-need-from-the-community-to-accomplish-these-goals",
    label: "What do you need from the community to accomplish these goals?",
    type: "textarea"
  },
  "under-what-criteria-should-the-community-reassess-this-allocation": {
    name: "under-what-criteria-should-the-community-reassess-this-allocation",
    label: "Under what criteria should the community reassess this allocation?",
    type: "textarea"
  },
  "what-changes-are-being-proposed": {
    name: "what-changes-are-being-proposed",
    label: "What changes are being proposed?",
    type: "textarea"
  },
  "multi-sig-candidate": {
    name: "multi-sig-candidate",
    label: "Multi-sig candidate",
    desc: "Multi-sig candidate's name and address",
    type: "textarea"
  },
  "why-should-this-candidate-be-added-to-the-multi-sig": {
    name: "why-should-this-candidate-be-added-to-the-multi-sig",
    label: "Why should this candidate be added to the multi-sig?",
    type: "textarea"
  },
  "what-ensures-the-candidate-will-uphold-the-views-and-values-of-juicebox-dao-and-its-community": {
    name:
      "what-ensures-the-candidate-will-uphold-the-views-and-values-of-juicebox-dao-and-its-community",
    label:
      "What ensures the candidate will uphold the views and values of Juicebox DAO and its community?",
    type: "textarea"
  }
};

// Just an abreviation
const f = fields;

export const proposals = [
  {
    title: "Funding Cycle Reconfiguration",
    emoji: "🌀",
    model: "funding-cycle-reconfiguration",
    desc:
      "As new ideas regarding JuiceboxDAO's operations and fiscal strategy emerge, contributors are encouraged to formalize them into a proposal so that they can be discussed.",
    fields: [
      f["what-is-the-goal-of-this-proposal"],
      f["what-changes-should-be-made-to-the-funding-target"],
      f["what-changes-should-be-made-to-the-reserved-rate"],
      f["what-changes-should-be-made-to-the-redemption-rate-bonding-curve"],
      f["what-changes-should-be-made-to-the-reconfiguration-ballot"],
      f["what-is-the-expected-impact-of-these-changes"],
      f["what-help-might-be-needed-from-juicebox-dao-and-its-members"],
      f.sponsors
    ]
  },
  {
    title: "Trial Payment",
    emoji: "🌱",
    model: "trial-payment",
    fields: [
      f["payout-recipient"],
      f["payout-amount"],
      f["how-have-you-already-contributed-to-the-dao"],
      f["how-do-you-want-to-contribute-to-the-dao-going-forward"],
      f.sponsors
    ]
  },
  {
    title: "Recurring Payment",
    emoji: "💸",
    model: "recurring-payment",
    fields: [
      f["payout-recipient"],
      f["payout-amount"],
      f["how-have-you-already-contributed-to-the-dao"],
      f["how-do-you-want-to-contribute-to-the-dao-going-forward"],
      f["what-does-success-look-like-for-someone-taking-on-your-role"],
      f["under-what-criteria-should-the-community-reassess-this-payout"],
      f.sponsors
    ]
  },
  {
    title: "One-Time Payout",
    emoji: "💰",
    model: "one-time-payout",
    fields: [
      f["what-is-this-payout-for"],
      f["payout-recipient"],
      f["payout-amount"],
      f.sponsors
    ]
  },
  {
    title: "Payout Reduction",
    emoji: "🧹",
    model: "payout-reduction",
    fields: [
      f["payout-recipient"],
      f["payout-amount"],
      f["what-justifies-this-payout-reduction"],
      f.sponsors
    ]
  },
  {
    title: "Reserved JBX Allocation",
    emoji: "🧃",
    model: "reserved-jbx-allocation",
    fields: [
      f["proposed-reserved-jbx-allocation"],
      f["how-have-you-already-contributed-to-the-dao"],
      f["how-do-you-want-to-contribute-to-the-dao-going-forward"],
      f["what-do-you-need-from-the-community-to-accomplish-these-goals"],
      f["what-does-success-look-like-for-someone-taking-on-your-role"],
      f["under-what-criteria-should-the-community-reassess-this-allocation"],
      f.sponsors
    ]
  },
  {
    title: "Protocol Upgrades",
    emoji: "🍄",
    model: "protocol-upgrades",
    fields: [
      f["what-changes-are-being-proposed"],
      f["what-is-the-goal-of-this-proposal"],
      f["what-is-the-expected-impact-of-these-changes"],
      f["what-help-might-be-needed-from-juicebox-dao-and-its-members"],
      f.sponsors
    ]
  },
  {
    title: "Process Upgrades",
    emoji: "🚦",
    model: "process-upgrades",
    fields: [
      f["what-changes-are-being-proposed"],
      f["what-is-the-goal-of-this-proposal"],
      f["what-is-the-expected-impact-of-these-changes"],
      f["what-help-might-be-needed-from-juicebox-dao-and-its-members"],
      f.sponsors
    ]
  },
  {
    title: "New Multisig Member",
    emoji: "🖋",
    model: "new-multisig-member",
    fields: [
      f["multi-sig-candidate"],
      f["why-should-this-candidate-be-added-to-the-multi-sig"],
      f[
        "what-ensures-the-candidate-will-uphold-the-views-and-values-of-juicebox-dao-and-its-community"
      ],
      f.sponsors
    ]
  },
  {
    title: "Default",
    emoji: "📃",
    model: "default",
    fields: []
  }
];
