import { MeetupsArray } from "../../../utils/types";
import MeetupItem from "../meetupItem";
import styles from "./MeetupList.module.css";
type Props = {
  meetups: MeetupsArray;
};

const MeetupList: React.FC<Props> = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          address={meetup.address}
          description={meetup.description}
          image={meetup.image}
          title={meetup.title}
          id={meetup.id}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
