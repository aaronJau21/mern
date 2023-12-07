import { User } from "../model/User";

export const sharedEmail = async (email: string) => {
  const user = await User.findOne({ email });

  return user;
};
