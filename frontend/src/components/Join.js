import React, { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join">
      <input
        type="text"
        id="name"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        id="room"
        placeholder="Enter the name of room..."
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        required
      />
      <Link
        onClick={(e) =>
          !name || !room
            ? (e.preventDefault(), alert(`Enter the details...`))
            : null
        }
        to={`/chat?name=${name}&room=${room}`}
      >
        <button id="join-btn" type="submit">
          Enter the chat
        </button>
      </Link>
    </div>
  );
}

export default Join;
