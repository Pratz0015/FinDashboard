"use client";

import { setUsers } from "@/app/Store/Project/ProjectSlice";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsersPage = () => {
  const users = useSelector((state) => state.project.users);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  //   const [filteredUsers, setFilteredUsers] = useState(users);

  // const handleSearch = ((e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   const filteredUsers = users.filter((user) => {
  //     return (
  //       user.name.toLowerCase().includes(searchTerm) ||
  //       user.email.toLowerCase().includes(searchTerm)
  //     );
  //   });
  //   setFilteredUsers(filteredUsers);
  // }, 500);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDeleteUser = (id) => {
    dispatch(setUsers(users.filter((user) => user.id !== id)));
  };



  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search
          placeholder="Search for a user..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.profilePicture}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
