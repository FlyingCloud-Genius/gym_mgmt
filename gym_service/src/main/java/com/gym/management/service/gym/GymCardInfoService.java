package com.gym.management.service.gym;

import com.gym.management.domain.param.GymCardInfoParam;
import com.gym.management.domain.view.GymCardInfoView;

import java.util.List;

public interface GymCardInfoService {

    List<GymCardInfoView> list(GymCardInfoParam cardInfoParam);
}
