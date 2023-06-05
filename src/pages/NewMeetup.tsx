import NewMeetupForm from "../components/meetups/newMeetupForm";
import { FIREBASE_URL } from "../utils/constants";
import { NewMeetupData } from "../utils/types";

type Props = unknown;

const NewMeetupPage: React.FC<Props> = () => {
  const onAddMeetupHandler = (meetupData: NewMeetupData) => {
    console.log(meetupData);
    fetch(FIREBASE_URL + "/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
