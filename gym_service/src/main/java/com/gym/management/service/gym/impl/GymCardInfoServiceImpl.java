package com.gym.management.service.gym.impl;

import com.gym.management.mapper.gym.GymCardInfoMapper;
import com.gym.management.service.gym.GymCardInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GymCardInfoServiceImpl implements GymCardInfoService {

    @Autowired
    private GymCardInfoMapper cardInfoMapper;
}
