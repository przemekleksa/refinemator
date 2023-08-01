import { useDispatch, useSelector } from 'react-redux';
import styles from './Section.module.scss';
import cx from 'classnames';
import { getCardsBySectionId } from '../../store/cards/selector';
import { Section as SectionProps } from '../../store/section/types';

import { Card as CardProps } from '../../store/cards/type';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { addCard } from '../../store/cards/actions';

interface Props {
  section: SectionProps;
  key: string;
}

export const Section = ({ section }: Props) => {
  const sectionCards = useSelector(getCardsBySectionId(section.id));
  const dispatch = useDispatch();

  const handleAddCard = (id: string) => {
    dispatch(addCard(id));
  };

  return (
    <div className={cx(styles.root, styles[`${section.color}`])} key={section.id}>
      <div className={styles.header}>
        {' '}
        <div className={styles.title}>{section.name}</div>
        <Button color="primary" onClick={() => handleAddCard(section.id)}>
          Add Card
        </Button>
        {/* jak ustawic focus na tytule po dodaniu nowej karty? */}
      </div>

      <div className={styles.cards}>
        {sectionCards && sectionCards.map((card: CardProps) => <Card card={card} key={card.id} />)}
      </div>
    </div>
  );
};
