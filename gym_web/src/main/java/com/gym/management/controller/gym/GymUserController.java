package com.gym.management.controller.gym;

import com.gym.management.controller.system.base.BaseController;
import com.gym.management.domain.AjaxResult;
import com.gym.management.domain.param.GymUserParam;
import com.gym.management.page.TableDataInfo;
import com.gym.management.domain.gym.GymUser;
import com.gym.management.service.gym.GymCardInfoService;
import com.gym.management.service.gym.GymUserService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
        //TODO: do it via gymUserService
        //TODO: e.g. List x = gymUserSerivice.getgymUser(user);
        //TODO: return getDataTable();

        return getDataTable(gymUserService.list(userParam));
    }

    @RequiresPermissions("gym:user:add")
    @RequestMapping("/add")
    public String addPage() {
        return prefix + "/add";
    }

    @RequiresPermissions("gym:user:add")
    @RequestMapping("/addSave")
    @ResponseBody
    public AjaxResult addSave(GymUser user) {


        return success("user add successfully!!");
    }
}
