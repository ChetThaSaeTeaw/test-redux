import { Fragment , useState } from "react";
import { useSelector } from "react-redux";
import {
    selectorContactPersons,
    selectorGenderPersons,
  } from "../../store/contact/contact.seletor";
import Button from "react-bootstrap/Button";

// icons
import {
  FaMale,
  FaFemale,
  FaQuestion,
} from "react-icons/fa";

export default function GenderBox() {

  const [gender, setGender] = useState(null);

  const contactLists = useSelector(selectorContactPersons);

  const genderSelect = useSelector((state) => {
    return selectorGenderPersons(state, { gender: gender });
  });

  // Display Selector Gender
  const spreadLists = (gender) => {
    return contactLists
      .filter((person) => person.gender === gender)
      .map((person) => person);
  };

  return (
    <>
      <span
        className="fixedBoxIcons"
        style={{ bottom: 20, right: 95, fontSize: "1rem" }}
        onClick={() => setGender("male")}
      >
        <FaMale />
        {spreadLists("male")?.length <= 0 ? null : (
          <span className="fixedBoxLenght">{spreadLists("male")?.length}</span>
        )}
      </span>
      <span
        className="fixedBoxIcons"
        style={{ bottom: 77, right: 105, fontSize: "1rem" }}
        onClick={() => setGender("female")}
      >
        <FaFemale />
        {spreadLists("female")?.length <= 0 ? null : (
          <span className="fixedBoxLenght">
            {spreadLists("female")?.length}
          </span>
        )}
      </span>
      <span
        className="fixedBoxIcons"
        style={{ bottom: 110, right: 50, fontSize: "1rem" }}
        onClick={() => setGender("unknown")}
      >
        <FaQuestion />
        {spreadLists("unknown")?.length <= 0 ? null : (
          <span className="fixedBoxLenght">
            {spreadLists("unknown")?.length}
          </span>
        )}
      </span>
      <div style={{ width: "100%", textAlign: "center", padding: "12px 6px" }}>
        {genderSelect <= 0 ? (
          <b>ยังไม่มีรายการ</b>
        ) : (
          <>
            <h4>รายการทั้งหมด</h4>
            <div>
              {genderSelect?.map((person, index) => {
                const personData = `Id : ${person.id} , Name : ${person.name} , Gender : ${person.gender} , Email : ${person.email} , Message : ${person.message}`;
                return (
                  <Fragment key={index}>
                    <Button className="my-2">{personData}</Button>
                  </Fragment>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
