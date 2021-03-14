package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GymUserMapper {
    /**
     *
     * @mbg.generated 2021-03-14 00:26:58
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-14 00:26:58
     */
    int insert(GymUser record);

    /**
     *
     * @mbg.generated 2021-03-14 00:26:58
     */
    int insertSelective(GymUser record);

    /**
     *
     * @mbg.generated 2021-03-14 00:26:58
     */
    GymUser selectByPrimaryKey(Long id);

    List<GymUser> selectSelective(GymUserParam gymUserParam);

    /**
     *
     * @mbg.generated 2021-03-14 00:26:58
     */
    int updateByPrimaryKeySelective(GymUser record);

    /**
     *
     * @mbg.generated 2021-03-14 00:26:58
     */
    int updateByPrimaryKey(GymUser record);
}