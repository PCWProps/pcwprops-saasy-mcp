# saasy-mcp

## role
- Capability registry and schema exposure for the control plane.

## allowed responsibilities
- Provide tool/capability catalog and schemas.

## forbidden overlaps
- No auth/tenancy, no intent routing, no execution.

## interfaces
- `getCapabilities()` returns a capability list (stubbed in Phase 1).

## mock limitations
- Capabilities are static local stubs; no external MCP calls.
