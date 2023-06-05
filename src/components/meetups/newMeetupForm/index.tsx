import { useRef } from "react";
import Card from "../../ui/card";
import styles from "./NewMeetupForm.module.css";
import { NewMeetupData } from "../../../utils/types";

type Props = {
  onAddMeetup: (meetupData: NewMeetupData) => void;
};

const NewMeetupForm: React.FC<Props> = ({ onAddMeetup }) => {
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onAddMeetup({
      address: addressInputRef.current?.value || "",
      description: descriptionInputRef.current?.value || "",
      image: imageInputRef.current?.value || "",
      title: titleInputRef.current?.value || "",
    });
  };

  return (
    <Card>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Title</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Title</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup Title</label>
          <textarea
            id="description"
            cols={30}
            rows={10}
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
