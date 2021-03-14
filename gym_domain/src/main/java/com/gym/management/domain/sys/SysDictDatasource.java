package com.gym.management.domain.sys;

import com.gym.management.annotation.Excel;
import com.gym.management.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.Date;

/**
 * ����Դ�ֵ���� sys_dict_datasource
 *
 * @author lqh
 * @date 2019-10-23
 */
public class SysDictDatasource extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** ���� */
    private Long id;

    /** ����ԴӢ���� */
    @Excel(name = "����ԴӢ����")
    private String datasourceEn;

    /** ����Դ������ */
    @Excel(name = "����Դ������")
    private String datasourceCn;

    /** ����Դ���� */
    @Excel(name = "����Դ����")
    private String datasourceDriver;

    /** ����Դjdbc��ַ */
    @Excel(name = "����Դjdbc��ַ")
    private String datasourceUrl;

    /** �û��� */
    @Excel(name = "�û���")
    private String username;

    /** ���� */
    @Excel(name = "����")
    private String password;

    /** �߼�ɾ����־��1��ɾ����0��δɾ���� */
    @Excel(name = "�߼�ɾ����־", readConverterExp = "1=��ɾ����0��δɾ��")
    private Integer isdel;

    /** ������ */
    @Excel(name = "������")
    private String createUser;

    /** ������ */
    @Excel(name = "������")
    private String modifiedUser;

    /** �������� */
    @Excel(name = "��������", width = 30, dateFormat = "yyyy-MM-dd")
    private Date createdDate;

    /** �������� */
    @Excel(name = "��������", width = 30, dateFormat = "yyyy-MM-dd")
    private Date modifiedDate;

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
    {
        return id;
    }
    public void setDatasourceEn(String datasourceEn)
    {
        this.datasourceEn = datasourceEn;
    }

    public String getDatasourceEn()
    {
        return datasourceEn;
    }
    public void setDatasourceCn(String datasourceCn)
    {
        this.datasourceCn = datasourceCn;
    }

    public String getDatasourceCn()
    {
        return datasourceCn;
    }
    public void setDatasourceDriver(String datasourceDriver)
    {
        this.datasourceDriver = datasourceDriver;
    }

    public String getDatasourceDriver()
    {
        return datasourceDriver;
    }
    public void setDatasourceUrl(String datasourceUrl)
    {
        this.datasourceUrl = datasourceUrl;
    }

    public String getDatasourceUrl()
    {
        return datasourceUrl;
    }
    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getUsername()
    {
        return username;
    }
    public void setPassword(String password)
    {
        this.password = password;
    }

    public String getPassword()
    {
        return password;
    }
    public void setIsdel(Integer isdel)
    {
        this.isdel = isdel;
    }

    public Integer getIsdel()
    {
        return isdel;
    }
    public void setCreateUser(String createUser)
    {
        this.createUser = createUser;
    }

    public String getCreateUser()
    {
        return createUser;
    }
    public void setModifiedUser(String modifiedUser)
    {
        this.modifiedUser = modifiedUser;
    }

    public String getModifiedUser()
    {
        return modifiedUser;
    }
    public void setCreatedDate(Date createdDate)
    {
        this.createdDate = createdDate;
    }

    public Date getCreatedDate()
    {
        return createdDate;
    }
    public void setModifiedDate(Date modifiedDate)
    {
        this.modifiedDate = modifiedDate;
    }

    public Date getModifiedDate()
    {
        return modifiedDate;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("datasourceEn", getDatasourceEn())
                .append("datasourceCn", getDatasourceCn())
                .append("datasourceDriver", getDatasourceDriver())
                .append("datasourceUrl", getDatasourceUrl())
                .append("username", getUsername())
                .append("password", getPassword())
                .append("isdel", getIsdel())
                .append("createUser", getCreateUser())
                .append("modifiedUser", getModifiedUser())
                .append("createdDate", getCreatedDate())
                .append("modifiedDate", getModifiedDate())
                .toString();
    }
}
