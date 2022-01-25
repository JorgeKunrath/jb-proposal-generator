// titulo, autor, resumo, risks e data são campos obrigatórios e globais

export const fields = {
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

// Just an abreviation
const f = fields;

export const proposals = [
  {
    title: "Funding Cycle Reconfiguration",
    emoji: "🌀",
    model: "funding-cycle-reconfiguration",
    desc:
      "As new ideas regarding JuiceboxDAO's operations and fiscal strategy emerge, contributors are encouraged to formalize them into a proposal so that they can be discussed.",
    fields: [f.author, f.risks, f.summary]
  },
  {
    title: "Trial Payment",
    emoji: "🌱",
    model: "trial-payment",
    fields: [f.author, f.risks, f.summary]
  },
  {
    title: "Recurring Payment",
    emoji: "💸",
    model: "recurring-payment"
  },
  {
    title: "One-Time Payout",
    emoji: "💰",
    model: "one-time-payout"
  },
  {
    title: "Payout Reduction",
    emoji: "🧹",
    model: "payout-reduction"
  },
  {
    title: "Reserved JBX Allocation",
    emoji: "🧃",
    model: "reserved-jbx-allocation"
  },
  {
    title: "Protocol Upgrades",
    emoji: "🍄",
    model: "protocol-upgrades"
  },
  {
    title: "Process Upgrades",
    emoji: "🚦",
    model: "process-upgrades"
  },
  {
    title: "New Multisig Member",
    emoji: "🖋",
    model: "new-multisig-member"
  },
  {
    title: "DRAFT: General Proposal Template",
    emoji: "📃",
    model: "draft-general-proposal-template"
  }
];