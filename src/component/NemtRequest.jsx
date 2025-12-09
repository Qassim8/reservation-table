import "./NemtRequest.css";
import firstLogo from "../assets/image1.png";
import secondLogo from "../assets/image2.png";

const NemtRequest = () => {
  const services = [
    { label: "Assistive technology", value: "" },
    { label: "Staff / family consultation and training", value: "" },
    { label: "Community Access", value: "" },
    { label: "Supported employment services", value: "" },
    { label: "Community Guide", value: "" },
    { label: "Transportation", value: "" },
    { label: "Habilitative behavior support and consultation", value: "" },
    { label: "Habilitative therapy services", value: "" },
    { label: "Other habilitative services and supplies", value: "" },
  ];

  return (
    <div>
      <nav className="header">
        <div className="logo flex-1">
          <img src={firstLogo} alt="first-logo" />
        </div>
        <div className="title flex-1">
          <p>DEVELOPMENTAL DISABILITIES ADMINISTRATION (DDA)</p>
          <h1>
            Non-Emergency Medical Transportation (NEMT) for PASRR Program
            Request
          </h1>
        </div>
        <div className="logo flex-1">
          <img src={secondLogo} alt="second-logo" />
        </div>
      </nav>
      <form className="form-wrapper">
        <table className="medical-table">
          <tbody>
            <tr>
              <td className="field">
                <label>Date</label>
                <input type="date" defaultValue="12/01/2025" />
              </td>

              <td className="field">
                <label>FAX Number</label>
                <input type="text" defaultValue="(206) 205-5000" />
              </td>
            </tr>

            <tr>
              <td className="field">
                <label>TO</label>
                <input type="text" defaultValue="Access, NEMT Broker" />
              </td>

              <td className="field">
                <label>FROM (DDA Region)</label>
                <input type="text" defaultValue="Region 2" />
              </td>
            </tr>

            <tr>
              <td className="field">
                <label>Name of PASRR Assessor:</label>
                <input type="text" defaultValue="Johnson, Traci" />
              </td>

              <td className="field">
                <label>Phone Number</label>
                <input type="text" defaultValue="(206) 794-0631" />
              </td>
            </tr>

            <tr className="section-title">
              <td colSpan="2">Section 1. Client Information</td>
            </tr>

            <tr>
              <td className="section-two-item">
                <label>Last Name</label>
                <input type="text" defaultValue="Abakar" />
              </td>

              <td className="flex-td">
                <div className="flex-item large">
                  <label>First Name</label>
                  <input type="text" defaultValue="Yousef" />
                </div>

                <div className="flex-item small">
                  <label>ProviderOne ID Number</label>
                  <input type="text" defaultValue="202877410WA" />
                </div>
              </td>

              <td className="section-two-item">
                <label>Date of Birth</label>
                <input type="text" defaultValue="10/16/2004" />
              </td>
            </tr>

            <tr>
              <td className="section-two-item">
                <label>Additional Contact</label>
                <input type="text" defaultValue="Omer A" />
              </td>
              <td className="section-two-item" colSpan="2">
                <label>Phone</label>
                <input type="text" defaultValue="(206) 945-5404" />
              </td>
              <td className="section-two-item">
                <label>Organization</label>
                <input type="text" defaultValue="Advanced Care LLC" />
              </td>
            </tr>

            <tr>
              <td className="section-two-item">
                <label>Additional Contact</label>
                <input type="text" defaultValue="Front Desk" />
              </td>
              <td className="section-two-item" colSpan="2">
                <label>Phone</label>
                <input type="text" defaultValue="(701) 306-3383" />
              </td>
              <td className="section-two-item">
                <label>Organization</label>
                <input type="text" defaultValue="Home" />
              </td>
            </tr>

            <tr className="full-row">
              <td colSpan="2" className="section-two-item">
                <label>Will support person ride with the individual?</label>
                <span className="check-group">
                  <input type="checkbox" /> Yes
                  <input type="checkbox" /> No
                </span>
              </td>
            </tr>

            <tr className="full-row">
              <td colSpan="2" className="section-two-item">
                <label>
                  What is the Mobility Status of the client (i.e Wheelchair,
                  cane )?
                </label>
                <input type="text" defaultValue="Wheelchair" />
              </td>
            </tr>

            <tr className="full-row">
              <td colSpan="2" className="section-two-item">
                <label>Pick-up Address (Exact Address/ Entrance)</label>
                <input
                  type="text"
                  defaultValue="16825 SE260th St, Covington, WA 98042"
                />
              </td>
            </tr>

            <tr className="full-row">
              <td colSpan="2" className="section-two-item">
                <label>Drop-off Address (Exact Address/ Entrance)</label>
                <input
                  type="text"
                  defaultValue="16825 SE260th St, Covington, WA 98042"
                />
              </td>
            </tr>

            <tr>
              <td className="section-two-item">
                <label>Recurring Appointment</label>
                <div className="check-group">
                  <input type="checkbox" /> Yes
                  <input type="checkbox" /> No
                </div>
              </td>

              <td className="flex">
                <dd className="section-two-item">
                  <label>Appointment Start / End</label>
                  <div className="time-group">
                    <input type="time" />
                  </div>
                </dd>
                <dd className="section-two-item">
                  <label>Appointment Start / End</label>
                  <div className="time-group">
                    <input type="time" />
                  </div>
                </dd>
              </td>
            </tr>

            <tr>
              <td className="section-two-item">
                <label>Transportation Start Date</label>
                <input type="date" />
              </td>
              <td className="section-two-item">
                <label>Transportation End Date</label>
                <input type="date" />
              </td>
            </tr>

            <tr className="full-row">
              <td colSpan="2" className="section-two-item flex-col">
                <label>Special Needs / Comments</label>
                <input
                  type="text"
                  defaultValue="Call Omer A (206) 945-5404 before no show."
                />
              </td>
            </tr>

            <tr className="section-title">
              <td colSpan="2">Section 2. Certification</td>
            </tr>

            <tr className="full-row">
              <td colSpan="2" className="flex-col">
                <div className="check-group">
                  <input type="checkbox" defaultChecked /> Client is Medicaid
                  Eligible.
                </div>
                <div className="check-group">
                  <input type="checkbox" /> Client needs transportation to
                  receive PASRR Specialized Add-on Services.
                </div>
              </td>
            </tr>

            <tr className="services">
              <td colSpan="2">
                <label className="section-two-item">
                  Specialized add-on Services (please check that all apply):
                </label>
                <div className="services-grid">
                  {services.map(({ label, value }, index) => (
                    <label
                      key={index}
                      className={`${
                        index == services.length - 1 ? "grid-col-2" : ""
                      }`}
                    >
                      <input type="checkbox" /> {label}
                    </label>
                  ))}
                </div>
              </td>
            </tr>

            <tr className="signature-row">
              <td className="section-two-item">
                <label>Signature</label>
                <input type="text" />
              </td>
              <td className="section-two-item">
                <label>Date</label>
                <input type="text" />
              </td>
              <td className="section-two-item">
                <label>Print Name</label>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default NemtRequest;
