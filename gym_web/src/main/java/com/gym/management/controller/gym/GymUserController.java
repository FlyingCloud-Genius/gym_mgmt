package com.gym.management.controller.gym;

import com.gym.management.controller.system.base.BaseController;
import com.gym.management.domain.AjaxResult;
import com.gym.management.domain.DO.CreateUserVO;
import com.gym.management.domain.gym.GymUser;
import com.gym.management.domain.param.GymUserParam;
import com.gym.management.page.TableDataInfo;
import com.gym.management.service.gym.GymCardInfoService;
import com.gym.management.service.gym.GymUserService;
import com.gym.management.utils.ShiroUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@RequestMapping("/gym/user")
@Controller
public class GymUserController extends BaseController {

    private String prefix = "gym/user";

    @Autowired
    private GymUserService gymUserService;

    @Autowired
    private GymCardInfoService gymCardInfoService;

    @RequestMapping()
    @RequiresPermissions("gym:user:page")
    public String page() {
        return prefix + "/user";
    }

    @RequestMapping("/list")
    @ResponseBody
    @RequiresPermissions("gym:user:list")
    public TableDataInfo list(GymUserParam userParam) {
        startPage();
        List<GymUser> result = gymUserService.list(userParam);
        return getDataTable(result);
    }

    @RequiresPermissions("gym:user:add")
    @RequestMapping("/add")
    public String addPage() {
        return prefix + "/add";
    }

    @RequiresPermissions("gym:user:add")
    @RequestMapping("/addSave")
    @ResponseBody
    public AjaxResult addSave(CreateUserVO user) {
        gymUserService.addSave(user, ShiroUtils.getLoginName());
        return success("user add successfully!!");
    }

    @RequiresPermissions("gym:user:add")
    @RequestMapping("/edit/{id}")
    public String editPage(@PathVariable("id") Long id, ModelMap modelMap) {
        modelMap.put("user", gymUserService.selectByPrimaryKey(id));
        return prefix + "/edit";
    }

    @RequiresPermissions("gym:user:edit")
    @RequestMapping("/editSave")
    @ResponseBody
    public AjaxResult editSave(GymUser user) {
        gymUserService.editSave(user);
        return success("user edit successfully!!");
    }

    @RequiresPermissions("gym:user:delete")
    @RequestMapping("/delete")
    @ResponseBody
    public AjaxResult delete(String ids) {
        try {
            gymUserService.deleteUserByIds(ids);
        } catch (Exception e) {
            return error(e.getMessage());
        }
        return success("user deleted successfully!!");
    }

    @RequiresPermissions("gym:user:register")
    @RequestMapping("/registerB/{cardId}/{registerType}")
    @ResponseBody
    public AjaxResult register(@PathVariable("cardId") String cardId, @PathVariable("registerType") Integer registerType) {
        return success(gymUserService.register(cardId, registerType, ShiroUtils.getLoginName()));
    }

    @RequiresPermissions("gym:user:register")
    @RequestMapping("/registerA/{id}/{registerType}")
    @ResponseBody
    public AjaxResult register(@PathVariable("id") Long id, @PathVariable("registerType") Integer registerType) {
        return success(gymUserService.register(id, registerType, ShiroUtils.getLoginName()));
    }

    @RequiresPermissions("gym:user:bindCard")
    @RequestMapping("/bindCard/{id}")
    public String bindCardPage(@PathVariable("id") Long id) {
        return prefix + "/bindCard";
    }

    @RequiresPermissions("gym:user:bindCard")
    @RequestMapping("/bindCard/{id}/{cardId}")
    @ResponseBody
    public AjaxResult bindCard(@PathVariable("id") Long id, @PathVariable("cardId") String cardId) {
        if (gymUserService.bindExistingCard(id, cardId)) return success("successfully bind the card");
        else return error("本卡已有用户在使用或已作废！！！");
    }
}
