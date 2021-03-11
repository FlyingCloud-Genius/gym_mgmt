package com.gym.management.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Menu implements Serializable, Comparable<Menu> {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    /**
     * 菜单名称
     */
    private String menuName;

    /**
     * 菜单id
     */
    private long menuId;

    /**
     * 图标
     */
    private String icon;

    /**
     * 资源码
     */
    private String resCode;

    /**
     * 排序
     */
    private int sortSequence;

    /**
     * 链接地址（只有子菜单，才有url地址）
     */
    private String url;


    /**
     * 是否是父节点
     */
    private boolean isParent;


    /**
     * 父节点
     */
    private long parentId;


    /**
     * 子菜单
     */
    private List<Menu> menuArray = new ArrayList<Menu>();


    public String getMenuName() {
        return menuName;
    }


    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }


    public long getMenuId() {
        return menuId;
    }

    public void setMenuId(long menuId) {
        this.menuId = menuId;
    }


    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getResCode() {
        return resCode;
    }


    public void setResCode(String resCode) {
        this.resCode = resCode;
    }


    public int getSortSequence() {
        return sortSequence;
    }


    public void setSortSequence(int sortSequence) {
        this.sortSequence = sortSequence;
    }


    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<Menu> getMenuArray() {
        return menuArray;
    }

    public void setMenuArray(List<Menu> menuArray) {
        this.menuArray = menuArray;
    }

    public boolean isParent() {
        return isParent;
    }

    public void setParent(boolean isParent) {
        this.isParent = isParent;
    }

    public long getParentId() {
        return parentId;
    }


    public void setParentId(long parentId) {
        this.parentId = parentId;
    }


    public void addChildMenu(Menu menu) {
        this.menuArray.add(menu);
    }


    @Override
    public int compareTo(Menu o) {
        return this.getSortSequence() - o.getSortSequence();
    }

}
