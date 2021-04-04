package com.gym.management.service.gym.impl;

import com.gym.management.domain.param.GymCardInfoParam;
import com.gym.management.domain.view.GymCardInfoView;
import com.gym.management.mapper.gym.GymCardInfoMapper;
import com.gym.management.service.gym.GymCardInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymCardInfoServiceImpl implements GymCardInfoService {

    @Autowired
    private GymCardInfoMapper cardInfoMapper;

    @Override
    public List<GymCardInfoView> list(GymCardInfoParam cardInfoParam) {
        return cardInfoMapper.selectBySelectiveForView(cardInfoParam);
    }
}
