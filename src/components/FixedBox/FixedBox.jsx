import './FixedBox.scss'; // CSS

import { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorContactPersons, selectorGenderPersons } from '../../store/contact/contact.seletor';
import { deleteContact } from '../../store/contact/contact.reducer';
import Button from 'react-bootstrap/Button';

// icons
import { FaBookmark, FaTrashAlt, FaMale, FaFemale, FaQuestion } from "react-icons/fa";
import { MdClose } from "react-icons/md";


export default function FixedBox() {

  const [modal, setModal] = useState(false);
  const [gender, setGender] = useState(null);

  const contactLists = useSelector(selectorContactPersons);

  // const genderSelect = useSelector((state) => {
  //   selectorGenderPersons(state , gender);
  // });

  const genderSelect = useSelector((state) => {
    return selectorGenderPersons(state, { gender: gender })
  });

  // Display Selector Gender
  const spreadLists = (gender) => {
    return contactLists.filter(person => person.gender ===  gender).map(person => person);
  };

  return (
    <>
      <span
        className="fixedBoxIcons"
        onClick={() => setModal(!modal)}
      >
        {contactLists.length <= 0 ? null : <span className="fixedBoxLenght">{contactLists?.length}</span>}
        <FaBookmark />
      </span>
      <span
        className="fixedBoxIcons"
        style={{ bottom: 20, right: 95, fontSize: "1rem" }}
        onClick={() => setGender("male")}
      >
        <FaMale />
        {spreadLists("male")?.length <= 0 ? null : <span className="fixedBoxLenght">{spreadLists("male")?.length}</span>}
      </span>
      <span
        className="fixedBoxIcons"
        style={{ bottom: 77, right: 105, fontSize: "1rem" }}
        onClick={() => setGender("female")}
      >
        <FaFemale />
        {spreadLists("female")?.length <= 0 ? null : <span className="fixedBoxLenght">{spreadLists("female")?.length}</span>}
      </span>
      <span
        className="fixedBoxIcons"
        style={{ bottom: 110, right: 50, fontSize: "1rem" }}
        onClick={() => setGender("unknown")}
      >
        <FaQuestion />
        {spreadLists("unknown")?.length <= 0 ? null : <span className="fixedBoxLenght">{spreadLists("unknown")?.length}</span>}
      </span>
      <hr />
      {!modal ? null
        :
        <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ModalLists
            setModal={setModal}
          />
        </section>
      }
      <div style={{ width: "100%", textAlign: "center", padding: "12px 6px" }}>
        {genderSelect <= 0
          ?
          <p>ยังไม่มีรายการ</p>
          :
          <>
            <h4>รายการทั้งหมด</h4>
            <div>{genderSelect?.map((person, index) => {
              const personData = `Id : ${person.id} , Name : ${person.name} , Gender : ${person.gender} , Email : ${person.email} , Message : ${person.message}`
              return (
                <Fragment key={index}>
                  <Button className='my-2'>{personData}</Button>
                </Fragment>
              )
            })}</div>
          </>
        }
      </div>
    </>
  )
}

// Modal Components
const ModalLists = ({ setModal }) => {
  const contactLists = useSelector(selectorContactPersons);
  const dispatch = useDispatch();
  return (
    <section className="modalListsBox">
      <section className="modalTitleBox">
        <h2>Contact Lists</h2>
        <span
          className="modalIconClose"
          onClick={() => setModal(false)}
        >
          <MdClose />
        </span>
      </section>
      {contactLists <= 0 ? <p style={{ textAlign: 'center' }}>ยังไม่มีรายการ</p>
        :
        <ul>
          {contactLists?.map((item, index) => {
            return (
              <li key={index}>
                <p>Id : <b>{item.id}</b></p>
                <p>Name : <b>{item.name}</b> |</p>
                <p>Email : <b>{item.email}</b> |</p>
                <p>Gender : <b>{item.gender}</b></p>
                <p>Text : <b>{item.message}</b></p>
                <span onClick={() => dispatch(deleteContact({ id: item.id }))}><FaTrashAlt /></span>
              </li>
            )
          })}
        </ul>
      }
    </section>
  );
};
