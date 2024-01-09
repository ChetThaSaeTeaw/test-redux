import './FixedBox.scss'; // CSS

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorContactPersons } from '../../store/contact/contact.seletor';

// icons
import { FaBookmark, FaTrashAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { deleteContact } from '../../store/contact/contact.reducer';

export default function FixedBox() {

  const [modal, setModal] = useState(false);
  const contactLists = useSelector(selectorContactPersons);

  return (
    <>
      <span
        className="fixedBoxIcons"
        onClick={() => setModal(!modal)}
      >
        {contactLists <= 0 ? null : <span className="fixedBoxLenght">{contactLists.length}</span>}
        <FaBookmark />
      </span>
      {!modal ? null
        :
        <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ModalLists
            setModal={setModal}
          />
        </section>
      }
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
      {contactLists <= 0 ? <p style={{ textAlign : 'center' }}>ยังไม่มีรายการ</p>
        :
        <ul>
          {contactLists?.map((item, index) => {
            return (
              <li key={index}>
                <p>Id : <b>{item.id}</b></p>
                <p>Name : <b>{item.name}</b> |</p>
                <p>Email : <b>{item.email}</b> |</p>
                <p>Gender : <b>{item.gender }</b></p>
                <p>Text : <b>{item.message}</b></p>
                <span onClick={() => dispatch(deleteContact({ id : item.id }))}><FaTrashAlt /></span>
              </li>
            )
          })}
        </ul>
      }
    </section>
  );
};
