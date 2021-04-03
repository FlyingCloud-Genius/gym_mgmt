package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymCardInfo;
import com.gym.management.domain.param.GymCardInfoParam;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Entity com.gym.management.domain.gym.GymCardInfo
 */
@Mapper
public interface GymCardInfoMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymCardInfo record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymCardInfo selectByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymCardInfo selectByCardId(String cardId);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    List<GymCardInfo> selectBySelective(GymCardInfoParam cardInfo);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymCardInfo record);
}