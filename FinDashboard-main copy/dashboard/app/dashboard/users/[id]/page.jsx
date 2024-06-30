"use client";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";

const SingleUserPage = () => {
  const users = useSelector((state) => state.project.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    const foundUser = users.find((user) => user.id === parseInt(id));
    if (foundUser) {
      setUser(foundUser);
    } else {
      console.error(`User with id ${id} not found`);
    }
  }, [id, users]);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="submit" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.name} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Role</label>
          <input type="text" name="role" placeholder={user.role} />
          <label>Created at</label>
          <textarea type="text" name="address" placeholder={user.createdAt} />
          <label>Status</label>
          <textarea type="text" name="status" placeholder={user.status} />
          
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
