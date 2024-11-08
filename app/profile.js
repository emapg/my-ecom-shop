import { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from '../components/UserProfile';
import dbConnect from '../lib/dbConnect';
import Order from '../models/Order';
import User from '../models/User';

export async function getServerSideProps(context) {
  await dbConnect();
  const user = await User.findById(context.params.id).populate('orders').lean();
  return { props: { user: JSON.parse(JSON.stringify(user)) } };
}

const Profile = ({ user }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;
