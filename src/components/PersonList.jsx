import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PersonList = ({ id }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function personList() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/2"
        );
        const user = response.data;
        setUser(user);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    personList();
  }, [id]);

  if (loading) {
    return (
      <div>
        <p className="loading">"Loading..."</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className="error">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container-form">
      <div>
        <p>
          Name:
          <br /> {user.name}
        </p>
        <p>
          Email:
          <br /> {user.email}
        </p>
        <p>
          Id:
          <br /> {user.id}
        </p>
      </div>
    </div>
  );
};

export default PersonList;
