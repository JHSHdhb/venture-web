const capabilities = [
  "PCBA",
  "Turnkey PCBA",
  "Component Sourcing",
  "Testing",
  "EMS / Box Build",
  "DFM / BOM Review",
];

export function TrustCapabilityStrip() {
  return (
    <section className="trust-strip" aria-labelledby="trust-strip-title">
      <div className="trust-strip__inner">
        <div className="trust-strip__head">
          <p className="section-header__label">Capability evidence</p>
          <h2 id="trust-strip-title">Evidence-safe project support areas</h2>
        </div>

        <ul className="trust-strip__list" aria-label="Venture Electronics evidence-safe capabilities">
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
