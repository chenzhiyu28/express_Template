import { userRepository } from "../repositories/userRepository";
import { User } from "../models/User";

export const getAllUsers = async (): Promise<User[]> => {
    return await userRepository.find();
};

export const createUser = async (user: Partial<User>): Promise<User> => {
    const newUser = userRepository.create(user);
    return await userRepository.save(newUser);
};
