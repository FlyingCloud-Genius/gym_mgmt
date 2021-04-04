package com.gym.management.service.gym.impl;

import com.gym.management.domain.VO.CreateUserVO;
import com.gym.management.domain.gym.GymCardInfo;
import com.gym.management.domain.gym.GymRegistry;
import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;
import com.gym.management.enums.RegisterTypeEnum;
import com.gym.management.mapper.gym.GymCardInfoMapper;
import com.gym.management.mapper.gym.GymRegistryMapper;
import com.gym.management.mapper.gym.GymUserMapper;
import com.gym.management.service.exception.CardExistException;
import com.gym.management.service.exception.CardInUseException;
import com.gym.management.service.exception.CardNotExistException;
import com.gym.management.service.gym.GymUserService;
import com.gym.management.utils.Convert;
import com.gym.management.utils.DateUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class GymUserServiceImpl implements GymUserService {

    @Autowired
    private GymUserMapper userMapper;

    @Autowired
    private GymRegistryMapper registryMapper;

    @Autowired
    private GymCardInfoMapper cardInfoMapper;

    @Override
    public List<GymUser> list(GymUserParam userParam) {
        return userMapper.selectBySelective(userParam);
    }

    @Override
    public GymUser selectByPrimaryKey(Long id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addSave(CreateUserVO vo, String createUser) {
        //create user
        GymUser user = new GymUser();
        user.setName(vo.getName());
        user.setPhoneNum(vo.getPhoneNum());
        user.setCreateBy(createUser);
        userMapper.insertSelective(user);

        //create card or drop
        if (cardInfoMapper.selectByCardId(vo.getCardId()) != null) throw new CardExistException();
        GymCardInfo cardInfo = new GymCardInfo();
        cardInfo.setCardId(vo.getCardId());
        cardInfo.setCustomerId(user.getId());
        cardInfo.setCreateBy(createUser);
        cardInfoMapper.insertSelective(cardInfo);
    }

    @Override
    public void editSave(GymUser user) {
        userMapper.updateByPrimaryKeySelective(user);
    }

    @Override
    public void deleteUserByIds(String ids) {
        Long[] idArray = Convert.toLongArray(ids);
        for (Long id : idArray) {
            userMapper.deleteByPrimaryKey(id);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String register(String cardId, Integer registerType, String userName) {
        //TODO: check cards' usable
        GymCardInfo cardInfo = cardInfoMapper.selectByCardId(cardId);
        GymUser user = userMapper.selectByPrimaryKey(cardInfo.getId());

        registering(user, registerType);

        Date date = new Date();
        GymRegistry registry = new GymRegistry();
        registry.setCustomerId(cardInfo.getCustomerId());
        registry.setCreateBy(userName);
        registry.setCreatedTime(date);
        registry.setRegisterType(registerType);
        registryMapper.insertSelective(registry);
        log.info("==== registration time: {}, register by: {}", DateUtils.format(date, DateUtils.DATE_TIME_PATTERN), userName);
        return "登记时间：" + DateUtils.format(date, DateUtils.DATE_TIME_PATTERN) + "，登记人：" + userName;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String register(Long id, Integer registerType, String userName) {
        registering(userMapper.selectByPrimaryKey(id), registerType);
        Date date = new Date();
        GymRegistry registry = new GymRegistry();

        registry.setCustomerId(id);
        registry.setCreateBy(userName);
        registry.setCreatedTime(date);
        registry.setRegisterType(registerType);
        registryMapper.insertSelective(registry);
        log.info("==== registration time: {}, register by: {}", DateUtils.format(date, DateUtils.DATE_TIME_PATTERN), userName);
        return "登记时间：" + DateUtils.format(date, DateUtils.DATE_TIME_PATTERN) + "，登记人：" + userName;
    }

    private void registering(GymUser user, Integer registrationType) {
        //different registerType shares different registration result
        switch (RegisterTypeEnum.getEnumByCode(registrationType)) {
            case NORMAL:
                // time card or
            case CLASSES:

            default:
                throw new CardNotExistException();
        }

    }

    @Override
    public boolean bindExistingCard(Long id, String cardId) {
        GymUser user = userMapper.selectByPrimaryKey(id);
        GymCardInfo cardInfo = cardInfoMapper.selectByCardId(cardId);

        if (cardInfo.getCustomerId() != null) throw new CardInUseException();
        cardInfo.setCustomerId(user.getId());
        cardInfoMapper.updateByPrimaryKeySelective(cardInfo);
        return true;
    }
}
