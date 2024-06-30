'use client'
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '@/app/Store/Project/ProjectSlice';
import { useRouter } from "next/navigation";

const AddUserPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const users = useSelector((state) => state.project.users);
    const router = useRouter();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = {
        id:users.length + 1,
        name,
        email,
        createdAt: new Date().toLocaleDateString(),
        role,
        status,
        profilePicture: '/noavatar.png',
      };
      dispatch(setUsers([...users, newUser]));
      // Redirect to the users page
      console.log(newUser)
      router.push("/dashboard/users")
    };
    return (
        <div className={styles.container}>
            <form  className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username" required value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Role" name="Role" required value={role} onChange={(e) => setRole(e.target.value)}/>
                <input type="text" placeholder="IsActive" name="IsActive" required value={status} onChange={(e) => setStatus(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;