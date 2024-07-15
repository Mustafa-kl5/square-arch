import ContactInformation from "./contact-information";
import ContactSocial from "./contact-social";
import ContactPlace from "./contact-place";
import { getSquareData } from "../../services/square.service";
export default function ContactContainer() {
  const contacts = getSquareData();

  return (
    <>
      <ContactPlace place="LONDON" />
      <div className="Warp">
        <ContactInformation
          address={contacts.Contact[0].address}
          generalemail={contacts.Contact[0].general_requires}
          marketinemail={contacts.Contact[0].press_and_markting}
          tel={contacts.Contact[0].phone_number}
          fax={contacts.Contact[0].fax_number}
        />
        <ContactSocial />
      </div>
    </>
  );
}
