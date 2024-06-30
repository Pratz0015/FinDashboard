"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuHover: false,
  users: [
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      createdAt: "13.01.2024",
      role: "Admin",
      status: "active",
      profilePicture: "/man.png",
    },
    {
      id: 2,
      name: "Josephine Zimmerman",
      email: "josephine@gmail.com",
      createdAt: "14.02.2024",
      role: "User",
      status: "active",
      profilePicture: "/profile1.png",
    },
    {
      id: 3,
      name: "Cecillia Harriet",
      email: "cecillia@gmail.com",
      createdAt: "13.01.2024",
      role: "User",
      status: "active",
      profilePicture: "/profile2.png",
    },
    {
      id: 4,
      name: "Dennis Thomas",
      email: "dennis@gmail.com",
      createdAt: "12.01.2024",
      role: "User",
      status: "active",
      profilePicture: "/profile3.png",
    },
    {
      id: 5,
      name: "Lula Neal",
      email: "lula@gmail.com",
      createdAt: "11.01.2024",
      role: "User",
      status: "active",
      profilePicture: "/profile4.png",
    },
    {
      id: 6,
      name: "Jeff Montgomery",
      email: "jeff@gmail.com",
      createdAt: "10.01.2024",
      role: "User",
      status: "active",
      profilePicture: "/profile5.jpg",
    },
  ],
};

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    resetaAllProjectDetails: () => initialState,

    setMenuHover(state, action) {
      state.menuHover = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { setMenuHover,setUsers } = projectSlice.actions;

export default projectSlice.reducer;
