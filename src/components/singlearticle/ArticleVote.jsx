import { useState } from "react";
import { patchVotesById } from "../../utils/api";

export default function ArticleVote({ votes, id }) {
  const [newVotes, setNewVotes] = useState(votes);
  const [error, setError] = useState(null);

  const countUp = () => {
    setNewVotes((curVotes) => curVotes + 1);
    patchVotesById(id, { inc_votes: 1 }).catch((err) => {
      setSentMessageCount((curVotes) => curVotes - 1);
      setError("Something went wrong, please try again.");
    });
  };

  const countDown = () => {
    setNewVotes((curVotes) => curVotes - 1);
    patchVotesById(id, { inc_votes: -1 }).catch((err) => {
      setSentMessageCount((curVotes) => curVotes + 1);
      setError("Something went wrong, please try again.");
    });
  };

  return (
    <section className="votes">
      <h4>
        Current votes: {newVotes} {error ? <i>{error}</i> : null}
      </h4>
      <button onClick={() => countUp()}>Thumbs Up 👍</button>
      <button onClick={() => countDown()}>Thumbs Down 👎</button>
    </section>
  );
}
