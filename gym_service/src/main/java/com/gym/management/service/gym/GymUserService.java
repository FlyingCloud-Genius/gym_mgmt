package com.gym.management.service.gym;

import java.util.List;
import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;

public interface GymUserService {

    List<GymUser> list(GymUserParam userParam);
}
