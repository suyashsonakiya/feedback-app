import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [feed, setFeed] = useState("");

  const handleChange = (e) => {
    setFeed(e.target.value);
  };

  const location = useLocation();
  const user = location.state?.user;
  //   console.log(user);

  function handleFeedback(e) {
    e.preventDefault();
    console.log(feed);

    const feedback = {
      name: user.name,
      feedback: feed
    }

    // axios
    //   .post("http://localhost:4000/feedback", feedback)
    //   .then((res) => res.data.message);

      axios.post("http://localhost:4000/feedback", feedback)
      .then((res) => {
        alert(res.data.message);
        // console.log(res.data.user);
        
      });
  }

  if (!user) {
    <div className="flex justify-center items-center">
      <p>Your are not logged in</p>;
    </div>;
  }
  return (
    <div className="w-full h-fit p-2">
      <div className="flex flex-row my-1 sm:my-5 justify-around items-center text-white bg-rose-600 p-3 w-full sm:w-1/2 mx-0 sm:mx-auto rounded-md">
        <h3>Welcome : {user.name}</h3>
        <button
          className="bg-zinc-500 p-2 rounded-lg shadow-sm hover:bg-zinc-600 transition-all"
          onClick={() => navigate("/Login")}
        >
          Logout
        </button>
      </div>

      <div className="mt-10">
        <h4 className="text-center text-white text-xl sm:text-4xl capitalize font-semibold">
          Send your feedback
        </h4>

        <div className="w-3/4 md:w-1/2 mx-auto mt-10 rounded-md h-fit p-5 bg-zinc-300 text-black">
          <form onSubmit={handleFeedback}>
            <div className="my-1 md:my-3">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={user.name}
                onChange={handleChange}
                title="Your Logging Name"
                className="w-full p-3 rounded-lg border-2 border-rose-500"
                disabled
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="feedback">Your Feedback*</label>
              <textarea
                name="feedback"
                onChange={handleChange}
                value={feed}
                className="w-full p-3 rounded-lg border-2 border-rose-500"
                resize="none"
                title="Write your feedback"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-3 text-white font-semibold text-2xl w-full bg-zinc-600 p-1 rounded-lg shadow-sm hover:bg-zinc-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
