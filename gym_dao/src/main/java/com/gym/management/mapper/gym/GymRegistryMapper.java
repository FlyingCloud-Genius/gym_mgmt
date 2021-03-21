package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymRegistry;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Entity com.gym.management.domain.gym.GymRegistry
 */
@Mapper
public interface GymRegistryMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insert(GymRegistry record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymRegistry record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymRegistry selectByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymRegistry record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymRegistry record);
}