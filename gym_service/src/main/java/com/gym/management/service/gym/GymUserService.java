package com.gym.management.service.gym;

import java.util.List;

import com.gym.management.domain.DO.CreateUserVO;
import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;

public interface GymUserService {

    List<GymUser> list(GymUserParam userParam);

    GymUser selectByPrimaryKey(Long id);

    void addSave(CreateUserVO user, String createUser);

    void editSave(GymUser user);

    void deleteUserByIds(String ids);

    //register via
    String register(String cardId, Integer registerType, String userName);

    String register(Long id, Integer registerType, String userName);

    boolean bindExistingCard(Long id, String cardId);
}
