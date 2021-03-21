package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymBodyInfo;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Entity com.gym.management.domain.gym.GymBodyInfo
 */
@Mapper
public interface GymBodyInfoMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insert(GymBodyInfo record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymBodyInfo record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymBodyInfo selectByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymBodyInfo record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymBodyInfo record);
}