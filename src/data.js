export const commonFields = {
  title: {
    name: "title",
    label: "Title",
    type: "text"
  },
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
  what_is_the_goal_of_this_proposal: {
    name: "what_is_the_goal_of_this_proposal",
    label: "What is the goal of this proposal?",
    type: "textarea"
  },
  what_changes_should_be_made_to_the_funding_target: {
    name: "what_changes_should_be_made_to_the_funding_target",
    label: "What changes should be made to the funding target?",
    type: "textarea"
  },
  what_changes_should_be_made_to_the_reserved_rate: {
    name: "what_changes_should_be_made_to_the_reserved_rate",
    label: "What changes should be made to the reserved rate?",
    type: "textarea"
  },
  what_changes_should_be_made_to_the_redemption_rate_bonding_curve: {
    name: "what_changes_should_be_made_to_the_redemption_rate_bonding_curve",
    label: "What changes should be made to the redemption rate bonding curve?",
    type: "textarea"
  },
  what_changes_should_be_made_to_the_discount_rate: {
    name: "what_changes_should_be_made_to_the_discount_rate",
    label: "What changes should be made to the discount rate?",
    type: "textarea"
  },
  what_changes_should_be_made_to_the_reconfiguration_ballot: {
    name: "what_changes_should_be_made_to_the_reconfiguration_ballot",
    label: "What changes should be made to the reconfiguration ballot?",
    type: "textarea"
  },
  what_is_the_expected_impact_of_these_changes: {
    name: "what_is_the_expected_impact_of_these_changes",
    label: "What is the expected impact of these changes?",
    desc: "Describe both the short and long-term impact.",
    type: "textarea"
  },
  what_help_might_be_needed_from_juicebox_dao_and_its_members: {
    name: "what_help_might_be_needed_from_juicebox_dao_and_its_members",
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
  payout_recipient: {
    name: "payout_recipient",
    label: "Payout recipient",
    desc: "Payout recipient's name and address.",
    type: "textarea"
  },
  payout_amount: {
    name: "payout_amount",
    label: "Payout amount",
    desc:
      "Must be in USD. For multi-cycle payouts, include payout information for each cycle.",
    type: "textarea"
  },
  how_have_you_already_contributed_to_the_dao: {
    name: "how_have_you_already_contributed_to_the_dao",
    label: "How have you already contributed to the DAO?",
    desc: "Be specific — include projects and tasks.",
    type: "textarea"
  },
  how_do_you_want_to_contribute_to_the_dao_going_forward: {
    name: "how_do_you_want_to_contribute_to_the_dao_going_forward",
    label: "How do you want to contribute to the DAO going forward?",
    desc: "Be specific—include potential projects and tasks.",
    type: "textarea"
  },
  what_does_success_look_like_for_someone_taking_on_your_role: {
    name: "what_does_success_look_like_for_someone_taking_on_your_role",
    label: "What does success look like for someone taking on your role?",
    type: "textarea"
  },
  under_what_criteria_should_the_community_reassess_this_payout: {
    name: "under_what_criteria_should_the_community_reassess_this_payout",
    label: "Under what criteria should the community reassess this payout?",
    type: "textarea"
  },
  what_is_this_payout_for: {
    name: "what_is_this_payout_for",
    label: "What is this payout for?",
    type: "textarea"
  },
  what_justifies_this_payout_reduction: {
    name: "what_justifies_this_payout_reduction",
    label: "What justifies this payout reduction?",
    type: "textarea"
  },
  proposed_reserved_jbx_allocation: {
    name: "proposed_reserved_jbx_allocation",
    label: "Proposed reserved JBX allocation",
    type: "textarea"
  },
  what_do_you_need_from_the_community_to_accomplish_these_goals: {
    name: "what_do_you_need_from_the_community_to_accomplish_these_goals",
    label: "What do you need from the community to accomplish these goals?",
    type: "textarea"
  },
  under_what_criteria_should_the_community_reassess_this_allocation: {
    name: "under_what_criteria_should_the_community_reassess_this_allocation",
    label: "Under what criteria should the community reassess this allocation?",
    type: "textarea"
  },
  what_changes_are_being_proposed: {
    name: "what_changes_are_being_proposed",
    label: "What changes are being proposed?",
    type: "textarea"
  },
  multi_sig_candidate: {
    name: "multi_sig_candidate",
    label: "Multi-sig candidate",
    desc: "Multi-sig candidate's name and address",
    type: "textarea"
  },
  why_should_this_candidate_be_added_to_the_multi_sig: {
    name: "why_should_this_candidate_be_added_to_the_multi_sig",
    label: "Why should this candidate be added to the multi-sig?",
    type: "textarea"
  },
  what_ensures_the_candidate_will_uphold_the_views_and_values_of_juicebox_dao_and_its_community: {
    name:
      "what_ensures_the_candidate_will_uphold_the_views_and_values_of_juicebox_dao_and_its_community",
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
      f.what_is_the_goal_of_this_proposal,
      f.what_changes_should_be_made_to_the_funding_target,
      f.what_changes_should_be_made_to_the_reserved_rate,
      f.what_changes_should_be_made_to_the_redemption_rate_bonding_curve,
      f.what_changes_should_be_made_to_the_reconfiguration_ballot,
      f.what_is_the_expected_impact_of_these_changes,
      f.what_help_might_be_needed_from_juicebox_dao_and_its_members,
      f.sponsors
    ]
  },
  {
    title: "Trial Payment",
    emoji: "🌱",
    model: "trial-payment",
    fields: [
      f.payout_recipient,
      f.payout_amount,
      f.how_have_you_already_contributed_to_the_dao,
      f.how_do_you_want_to_contribute_to_the_dao_going_forward,
      f.sponsors
    ]
  },
  {
    title: "Recurring Payment",
    emoji: "💸",
    model: "recurring-payment",
    fields: [
      f.payout_recipient,
      f.payout_amount,
      f.how_have_you_already_contributed_to_the_dao,
      f.how_do_you_want_to_contribute_to_the_dao_going_forward,
      f.what_does_success_look_like_for_someone_taking_on_your_role,
      f.under_what_criteria_should_the_community_reassess_this_payout,
      f.sponsors
    ]
  },
  {
    title: "One-Time Payout",
    emoji: "💰",
    model: "one-time-payout",
    fields: [
      f.what_is_this_payout_for,
      f.payout_recipient,
      f.payout_amount,
      f.sponsors
    ]
  },
  {
    title: "Payout Reduction",
    emoji: "🧹",
    model: "payout-reduction",
    fields: [
      f.payout_recipient,
      f.payout_amount,
      f.what_justifies_this_payout_reduction,
      f.sponsors
    ]
  },
  {
    title: "Reserved JBX Allocation",
    emoji: "🧃",
    model: "reserved-jbx-allocation",
    fields: [
      f.proposed_reserved_jbx_allocation,
      f.how_have_you_already_contributed_to_the_dao,
      f.how_do_you_want_to_contribute_to_the_dao_going_forward,
      f.what_do_you_need_from_the_community_to_accomplish_these_goals,
      f.what_does_success_look_like_for_someone_taking_on_your_role,
      f.under_what_criteria_should_the_community_reassess_this_allocation,
      f.sponsors
    ]
  },
  {
    title: "Protocol Upgrades",
    emoji: "🍄",
    model: "protocol-upgrades",
    fields: [
      f.what_changes_are_being_proposed,
      f.what_is_the_goal_of_this_proposal,
      f.what_is_the_expected_impact_of_these_changes,
      f.what_help_might_be_needed_from_juicebox_dao_and_its_members,
      f.sponsors
    ]
  },
  {
    title: "Process Upgrades",
    emoji: "🚦",
    model: "process-upgrades",
    fields: [
      f.what_changes_are_being_proposed,
      f.what_is_the_goal_of_this_proposal,
      f.what_is_the_expected_impact_of_these_changes,
      f.what_help_might_be_needed_from_juicebox_dao_and_its_members,
      f.sponsors
    ]
  },
  {
    title: "New Multisig Member",
    emoji: "🖋",
    model: "new-multisig-member",
    fields: [
      f.multi_sig_candidate,
      f.why_should_this_candidate_be_added_to_the_multi_sig,
      f.what_ensures_the_candidate_will_uphold_the_views_and_values_of_juicebox_dao_and_its_community,
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
