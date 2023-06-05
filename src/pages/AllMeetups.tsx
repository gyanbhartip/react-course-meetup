import MeetupList from "../components/meetups/meetupList";
import { DUMMY_MEETUP_DATA } from "../utils/dummyMeetupData";

type Props = unknown;

const AllMeetupsPage: React.FC<Props> = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_MEETUP_DATA} />
    </section>
  );
};

export default AllMeetupsPage;
