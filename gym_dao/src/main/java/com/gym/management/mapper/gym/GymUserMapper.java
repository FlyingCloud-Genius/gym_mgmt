package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GymUserMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insert(GymUser record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymUser record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymUser selectByPrimaryKey(Long id);

    List<GymUser> selectSelective(GymUserParam gymUserParam);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymUser record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymUser record);
}