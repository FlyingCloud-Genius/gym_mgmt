package com.gym.management.service.gym.impl;

import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;
import com.gym.management.mapper.gym.GymUserMapper;
import com.gym.management.service.gym.GymUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymUserServiceImpl implements GymUserService {

    @Autowired
    private GymUserMapper userMapper;

    @Override
    public List<GymUser> list(GymUserParam userParam) {
        return userMapper.selectSelective(userParam);
    }
}
