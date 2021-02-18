package com.example.demo.dong.service.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dong.domain.DbColumns;
import com.example.demo.dong.domain.DbTablespaceChartDomain;
import com.example.demo.dong.service.DbTableSpaceService;

@Service
public class DbTableSpaceServiceImpl implements DbTableSpaceService {

	@Autowired
	private SqlSession sql;

	@Override
	public List<String> selectDbTableSpace() {
		return sql.selectList("DbTableSpaceMapper.selectTableSpace");
	}

	@Override
	public DbTablespaceChartDomain selectDbTablespaceChart(String tablespaceName) throws Exception {

		return sql.selectOne("DbTableSpaceMapper.selectDbTablespaceChart", tablespaceName);
	}

	@Override
	public List<String> selectDbUsers(String tablespaceName) throws Exception {
		return sql.selectList("DbTableSpaceMapper.selectDbUsers", tablespaceName);
	}

	@Override
	public List<DbTablespaceChartDomain> selectFileChart() throws Exception {
		System.out.println("가자");
		return sql.selectList("DbTableSpaceMapper.selectFileChart");
	}

	@Override
	public HashMap<String, List<DbColumns>> selectObjList(List<String> tableSpaceList) throws Exception {

		HashMap<String, List<DbColumns>> resMap = new HashMap<String, List<DbColumns>>();
		System.out.println("여기1 : " + tableSpaceList.size());
		String tablespaceName;
		for (int i = 0; i < tableSpaceList.size(); i++) {
			tablespaceName = tableSpaceList.get(i);
			resMap.put(tableSpaceList.get(i), sql.selectList("DbTableSpaceMapper.selectObjList", tablespaceName));
		}
		System.out.println(resMap.get("SYSTEM"));

		return resMap;
	}

}
