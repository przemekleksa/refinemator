import { useEffect, useRef, useState } from 'react';
import { Card as CardProps } from '../../store/cards/type';
import styles from './Card.module.scss';
import cx from 'classnames';
import { Button } from '../Button/Button';
import { deleteCard, incrementCons, incrementPros } from '../../store/cards/actions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal/Modal';
import { DeleteCard } from './DeleteCard';

interface Props {
  card: CardProps;
}

export const Card = ({ card }: Props) => {
  const dispatch = useDispatch();

  const handleProsIncrement = (id: string) => {
    dispatch(incrementPros(id));
  };
  const handleConsIncrement = (id: string) => {
    dispatch(incrementCons(id));
  };

  const handleDeletion = (id: string) => {
    dispatch(deleteCard(id));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardName(e.target.value);
  };

  const [editable, setEditable] = useState(false);
  const [cardName, setCardName] = useState(card.name);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setEditable(false);
    }
  };

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (editable) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (cardName === '') {
        setOpenModal(true);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [editable]);

  const RemoveCard = (value: boolean) => {
    value ? handleDeletion(card.id) : setCardName('Card Name');
    setOpenModal(false);
  };

  return (
    <div className={cx(styles.root, !card.visibility && styles.notVisible)} key={card.id}>
      {openModal && (
        <Modal onClose={() => setOpenModal(!openModal)}>
          <DeleteCard Delete={RemoveCard} />
        </Modal>
      )}
      {/* jak ustawic focus po kliknieciu na tytul */}
      {editable ? (
        <form>
          <textarea
            name="name"
            value={cardName}
            onChange={handleNameChange}
            ref={inputRef}
            className={styles.textarea}
          />
        </form>
      ) : (
        <div className={styles.title} onClick={() => setEditable(true)}>
          {cardName}
        </div>
      )}
      <div className={styles.prosAndCons}>
        <div className={styles.pros}>
          {card.pros}{' '}
          <Button round onClick={() => handleProsIncrement(card.id)}>
            +
          </Button>
        </div>

        <div className={styles.cons}>
          {card.cons}{' '}
          <Button round onClick={() => handleConsIncrement(card.id)}>
            -
          </Button>
        </div>
        <FontAwesomeIcon
          icon={faTrashCan}
          className={styles.deleteIcon}
          onClick={() => handleDeletion(card.id)}
        />
      </div>
    </div>
  );
};
