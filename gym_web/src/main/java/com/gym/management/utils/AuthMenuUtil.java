package com.gym.management.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gym.management.vo.Menu;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuthMenuUtil {


    private static Menu newMenu(JSONObject temp) {
        long parent = temp.getLong("parent");
        long id = temp.getLong("id");
        String icon = temp.getString("icon");
        String menuUrl = temp.getString("url");
        String menuName = temp.getString("name");
        String resCode = temp.getString("resCodeStr");
        int sortSequence = temp.getIntValue("sortSequence");
        Menu menu = new Menu();
        menu.setParentId(parent);
        menu.setIcon(icon);
        menu.setMenuId(id);
        menu.setUrl(menuUrl);
        menu.setMenuName(menuName);
        menu.setParent((parent == -1));
        menu.setResCode(resCode);
        menu.setSortSequence(sortSequence);
        return menu;
    }

    private static void assgin(Menu cacheMenu, Menu menu) {
        cacheMenu.setIcon(menu.getIcon());
        cacheMenu.setMenuId(menu.getMenuId());
        cacheMenu.setMenuName(menu.getMenuName());
        cacheMenu.setParent(menu.isParent());
        cacheMenu.setParentId(menu.getParentId());
        cacheMenu.setResCode(menu.getResCode());
        cacheMenu.setSortSequence(menu.getSortSequence());
        cacheMenu.setUrl(menu.getUrl());
    }

    private static String getUim(String erp, int type) {
        if (type == 1) {
			/*Map<String, String> params = buildUimAuthAppMenusParam(erp);
			String content = HttpRequestUtils.doPost(Properties.get("uim.url"), params);
			return content;*/
        } else if (type == 2) {
//			WebApplicationContext webApplicationContext = ContextLoader.getCurrentWebApplicationContext();
//			ServletContext servletContext = webApplicationContext.getServletContext();
//			String path = servletContext.getRealPath("/") + "/data/menu.json";
//			try {
//				String  path  = Thread.currentThread().getContextClassLoader().getResource(".").getPath()
//						+ "data/menu.json";
//				byte[] data = FileUtils.readFileToByteArray(new File(path));
//				return new String(data);
//			} catch (Exception e) {
//				throw new RuntimeException(e);
//			}
        }
        return "{\n" +
                "    \"menu.get.response\": {\n" +
                "        \"menus\": [\n" +
                "            {\n" +
                "                \"parent\": -1,\n" +
                "                \"icon\": \"\",\n" +
                "                \"url\": \"\",\n" +
                "                \"parentResCode\": \"merchantBasicInfoManage\",\n" +
                "                \"sortSequence\": 2,\n" +
                "                \"isParent\": \"true\",\n" +
                "                \"name\": \"测试管理\",\n" +
                "                \"id\": 10000,\n" +
                "                \"resCodeStr\": \"merchantBasicInfoManage\",\n" +
                "                \"resCodeName\": \"merchantBasicInfoManage\"\n" +
                "            },\n" +
                "            {\n" +
                "                \"parent\": 10000,\n" +
                "                \"icon\": \"\",\n" +
                "                \"url\": \"tTask/list\",\n" +
                "                \"parentResCode\": \"\",\n" +
                "                \"sortSequence\": 1,\n" +
                "                \"isParent\": \"false\",\n" +
                "                \"name\": \"测试1111\",\n" +
                "                \"id\": 20000,\n" +
                "                \"resCodeStr\": \"merchantBasicInfo\",\n" +
                "                \"resCodeName\": \"merchantBasicInfo\"\n" +
                "            }\n" +
                "            {\n" +
                "                \"parent\": 10000,\n" +
                "                \"icon\": \"\",\n" +
                "                \"url\": \"productFrameContract/list\",\n" +
                "                \"parentResCode\": \"\",\n" +
                "                \"sortSequence\": 1,\n" +
                "                \"isParent\": \"false\",\n" +
                "                \"name\": \"测试\",\n" +
                "                \"id\": 20001,\n" +
                "                \"resCodeStr\": \"productFrameContract\",\n" +
                "                \"resCodeName\": \"productFrameContract\"\n" +
                "            }\n" +
                "        ],\n" +
                "        \"totalCount\": 2,\n" +
                "        \"resStatus\": \"200\",\n" +
                "        \"resCount\": 2,\n" +
                "        \"resMsg\": \"\"\n" +
                "    }\n" +
                "}\n" +
                "\n";
    }

    public static List<Menu> getMenu(String erp) {
        List<Menu> menus = new ArrayList<Menu>();
        String content;
        try {
            content = getUim(erp, 2);
        } catch (Exception ex) {
            //logger.error("uim load failed, will to use local menu, erp = " + erp,ex);
            content = getUim(erp, 2);
        }
        try {
            JSONObject userMenusRespObj = JSONObject.parseObject(content);
            if (userMenusRespObj != null && userMenusRespObj.containsKey("error.response")) {
                return menus;
            }

            JSONObject menuResponseObj = userMenusRespObj.getJSONObject("menu.get.response");
            if (StringUtils.isEmpty(menuResponseObj.getString("resStatus"))
                    || !menuResponseObj.getString("resStatus").equals("200")) {
                return menus;
            }

            JSONArray userMenuArray = menuResponseObj.getJSONArray("menus");
            if (userMenuArray == null || userMenuArray.isEmpty()) {
                return menus;
            }
            Map<Long, Menu> cache = new HashMap<Long, Menu>();
            for (Object var : userMenuArray) {
                JSONObject temp = (JSONObject) var;
                Menu menu = newMenu(temp);

                if (menu.isParent()) {
                    if (cache.get(menu.getMenuId()) == null) {
                        cache.put(menu.getMenuId(), menu);
                    } else {
                        assgin(cache.get(menu.getMenuId()), menu);
                    }
                    continue;
                }

                if (cache.get(menu.getParentId()) != null) {
                    cache.get(menu.getParentId()).addChildMenu(menu);
                } else {
                    Menu tmp = new Menu();
                    tmp.addChildMenu(menu);
                    cache.put(menu.getParentId(), tmp);
                }
            }
            if (cache != null && !"".equals(cache)) {
                for (Map.Entry<Long, Menu> entry : cache.entrySet()) {
                    menus.add(entry.getValue());
                }
            }
        } finally {
            //logger.info("erp = " + erp + " menu json = " + JSON.toJSONString(menus));
        }
        return menus;
    }

    public static List<Menu> getMenu() {
        return null;
    }

    public static void main(String[] args) {

        String classpath = Thread.currentThread().getContextClassLoader().getResource(".").getPath().replaceFirst("/", "");

        String webappRoot = classpath.replaceAll("WEB-INF/classes/", "");
        System.out.println(webappRoot);

        String erp = "bjliguanyu";
        List<Menu> menus = getMenu(erp);
        System.out.println(menus);


    }
}
