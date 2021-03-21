package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymCoach;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Entity com.gym.management.domain.gym.GymCoach
 */
@Mapper
public interface GymCoachMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insert(GymCoach record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymCoach record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymCoach selectByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymCoach record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymCoach record);
}