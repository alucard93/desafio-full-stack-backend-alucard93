import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userDeleteService = async (id: string) => {

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id });
    
    if (!user) {
        throw new AppError("User not found!", 404);
    }
        await userRepository.update(user.id, { isActive: false });
    
    return true;
}

export default userDeleteService;



