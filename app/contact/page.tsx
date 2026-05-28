import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { placeholderPages } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <PlaceholderPage {...placeholderPages.contact}>
      <div className="form-panel contact-form" aria-label="Static request a quote form placeholder">
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="name@example.com" type="email" />
          </div>
        </div>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="service">Service interest</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>PCB Assembly / PCBA</option>
              <option>Turnkey PCB Assembly</option>
              <option>Prototype & Low-volume PCBA</option>
              <option>EMS & Box Build</option>
              <option>Component Sourcing & BOM Review</option>
              <option>Testing & Quality Control</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="files">Project files</label>
            <input id="files" name="files" placeholder="BOM, Gerber, assembly notes" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Project context</label>
          <textarea
            id="message"
            name="message"
            placeholder="Briefly describe the project stage, assembly needs, quote inputs, or support questions."
          />
        </div>
        <button className="cta-button cta-button--primary" type="button">
          Static form placeholder
        </button>
      </div>
    </PlaceholderPage>
  );
}
