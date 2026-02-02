const getCapabilities = () => [
  {
    capabilityId: "tool.refresh",
    name: "tool-refresh",
    description: "Refreshes tool schemas from the registry.",
  },
  {
    capabilityId: "agent.route",
    name: "agent-route",
    description: "Routes intent to the correct agent handler.",
  },
];

module.exports = {
  getCapabilities,
};
