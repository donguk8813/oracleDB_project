package com.example.demo.dong.service;

import java.util.HashMap;
import java.util.List;

import com.example.demo.dong.domain.DbColumns;
import com.example.demo.dong.domain.DbTablespaceChartDomain;

public interface DbTableSpaceService {
	public List<String> selectDbTableSpace() throws Exception;

	public DbTablespaceChartDomain selectDbTablespaceChart(String tablespaceName) throws Exception;

	public List<String> selectDbUsers(String tablespaceName) throws Exception;

	public List<DbTablespaceChartDomain> selectFileChart() throws Exception;

	public HashMap<String, List<DbColumns>> selectObjList(List<String> tableSpaceList) throws Exception;

}
