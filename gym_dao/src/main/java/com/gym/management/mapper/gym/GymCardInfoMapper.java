package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymCardInfo;
import org.apache.ibatis.annotations.Mapper;

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
    int insert(GymCardInfo record);

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

    GymCardInfo selectBySelective(GymCardInfo cardInfo);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymCardInfo record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymCardInfo record);
}