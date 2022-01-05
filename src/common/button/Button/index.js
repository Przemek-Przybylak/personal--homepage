import { Contact, MailContent, Mail } from "./styled";

export const Button = ({ ismail, content, adres }) => {
  return (
    <Contact href={adres}>
      {ismail ? <Mail href={adres} /> : ""}
      <MailContent>{content}</MailContent>
    </Contact>
  );
};
