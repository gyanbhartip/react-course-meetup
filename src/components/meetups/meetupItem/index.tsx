import Card from "../../ui/card";
import styles from "./MeetupItem.module.css";
type Props = {
  address: string;
  description: string;
  image: string;
  title: string;
};

const MeetupItem: React.FC<Props> = ({
  address,
  description,
  image,
  title,
}) => {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
