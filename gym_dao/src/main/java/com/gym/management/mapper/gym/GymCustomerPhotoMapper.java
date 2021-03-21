package com.gym.management.mapper.gym;

import com.gym.management.domain.gym.GymCustomerPhoto;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Entity com.gym.management.domain.gym.GymCustomerPhoto
 */
@Mapper
public interface GymCustomerPhotoMapper {
    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int deleteByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insert(GymCustomerPhoto record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int insertSelective(GymCustomerPhoto record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    GymCustomerPhoto selectByPrimaryKey(Long id);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKeySelective(GymCustomerPhoto record);

    /**
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    int updateByPrimaryKey(GymCustomerPhoto record);
}