package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymCardClass;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Entity com.gym.management.domain.gym.GymCardClass
 */
@Mapper
public interface GymCardClassMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insert(GymCardClass record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymCardClass record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymCardClass selectByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymCardClass record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymCardClass record);
}