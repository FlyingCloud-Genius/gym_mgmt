package com.gym.management.controller.gym;

import com.gym.management.controller.system.base.BaseController;
import com.gym.management.domain.AjaxResult;
import com.gym.management.domain.gym.GymCardInfo;
import com.gym.management.domain.param.GymCardInfoParam;
import com.gym.management.domain.view.GymCardInfoView;
import com.gym.management.mapper.gym.GymCardInfoMapper;
import com.gym.management.page.TableDataInfo;
import com.gym.management.service.gym.GymCardInfoService;
import com.gym.management.utils.ShiroUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author: Cloud Yang
 * @CreateTime: 4/3/2021
 **/
@Controller
@RequestMapping("/gym/cardInfo")
public class GymCardInfoController extends BaseController {

    private static final String prefix = "gym/cardInfo";

    @Autowired
    private GymCardInfoService cardInfoService;

    @Autowired
    private GymCardInfoMapper cardInfoMapper;

    @RequestMapping()
    @RequiresPermissions("gym:card:page")
    public String page() {
        return prefix + "/cardInfo";
    }

    @RequestMapping("/list")
    @ResponseBody
    @RequiresPermissions("gym:card:list")
    public TableDataInfo list(GymCardInfoParam cardInfoParam) {
        startPage();
        List<GymCardInfoView> result = cardInfoService.list(cardInfoParam);
        return getDataTable(result);
    }

    @RequiresPermissions("gym:card:add")
    @RequestMapping("/add")
    public String addPage() {
        return prefix + "/add";
    }

    @RequiresPermissions("gym:card:add")
    @RequestMapping("/addSave")
    @ResponseBody
    public AjaxResult addSave(GymCardInfo cardInfo) {
        cardInfo.setCreateBy(ShiroUtils.getLoginName());
        cardInfoMapper.insertSelective(cardInfo);
        return success("user add successfully!!");
    }

    @RequiresPermissions("gym:card:add")
    @RequestMapping("/edit/{id}")
    public String editPage(@PathVariable("id") Long id, ModelMap modelMap) {
        modelMap.put("cardInfo", cardInfoMapper.selectByPrimaryKeyForView(id));
        return prefix + "/edit";
    }

    @RequiresPermissions("gym:card:edit")
    @RequestMapping("/editSave")
    @ResponseBody
    public AjaxResult editSave(GymCardInfo cardInfo) {
        cardInfo.setUpdateBy(ShiroUtils.getLoginName());
        cardInfoMapper.updateByPrimaryKeySelective(cardInfo);
        return success("user edit successfully!!");
    }

}
